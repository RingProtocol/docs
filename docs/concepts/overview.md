---
id: overview
title: Ring Overview
sidebar_position: 1
pagination_next: concepts/ring-protocol
---

## Start Here

Ring is best understood as a liquidity and asset-layer project, not just as another swap frontend.

Today, the most important parts of Ring are:

- **Ring Protocol team**: the team building Ring products and integrations
- **Few Protocol**: Ring's asset layer for wrapping original ERC-20 assets into `FewToken`
- **Ring Swap (v2)**: Ring's native AMM and routing system built around `FewToken`
- **USDR Mint**: a mint-only flow for depositing supported stablecoins and receiving `USDR` 1:1
- **Fixed Yield**: a fixed-term `USDR` deposit product with fixed USDR rewards after maturity
- **Uniswap v4 integration**: Ring also uses `FewToken` in Uniswap v4 liquidity environments, but this does **not** mean Ring operates a separate native v4 AMM
- **Ring Interface**: the main web interface for interacting with Ring products

## What makes Ring different

The main idea behind Ring is `FEW`, short for `Financial Elastic Wrapping`.

Rather than treating swap as the entire product, Ring introduces an asset layer first:

1. original ERC-20 assets are wrapped into `FewToken`
2. `FewToken` is then used in trading, routing, and other protocol integrations
3. the goal is to expand usable liquidity and improve quote competitiveness

This means Ring should be thought of as:

- a capital-efficiency protocol
- a liquidity amplification layer
- a trading and routing infrastructure project built around FEW

## How to read these docs

If you are new to Ring, the recommended reading order is:

1. `The Ring Protocol` for the high-level model
2. `Few Protocol` for the core asset layer
3. `USDR Mint` for the stablecoin-to-USDR user flow
4. `Fixed Yield` for the USDR deposit and reward flow
5. `Ring Swap (v2)` for the native swap system
6. `Uniswap v4 Integration` for how `FewToken` is used outside Ring Swap
