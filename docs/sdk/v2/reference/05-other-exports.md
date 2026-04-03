---
id: other-exports
title: Other Exports
---

Additional constants, helpers, and error types exported by the Ring v2 SDK.

## FACTORY_ADDRESS_MAP

```typescript
import { FACTORY_ADDRESS_MAP } from '@ring-protocol/v2-sdk'
```

The [factory address](../../../contracts/v2/reference/smart-contracts/factory#address). Use `FACTORY_ADDRESS_MAP[chainId]` for the network you are targeting.

## INIT_CODE_HASH

```typescript
import { INIT_CODE_HASH } from '@ring-protocol/v2-sdk'
```

Fallback init code hash used when a chain-specific entry is not available. For Ring Swap integrations, prefer `INIT_CODE_HASH_MAP[chainId]`.

## INIT_CODE_HASH_MAP

```typescript
import { INIT_CODE_HASH_MAP } from '@ring-protocol/v2-sdk'
```

Preferred per-chain init code hash map for computing Ring Swap pair addresses. See [pair addresses](../../../contracts/v2/guides/smart-contract-integration/getting-pair-addresses).

## MINIMUM_LIQUIDITY

```typescript
import { MINIMUM_LIQUIDITY } from '@ring-protocol/v2-sdk'
```

See [minimum liquidity](../../../contracts/v2/reference/smart-contracts/pair#minimum_liquidity).

## InsufficientReservesError

```typescript
import { InsufficientReservesError } from '@ring-protocol/v2-sdk'
```

## InsufficientInputAmountError

```typescript
import { InsufficientInputAmountError } from '@ring-protocol/v2-sdk'
```

## getFewTokenAddress

```typescript
import { getFewTokenAddress } from '@ring-protocol/v2-sdk'
```

Returns the `FewToken` address for an underlying ERC-20 on the target chain.

## getFewTokenFromOriginalToken

```typescript
import { getFewTokenFromOriginalToken } from '@ring-protocol/v2-sdk'
```

Returns a `Token` instance representing the wrapped `FewToken` for an original token.

## isFewToken

```typescript
import { isFewToken } from '@ring-protocol/v2-sdk'
```

Returns `true` when the provided token instance already represents a `FewToken`.
