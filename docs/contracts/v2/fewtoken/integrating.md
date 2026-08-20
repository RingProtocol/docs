---
title: FewToken Integration
sidebar_position: 1
---

Ring Swap (v2) keeps compatibility with v2-style AMM integration patterns while introducing `Few Protocol`
as a wrapping layer.

## Integration Overview

To integrate `Ring Swap (v2)` for swap and liquidity flows, replace your existing v2-style integration points with Ring deployments:

- Ring Swap Factory
- Ring Swap Pair Init Code
- Ring Swap Router
- Universal Router

## Key Difference: Few Protocol Wrapping

Few Protocol wraps original ERC-20 tokens into `FewToken`.

Ring's native swap system, `Ring Swap (v2)`, uses wrapped assets in pools and routes.

When integrating:

- quote prices with FewToken addresses
- construct swap paths with FewToken addresses
- resolve wrapped token addresses via FewFactory

## FewToken Address Resolution

:::info Verify FewFactory onchain
Supported FewToken identity must resolve through the published `FewFactory` for the selected chain.

For Ring integrations, a FewToken is supported only when `FewFactory.getWrappedToken(underlying)` returns that wrapper address. Token `name`, `symbol`, a `token()` method, or the existence of a pool do not define whether an address is a supported FewToken.
:::

### Integration rule

For each chain, read the published `FewFactory` address from the [Deployments](../deployments) page, then verify its
bytecode, `core()` reference, and chain ID onchain.

When your code starts from an original ERC-20, resolve the FewToken yourself:

```solidity
address wrapper = IFewFactory(fewFactory).getWrappedToken(underlying);
require(wrapper != address(0), "no FewToken for token");
```

When your code receives a wrapper from an external source, validate it before using it in routing, wrapping, or approval logic:

```solidity
function _assertCanonicalFewToken(address underlying, address wrapper) internal view {
    address expected = IFewFactory(fewFactory).getWrappedToken(underlying);
    require(expected != address(0), "no FewToken for token");
    require(expected == wrapper, "non-canonical FewToken");
}
```

Supported FewToken addresses are resolved through `FewFactory`. The following fields are display or discovery data only:

- `symbol()` / `name()`
- a `token()` method
- a `fw` or `Few Wrapped` prefix
- whether a RingSwap-style pool exists
- whether a quote or route looks profitable

### Approval spender selection

ERC-20 approvals grant transfer permission to the spender. Select the spender from the integration path you are using, not from arbitrary route or pool metadata.

| Flow | Token being approved | Spender |
| --- | --- | --- |
| Ring Swap Router swap or add liquidity | Original ERC-20 input | The selected Ring Swap Router |
| Manual wrap | Original ERC-20 input | The FewToken returned by `FewFactory.getWrappedToken(underlying)` |
| Universal Router with Permit2 | Original ERC-20 input | Permit2 for the ERC-20 allowance, then the selected Universal Router in the bounded Permit2 authorization |
| Remove liquidity | Pair LP token | The selected Ring Swap Router, or the same router in the LP permit |

Prefer exact amounts and short expiries. Clear temporary allowances when the token and flow support it. Validate every
spender against the selected deployment and flow. A Pair, Factory, FewFactory, hook, quote target, or token-list entry
is not an approval spender by default.

SDK derivation is a convenience, not an authorization check. Compare its result with the deployed FewFactory. External
FewToken-looking addresses are unsupported unless they pass the same onchain check.

## Supply and backing boundary

The reviewed FewToken source includes both escrow-backed `wrap` and role-controlled `mint`. Privileged minting does not
itself transfer the original token into the wrapper. The current Core role holders, pause state, underlying balance,
supply, and issuance history must be checked onchain before an integration assumes redemption capacity.

FewToken `burn()` destroys the caller's FewToken without transferring the original asset. Use `unwrap()` or
`unwrapTo()` for redemption. See [Few Protocol and FewToken](/concepts/few-protocol) for role, pause, raw-unit, and
nonstandard-token details.

## Important note

Ring Swap (v2) is a native Ring product line. The `v2` label describes the compatible AMM design; it is not
part of a public Ring product-version ladder.

If you are integrating with v4-related workflows elsewhere in these docs, that should generally be understood as
`FewToken` integration with `Uniswap v4`, not as a separate native v4 protocol.

## Swap Path Example

If your intended route is:

```text
[tokenA, USDC, tokenB]
```

Use this path for Ring Swap:

```text
[fwTokenA, fwUSDC, fwTokenB]
```

`fwTokenX` means the FewToken mapped from original token `tokenX`.
