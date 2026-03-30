---
id: quick-start
title: SDK Quick start
---

The Ring SDK exists to help developers build on top of Ring Swap (v2). It's designed to run in any environment that can execute JavaScript, such as websites and node scripts.

## Installation

The easiest way to consume the SDK is via npm. Install the package your project uses, together with `sdk-core` and any required runtime dependencies.

## Usage

To run code from the SDK in your application, use an `import` or `require` statement, depending on which your environment supports. Note that the guides following this page will use ES6 syntax.

## ES6 (import)

```typescript
import { ChainId } from '@uniswap/sdk-core'
import {Pair} from '@uniswap/v2-sdk'
console.log(`The chainId of mainnet is ${ChainId.MAINNET}.`)
```

## CommonJS (require)

```typescript
const CORE = require('@uniswap/sdk-core')
const V2_SDK = require('@uniswap/v2-sdk')
console.log(`The chainId of mainnet is ${CORE.ChainId.MAINNET}.`)
```

## Reference

Comprehensive reference material for the SDK is publicly available on the [Ring Labs GitHub](https://github.com/Uniswap).
