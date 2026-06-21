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

:::info FewFactory is the source of truth
Supported FewToken identity must come from the official `FewFactory`.

For Ring integrations, a FewToken is supported only when `FewFactory.getWrappedToken(underlying)` returns that wrapper address. Token `name`, `symbol`, a `token()` method, or the existence of a pool do not define whether an address is a supported FewToken.
:::

### Integration rule

For each chain, read the official `FewFactory` address from the [Deployments](../deployments) page.

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

Supported patterns:

- If you use the official Ring Router or Universal Router, approve only the official router or Permit2 address for the chain.
- If you manually wrap, approve only the canonical FewToken returned by `FewFactory.getWrappedToken(underlying)`.
- Prefer exact-amount approvals and clear temporary allowances after use when your flow supports it.
- Use a wrapper address from a pool, quote, route, token list, or subgraph only after the `FewFactory` check above.

If you use the official Ring SDK helpers and official deployment addresses, your integration should derive the expected FewToken addresses from Ring configuration. External FewToken-looking addresses should be treated as unsupported unless they pass the `FewFactory` check.

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
