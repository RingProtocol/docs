---
title: Technical Reference
sidebar_position: 4
---

# FewMorphoRouter Technical Reference

This page documents the external API of `FewMorphoRouter` based on the current contract implementation.

## State Variables and Public Getters

The router exposes these public state variables:

| Variable | Type | Description |
| --- | --- | --- |
| `morpho` | `IMorpho` | Immutable Morpho Blue core contract used by all market flows |
| `owner` | `address` | Router owner |
| `guardian` | `address` | Pause-only guardian |
| `paused` | `bool` | Global pause flag for user-facing functions |
| `isSupportedWrapper` | `mapping(address => bool)` | Wrapper whitelist |
| `isSupportedVault` | `mapping(address => bool)` | Vault whitelist |
| `isSupportedMarket` | `mapping(bytes32 => bool)` | Market whitelist |

Because these variables are `public`, Solidity automatically generates getter functions:

- `morpho() returns (address)`
- `owner() returns (address)`
- `guardian() returns (address)`
- `paused() returns (bool)`
- `isSupportedWrapper(address) returns (bool)`
- `isSupportedVault(address) returns (bool)`
- `isSupportedMarket(bytes32) returns (bool)`

## Contract Construction

### `constructor(address morpho_, address owner_)`

Creates a new router instance and stores the immutable Morpho address.

| Item | Description |
| --- | --- |
| `morpho_` | Address of the Morpho Blue contract |
| `owner_` | Initial router owner |
| Returns | None |

Fails when:

- `morpho_ == address(0)`
- `owner_ == address(0)`

## External Dependencies

The router relies on a small set of external interfaces.

### `IFewWrappedToken`

Few wrapper tokens are expected to support:

| Function | Purpose |
| --- | --- |
| `token()` | Returns the underlying token address |
| `wrap(uint256 assets)` | Pulls underlying and mints wrapped tokens |
| `unwrap(uint256 assets)` | Burns wrapped tokens and returns underlying |

### `IERC4626`

Vault integrations depend on standard ERC4626 entrypoints:

| Function | Purpose |
| --- | --- |
| `asset()` | Returns the vault asset address |
| `deposit(uint256 assets, address receiver)` | Deposits vault assets and mints shares |
| `withdraw(uint256 assets, address receiver, address owner)` | Burns shares and withdraws assets |
| `redeem(uint256 shares, address receiver, address owner)` | Redeems shares for assets |

## Admin Functions

### `setOwner(address newOwner)`

Updates the router owner.

| Item | Description |
| --- | --- |
| `newOwner` | New owner address |
| Returns | None |

Fails when:

- caller is not the current owner
- `newOwner == address(0)`
- `newOwner == owner`

### `setGuardian(address newGuardian)`

Updates the pause-only guardian role.

| Item | Description |
| --- | --- |
| `newGuardian` | New guardian address |
| Returns | None |

Fails when:

- caller is not the owner
- `newGuardian == guardian`

### `pause()`

Pauses all user-facing business functions.

| Item | Description |
| --- | --- |
| Parameters | None |
| Returns | None |

Fails when:

- caller is neither owner nor guardian
- router is already paused

### `unpause()`

Unpauses the router.

| Item | Description |
| --- | --- |
| Parameters | None |
| Returns | None |

Fails when:

- caller is not the owner
- router is not paused

### `setSupportedWrapper(address wrapper, bool newIsSupported)`

Adds or removes a wrapper from the wrapper whitelist.

| Item | Description |
| --- | --- |
| `wrapper` | Wrapper token address |
| `newIsSupported` | Desired whitelist status |
| Returns | None |

Fails when:

- caller is not the owner
- `newIsSupported` matches the current whitelist value

### `setSupportedVault(address vault, bool newIsSupported)`

Adds or removes a vault from the vault whitelist.

| Item | Description |
| --- | --- |
| `vault` | ERC4626 vault address |
| `newIsSupported` | Desired whitelist status |
| Returns | None |

Fails when:

- caller is not the owner
- `newIsSupported` matches the current whitelist value

### `setSupportedMarket(bytes32 marketId, bool newIsSupported)`

Adds or removes a Morpho market from the market whitelist.

| Item | Description |
| --- | --- |
| `marketId` | Morpho market id |
| `newIsSupported` | Desired whitelist status |
| Returns | None |

Fails when:

- caller is not the owner
- `newIsSupported` matches the current whitelist value

### `rescueToken(address token, address to, uint256 amount)`

Transfers tokens out of the router in paused state.

| Item | Description |
| --- | --- |
| `token` | Token to rescue |
| `to` | Recipient address |
| `amount` | Amount to transfer |
| Returns | None |

