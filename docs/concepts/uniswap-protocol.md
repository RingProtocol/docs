---
id: uniswap-protocol
title: The Ring Protocol
sidebar_position: 2
---

## Introduction

Ring Protocol is built around `FEW`, short for `Financial Elastic Wrapping`.

At a high level, Ring wraps original ERC-20 assets into `FewToken`, then uses those wrapped assets across trading and protocol integrations.

Today, the most important parts of Ring are:

- `Few Protocol`: the core wrapping layer
- `Ring Swap (v2)`: Ring's native AMM built around `FewToken`
- `Uniswap v4 integration`: `FewToken` can also be used in Uniswap v4 liquidity environments
- products such as launch infrastructure, wallet, and future lending integrations that build on the same FEW model

## How does Ring compare to a typical market?

To understand how Ring differs from a traditional exchange, it is helpful to look at two subjects first:

- how AMMs differ from order-book markets
- how permissionless systems differ from permissioned systems

### What is Ring Protocol

Ring Protocol is a liquidity and capital-efficiency protocol designed to increase asset utilization onchain.

The core idea is simple:

1. wrap original assets into `FewToken`
2. use `FewToken` across trading and routing systems
3. improve usable liquidity and quote competitiveness
4. earn more order flow and fees from stronger execution

### What Ring is not

Ring should not be understood as a full version-by-version clone of Uniswap.

In particular:

- Ring currently operates `Ring Swap (v2)` as its native swap protocol
- Ring does **not** currently operate a separate native `Ring v4` AMM
- when Ring documentation refers to v4 in the current product stack, it should be understood as `FewToken` integration with `Uniswap v4`

### Mission

Ring's mission is to build a universal liquidity protocol for maximizing asset utilization. Large amounts of assets remain idle onchain, while many crypto assets and markets still lack efficient liquidity. Ring aims to improve this through FEW and the products built on top of it.

### Permissionless Systems

The Ring protocol follows the permissionless design tradition of Ethereum. That means users and integrators should be able to interact with deployed contracts without needing centralized approval.

Permissionless design means the protocol's services are open for public use within the constraints of the deployed contracts. This differs from traditional financial systems, which typically restrict access based on geography, wealth, or institutional permission.

Ring is also designed around transparent onchain components. That makes the system easier to inspect and reason about, but it also means the protocol boundaries need to be documented clearly so users understand which parts are native Ring systems and which parts are integrations with external infrastructure.
