---
title: Overview
sidebar_position: 1
---

# FewMorphoRouter

`FewMorphoRouter` is a thin routing layer built on top of Morpho Blue, Few wrapped tokens, and ERC4626 vaults.

It is designed to let users interact with underlying assets such as `WETH` and `DAI` while the router handles the extra wrap and unwrap steps required by Few wrapped tokens before calling Morpho or a vault.

## Scope

This package is intentionally minimal. It includes:

- a router contract
- router-specific interfaces and libraries
- router unit tests
- Sepolia config and fork integration tests
- deployment and whitelist configuration scripts

It does not modify Morpho core contracts.

## Supported Flows

The current router implementation supports these user flows:

- `supplyCollateralWithWrap`
- `borrowAndUnwrap`
- `repayWithWrap`
- `withdrawCollateralAndUnwrap`
- `vaultDepositWithWrap`
- `vaultWithdrawAndUnwrap`
- `vaultRedeemAndUnwrap`

## How It Works

At a high level, the router orchestrates four steps:

1. Pull the underlying asset from the user.
2. Wrap or unwrap through a Few wrapped token contract.
3. Call Morpho Blue or an ERC4626 vault.
4. Return the final asset back to the same user.

The router is an orchestration layer only. It does not manage:

- Morpho risk configuration
- market creation
- oracle logic
- vault strategy logic
- arbitrary call execution
- swap execution

## Validation Model

The router does not keep an admin-managed mapping from underlying token to wrapper token. Instead, it validates relationships onchain:

- `IFewWrappedToken(wrapper).token() == underlying`
- `IERC4626(vault).asset() == wrapper`
- `market.loanToken == wrapper` for borrow and repay flows
- `market.collateralToken == wrapper` for collateral supply and withdrawal flows

It also resolves market parameters from `Morpho.idToMarketParams(marketId)` instead of trusting frontend-supplied market params.

## Admin Model

The contract exposes a small admin surface:

- `owner`
- `guardian`
- `paused`

The owner can:

- set the guardian
- pause and unpause
- whitelist wrappers
- whitelist vaults
- whitelist markets
- rescue tokens while paused
- transfer ownership

The guardian can only pause.

## Safety Properties

The current implementation includes:

- `nonReentrant` protection
- pause checks on all business functions
- wrapper, vault, and market whitelists
- onchain wrapper, vault, and market consistency validation
- safe ERC20 transfers
- lazy max approvals for wrapper, vault, and Morpho interactions

The router is currently scoped to `msg.sender` only. The first version does not support custom receivers or generic multicall behavior.
