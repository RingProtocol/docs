---
id: trading
title: Trading
---

> Looking for a [quickstart](quick-start)?

The SDK calculates routes, amounts, and transaction parameters. It does not send transactions, verify every deployment,
or establish an independent market price. Your integration must validate the result before signing or submission.

This guide constructs parameters for the [Ring Swap Router](../../../contracts/v2/reference/smart-contracts/router-02)
selected from the deployment table.

# Sending a Transaction to the Router

The example trades 1 ETH for DAI. Pair liquidity lives in FewToken form, while the route and trade APIs can still be
expressed in terms of the original assets:

```typescript
import { ChainId, CurrencyAmount, Ether, Token, TradeType, WETH9 } from '@ring-protocol/sdk-core'
import { Trade, Route, getFewTokenFromOriginalToken } from '@ring-protocol/v2-sdk'

const DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18)
const fewDAI = getFewTokenFromOriginalToken(DAI, ChainId.MAINNET)
const fewWETH = getFewTokenFromOriginalToken(WETH9[DAI.chainId], DAI.chainId)
const ETH = Ether.onChain(ChainId.MAINNET)

// See the Fetching Data guide to learn how to get Pair data
const pair = await createPair(fewDAI, fewWETH)

const route = new Route([pair], ETH, DAI)

const amountIn = '1000000000000000000' // 1 ETH in wei

const trade = new Trade(route, CurrencyAmount.fromRawAmount(ETH, amountIn), TradeType.EXACT_INPUT)
```

The SDK represents native ETH through its wrapped currency internally. Ring Swap's native-asset route starts with the
FewToken mapped from the router's configured WETH, and the router handles the ETH, WETH, and FewToken conversions.

For an exact native ETH input, use
[swapExactETHForTokens](../../../contracts/v2/reference/smart-contracts/router-02#swapexactethfortokens).

That Solidity interface for this function is:

```solidity
function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline)
  external
  payable
  returns (uint[] memory amounts);
```

Construct the router parameters:

```typescript
import { Percent } from '@ring-protocol/sdk-core'
import { utils } from 'ethers'

const slippageTolerance = new Percent('50', '10000') // 50 bips, or 0.50%

// Router integers use raw units, not human-readable decimal strings.
const amountOutMin = trade.minimumAmountOut(slippageTolerance).quotient.toString()

// Ring Swap pools and router paths use the FewToken addresses.
const path = [fewWETH.address, fewDAI.address]

// userRecipient must come from the user's confirmed transaction intent.
const to = utils.getAddress(userRecipient)
const deadline = Math.floor(Date.now() / 1000) + 60 * 20 // 20 minutes from the current Unix time
const value = trade.inputAmount.quotient.toString()
```

The slippage tolerance calculates the minimum DAI output through
[minimumAmountOut](../reference/trade#minimumamountout-since-204). It limits execution relative to the sampled reserves,
but it does not prove that those reserves represent a fair external price. Apply a separate independent price check.

The path is the ordered list of FewToken addresses used by the Ring Swap pairs. For native ETH input, its first element
must be the router's configured `fwWETH`, not the original WETH address.

The `to` address receives the DAI and must match the user's confirmed recipient.

The deadline is the Unix timestamp after which the transaction reverts. Rebuild rather than submit an expired or stale
trade.

The `value` is the raw ETH amount supplied as `msg.value`.

Before submitting, verify the chain ID and the router's `factory()`, `fewFactory()`, `WETH()`, and `fwWETH()` values
against the selected deployment. Confirm every FewToken through FewFactory and every pair through the Ring Swap Factory.
Decode the final calldata, then simulate the exact transaction at the latest block. Rebuild the trade if the quote or
deadline is stale.
