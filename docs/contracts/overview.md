---
id: overview
title: Contracts Overview
sidebar_position: 1
---

# Contracts Overview

If you are new to Ring, the contracts documentation should be read in this order:

1. `Ring Swap (v2)`
2. `FewToken Wrapping`
3. `Uniswap v4 Integration`

## How Ring's contract stack is organized

Ring's public contract stack is organized around a native swap product and the FEW asset layer behind it.

- `Ring Swap (v2)` is Ring's native AMM and router product line.
- `FewToken Wrapping` covers the FewFactory/FewToken layer used inside Ring Swap pools and routes.
- `Uniswap v4 Integration` documents how `FewToken` and Few hooks are used in Uniswap v4 environments.

This distinction is important:

- `Ring Swap (v2)` should remain visible as a top-level Ring product.
- Ring docs should not imply additional native AMM product lines.
- v4-related material in these docs should be understood as integration with `Uniswap v4`, not as a separate
  native v4 product line.

## Recommended starting points

### Ring Swap (v2)

Start here if you want to integrate Ring's native swap system.

### FewToken Wrapping

Start here if you want to resolve `FewToken` addresses or map wrapped assets back to underlying ERC-20 tokens.

### Ring Protocol Contracts

Start here if you need the current Ring Swap, FewFactory, UniversalRouter, Permit2, wrapper, hook,
and init-code deployments.

### Uniswap v4 Integration

Start here if you want to understand how `FewToken` interacts with Uniswap v4 liquidity and related infrastructure.
