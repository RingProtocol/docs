---
id: overview
sidebar_position: 1
title: Overview
---

## The Ring Subgraph

Ring uses multiple [subgraphs](https://thegraph.com/docs/about/introduction#what-the-graph-is) for indexing and organizing data from the Ring smart contracts.
These subgraphs are hosted on The Graph and can be used to query Ring data.

### Versions and Production Endpoints

Each supported Ring data surface has its own dedicated subgraph. As hosted subgraphs have been deprecated, queries should be made through decentralized subgraph endpoints.

Each subgraph has a dedicated endpoint for querying data, as well as a page on [The Graph explorer](https://thegraph.com/explorer) that exposes the schema and available fields to query.

## Creating an API Key

API Keys can be created by users inside the [Studio](https://thegraph.com/studio/apikeys/). This key is included in the endpoint so usage can be associated with the correct billing account.


##### Uniswap v4 Integration

- [Subgraph](https://thegraph.com/explorer/subgraphs/DiYPVdygkfjDWhbxGSqAQxwBKmfKnkWQojqeM2rkLb3G?view=About&chain=arbitrum-one)
- Graphql Endpoint: `https://gateway.thegraph.com/api/<YOUR_API_KEY_HERE>/subgraphs/id/DiYPVdygkfjDWhbxGSqAQxwBKmfKnkWQojqeM2rkLb3G`
- Code: https://github.com/RingProtocol/v4-subgraph

##### v2 (Mainnet)

- [Subgraph](https://thegraph.com/explorer/subgraphs/A3Np3RQbaBA6oKJgiwDJeo5T3zrYfGHPWFYayMwtNDum?view=Query&chain=arbitrum-one)
- Graphql Endpoint: `https://gateway.thegraph.com/api/<YOUR_API_KEY_HERE>/subgraphs/id/A3Np3RQbaBA6oKJgiwDJeo5T3zrYfGHPWFYayMwtNDum`
- Code: https://github.com/RingProtocol/v2-subgraph

## Current scope

In the current docs, the subgraph material should primarily be read in two buckets:

- `Ring Swap (v2)` data
- `FewToken` integrations that use `Uniswap v4`