Fails when:

- caller is not the owner
- router is not paused
- `to == address(0)`
- token transfer fails

## Market Functions

### `supplyCollateralWithWrap(bytes32 marketId, address wrapper, uint256 underlyingAmount) returns (uint256)`

Supplies collateral into Morpho after wrapping the user's underlying token.

| Item | Description |
| --- | --- |
| `marketId` | Target Morpho market |
| `wrapper` | Few wrapped token used as market collateral |
| `underlyingAmount` | Amount of underlying token to transfer and wrap |
| Returns | Wrapped collateral amount supplied |

Fails when:

- router is paused
- reentrancy guard is triggered
- `underlyingAmount == 0`
- `wrapper` is not whitelisted
- `wrapper` has no code
- `wrapper.token()` is zero or has no code
- `marketId` is not whitelisted
- Morpho market does not exist
- market collateral token does not equal `wrapper`
- ERC20 transfer, approval, wrap, or Morpho call fails

### `borrowAndUnwrap(bytes32 marketId, address wrapper, uint256 borrowAssets) returns (uint256 assetsBorrowed, uint256 sharesBorrowed)`

Borrows wrapped assets from Morpho, unwraps them, and sends the underlying token to the caller.

| Item | Description |
| --- | --- |
| `marketId` | Target Morpho market |
| `wrapper` | Few wrapped token used as market loan token |
| `borrowAssets` | Wrapped asset amount to borrow |
| `assetsBorrowed` | Actual asset amount borrowed |
| `sharesBorrowed` | Borrow shares opened in Morpho |

Fails when:

- router is paused
- reentrancy guard is triggered
- `borrowAssets == 0`
- `wrapper` is not whitelisted
- `wrapper` has no code
- `wrapper.token()` is zero or has no code
- `marketId` is not whitelisted
- Morpho market does not exist
- market loan token does not equal `wrapper`
- borrow, unwrap, or final transfer fails

### `repayWithWrap(bytes32 marketId, address wrapper, uint256 underlyingAmount) returns (uint256 assetsRepaid, uint256 sharesRepaid)`

Wraps the user's underlying token and repays a Morpho borrow position.

| Item | Description |
| --- | --- |
| `marketId` | Target Morpho market |
| `wrapper` | Few wrapped token used as market loan token |
| `underlyingAmount` | Underlying token amount to transfer and wrap |
| `assetsRepaid` | Actual asset amount repaid |
| `sharesRepaid` | Borrow shares repaid |

Fails when:

- router is paused
- reentrancy guard is triggered
- `underlyingAmount == 0`
- `wrapper` is not whitelisted
- `wrapper` has no code
- `wrapper.token()` is zero or has no code
- `marketId` is not whitelisted
- Morpho market does not exist
- market loan token does not equal `wrapper`
- ERC20 transfer, approval, wrap, or Morpho repay fails

### `withdrawCollateralAndUnwrap(bytes32 marketId, address wrapper, uint256 collateralAssets) returns (uint256)`

Withdraws wrapped collateral from Morpho, unwraps it, and returns the underlying token.

| Item | Description |
| --- | --- |
| `marketId` | Target Morpho market |
| `wrapper` | Few wrapped token used as market collateral token |
| `collateralAssets` | Wrapped collateral amount to withdraw |
| Returns | Underlying asset amount sent back to the user |

Fails when:

- router is paused
- reentrancy guard is triggered
- `collateralAssets == 0`
- `wrapper` is not whitelisted
- `wrapper` has no code
- `wrapper.token()` is zero or has no code
- `marketId` is not whitelisted
- Morpho market does not exist
- market collateral token does not equal `wrapper`
- withdraw, unwrap, or final transfer fails

## Vault Functions

### `vaultDepositWithWrap(address vault, address wrapper, uint256 underlyingAmount) returns (uint256 shares)`

Wraps underlying tokens and deposits the wrapped asset into a vault.

| Item | Description |
| --- | --- |
| `vault` | Target ERC4626 vault |
| `wrapper` | Few wrapped token expected by the vault |
| `underlyingAmount` | Underlying token amount to transfer and wrap |
| `shares` | Vault shares minted to the user |

Fails when:

- router is paused
- reentrancy guard is triggered
- `underlyingAmount == 0`
- `wrapper` is not whitelisted
- `wrapper` has no code
- `wrapper.token()` is zero or has no code
- `vault` is not whitelisted
- `vault` has no code
- `vault.asset() != wrapper`
- ERC20 transfer, approval, wrap, or vault deposit fails

### `vaultWithdrawAndUnwrap(address vault, address wrapper, uint256 assets) returns (uint256 shares)`

