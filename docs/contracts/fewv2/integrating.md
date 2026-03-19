---
title: Integrating with Ring Protocol
sidebar_position: 1
---

Ring Protocol keeps compatibility with Uniswap V2 style integrations while introducing Few Protocol as a wrapping layer.

## Integration Overview

To integrate Ring Swap for swap and liquidity flows, replace your existing Uniswap-style integration points with Ring deployments:

- Ring Swap Factory
- Ring Swap Pair Init Code
- Ring Swap Router
- Universal Router

## Key Difference: Few Protocol Wrapping

Few Protocol wraps original ERC20 tokens into FewTokens. Ring Swap pools and routes use wrapped tokens.

When integrating:

- quote prices with FewToken addresses
- construct swap paths with FewToken addresses
- resolve wrapped token addresses via FewFactory

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
