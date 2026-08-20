---
id: pricing
title: Pricing
---

> Looking for a [quickstart](quick-start)?

This guide covers the route **mid price** and a trade's **execution price**.

In Ring Swap, the pool state is usually keyed by `FewToken` pairs, while your app may still display prices in terms of the original assets. The FEW-aware SDK handles that bridge for you.

# Mid Price

The mid price reflects the reserve ratio across one or more pairs. It is the route's marginal spot price before price
impact for a nonzero trade. It is not an independent market price, fair-value estimate, or manipulation-resistant
oracle. Pool reserves can change within a block and can be moved temporarily.

Let's consider the mid price for DAI-WETH (that is, the amount of DAI per 1 WETH).

## Direct

The simplest way to get the DAI-WETH mid price is to observe the pair directly:

```typescript
import { ChainId, Token, WETH9 } from '@ring-protocol/sdk-core'
import { Route, getFewTokenFromOriginalToken } from '@ring-protocol/v2-sdk'

const DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18)
const fewDAI = getFewTokenFromOriginalToken(DAI, ChainId.MAINNET)
const fewWETH = getFewTokenFromOriginalToken(WETH9[ChainId.MAINNET], ChainId.MAINNET)

// To learn how to get Pair data, refer to the previous guide.
const pair = await createPair(fewDAI, fewWETH)

const route = new Route([pair], WETH9[DAI.chainId], DAI)

console.log(route.midPrice.toSignificant(6)) // 1901.08
console.log(route.midPrice.invert().toSignificant(6)) // 0.000526017
```

You may be wondering why we have to construct a _route_ to get the mid price, as opposed to simply getting it from the pair (which, after all, includes all the necessary data). The reason is simple: a route forces us to be opinionated about the _direction_ of trading. Routes consist of one or more pairs, an input token and an output token (which fully defines a trading path). In this case, we passed WETH as the input token and DAI as the output token, meaning we're interested in a WETH -> DAI trade.

Now we understand that the mid price is going to be defined in terms of DAI/WETH. Not to worry though, if we need the WETH/DAI price, we can easily invert.

Finally, you may have noticed that we're formatting the price to 6 significant digits. This is because internally, prices are stored as exact-precision fractions, which can be converted to other representations on demand. For a full list of options, see [Price](../../core/reference/classes/Price.md).

## Indirect

For the sake of example, let's imagine a direct pair between DAI and WETH _doesn't exist_. In order to get a DAI-WETH mid price we'll need to pick a valid route. Imagine both DAI and WETH have pairs with a third token, USDC. In that case, we can calculate an indirect mid price through the USDC pairs:

```typescript
import { ChainId, Token, WETH9 } from '@ring-protocol/sdk-core'
import { Route, Pair, getFewTokenFromOriginalToken } from '@ring-protocol/v2-sdk'

const USDC = new Token(ChainId.MAINNET, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6)
const DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18)
const fewUSDC = getFewTokenFromOriginalToken(USDC, ChainId.MAINNET)
const fewDAI = getFewTokenFromOriginalToken(DAI, ChainId.MAINNET)
const fewWETH = getFewTokenFromOriginalToken(WETH9[ChainId.MAINNET], ChainId.MAINNET)

// To learn how to get Pair data, refer to the previous guide.
const USDCWETHPair = await createPair(fewUSDC, fewWETH)
const DAIUSDCPair = await createPair(fewDAI, fewUSDC)

const route = new Route([USDCWETHPair, DAIUSDCPair], WETH9[ChainId.MAINNET], DAI)

console.log(route.midPrice.toSignificant(6)) // 1896.34
console.log(route.midPrice.invert().toSignificant(6)) // 0.000527331
```

# Execution Price

The execution price is the modeled ratio of assets sent and received for a specific trade against the sampled
reserves. It includes the trade's price impact but is still not a guaranteed fill or an independent market price.

Use an independent price source and freshness policy when a mid or execution price controls a transaction limit,
liquidation, valuation, or other value-sensitive decision.

Imagine we're interested in trading 1 WETH for DAI:

```typescript
import { ChainId, Token, WETH9, CurrencyAmount, TradeType } from '@ring-protocol/sdk-core'
import { Route, Pair, Trade, getFewTokenFromOriginalToken } from '@ring-protocol/v2-sdk'

const DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18)
const fewDAI = getFewTokenFromOriginalToken(DAI, ChainId.MAINNET)
const fewWETH = getFewTokenFromOriginalToken(WETH9[DAI.chainId], DAI.chainId)

// To learn how to get Pair data, refer to the previous guide.
const pair = await createPair(fewDAI, fewWETH)

const route = new Route([pair], WETH9[DAI.chainId], DAI)

const trade = new Trade(route, CurrencyAmount.fromRawAmount(WETH9[DAI.chainId], '1000000000000000000'), TradeType.EXACT_INPUT)

console.log(trade.executionPrice.toSignificant(6)) // 1894.91
```

This constructs an exact-input model for 1 WETH using the sampled direct-pair reserves. The execution price is the
modeled average DAI per WETH. Re-read pair identity and reserves, enforce the transaction limit, and simulate the final
calldata before submission because the pool can change every block.
