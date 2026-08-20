---
id: ring-protocol
title: How Ring Works
sidebar_position: 2
---

# How Ring Works

Ring separates the asset layer from the trading venue.

```text
Original ERC-20
      |
      | a verified FewFactory resolves the supported wrapper
      v
FewToken
      |
      +--> Ring Swap pools and routes
      |
      +--> supported external integrations, including Uniswap v4
```

## 1. Few Protocol provides the asset layer

Few Protocol maps an original ERC-20 to a `FewToken`. The published `FewFactory` deployment on each network records
that mapping. Verify the factory address, code, Core reference, and reverse wrapper relationship onchain before use.

A token name, symbol, token list entry, or existing pool is not enough to establish that a wrapper is
supported. Integrations should confirm the mapping through `FewFactory`.

## 2. Ring Swap provides the native trading layer

Ring Swap uses FewToken assets in constant-product pairs. Its core contracts are a factory and the pairs
created by that factory. Routers provide the normal entry points for swaps and liquidity operations.

For a logical route such as:

```text
tokenA -> USDC -> tokenB
```

the Ring Swap path uses the corresponding wrappers:

```text
fwTokenA -> fwUSDC -> fwTokenB
```

## 3. Other environments are integrations

FewToken can also be used outside Ring Swap. The Uniswap v4 section documents one such integration path.
Those pages describe FewToken and Few hooks in Uniswap v4 infrastructure. They do not describe a separate
native Ring v4 AMM.

## Integration boundary

| Need | Verification source |
| --- | --- |
| Confirm a FewToken | The independently verified, published `FewFactory` for the selected chain |
| Find a Ring Swap pair | The network's Ring Swap Factory or the published pool reference |
| Select an approval spender | The exact spender required by the reviewed flow. See [Security and Risk](/security-and-risk#approval-spenders) |
| Find current deployments | [Contract deployments](/contracts/v2/deployments) |
| Browse Ethereum pools | [Ring Pool Explorer](https://app.ring.exchange/explorer#/explore/pools) |

This boundary matters because addresses that look like Ring assets or pools can be created by anyone. Start with the
published deployment, then verify it onchain before routing funds or granting approvals.
