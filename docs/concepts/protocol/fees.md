---
id: fees
title: Fees
sidebar_position: 3
---

:::note
Fee behavior depends on the trading system being used. `Ring Swap (v2)` follows the familiar constant-product AMM model, while external integration environments such as `Uniswap v4` may support more flexible fee behavior.
:::

## Swap Fees

Swap fees are distributed pro-rata to all in-range[^1] liquidity at the time of the swap. If the spot price moves out of a position’s range, the given liquidity is no longer active and does not generate any fees. If the spot price reverses and reenters the position’s range, the position’s liquidity becomes active again and will generate fees.

How fees are collected and accounted for depends on the underlying AMM design.

## Pool Fees Tiers

In systems with multiple fee tiers, the same token pair may exist in more than one pool with different fees. This can improve market fit for different asset types, but it also requires more careful routing and liquidity analysis.

Breaking pairs into separate pools was previously untenable due to the issue of liquidity fragmentation. Any incentive alignments achieved by more fee optionality invariably resulted in a net loss to traders, due to lower pairwise liquidity and the resulting increase in price impact upon swapping.

The introduction of concentrated liquidity decouples total liquidity from price impact. With price impact concerns out of the way, breaking pairs into multiple pools becomes a feasible approach to improving the functionality of a pool for assets previously underserved by the 0.30% swap fee.

## Finding The Right Pool Fee

We anticipate that certain types of assets will gravitate towards specific fee tiers, based on where the incentives for both swappers and liquidity providers come nearest to alignment.

We expect low volatility assets (stable coins) will likely congregate in the lowest fee tier, as the price risk for liquidity providers holding these assets is very low, and those swapping will be motivated to pursue an execution price closest to 1:1 as they can get.

Similarly, we anticipate more exotic assets, or those traded rarely, will naturally gravitate towards a higher fee - as liquidity providers will be motivated to offset the cost risk of holding these assets for the duration of their position.


[^1]: In-range liquidity refers to the liquidity contained in any positions which span both sides of the spot price.
