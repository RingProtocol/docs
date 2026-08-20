---
id: overview
title: Uniswap v4 Integration
sidebar_position: 1
---

# Uniswap v4 Integration

This section covers FewToken and Few hooks used with Uniswap v4 contracts.

## When to use this section

Use it when your workflow directly involves:

- Uniswap v4 PoolManager or PositionManager
- a Few hook
- Uniswap v4 pool creation, swaps, or liquidity management
- reading Uniswap v4 pool state

For Ring Swap pairs, the Ring Swap Router, or normal FewToken routes, start with
[Ring Swap](/contracts/v2/overview).

## Product boundary

| Surface | Owner of the AMM design | Role in Ring |
| --- | --- | --- |
| Ring Swap | Ring | Native FewToken AMM and routing system |
| Uniswap v4 | Uniswap | External pool and hook infrastructure used by supported Ring integrations |
| Few hooks and periphery | Ring integration code | Connect FewToken workflows to Uniswap v4 |

The pages in this section retain Uniswap v4 terminology because they document that external contract
environment. They should not be read as a separate native Ring v4 protocol.

## Start by task

| Task | Page |
| --- | --- |
| Find v4 contract addresses | [Deployments](./deployments) |
| Create a pool | [Create a Pool](./quickstart/create-pool) |
| Execute a swap | [Swap](./quickstart/swap) |
| Add or manage liquidity | [Manage Liquidity](./quickstart/manage-liquidity/setup-liquidity) |
| Build a hook | [Your First Hook](./guides/hooks/your-first-hook) |
| Understand Few hook contracts | [Few Hook Contracts](./guides/hooks/few-hook-contracts) |
| Prepare pool data for an aggregator | [FewToken Liquidity and Aggregator Integration](./guides/fewtoken-liquidity-aggregation) |

Source: [Ring v4 integration periphery](https://github.com/RingProtocol/v4-periphery).

For generic PoolManager, PositionManager, and hook mechanics, use the
[official Uniswap v4 documentation](https://docs.uniswap.org/contracts/v4/overview). Ring keeps its main
navigation focused on FewToken and Few hook integration pages.
