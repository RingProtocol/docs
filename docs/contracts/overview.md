---
id: overview
title: Contract Map
sidebar_position: 1
---

# Contract Map

Start with Ring Swap unless your integration explicitly targets Uniswap v4.

## Native Ring contracts

| Component | Responsibility | Use it for |
| --- | --- | --- |
| `FewFactory` | Resolves the canonical FewToken for an original ERC-20 | Wrapper discovery and validation |
| `FewToken` | Wraps an original asset for use in Ring systems | Manual wrapping and unwrapping |
| Ring Swap Factory | Creates and indexes Ring Swap pairs | Pair discovery and validation |
| Ring Swap Pair | Holds two FewToken reserves and executes swaps | Reserve reads, LP accounting, and direct pair integrations |
| Ring Swap Router | Coordinates normal swap and liquidity flows | Smart contract integrations |
| Universal Router | Executes command-based routes across supported paths | Interface and advanced routing flows |
| Permit2 | Provides shared allowance and signature-transfer flows | Router approvals |

Use [Contract Deployments](/contracts/v2/deployments) for network-specific addresses and
[Pools by Network](/contracts/v2/pools) for published pair addresses.

## External integration contracts

The [Uniswap v4 Integration](/contracts/v4/overview) section covers PoolManager, PositionManager, hooks, and
related contracts used in Uniswap v4 environments. These contracts are not a separate native Ring AMM.

## Choose the correct entry point

| Task | Entry point |
| --- | --- |
| Resolve a FewToken | `FewFactory` |
| Find or validate a Ring Swap pair | Ring Swap Factory |
| Execute a standard swap | Ring Swap Router or Universal Router |
| Provide Ring Swap liquidity | Ring Swap Router |
| Build a TypeScript route | [Ring Swap SDK](/sdk/v2/overview) |
| Request executable calldata | [Routing API](/api/routing/overview) |
| Build a Few hook or use a Uniswap v4 pool | [Uniswap v4 Integration](/contracts/v4/overview) |

Do not select a contract from its name alone. Select the network and workflow first, then use the official
address published for that path.
