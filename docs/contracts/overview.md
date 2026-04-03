---
id: overview
title: Contracts Overview
sidebar_position: 1
---

# Contracts Overview

If you are new to Ring, the contracts documentation should be read in this order:

1. `Few Protocol`
2. `Ring Swap (v2)`
3. `Uniswap v4 Integration`
4. `Liquidity Launchpad`

## How Ring's contract stack is organized

Ring's current contract stack is centered on `Few Protocol`.

- `Few Protocol` wraps original ERC-20 assets into `FewToken`
- `Ring Swap (v2)` is Ring's native AMM and router system
- `Uniswap v4 Integration` documents how `FewToken` is used in Uniswap v4 environments

This distinction is important:

- Ring currently operates `Ring Swap (v2)` as its native swap protocol
- Ring does **not** currently operate a separate native `Ring v4` AMM
- v4-related material in these docs should generally be understood as integration with `Uniswap v4`

## Recommended starting points

### Few Protocol

Start here if you want to understand the core Ring mechanism.

### Ring Swap (v2)

Start here if you want to integrate Ring's native swap system.

### Uniswap v4 Integration

Start here if you want to understand how `FewToken` interacts with Uniswap v4 liquidity and related infrastructure.
