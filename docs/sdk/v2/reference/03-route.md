---
id: route
title: Route
---

```typescript
constructor(pairs: Pair[], input: Token, output: Token)
```

The Route entity represents one or more ordered Ring pairs with a fully specified path from input token to output token. In the FEW-aware Ring SDK, the pairs may hold `FewToken` liquidity even when the route input and output are expressed as the original assets.

## Example

```typescript
import { ChainId, Token, CurrencyAmount } from '@ring-protocol/sdk-core'
import { Pair, Route, getFewTokenFromOriginalToken } from '@ring-protocol/v2-sdk'

const HOT = new Token(ChainId.MAINNET, '0xc0FFee0000000000000000000000000000000000', 18, 'HOT', 'Caffeine')
const NOT = new Token(ChainId.MAINNET, '0xDeCAf00000000000000000000000000000000000', 18, 'NOT', 'Caffeine')
const fewHOT = getFewTokenFromOriginalToken(HOT, ChainId.MAINNET)
const fewNOT = getFewTokenFromOriginalToken(NOT, ChainId.MAINNET)
const HOT_NOT = new Pair(
  CurrencyAmount.fromRawAmount(fewHOT, '2000000000000000000'),
  CurrencyAmount.fromRawAmount(fewNOT, '1000000000000000000')
)

const route = new Route([HOT_NOT], NOT, HOT)
```

## Properties

### pairs

```typescript
pairs: Pair[]
```

The ordered pairs that the route is comprised of.

### path

```typescript
path: Token[]
```

The full path from input token to output token.

### input

```typescript
input: Token
```

The input token.

### output

```typescript
output: Token
```

The output token.

### midPrice

```typescript
midPrice: Price
```

Returns the current mid price along the route.
