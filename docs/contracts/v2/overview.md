---
id: overview
title: Ring Swap Overview
sidebar_position: 1
---

# Ring Swap

Ring Swap is Ring's native constant-product AMM. Its pools trade FewToken assets, and its routers provide
the normal entry points for swaps and liquidity.

The `(v2)` label identifies the compatible contract design. It does not make Ring Swap a legacy product.

## When to use Ring Swap

Use this section when you need to:

- find Ring contract or pair addresses
- integrate swaps or liquidity in a smart contract
- read pair reserves or LP state
- build quotes and trades with the Ring Swap SDK
- resolve the FewToken assets used in a route

If you are building directly against Uniswap v4 PoolManager, PositionManager, or hook contracts, use the
[Uniswap v4 Integration](/contracts/v4/overview) section instead.

## Architecture

| Layer | Main components | Purpose |
| --- | --- | --- |
| Asset | `FewFactory`, `FewToken` | Resolve and wrap the assets used by Ring |
| Core AMM | Ring Swap Factory, Pair | Create pools, hold reserves, mint LP tokens, and execute swaps |
| Routing | Ring Swap Router, Universal Router, Permit2 | Coordinate user-facing swaps, liquidity, and approvals |
| Developer access | Ring Swap SDK, Routing API | Build routes, quotes, and transactions |

## Start by task

| Task | Guide |
| --- | --- |
| Select a network and contract | [Contract Deployments](./deployments) |
| Find a BSC or HyperEVM pool | [Networks and Pools](./pools) |
| Resolve or validate a FewToken | [FewToken Integration](./fewtoken/integrating) |
| Execute a swap from a contract | [Smart Contract Quick Start](./guides/smart-contract-integration/quick-start) |
| Provide liquidity | [Providing Liquidity](./guides/smart-contract-integration/providing-liquidity) |
| Build in TypeScript | [Ring Swap SDK](/sdk/v2/overview) |
| Understand the AMM | [Ring Swap Model](./concepts/how-ring-swap-works/ring-swap-model) |

## Source repositories

- [Ring Swap core](https://github.com/RingProtocol/few-v2-core)
- [Ring Swap periphery](https://github.com/RingProtocol/few-periphery)
- [Ring SDKs](https://github.com/RingProtocol/sdks)
