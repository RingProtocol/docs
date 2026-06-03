---
id: quick-start
title: Smart Contract Quick Start
---

This guide shows the minimal contract-side setup for integrating with Ring Swap (v2).

Ring Swap paths are FewToken-aware. If your user starts from an original ERC-20 asset, resolve the corresponding
FewToken address before quoting or building a swap path. See the [FewToken integration guide](../../fewtoken/integrating)
for the wrapping layer.

## Choose the Target Chain

Start from the current [Ring Swap deployments](../../deployments):

1. Select the target chain.
2. Copy the `Ring Swap Router` address.
3. Copy the `Ring Swap Factory` address if your contract needs to validate pairs or derive pair addresses.
4. Use the `Ring Swap Pair Init Code` for deterministic CREATE2 pair-address calculations.

## Define the Minimal Interfaces

For simple swaps, most integrations only need the router interface:

```solidity
pragma solidity ^0.8.20;

interface IRingSwapRouter {
    function WETH() external pure returns (address);

    function swapExactTokensForTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts);
}
```

For pair validation or reserve reads, use the pair and factory interfaces from the
[smart contract reference](../../reference/smart-contracts/factory).

## Approve and Swap

Your contract must hold the input tokens and approve the router before swapping:

```solidity
pragma solidity ^0.8.20;

interface IERC20 {
    function approve(address spender, uint value) external returns (bool);
    function transferFrom(address from, address to, uint value) external returns (bool);
}

contract ExampleRingSwap {
    IRingSwapRouter public immutable router;

    constructor(address router_) {
        router = IRingSwapRouter(router_);
    }

    function swapExactInput(
        IERC20 inputToken,
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address recipient
    ) external returns (uint[] memory amounts) {
        require(inputToken.transferFrom(msg.sender, address(this), amountIn), 'transferFrom failed');
        require(inputToken.approve(address(router), amountIn), 'approve failed');

        return router.swapExactTokensForTokens(amountIn, amountOutMin, path, recipient, block.timestamp);
    }
}
```

## Integration Notes

- Use FewToken addresses in Ring Swap paths when the pool is FewToken-native.
- Do not hardcode upstream deployment addresses. Ring deployments differ by chain.
- Price checks should come from an external quote, oracle, or SDK calculation before submitting the transaction.
- For deterministic pair addresses, prefer the Ring SDK helper when possible so chain-specific factory and init-code
  values stay aligned with the current deployment table.
