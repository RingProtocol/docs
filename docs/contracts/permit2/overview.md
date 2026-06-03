---
id: overview
title: Overview
sidebar_position: 1
---

`Permit2` is a shared approval and signature-transfer contract used by Ring routing flows. It is composed of
[`SignatureTransfer`](./reference/signature-transfer.md) and [`AllowanceTransfer`](./reference/allowance-transfer.md).
The `SignatureTransfer` contract handles signature-based transfers, meaning that a direct allowance on the token is
bypassed and spender permissions last only for the duration of the transaction where the one-time signature is spent.
The `AllowanceTransfer` contract handles token allowances with specified amounts and durations.

## Resources

A great [explanation](https://github.com/dragonfly-xyz/useful-solidity-patterns/tree/main/patterns/permit2) of the Permit2 contract and example usage.

## Approving Permit2

Before integrating contracts can request users’ tokens through Permit2, users must approve the Permit2 contract through the specific token contract by calling something like:

```solidity
USDC.approve(permit2Address, totalAmount);
```

To get the maximal benefits from Permit2, users should do a max approval on the contract where: 
```solidity
totalAmount = type(uint256).max;
```

