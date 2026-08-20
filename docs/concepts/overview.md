---
id: overview
title: Start Here
sidebar_position: 1
pagination_next: concepts/ring-protocol
---

# Start Here

Ring Protocol uses a wrapped asset layer called FEW to connect assets to trading and liquidity systems.
Ring Swap is the native AMM built on that layer.

## Product map

| Product | Role | Use it when |
| --- | --- | --- |
| **Few Protocol** | Maps an original ERC-20 to its supported `FewToken` through a chain-specific `FewFactory` | You need to wrap an asset, resolve a FewToken address, or validate a wrapper |
| **Ring Swap (v2)** | Ring's native constant-product AMM and routing system | You need Ring pools, swaps, liquidity, or contract integrations |
| **Ring Interface** | The web application for swaps, liquidity, and pool discovery | You want to use Ring without building an integration |
| **Uniswap v4 Integration** | An external liquidity environment where FewToken and Few hooks can be used | Your integration specifically targets Uniswap v4 pools or hooks |

The `(v2)` in Ring Swap describes its contract design. Ring Swap is the current native AMM, not a legacy
section and not one step in a public Ring v2, v3, v4 product ladder.

## Choose a path

| Goal | Start here |
| --- | --- |
| Find a pool or use the web app | [Ring Pool Explorer](https://app.ring.exchange/explorer#/explore/pools) |
| Find contract addresses | [Ring Swap deployments](/contracts/v2/deployments) |
| Find BSC or HyperEVM pool addresses | [Networks and pools](/contracts/v2/pools) |
| Integrate Ring Swap in a contract | [Smart contract quick start](/contracts/v2/guides/smart-contract-integration/quick-start) |
| Build quotes and trades in TypeScript | [Ring Swap SDK](/sdk/v2/overview) |
| Request executable quotes from a service | [Routing API](/api/routing/overview) |
| Resolve or validate a FewToken | [FewToken integration](/contracts/v2/fewtoken/integrating) |
| Build with Uniswap v4 hooks or pools | [Uniswap v4 integration](/contracts/v4/overview) |

## Supported Ring Swap networks

The maintained Ring Swap deployment reference covers Ethereum, MegaETH, BNB Smart Chain, and HyperEVM.
Addresses are chain-specific. Always select the network first, then use the contracts and pools listed for
that network and verify them onchain. The published v2 SDK does not support every network in the deployment table.

Next, read [How Ring Works](./ring-protocol) for the architecture or go directly to
[Ring Swap](/contracts/v2/overview) to start an integration.
