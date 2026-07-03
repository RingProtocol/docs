---
id: overview
title: Launchpad Overview
sidebar_position: 1
pagination_next: launchpad/launch-token
---

# Launchpad Overview

Ring Launchpad is a meme token launch system built around `FewToken` and Uniswap v4 liquidity.

It gives creators a direct way to launch a fixed-supply meme token, seed a `TOKEN/fwWETH` pool, and optionally make an initial buy in the same transaction. Each launched pool can be registered with a creator fee hook so trading activity can accrue claimable rewards for the creator.

## What a launch creates

A launch through `RingLaunchpadV4` creates:

- a new `LaunchToken`
- a Uniswap v4 pool between the launch token and `fwWETH`
- full-range initial liquidity in that pool
- an optional creation-time buy using ETH or WETH
- an optional creator revenue relationship through `RingCreatorFeeHook`

The current launch token supply is `1,000,000,000` tokens. The launch price is derived from `pairAmount`, the amount of `fwWETH` paired against the full token supply. For example, a `pairAmount` of `10 ether` starts the pool near `10 ETH : 1,000,000,000 tokens`.

## How the flow works

1. The creator calls `deploy`, `deployETH`, or `deployWETH`.
2. `RingLaunchpadV4` mints `fwWETH` for the configured pair amount.
3. The launchpad deploys a new `LaunchToken`.
4. The launchpad builds a Uniswap v4 `PoolKey` for `TOKEN/fwWETH`.
5. If a revenue hook is configured, the pool is registered to the creator.
6. The pool is initialized and full-range liquidity is added.
7. If the creator supplied ETH or WETH for an initial buy, the launchpad swaps it into the new token and sends output to the recipient.

## Key contracts

| Contract | Purpose |
|---|---|
| `RingLaunchpadV4` | Deploys launch tokens, initializes pools, adds liquidity, and handles creation-time buys |
| `LaunchToken` | Minimal fixed-supply ERC-20 used by each launched meme token |
| `RingCreatorFeeHook` | Uniswap v4 hook that accrues creator and protocol fees in `fwWETH` |
| `RingHookDeployer` | CREATE2 helper for deploying hook addresses with required v4 permission bits |

## Important properties

- Pools are standard Uniswap v4 pools using `TOKEN/fwWETH`.
- The default Sepolia deployment uses a `3000` pool fee and `60` tick spacing.
- The launchpad threshold caps the accepted `pairAmount`; the current Sepolia threshold is `10 ether`.
- Creator rewards accrue to the wallet that creates the launch.
- Fee claims are pulled from the hook, not from the launchpad contract.

## Related pages

- [Launch Token](./launch-token.md)
- [Frontend Integration](./frontend-integration.md)
- [Creator Revenue](./creator-revenue.md)
- [Deployments](./deployments.md)
