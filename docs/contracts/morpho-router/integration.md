---
title: Integration Guide
sidebar_position: 2
---

# Integrating FewMorphoRouter

`FewMorphoRouter` is intended for applications that want to use underlying tokens in the UI while routing into Few wrapped token markets and vaults behind the scenes.

## User Prerequisites

Before calling router functions, users should complete the required approvals for the flow they want to use.

For market flows:

- approve the underlying ERC20 to `FewMorphoRouter`
- call `Morpho.setAuthorization(router, true)` before borrow, repay, or collateral withdrawal flows

For vault withdrawal and redeem flows:

- approve the vault share token to `FewMorphoRouter`

## Market Flows

### Supply Collateral

Use `supplyCollateralWithWrap(marketId, wrapper, underlyingAmount)` when the user wants to post underlying collateral.

The router:

1. pulls the underlying token from the user
2. wraps it into the provided Few wrapper
3. validates that the wrapper is the market's collateral side
4. supplies collateral into Morpho on behalf of `msg.sender`

### Borrow

Use `borrowAndUnwrap(marketId, wrapper, borrowAssets)` when the market loan token is a Few wrapped token but the user wants to receive the underlying asset.

The router:

1. validates that the wrapper is the market's loan side
2. borrows wrapped assets from Morpho
3. unwraps them
4. transfers the underlying asset to `msg.sender`

### Repay

Use `repayWithWrap(marketId, wrapper, underlyingAmount)` when the user is repaying a wrapped-asset debt with the underlying token.

The router:

1. pulls the underlying token from the user
2. wraps it
3. repays the Morpho position using the wrapped asset

### Withdraw Collateral

Use `withdrawCollateralAndUnwrap(marketId, wrapper, collateralAssets)` when the user wants to withdraw collateral back as the underlying token.

The router:

1. withdraws wrapped collateral from Morpho
2. unwraps it
3. transfers the underlying asset to `msg.sender`

## Vault Flows

### Deposit

Use `vaultDepositWithWrap(vault, wrapper, underlyingAmount)` when the vault asset is a Few wrapped token but the user is depositing the underlying asset.

The router:

1. pulls the underlying asset
2. wraps it
3. validates that `vault.asset()` matches the wrapper
4. deposits into the vault for `msg.sender`

### Withdraw

Use `vaultWithdrawAndUnwrap(vault, wrapper, assets)` when the user wants vault assets back as the underlying token.

The router:

1. withdraws wrapped assets from the vault
2. unwraps them
3. transfers the underlying token to `msg.sender`

### Redeem

Use `vaultRedeemAndUnwrap(vault, wrapper, shares)` when the user wants to redeem vault shares and receive the underlying token.

The router:

1. redeems shares from the vault
2. unwraps the returned wrapped assets
3. transfers the underlying token to `msg.sender`

## Frontend Integration Notes

Frontend integrations should use tracked artifacts from the router repository:

- ABI: `abi/FewMorphoRouter.json`
- addresses: `deployments/sepolia.json`

Do not parse `broadcast/` or `out/` as a deployment source of truth.

## Current First-Version Scope

The current implementation is intentionally narrow:

- `msg.sender` is always the position owner and receiver
- no arbitrary call support
- no generic multicall
- no swap routing
- no admin-controlled user fund movement

This keeps the first version easier to reason about and aligns with the repository's router spec.
