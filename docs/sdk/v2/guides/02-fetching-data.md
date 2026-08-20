---
id: fetching-data
title: Fetching Data
---

> Looking for a [quickstart](quick-start)?

The SDK needs onchain token and pair data. Treat addresses and metadata as untrusted until they match the selected
chain, reviewed deployment, and factory state.

# Case 1: Tokens

Unsurprisingly, the SDK needs some notion of an ERC-20 token to be able to function. This immediately raises the question of _where data about tokens comes from_.

As an example, let's try to represent DAI in a format the SDK can work with. To do so, we need at least 3 pieces of data: a **chainId**, a **token address**, and how many **decimals** the token has. We also may be interested in the **symbol** and/or **name** of the token.

For Ring Swap integrations, start by modeling the original ERC-20 token. If you need the token address that Ring Swap pairs actually use on-chain, derive the `FewToken` address from that original token.

## Identifying Data

The first two pieces of data, **chainId** and **token address**, come from the integration's reviewed configuration.
Do not accept them from token metadata or a quote response.

For this Ethereum Mainnet example, the **chainId** is `1` and the configured DAI address is
`0x6B175474E89094C44Da98b954EedeAC495271d0F`. Verify the chain, bytecode, and address through an independent source
before using it with funds.

## Required Data

The next piece of data we need is **decimals**.

### Provided by the User

One option here is to simply pass in the correct value, which we may know is `18`. At this point, we're ready to represent DAI as a [Token](../../core/reference/classes/Token.md):

```typescript
import { ChainId, Token } from '@ring-protocol/sdk-core'
import { getFewTokenFromOriginalToken } from '@ring-protocol/v2-sdk'

const chainId = ChainId.MAINNET
const tokenAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F' // must be checksummed
const decimals = 18

const DAI = new Token(chainId, tokenAddress, decimals)
const fewDAI = getFewTokenFromOriginalToken(DAI, chainId)
```

`fewDAI` is a local candidate. Before routing or approving funds, require the selected deployed
`FewFactory.getWrappedToken(DAI.address)` to return `fewDAI.address`.

If we don't know or don't want to hardcode the value, we could look it up ourselves via any method of retrieving on-chain data in a function that looks something like:

```typescript
import { ChainId } from '@ring-protocol/sdk-core'

async function getDecimals(chainId: ChainId, tokenAddress: string): Promise<number> {
  // Setup provider, import necessary ABI ...
  const tokenContract = new ethers.Contract(tokenAddress, erc20abi, provider)
  return tokenContract["decimals"]()
}
```

## Optional Data

Finally, **symbol** and **name** are optional display fields. Contracts can return misleading or malformed metadata,
so do not use either field to identify an asset or authorize a route:

```typescript
import { ChainId, Token } from '@ring-protocol/sdk-core'

const DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'Dai Stablecoin')
```

When you are interacting with Ring Swap pairs, derive the wrapped pair token from the original asset:

```typescript
import { ChainId, Token, WETH9 } from '@ring-protocol/sdk-core'
import { getFewTokenFromOriginalToken } from '@ring-protocol/v2-sdk'

const DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'Dai Stablecoin')
const fewDAI = getFewTokenFromOriginalToken(DAI, ChainId.MAINNET)
const fewWETH = getFewTokenFromOriginalToken(WETH9[ChainId.MAINNET], ChainId.MAINNET)
```

# Case 2: Pairs

Now that we've defined the token inputs, the next step is loading a pair. See
[Pair](../../../contracts/v2/reference/smart-contracts/pair) for the contract interface.

As an example, let's try to represent a Ring Swap pair for DAI and WETH. The pair contract itself is typically keyed by the `FewToken` addresses, even though your application may still reason about the original DAI and WETH assets.

## Identifying Data

Each pair consists of two tokens (see previous section). Note that WETH used by the router is [exported by the SDK Core as WETH9](../../core/reference/overview.md).

## Required Data

The data we need is the _reserves_ of the pair. To read more about reserves, see [getReserves](../../../contracts/v2/reference/smart-contracts/pair#getreserves).

### Provided by the User

Fetch the pair address from the selected Ring Swap Factory. A local CREATE2 result is only a prediction and must not be
used as the sole authority for a value-bearing request.

```typescript
import { ChainId, Token, WETH9, CurrencyAmount } from '@ring-protocol/sdk-core'
import { Pair, getFewTokenFromOriginalToken } from '@ring-protocol/v2-sdk'

const DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18)
const fewDAI = getFewTokenFromOriginalToken(DAI, ChainId.MAINNET)
const fewWETH = getFewTokenFromOriginalToken(WETH9[DAI.chainId], DAI.chainId)

async function createPair(tokenA: Token, tokenB: Token, factory: ethers.Contract): Promise<Pair> {
  if (tokenA.chainId !== tokenB.chainId) throw new Error('chain mismatch')

  const predictedAddress = Pair.getAddress(tokenA, tokenB)
  const pairAddress = await factory.getPair(tokenA.address, tokenB.address)
  if (pairAddress === ethers.constants.AddressZero) throw new Error('pair not deployed')
  if (pairAddress.toLowerCase() !== predictedAddress.toLowerCase()) throw new Error('pair derivation mismatch')
  if ((await provider.getCode(pairAddress)) === '0x') throw new Error('pair has no code')

  // Setup provider, import necessary ABI ...
  const pairContract = new ethers.Contract(pairAddress, ringV2PairABI, provider)
  const [onchainToken0, onchainToken1, reserves] = await Promise.all([
    pairContract.token0(),
    pairContract.token1(),
    pairContract.getReserves(),
  ])
  const [reserve0, reserve1] = reserves

  const tokens = [tokenA, tokenB]
  const [token0, token1] = tokens[0].sortsBefore(tokens[1]) ? tokens : [tokens[1], tokens[0]]
  if (onchainToken0.toLowerCase() !== token0.address.toLowerCase()) throw new Error('token0 mismatch')
  if (onchainToken1.toLowerCase() !== token1.address.toLowerCase()) throw new Error('token1 mismatch')

  return new Pair(
    CurrencyAmount.fromRawAmount(token0, reserve0.toString()),
    CurrencyAmount.fromRawAmount(token1, reserve1.toString())
  )
}

// factory must be the reviewed Ring Swap Factory for chainId 1.
const pair = await createPair(fewDAI, fewWETH, factory)
```

Verify the factory address and bytecode before this call. Reserves can change every block, so record the quote block,
apply an independent price and freshness policy, and simulate the final transaction immediately before submission.
