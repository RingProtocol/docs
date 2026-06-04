---
id: overview
title: Overview
sidebar_position: 1
---

The `UniversalRouter` is an ETH and ERC20 swap router used by Ring integrations. In the current Ring docs,
read it as routing infrastructure for Ring Swap (v2), FewToken-aware flows, and external Uniswap v4 integration
paths. It should not be read as evidence that Ring has additional native AMM product lines.

The flexible command-based architecture enables:

- Splitting and interleaving of Ring Swap and supported external routing paths
- Partial fills of trades
- Wrapping and unwrapping of ETH (via WETH)
- Time-bound, signature-controlled token approvals using [Permit2](../permit2/overview.md)
- external venue command support where those integrations are explicitly used
- Sub-plan execution and balance checks

Transactions are encoded as a sequence of byte-sized commands, each with structured inputs. These commands can be
chained within a single transaction to express customized workflows, including multi-hop swaps, supported external
integrations, and complex value routing, all without the need for prior token approvals.

> **Note:** The `UniversalRouter` integrates with `Permit2` to eliminate the need for direct token approvals. See the [Permit2 documentation](../permit2/overview.md) for details.

## Resources

Use the current [Ring Swap deployments](../v2/deployments) for Universal Router addresses.
