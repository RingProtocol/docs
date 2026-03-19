---
title: Get FewToken Address via FewFactory
sidebar_position: 3
---

Ring Swap uses wrapped tokens (FewTokens) in pools and swap paths.

When you quote prices or build routes, use FewToken addresses instead of original ERC20 token addresses.

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
