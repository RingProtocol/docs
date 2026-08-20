---
id: overview
sidebar_position: 1
title: Ring Swap SDK
---

# Ring Swap SDK

Use `@ring-protocol/v2-sdk` for TypeScript and JavaScript integrations with Ring Swap.

```bash
yarn add @ring-protocol/v2-sdk @ring-protocol/sdk-core
```

## Package map

| Package | Role | Use directly? |
| --- | --- | --- |
| `@ring-protocol/v2-sdk` | FewToken-aware pairs, routes, trades, and address helpers | Yes. This is the default Ring Swap SDK |
| `@ring-protocol/sdk-core` | Shared token, amount, price, and percentage types | Yes, when constructing SDK inputs |
| `@ring-protocol/uniswap-v2-sdk` | Lower-level v2-compatible primitives | Only when you specifically need the base compatibility layer |

All three packages are maintained in the [Ring SDK monorepo](https://github.com/RingProtocol/sdks).

## Published network support

This table describes `@ring-protocol/v2-sdk@1.0.0`, the package checked on `2026-08-20`. A chain appearing in
`@ring-protocol/sdk-core` does not mean the FewToken-aware v2 package supports that chain.

| Network | Chain ID | Published v2 SDK status |
| --- | --- | --- |
| Ethereum Mainnet | `1` | Configured. Verify FewFactory, factory, and init code against the deployment page and onchain before use |
| BNB Smart Chain | `56` | Configured. Verify the derived FewToken and pair onchain before use |
| HyperEVM | `999` | Configured. Verify the derived FewToken and pair onchain before use |
| MegaETH Mainnet | `4326` | **Unsupported in the published package.** Do not use v1.0.0 FewToken or pair-address helpers for MegaETH |

MegaETH support becomes available only after a package with the reviewed Ring Swap Factory, FewFactory, and init-code
configuration is published and this table names that version. Until then, read addresses from the deployment page and
resolve them directly onchain.

## Start by task

| Task | Guide |
| --- | --- |
| Install the SDK and create tokens | [Quick Start](./guides/quick-start) |
| Read pair data | [Fetching Data](./guides/fetching-data) |
| Calculate prices | [Pricing](./guides/pricing) |
| Construct a trade | [Trading](./guides/trading) |
| Derive a pair address | [Getting Pair Addresses](./guides/getting-pair-addresses) |

## FewToken rule

Ring Swap pools and paths use FewToken addresses. Derive wrappers through SDK configuration only on a supported network,
then compare the result with the published and independently verified `FewFactory` onchain. Do not identify a wrapper
only from its symbol, name, token-list entry, or the existence of a pool.

The v1.0.0 `isFewToken()` helper checks display metadata and must not be used as an authorization or asset-identity
check. Confirm `FewFactory.getWrappedToken(underlying) === candidate` onchain. For pair identity, confirm
`Ring Swap Factory.getPair(tokenA, tokenB)` rather than accepting a locally derived address alone.

Use [Contract Deployments](/contracts/v2/deployments) as the maintained factory and router directory, then verify the
selected deployment onchain. If you need a hosted quote service, use the [Routing API](/api/routing/overview) and apply
its response-validation checklist.
