---
id: creator-revenue
title: Creator Revenue
sidebar_position: 4
---

# Creator Revenue

`RingCreatorFeeHook` can accrue creator revenue from swaps in launched pools.

When `RingLaunchpadV4` has a revenue hook configured, each new pool is registered with:

- the pool id
- the launch token address
- the creator address

The creator is the wallet that called `deploy`, `deployETH`, or `deployWETH`.

## Fee behavior

The current Sepolia deployment uses:

| Parameter | Value |
|---|---:|
| Creator fee hook swap fee | `100` bips, or `1%` |
| Protocol share of collected hook fees | `2000` bips, or `20%` |
| Creator share of collected hook fees | `80%` |

Fees accrue in `fwWETH`. If the hook receives launch tokens as the fee currency, it converts the collected fee into `fwWETH` through the same pool before accounting for creator and protocol balances.

## Query claimable fees in code

Creator balances are exposed through the public `claimableFees` mapping:

```solidity
function claimableFees(address creator, address currency) external view returns (uint256 amount);
```

For the current hook, `currency` should be `wrappedWETH`. The returned amount uses the same decimals as `fwWETH`, currently 18 decimals.

```solidity
interface IRingCreatorFeeHookView {
    function wrappedWETH() external view returns (address);
    function claimableFees(address creator, address currency) external view returns (uint256);
}

function getCreatorRewards(address hook, address creator) external view returns (uint256 amount) {
    IRingCreatorFeeHookView feeHook = IRingCreatorFeeHookView(hook);
    amount = feeHook.claimableFees(creator, feeHook.wrappedWETH());
}
```

You can also inspect pool-level accounting:

```solidity
function poolCreator(PoolId poolId) external view returns (address creator);
function poolToken(PoolId poolId) external view returns (address token);
function poolFeesAccrued(PoolId poolId, address currency) external view returns (uint256 amount);
```

Use `poolCreator` to confirm which wallet owns a launch's creator rewards, and `poolFeesAccrued` to show total fees accrued by a pool in `fwWETH`.

## Claim rewards in code

Rewards are claimed by calling the hook from the creator wallet. The hook clears `claimableFees[msg.sender][wrappedWETH]`, so another address cannot claim on behalf of the creator unless it is executing through the creator account.

```solidity
interface IRingCreatorFeeHookClaims {
    function claimFees(address recipient) external returns (uint256 amount);
    function claimFees(address currency, address recipient) external returns (uint256 amount);
    function claimFeesAsWETH(address recipient) external returns (uint256 amount);
    function claimFeesAsETH(address recipient) external returns (uint256 amount);
}
```

Choose the claim function based on the payout asset:

| Function | Payout asset | Notes |
|---|---|---|
| `claimFees(recipient)` | `fwWETH` | Default claim path |
| `claimFees(currency, recipient)` | `fwWETH` | `currency` must equal `wrappedWETH` |
| `claimFeesAsWETH(recipient)` | WETH | Unwraps `fwWETH` to WETH before paying |
| `claimFeesAsETH(recipient)` | Native ETH | Unwraps `fwWETH` to WETH, withdraws WETH, then sends ETH |

All claim functions return the claimed amount. They revert when:

- `recipient` is the zero address
- the creator has no claimable fees
- `claimFees(currency, recipient)` is called with a currency other than `wrappedWETH`
- the native ETH transfer fails in `claimFeesAsETH`

## Example Solidity integration

```solidity
contract CreatorRewardsPanel {
    IRingCreatorFeeHookView public immutable hookView;
    IRingCreatorFeeHookClaims public immutable hookClaims;

    constructor(address hook) {
        hookView = IRingCreatorFeeHookView(hook);
        hookClaims = IRingCreatorFeeHookClaims(hook);
    }

    function claimable(address creator) external view returns (uint256) {
        return hookView.claimableFees(creator, hookView.wrappedWETH());
    }

    function claimAsEth(address recipient) external returns (uint256) {
        return hookClaims.claimFeesAsETH(recipient);
    }
}
```

In this example, `claimAsEth` must be called by the creator account because the hook uses `msg.sender` as the payee.
