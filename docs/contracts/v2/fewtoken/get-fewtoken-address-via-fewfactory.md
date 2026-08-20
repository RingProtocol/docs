---
title: Get FewToken Address via FewFactory
sidebar_position: 2
---

Ring Swap uses wrapped tokens (FewTokens) in pools and swap paths.

When you quote prices or build routes, use FewToken addresses instead of original ERC20 token addresses.

:::warning Verify the FewFactory first
Treat an address as a supported FewToken only when it is returned by the published and independently verified
`FewFactory` for the selected chain. Token `symbol`, `name`, `token()`, and pool existence do not define FewToken
identity. See [FewToken Integration: FewToken Address Resolution](./integrating#fewtoken-address-resolution).
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
    address public immutable fewFactory;

    constructor(address _fewFactory) {
        require(_fewFactory.code.length > 0, "FewFactory has no code");
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

If a `(underlying, wrapper)` pair reaches your code from an external source, confirm it before routing, approving, or
wrapping:

```solidity
function isCanonicalFewToken(address underlying, address wrapper) external view returns (bool) {
    return wrapper != address(0)
        && IFewFactory(fewFactory).getWrappedToken(underlying) == wrapper;
}
```

Use a wrapper only when this check passes. Then select the approval spender for the exact flow. Original tokens approve
the Ring Swap Router for normal swaps, the verified FewToken for manual wrap, or Permit2 for a reviewed Universal Router
flow. See [Security and Risk](/security-and-risk#approval-spenders).
