---
id: trading-from-a-smart-contract
title: Implement a Swap
---

Contract integrations need an independent price limit, a fixed or allowlisted execution path, and a caller-approved
deadline. A Ring Swap reserve ratio is transaction state, not a manipulation-resistant price source.

Start with the [fixed-pair adapter](./quick-start). It validates the router, factory, FewFactory, wrappers, and pair in
the constructor and keeps those addresses out of user-controlled calldata.

## Router address semantics

The Ring Swap Router uses two address domains in one swap:

- The caller holds and approves the original input ERC-20.
- The router's `path` contains the FewToken addresses held by the Ring Swap pairs.
- The router wraps the original input and unwraps the final FewToken output internally.

For a DAI to ETH route, the safety checks and call shape are:

```solidity
require(fewFactory.getWrappedToken(address(DAI)) == fwDAI, "DAI wrapper mismatch");
require(fewFactory.getWrappedToken(router.WETH()) == router.fwWETH(), "WETH wrapper mismatch");
require(factory.getPair(fwDAI, router.fwWETH()) == allowedPair, "pair mismatch");
require(deadline > block.timestamp, "expired");
require(amountOutMin > 0, "missing price limit");

DAI.forceApprove(address(router), amountIn);

address[] memory path = new address[](2);
path[0] = fwDAI;
path[1] = router.fwWETH();

router.swapExactTokensForETH(amountIn, amountOutMin, path, recipient, deadline);
DAI.forceApprove(address(router), 0);
```

The snippet assumes `DAI` uses OpenZeppelin `SafeERC20`, and that `router`, `factory`, `fewFactory`, `fwDAI`, and
`allowedPair` were fixed or approved before the call. Do not copy it into a contract that accepts those values from an
untrusted caller.

## Price and transaction limits

For an exact-input swap, derive `amountOutMin` from a fresh offchain quote or an independent oracle with a documented
staleness bound. For an exact-output swap, set `amountInMax` the same way. The check must remain meaningful if an
attacker moves the Ring Swap pool before your transaction.

Also validate:

- chain ID, input and output tokens, raw token units, and native value
- recipient and any refund recipient
- each FewToken and pair in a multi-hop route
- deadline and quote age
- actual allowance spender
- simulation result at the latest block

Requote or revert when any of these values has changed. See [Security and Risk](/security-and-risk) for Permit2 and
Routing API checks.
