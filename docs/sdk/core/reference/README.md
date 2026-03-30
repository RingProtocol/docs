---
id: readme
title: SDK Core Reference
---

The Ring SDK Core provides the foundational classes and utilities for working with the Ring protocol. This package contains essential primitives like currencies, amounts, and mathematical utilities that are used across all Ring SDK packages.

## Overview

This reference documentation covers:

- **[Classes](./classes/Token.md)** - Core classes like `Token`, `CurrencyAmount`, `Fraction`, and `Price`
- **[Enums](./enums/ChainId)** - Supported chains, trade types, and other enumerations
- **[Types](./modules.md)** - TypeScript type definitions and interfaces

## Key Components

### Currency Primitives
- [`Currency`](./modules.md#currency) - Base currency interface
- [`Token`](./classes/Token.md) - ERC-20 token representation
- [`Ether`](./classes/Ether.md) - Native ETH currency
- [`CurrencyAmount`](./classes/CurrencyAmount.md) - Typed currency amounts

### Mathematical Utilities
- [`Fraction`](./classes/Fraction.md) - Precise fractional arithmetic
- [`Percent`](./classes/Percent.md) - Percentage calculations
- [`Price`](./classes/Price.md) - Exchange rates between currencies

### Chain Support
- [`ChainId`](./enums/ChainId.md) - Supported blockchain networks
- Network-specific configurations and constants

## Getting Started

```typescript
import { Token, CurrencyAmount, TradeType } from '@uniswap/sdk-core'

// Create a token
const USDC = new Token(1, '0xA0b86a33E6417c29C8F6e3b6E4E12A82aA4Ca8e9', 6, 'USDC', 'USD Coin')

// Create an amount
const amount = CurrencyAmount.fromRawAmount(USDC, '1000000') // 1 USDC
```

For practical integration examples, see the [SDK v2 Overview](../../v2/overview) and [SDK v2 Guides](../../v2/guides/quick-start).