---
id: overview
sidebar_position: 1
title: Overview
---

Welcome to the Ring Protocol v2 SDK docs. To begin, we recommend looking at the [**Guides**](./guides/01-quick-start.md). The current source of truth for the SDK lives in the [`ring-sdks`](https://github.com/RingProtocol/ring-sdks) monorepo.


## Ring v2 SDK

- [**Ring SDK Monorepo**](https://github.com/RingProtocol/ring-sdks)
- [**Ring Protocol v2 SDK**](https://www.npmjs.com/package/@ring-protocol/v2-sdk)
- [**Ring Protocol SDK Core**](https://www.npmjs.com/package/@ring-protocol/sdk-core)
- [**Uniswap V2-style base SDK**](https://www.npmjs.com/package/@ring-protocol/uniswap-v2-sdk)

[![npm version](https://img.shields.io/npm/v/@ring-protocol/v2-sdk/latest.svg)](https://www.npmjs.com/package/@ring-protocol/v2-sdk/v/latest)
[![npm bundle size (scoped version)](https://img.shields.io/bundlephobia/minzip/@ring-protocol/v2-sdk/latest.svg)](https://bundlephobia.com/result?p=@ring-protocol/v2-sdk@latest)

Use `@ring-protocol/v2-sdk` for normal Ring Swap integrations. It is the FEW-aware SDK layer and includes helper APIs for deriving and recognizing `FewToken` addresses.

Use `@ring-protocol/uniswap-v2-sdk` only when you explicitly want the lower-level Uniswap V2-style primitives rather than the higher-level Ring integration layer.