---
id: overview
title: Uniswap v4 Integration Overview
sidebar_position: 1
---

# Uniswap v4 Integration

This section documents how Ring and `FewToken` integrate with `Uniswap v4`.

## What this section is

This section is for developers who want to understand:

- how `FewToken` can be used in Uniswap v4 liquidity environments
- which Uniswap v4 contracts and interfaces are relevant to Ring integrations
- how Ring products such as the launchpad may seed liquidity into Uniswap v4 pools

## What this section is not

This section does **not** describe a separate native `Ring v4` AMM.

Important distinction:

- Ring currently operates `Ring Swap (v2)` as its native swap protocol
- Ring does **not** currently operate a separate native `Ring v4`
- the material in this section should generally be read as `FewToken + Uniswap v4` integration documentation

Some low-level reference pages in this section still follow upstream v4 naming conventions. When that happens, read them as technical integration references rather than as proof that Ring operates a separate native v4 AMM.

## How to read this section

If you are new to Ring, read these sections first:

1. `Concepts > Ring Overview`
2. `Concepts > The Ring Protocol`
3. `Contracts > Few Protocol`
4. `Contracts > Ring Swap (v2)`

Then use this section as a technical integration reference for Uniswap v4-related workflows.
