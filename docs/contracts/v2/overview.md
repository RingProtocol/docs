---
id: overview
title: Ring Swap Overview
sidebar_position: 1
---

# Ring Swap Overview

`Ring Swap (v2)` is Ring's native AMM and routing system. It is a top-level Ring product line, not merely
a legacy version bucket.

Ring Swap (v2) is compatible with familiar v2-style AMM integration patterns, but it is native to
Ring because pools and routes are built around `FewToken`, the wrapped assets created by `Few Protocol`.

If you are new to Ring, start with:

- `Concepts > Ring Overview`
- `Concepts > The Ring Protocol`
- `Contracts > Ring Swap (v2) > FewToken Wrapping`

## What this section covers

This section documents the native Ring Swap (v2) contracts and concepts, including:

- factory and pair contracts
- router-based swap flows
- FewToken wrapping and FewFactory address lookup
- AMM concepts used by Ring Swap (v2)
- integration notes for applications building on Ring Swap (v2)

## Developer links

The exact code repositories and deployment details may evolve over time, but this section should be treated as the
reference point for Ring's native swap system.

## Important note

The `(v2)` label describes the constant-product AMM contract family used by Ring Swap. It should not be read as
evidence that Ring also has additional native AMM product lines.

If you see v4-related material elsewhere in these docs, read it as `FewToken` integration with `Uniswap v4`, not as a
separate native v4 protocol.
