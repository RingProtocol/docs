---
title: Get FewToken Address via FewFactory
sidebar_position: 2
---

Ring Swap uses wrapped tokens (FewTokens) in pools and swap paths.

When you quote prices or build routes, use FewToken addresses instead of original ERC20 token addresses.

:::warning FewFactory is the only source of truth
Treat an address as a supported FewToken only when it is returned by the official `FewFactory` for the underlying ERC-20. Token `symbol`, `name`, `token()`, and pool existence do not define FewToken identity. See [FewToken Integration → FewToken Address Resolution](./integrating#fewtoken-address-resolution).
:::

## FewFactory Interface

```solidity
interface IFewFactory {
    function getWrappedToken(address originalToken) external view returns (address wrappedToken);
}
```

## Example Helper Contract

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

interface IFewFactory {
    function getWrappedToken(address originalToken) external view returns (address);
}

contract FewTokenHelper {
    address public fewFactory;

    constructor(address _fewFactory) {
        fewFactory = _fewFactory;
    }

    function getFewTokenAddress(address originalToken) external view returns (address wrappedToken) {
        return IFewFactory(fewFactory).getWrappedToken(originalToken);
    }
}
```

## Building a Swap Path

For a logical route:

```text
tokenA -> USDC -> tokenB
```

Resolve wrapped tokens first:

```text
fwTokenA = FewFactory.getWrappedToken(tokenA)
fwUSDC = FewFactory.getWrappedToken(USDC)
fwTokenB = FewFactory.getWrappedToken(tokenB)
```

Then pass:

```text
path = [fwTokenA, fwUSDC, fwTokenB]
```

## Validating an External Wrapper

If a `(underlying, wrapper)` pair reaches your code from an external source (a pool's `token0`/`token1`, a quote, a router, an API), confirm it is canonical before routing, approving, or wrapping:

```solidity
function isCanonicalFewToken(address underlying, address wrapper) external view returns (bool) {
    return wrapper != address(0)
        && IFewFactory(fewFactory).getWrappedToken(underlying) == wrapper;
}
```

Use a wrapper only when this check passes. Approval spender addresses should be selected from official Ring deployments or from the canonical FewToken returned by `FewFactory`.
