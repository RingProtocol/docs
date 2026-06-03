---
title: FewToken Integration
sidebar_position: 1
---

Ring Swap (v2) keeps compatibility with v2-style AMM integration patterns while introducing `Few Protocol`
as a wrapping layer.

## Integration Overview

To integrate `Ring Swap (v2)` for swap and liquidity flows, replace your existing v2-style integration points with Ring deployments:

- Ring Swap Factory
- Ring Swap Pair Init Code
- Ring Swap Router
- Universal Router

## Key Difference: Few Protocol Wrapping

Few Protocol wraps original ERC-20 tokens into `FewToken`.

Ring's native swap system, `Ring Swap (v2)`, uses wrapped assets in pools and routes.

When integrating:

- quote prices with FewToken addresses
- construct swap paths with FewToken addresses
- resolve wrapped token addresses via FewFactory

## Important note

Ring Swap (v2) is a native Ring product line. The `v2` label describes the compatible AMM design; it is not
part of a public Ring product-version ladder.

If you are integrating with v4-related workflows elsewhere in these docs, that should generally be understood as
`FewToken` integration with `Uniswap v4`, not as a separate native v4 protocol.

## Swap Path Example

If your intended route is:

```text
[tokenA, USDC, tokenB]
```

Use this path for Ring Swap:

```text
[fwTokenA, fwUSDC, fwTokenB]
```

`fwTokenX` means the FewToken mapped from original token `tokenX`.
