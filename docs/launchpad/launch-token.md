---
id: launch-token
title: Launch Token
sidebar_position: 2
---

# Launch Token

Every launch deploys a new `LaunchToken`.

`LaunchToken` is the ERC-20 asset that represents the meme coin created by the launchpad. It is minted with a fixed supply at deployment and paired against `fwWETH` by `RingLaunchpadV4`.

## Token parameters

The launchpad requires:

| Field | Requirement |
|---|---|
| `name` | Non-empty, up to 32 bytes |
| `symbol` | Non-empty, up to 16 bytes |
| `tokenURI` | Non-empty, up to 256 bytes |
| `pairAmount` | Greater than zero and no greater than `threshold()` |

The current total supply is:

```solidity
uint256 public constant TOTAL_SUPPLY = 1e27;
```

For a token with 18 decimals, this represents `1,000,000,000` whole tokens.

## Price initialization

The initial pool price is derived from:

- the full launch token supply
- the `pairAmount` of `fwWETH`
- the Uniswap v4 pool currency ordering

As a practical rule, `pairAmount` expresses how much ETH-side value is paired against the full token supply. A `pairAmount` of `10 ether` means the token launches near:

```text
10 ETH : 1,000,000,000 tokens
```

## Token discovery

Use the `TokenDeployedV4` event as the primary launch discovery event:

```solidity
event TokenDeployedV4(
    address indexed creator,
    address indexed token,
    address weth,
    address wrappedWETH,
    bytes32 poolId,
    uint256 pairAmount,
    uint256 tokenAmount
);
```

Index at least:

- `creator`
- `token`
- `wrappedWETH`
- `poolId`
- `pairAmount`
- `tokenAmount`

## Metadata

`tokenURI` is provided during launch and should point to the token metadata used by the frontend. The Bunny Sepolia launch uses an IPFS URI, but the contract only requires a non-empty URI string within the maximum length.
