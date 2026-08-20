---
title: Get ERC20 Token Address from FewToken
sidebar_position: 4
---

FewTokens wrap original ERC20 tokens. In UI and analytics workflows, you may need to map back to the underlying token.

## Read Original Token from FewToken

FewToken exposes:

```solidity
function token() external view returns (address);
```

## Example Resolver Contract

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

interface IFewWrappedToken {
    function token() external view returns (address);
}

contract OriginalTokenResolver {
    function getOriginalTokenAddress(address fewTokenAddress) external view returns (address) {
        return IFewWrappedToken(fewTokenAddress).token();
    }
}
```

## Fetch ERC20 Metadata

The `token()` result is not sufficient to authorize the candidate wrapper. Confirm the reverse mapping before using it:

```solidity
address originalToken = IFewWrappedToken(candidateFewToken).token();
require(
    IFewFactory(fewFactory).getWrappedToken(originalToken) == candidateFewToken,
    "unsupported FewToken"
);
```

After validating the wrapper, you can call standard ERC20 methods for display:

- `name()`
- `symbol()`
- `decimals()`

This is useful for:

- token metadata rendering
- compatibility with external protocols
- balance and reporting pipelines

Metadata is untrusted display data. Do not use `name()`, `symbol()`, `decimals()`, or `token()` alone to select an
approval spender, price source, or asset allowlist entry.
