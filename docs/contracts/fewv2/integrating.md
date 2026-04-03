---
title: Integrating with Ring Protocol
sidebar_position: 1
---

Ring keeps compatibility with Uniswap v2-style integration patterns while introducing `Few Protocol` as a wrapping layer.

## Integration Overview

To integrate `Ring Swap (v2)` for swap and liquidity flows, replace your existing Uniswap-style integration points with Ring deployments:

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

Ring currently operates `Ring Swap (v2)` as its native AMM.

If you are integrating with v4-related workflows elsewhere in these docs, that should generally be understood as `FewToken` integration with `Uniswap v4`, not as a separate native Ring v4 protocol.

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