Withdraws wrapped vault assets, unwraps them, and transfers underlying tokens to the user.

| Item | Description |
| --- | --- |
| `vault` | Target ERC4626 vault |
| `wrapper` | Few wrapped token expected by the vault |
| `assets` | Wrapped vault asset amount to withdraw |
| `shares` | Vault shares burned during withdrawal |

Fails when:

- router is paused
- reentrancy guard is triggered
- `assets == 0`
- `wrapper` is not whitelisted
- `wrapper` has no code
- `wrapper.token()` is zero or has no code
- `vault` is not whitelisted
- `vault` has no code
- `vault.asset() != wrapper`
- vault withdrawal, unwrap, or final transfer fails

### `vaultRedeemAndUnwrap(address vault, address wrapper, uint256 shares) returns (uint256 assets)`

Redeems vault shares, unwraps the returned wrapped assets, and sends underlying tokens to the user.

| Item | Description |
| --- | --- |
| `vault` | Target ERC4626 vault |
| `wrapper` | Few wrapped token expected by the vault |
| `shares` | Vault shares to redeem |
| `assets` | Wrapped assets redeemed before unwrapping |

Fails when:

- router is paused
- reentrancy guard is triggered
- `shares == 0`
- `wrapper` is not whitelisted
- `wrapper` has no code
- `wrapper.token()` is zero or has no code
- `vault` is not whitelisted
- `vault` has no code
- `vault.asset() != wrapper`
- vault redeem, unwrap, or final transfer fails

## Events

The contract emits these admin and recovery events:

- `SetOwner(address newOwner)`
- `SetGuardian(address newGuardian)`
- `SetPaused(bool newPaused)`
- `SetSupportedWrapper(address wrapper, bool newIsSupported)`
- `SetSupportedVault(address vault, bool newIsSupported)`
- `SetSupportedMarket(bytes32 marketId, bool newIsSupported)`
- `RescueToken(address token, address to, uint256 amount)`

## Router-Specific Error Strings

`FewMorphoRouter` uses router-local error strings from `RouterErrorsLib` in addition to reverts propagated from Morpho, wrappers, vaults, and ERC20 transfers.

| Error | Meaning |
| --- | --- |
| `paused` | Router is paused, or `rescueToken` was called while not paused |
| `reentrancy` | Reentrant call detected |
| `not owner or guardian` | Caller is neither owner nor guardian |
| `unsupported wrapper` | Wrapper is not whitelisted |
| `unsupported vault` | Vault is not whitelisted |
| `unsupported market` | Market is not whitelisted |
| `invalid wrapper underlying` | Wrapper returned an invalid underlying token |
| `invalid market side` | Wrapper does not match the expected loan or collateral side |
| `invalid vault asset` | Vault asset does not equal the provided wrapper |
| `approve reverted` | Low-level token approval reverted |
| `approve returned false` | Token approval returned `false` |

## Notes on Upstream Reverts

Several functions also depend on external contracts and can revert with upstream errors from:

- Morpho Blue
- Few wrapped token contracts
- ERC4626 vaults
- ERC20 token transfers and approvals

In practice, integrations should treat the router checks above as the first layer of validation, not the only source of failure.

## Internal Validation and Approval Helpers

These helpers are not part of the external ABI, but they explain several observable revert paths.

### `_validateWrapper(address wrapper)`

Checks that:

- `wrapper` is whitelisted
- `wrapper` is a contract
- `IFewWrappedToken(wrapper).token()` returns a non-zero contract address

Returns the wrapper's underlying token address.

### `_validateVault(address vault, address wrapper)`

Checks that:

- `vault` is whitelisted
- `vault` is a contract
- `IERC4626(vault).asset() == wrapper`

### `_validateMarket(bytes32 marketId, address wrapper, bool loanSide)`

Checks that:

- `marketId` is whitelisted
- `Morpho.idToMarketParams(marketId)` resolves to an existing market
- if `loanSide == true`, then `market.loanToken == wrapper`
- if `loanSide == false`, then `market.collateralToken == wrapper`

Returns the resolved Morpho market parameters.

### `_approveMaxIfNeeded(address token, address spender, uint256 amount)`

Implements lazy approval behavior:

- if current allowance is already at least `amount`, no approval is sent
- otherwise the router resets approval to `0`
- then sets approval to `type(uint256).max`

This behavior exists to support tokens that require zeroing allowance before setting a new value.

### `_approve(address token, address spender, uint256 amount)`

Performs the low-level approval call used by `_approveMaxIfNeeded`.

Fails when:

- the token call reverts
- the token returns `false`
