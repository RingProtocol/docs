---
id: overview
title: Few Protocol Overview
sidebar_position: 1
---

# Few Protocol

`Few Protocol` is the core asset layer of Ring.

It wraps original ERC-20 assets into `FewToken`, which are then used across Ring products and external integrations.

## Why Few exists

The purpose of `Few Protocol` is to expand usable liquidity and improve capital efficiency.

In practice, Ring uses Few so that:

- liquidity can be organized around wrapped assets
- trading systems can work with `FewToken` instead of only original ERC-20 assets
- Ring can compete more effectively in routing, quoting, and execution

## Where Few is used today

Today, `FewToken` is used in two main places:

1. `Ring Swap (v2)`, which is Ring's native AMM and routing system
2. `Uniswap v4` liquidity environments, where `FewToken` can also be deployed through integration flows

## Important distinction

Few is the core Ring mechanism.

But Few should not be confused with a separate "Ring v4" protocol.

- Ring's native swap protocol is `Ring Swap (v2)`
- v4-related documentation in the current stack refers to `FewToken` integration with `Uniswap v4`

## In this section

This section covers:

- how to integrate with Few-based token wrapping
- how to resolve `FewToken` addresses
- how to map `FewToken` back to underlying ERC-20 assets
- deployment information for Few-related contracts
