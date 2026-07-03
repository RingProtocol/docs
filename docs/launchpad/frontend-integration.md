---
id: frontend-integration
title: Frontend Integration
sidebar_position: 3
---

# Frontend Integration

The main contract a frontend calls is `RingLaunchpadV4`.

Use the launchpad for creation-time flows, and use Uniswap v4-compatible routing for later swaps against the created `TOKEN/fwWETH` pool.

## Required addresses

Your frontend or indexer needs:

- `RingLaunchpadV4`
- `RingCreatorFeeHook`
- Uniswap v4 `PoolManager`
- `WETH`
- `fwWETH`

See [Deployments](./deployments.md) for the current Sepolia addresses.

## Create a launch

```solidity
function deploy(
    string name,
    string symbol,
    string tokenURI,
    uint256 pairAmount
) returns (address token, bytes32 poolId);

function deployETH(
    string name,
    string symbol,
    string tokenURI,
    uint256 pairAmount,
    uint256 minAmountOut,
    address recipient
) payable returns (address token, bytes32 poolId, uint256 amountOut);

function deployWETH(
    string name,
    string symbol,
    string tokenURI,
    uint256 pairAmount,
    uint256 buyAmount,
    uint256 minAmountOut,
    address recipient
) returns (address token, bytes32 poolId, uint256 amountOut);
```

Use `deploy` when the creator only wants to create the token and pool.

Use `deployETH` when the creator also wants to buy the new token with native ETH in the same transaction.

Use `deployWETH` when the creator also wants to buy the new token with WETH in the same transaction. The caller must approve the launchpad to spend the requested WETH amount before calling.

## Parameters

| Parameter | Meaning |
|---|---|
| `name` | ERC-20 token name |
| `symbol` | ERC-20 token symbol |
| `tokenURI` | Metadata URI for the launch token |
| `pairAmount` | Amount of `fwWETH` paired against the full token supply |
| `minAmountOut` | Slippage guard for the optional initial buy |
| `recipient` | Address receiving initial buy output |
| `buyAmount` | WETH amount used for `deployWETH` initial buy |

Use a nonzero `minAmountOut` outside test environments.

## Events

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

event LaunchBuy(
    address indexed buyer,
    address indexed token,
    address indexed recipient,
    uint256 amountIn,
    uint256 amountOut
);
```

Use `TokenDeployedV4` as the source of truth for launch discovery. Use `LaunchBuy` to display creation-time buy details.

## Pool key

The pool is always the launch token paired with `fwWETH`, sorted by Uniswap v4 currency ordering.

```ts
const currency0 =
  token.toLowerCase() < wrappedWETH.toLowerCase() ? token : wrappedWETH
const currency1 =
  token.toLowerCase() < wrappedWETH.toLowerCase() ? wrappedWETH : token

const key = {
  currency0,
  currency1,
  fee: poolFee,
  tickSpacing,
  hooks: creatorFeeHook,
}
```

You can also call `buildPoolKey(address token)` on `RingLaunchpadV4` to avoid duplicating this logic.

## Validation checklist

- Token name is non-empty and at most 32 bytes.
- Symbol is non-empty and at most 16 bytes.
- Token URI is non-empty and at most 256 bytes.
- `pairAmount` is greater than zero and less than or equal to `threshold()`.
- `recipient` is nonzero when an initial buy is included.
- The creator has approved enough WETH for `deployWETH`.
- `minAmountOut` is set based on a quote or simulation.

## Later swaps

Creation-time buys are handled by `RingLaunchpadV4`. For later user swaps, route through a Uniswap v4-compatible router or a direct `PoolManager.unlock()` integration using the pool key above.
