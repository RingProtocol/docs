---
id: overview
slug: /build/overview
title: Build with Ring
sidebar_position: 1
description: Choose between Ring smart contracts, the Ring Swap SDK, and the partner Routing API.
---

# Build with Ring

Choose an integration method based on who should discover the route, build the transaction, and submit it.

| Method | Best for | Your responsibility | Start here |
| --- | --- | --- | --- |
| **Smart contracts** | Protocols that need Ring Swap inside an onchain workflow | Select the network and router, manage approvals, set limits and deadlines, and test the complete call path | [Smart contract quick start](/contracts/v2/guides/smart-contract-integration/quick-start) |
| **Ring Swap SDK** | TypeScript applications and services that build their own quotes and trades | Fetch pool state, construct the route and trade, then submit through the selected router | [Ring Swap SDK](/sdk/v2/overview) |
| **Routing API** | Approved partners that want a hosted quote with proposed transaction calldata | Authenticate requests, decode and validate the response, simulate it, and submit only an approved transaction | [Routing API](/api/routing/overview) |

## Before you build

All three methods use chain-specific addresses. Start with the maintained
[contract deployments](/contracts/v2/deployments), then use [Pools by Network](/contracts/v2/pools) for
pool discovery. Verify addresses and contract relationships onchain before use.

Ring Swap routes use FewToken addresses. Resolve and validate wrappers through the published, independently verified
`FewFactory` for the selected chain. Do not rely on a symbol, token list, or third-party pool alone.

Read [Security and Risk](/security-and-risk) before building a flow that can move user funds.

If your integration directly targets Uniswap v4 PoolManager, PositionManager, or hooks, use the
[Uniswap v4 Integration](/contracts/v4/overview) section instead.
