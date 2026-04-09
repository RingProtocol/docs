---
id: quick-start
title: SDK Quick start
---

The Ring SDK exists to help developers build on top of Ring Swap (v2). It's designed to run in any environment that can execute JavaScript, such as websites and node scripts.

`@ring-protocol/v2-sdk` is the FEW-aware SDK layer. It adds helper functions for deriving `FewToken` addresses and for working with Ring Swap pairs while still letting your app reason about the original ERC-20 assets.

## Installation

The easiest way to consume the SDK is via npm. Install the package your project uses, together with `sdk-core` and any required runtime dependencies.

For most Ring Swap integrations, install:

```bash
npm install @ring-protocol/sdk-core @ring-protocol/v2-sdk
```

Use `@ring-protocol/uniswap-v2-sdk` only if you explicitly need the lower-level Uniswap V2-style primitives rather than the FEW-aware Ring layer.

## Usage

To run code from the SDK in your application, use an `import` or `require` statement, depending on which your environment supports. Note that the guides following this page will use ES6 syntax.

## ES6 (import)

```typescript
import { ChainId, Token } from '@ring-protocol/sdk-core'
import { getFewTokenFromOriginalToken } from '@ring-protocol/v2-sdk'

const DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'Dai Stablecoin')
const fewDAI = getFewTokenFromOriginalToken(DAI, ChainId.MAINNET)

console.log(`The chainId of mainnet is ${ChainId.MAINNET}.`)
console.log(`The few token address is ${fewDAI.address}.`)
```

## CommonJS (require)

```typescript
const CORE = require('@ring-protocol/sdk-core')
const V2_SDK = require('@ring-protocol/v2-sdk')

console.log(`The chainId of mainnet is ${CORE.ChainId.MAINNET}.`)
```

## Reference

Comprehensive reference material for the SDK is publicly available in the [Ring SDK monorepo](https://github.com/RingProtocol/sdks).
