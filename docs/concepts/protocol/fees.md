---
id: fees
title: Fees
sidebar_position: 3
---

:::note
Fee behavior depends on the trading system being used. `Ring Swap (v2)` follows the familiar constant-product AMM model, while external integration environments such as `Uniswap v4` may support more flexible fee behavior.
:::

## Swap Fees

In Ring Swap (v2), each pair applies a swap fee to trades. That fee is retained by the pair and effectively distributed
pro-rata to liquidity providers through the pool's reserves. Liquidity providers do not claim a separate fee balance from
the pair; fees are reflected in the value of their LP position.

How fees are collected and accounted for depends on the underlying AMM design.

## Ring Swap (v2) Fee Model

Ring Swap (v2) follows the constant-product pair model used by v2-style AMMs:

- each pair has a single pool for a token pair
- liquidity providers deposit both assets into the pair
- swaps move the pair price along the constant-product curve
- the swap fee increases the pool reserves relative to outstanding LP supply

Ring-specific deployments and pair addresses should always be checked from the current [Ring Swap deployments](/contracts/v2/deployments).

## External v4 Integration

When `FewToken` is used in external Uniswap v4 environments, fee behavior may be configured by that v4 pool and its hooks.
Those mechanics belong to the [Uniswap v4 Integration](/contracts/v4/overview) section and should not be read as a
separate native v4 AMM.

For current v2 integrations, default to the Ring Swap (v2) fee model unless the integration explicitly routes through a
documented v4 pool.
