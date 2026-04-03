---
id: overview
title: API Overview
---

This section explains the Ring Subgraph and how to interact with it. The Ring subgraph indexes data from the Ring contracts over time. It organizes data about pairs, tokens, Ring as a whole, and more. The subgraph updates as transactions are processed on the underlying network. The subgraph runs on [The Graph](https://thegraph.com/) and can be openly queried.

## Resources

[Subgraph Explorer](https://thegraph.com/explorer/profile/0xddaaed8b88ac0ccfdbfabdceba1c619391760f7f?view=Subgraphs&chain=arbitrum-one) - sandbox for querying data and endpoints for developers.

[Ring V2 Subgraph](https://github.com/RingProtocol/v2-subgraph) - source code for the deployed subgraph.

## Usage

The subgraph provides a snapshot of the current state of Ring and also tracks historical data. **It is not intended to be used as a data source for structuring transactions**; contracts should be referenced directly for the most reliable live data.

## Making Queries

To learn more about querying a subgraph refer to [The Graph's documentation](https://thegraph.com/docs/about/introduction).

## Versions

The [Ring V2 Subgraph](https://thegraph.com/explorer/subgraphs/A3Np3RQbaBA6oKJgiwDJeo5T3zrYfGHPWFYayMwtNDum?view=Query&chain=arbitrum-one) tracks data for Ring Swap (v2).