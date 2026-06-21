---
id: overview
sidebar_position: 1
title: Ring Swap SDK
---

Welcome to the Ring Swap SDK docs. To begin, we recommend looking at the
[**Guides**](./guides/01-quick-start.md). The current source of truth for the SDK lives in the
[`sdks`](https://github.com/RingProtocol/sdks) monorepo.

## Ring Swap SDK

Use `@ring-protocol/v2-sdk` for normal Ring Swap integrations. The package name reflects the
v2-style constant-product contract family that Ring Swap is compatible with; it should not be read
as a separate Ring product generation.

- [**Ring SDK Monorepo**](https://github.com/RingProtocol/sdks)
- [**Ring Swap SDK**](https://www.npmjs.com/package/@ring-protocol/v2-sdk)
- [**Ring Protocol SDK Core**](https://www.npmjs.com/package/@ring-protocol/sdk-core)
- [**V2-style base SDK**](https://www.npmjs.com/package/@ring-protocol/uniswap-v2-sdk)

[![npm version](https://img.shields.io/npm/v/@ring-protocol/v2-sdk/latest.svg)](https://www.npmjs.com/package/@ring-protocol/v2-sdk/v/latest)
[![npm bundle size (scoped version)](https://img.shields.io/bundlephobia/minzip/@ring-protocol/v2-sdk/latest.svg)](https://bundlephobia.com/result?p=@ring-protocol/v2-sdk@latest)

`@ring-protocol/v2-sdk` is the FEW-aware Ring Swap SDK layer. It includes helper APIs for deriving and
recognizing `FewToken` addresses.

Use `@ring-protocol/uniswap-v2-sdk` only when you explicitly want the lower-level v2-compatible primitives rather than the higher-level Ring integration layer.

## FewToken Address Resolution

For Ring Swap integrations, derive FewToken addresses from the original ERC-20 with the official SDK or resolve them from the official `FewFactory`. A FewToken address is supported when `FewFactory.getWrappedToken(underlying)` returns that address; `symbol` and `name` are display metadata.

Approval spender selection depends on the integration path:

- Official router flow: approve only the official Ring Router, Universal Router, or Permit2 address for the chain.
- Manual wrap flow: approve only the canonical FewToken returned by `FewFactory`.
