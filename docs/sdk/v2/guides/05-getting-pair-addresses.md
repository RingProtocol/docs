---
id: getting-pair-addresses
title: Pair Addresses
---

## getPair

The most obvious way to get the address for a pair is to call [getPair](../../../contracts/v2/reference/smart-contracts/factory#getpair) on the factory. If the pair exists, this function will return its address, else `address(0)` (`0x0000000000000000000000000000000000000000`).

- The "canonical" way to determine whether or not a pair exists.
- Requires an on-chain lookup.

## CREATE2

Thanks to some [fancy footwork in the factory](https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/UniswapV2Factory.sol#L32), we can also compute pair addresses _without any on-chain lookups_ because of [CREATE2](https://eips.ethereum.org/EIPS/eip-1014). In Ring Swap, this is chain-aware: use the factory for the target network and the corresponding entry in `INIT_CODE_HASH_MAP`.

|                        |                                                                                |
| :--------------------- | :----------------------------------------------------------------------------- |
| `address`              | The [factory address](../../../contracts/v2/reference/smart-contracts/factory) |
| `salt`                 | `keccak256(abi.encodePacked(token0, token1))`                                  |
| `keccak256(init_code)` | `INIT_CODE_HASH_MAP[chainId]`                                                    |

- `token0` must be strictly less than `token1` by sort order.

* Can be computed offline.
* Requires the ability to perform `keccak256`.
* In Ring Swap, `token0` and `token1` should be the actual pair tokens, which are often `FewToken` addresses rather than the original ERC-20 addresses shown to users.

## Examples

### Preferred SDK Method

For most applications, prefer the SDK helper rather than manual CREATE2:

```typescript
import { ChainId, Token, WETH9 } from '@ring-protocol/sdk-core'
import { Pair, getFewTokenFromOriginalToken } from '@ring-protocol/v2-sdk'

const DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'Dai Stablecoin')
const fewDAI = getFewTokenFromOriginalToken(DAI, ChainId.MAINNET)
const fewWETH = getFewTokenFromOriginalToken(WETH9[ChainId.MAINNET], ChainId.MAINNET)

const pairAddress = Pair.getAddress(fewDAI, fewWETH)
```

### Manual TypeScript Example

This example makes use of the [Ring V2 SDK](../reference/getting-started). In practice, `Pair.getAddress()` is usually the safer option because it keeps your app aligned with the FEW-aware SDK behavior.

```typescript
import { ChainId, Token, WETH9 } from '@ring-protocol/sdk-core'
import { FACTORY_ADDRESS_MAP, INIT_CODE_HASH_MAP, getFewTokenFromOriginalToken } from '@ring-protocol/v2-sdk'
import { pack, keccak256 } from '@ethersproject/solidity'
import { getCreate2Address } from '@ethersproject/address'

const chainId = ChainId.MAINNET
const DAI = new Token(chainId, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'Dai Stablecoin')
const fewDAI = getFewTokenFromOriginalToken(DAI, chainId)
const fewWETH = getFewTokenFromOriginalToken(WETH9[chainId], chainId)
const [token0, token1] = fewDAI.sortsBefore(fewWETH) ? [fewDAI, fewWETH] : [fewWETH, fewDAI]

const pair = getCreate2Address(
  FACTORY_ADDRESS_MAP[chainId],
  keccak256(['bytes'], [pack(['address', 'address'], [token0.address, token1.address])]),
  INIT_CODE_HASH_MAP[chainId]
)
```
