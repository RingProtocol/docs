---
id: overview
title: API Overview
---

This section explains the Ring Subgraph and how to interact with it. The Ring subgraph indexes data from the Ring contracts over time. It organizes data about pairs, tokens, Ring as a whole, and more. The subgraph updates any time a transaction is made on Uniswap. The subgraph runs on [The Graph](https://thegraph.com/) protocol's hosted service and can be openly queried.

## Resources

[Subgraph Explorer](https://thegraph.com/explorer/profile/0xddaaed8b88ac0ccfdbfabdceba1c619391760f7f?view=Subgraphs&chain=arbitrum-one) - sandbox for querying data and endpoints for developers.

[Ring V2 Subgraph](https://github.com/Uniswap/uniswap-v2-subgraph) - source code for deployed subgraph.

## Usage

The subgraph provides a snapshot of the current state of Ring and also tracks historical data. It is currently used to power [uniswap.info](https://uniswap.info/). **It is not intended to be used as a data source for structuring transactions (contracts should be referenced directly for the most reliable live data).**

## Making Queries

To learn more about querying a subgraph refer to [The Graph's documentation](https://thegraph.com/docs/about/introduction).

## Versions

The [Ring V2 Subgraph](https://thegraph.com/explorer/subgraphs/A3Np3RQbaBA6oKJgiwDJeo5T3zrYfGHPWFYayMwtNDum?view=Query&chain=arbitrum-one) only tracks data on Ring V2. For Ring V1 information see the [V1 Subgraph](https://thegraph.com/explorer/subgraphs/ESnjgAG9NjfmHypk4Huu4PVvz55fUwpyrRqHF21thoLJ?view=Query&chain=arbitrum-one).