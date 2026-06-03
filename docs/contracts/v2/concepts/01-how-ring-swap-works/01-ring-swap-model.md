---
id: ring-swap-model
title: Ring Swap Model
---

![](./images/anatomy.jpg)

Ring Swap (v2) is an _automated liquidity protocol_ powered by a [constant product formula](../how-ring-swap-works/glossary#constant-product-formula)
and implemented in a system of non-upgradeable smart contracts on the [Ethereum](https://ethereum.org/) blockchain.
It obviates the need for trusted intermediaries, prioritizing **decentralization**, **censorship resistance**,
and **security**. Ring is **open-source software** licensed under the
[GPL](https://en.wikipedia.org/wiki/GNU_General_Public_License).

Each Ring Swap pair manages a liquidity pool made up of reserves of two [ERC-20](https://eips.ethereum.org/EIPS/eip-20)
tokens, often FewToken assets resolved through Few Protocol.

Anyone can become a liquidity provider (LP) for a pool by depositing an equivalent value of each underlying token in return for pool tokens. These tokens track pro-rata LP shares of the total reserves, and can be redeemed for the underlying assets at any time.

![](./images/lp.jpg)

Pairs act as automated market makers, standing ready to accept one token for the other as long as the “constant product” formula is preserved. This formula, most simply expressed as `x * y = k`, states that trades must not change the product (`k`) of a pair’s reserve balances (`x` and `y`). Because `k` remains unchanged from the reference frame of a trade, it is often referred to as the invariant. This formula has the desirable property that larger trades (relative to reserves) execute at exponentially worse rates than smaller ones.

In practice, Ring Swap applies a 0.30% fee to trades, which is added to reserves. As a result, each trade actually
increases `k`. This functions as a payout to LPs, which is realized when they burn their pool tokens to withdraw their
portion of total reserves.

![](./images/trade.jpg)

Because the relative price of the two pair assets can only be changed through trading, divergences between the Ring Swap
price and external prices create arbitrage opportunities. This mechanism helps Ring Swap prices trend toward broader
market prices.

## Further reading

To see how token swaps work in practice, and to walk through the lifecycle of a swap, check out [Swaps](../core-concepts/swaps). Or, to see how liquidity pools work, see [Pools](../core-concepts/pools).

Ultimately, of course, the Ring protocol is just smart contract code running on Ethereum. To understand how they work, head over to [Smart Contracts](../../reference/smart-contracts/factory).
