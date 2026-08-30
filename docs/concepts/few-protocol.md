---
id: few-protocol
title: Few Protocol and FewToken
sidebar_position: 3
---

# Few Protocol and FewToken

Few Protocol is Ring's asset-wrapping layer. It maps an original ERC-20 to a corresponding `FewToken` that
can be used by Ring Swap and supported integrations.

## Published identity

Each supported network has a published `FewFactory`. Treat a FewToken as supported only when that factory maps the
original token to the wrapper and the deployed wrapper maps back to the same original token:

```solidity
address fewToken = IFewFactory(fewFactory).getWrappedToken(originalToken);
require(fewToken != address(0), "FewToken not found");
require(IFewWrappedToken(fewToken).token() == originalToken, "underlying mismatch");
```

If a wrapper address comes from a token list, pool, quote, or third party, resolve its original token and
confirm that the published factory maps back to the same wrapper. Before using funds, verify the chain ID, factory
bytecode, `core()` reference, and wrapper bytecode onchain rather than trusting a copied address alone.

`FewFactory.createToken()` is permissionless. The factory mapping establishes identity for that deployment, but token
creation does not mean that Ring reviewed the original token, its issuer, or any pool that uses the wrapper.

## Chain-specific addresses

FewToken mappings do not transfer across networks. The same original asset can have a different FewToken
address on Ethereum, BNB Smart Chain, HyperEVM, or MegaETH.

Use the [deployment page](/contracts/v2/deployments) to select the correct `FewFactory`, then resolve the
wrapper on that network.

## Wrap, unwrap, and raw units

The standard wrapper functions move the original token into the FewToken contract and mint the same **raw integer
amount**. Unwrap burns the caller's FewToken and transfers the same raw amount of the original token from the wrapper.

The deployed FewToken implementation reads the original token's decimals in its constructor. The 22 documented
FewTokens checked on `2026-08-28` had the same decimal count as their original tokens. Do not assume every FewToken has
18 decimals. Read `decimals()` from both contracts and build amounts from raw units.

The standard implementation does not measure how many original tokens a fee-on-transfer token actually delivered
before minting. Rebasing, fee-on-transfer, callback, blacklist, and other nonstandard tokens require a separate review.

Calling `burn()` destroys FewToken but does not release the original asset. Use `unwrap()` or `unwrapTo()` when the
intended result is redemption.

## Privileged roles and pause behavior

The reviewed FewToken source also exposes role-controlled supply functions:

- An address recognized by the current Core as a minter can call `mint(account, amount)` without depositing the
  original token into that wrapper.
- An address recognized as a burner can call `burnFrom(account, amount)` without an ERC-20 allowance from that account.
- The FewFactory governor can change the Core reference. A governor or guardian can pause and unpause the factory.
- In the reviewed source, the pause check gates privileged `mint` and `burnFrom`. It does not gate transfers, the
  caller's own `burn`, `wrap`, or `unwrap`.

These are source-level properties, not a statement about who currently holds each role. Before relying on a deployed
FewToken, read the factory's current `core()` and `paused()` values, check the Core's governor, guardian, minter, and
burner predicates, and review role and supply events for the selected chain.

## Backing checks

Underlying held by the wrapper can come from normal wrap calls, while privileged minting can increase supply without a
matching transfer into that wrapper. `totalSupply()` alone is therefore not proof that every FewToken can be redeemed.

For a value-bearing integration, check the wrapper's current underlying balance, FewToken supply, privileged issuance
and burn history, pause state, role holders, and actual unwrap behavior. Apply token-decimal and nonstandard-transfer
rules before comparing balances. If your system requires full redemption at all times, enforce that condition as an
integration risk limit rather than assuming it from the token name.

## Where FewToken is used

- Ring Swap pools store and trade FewToken assets.
- Ring Swap routes use FewToken addresses.
- Manual wrapping flows interact with the FewToken verified through FewFactory.
- Supported external environments can use FewToken through their own pool and hook contracts.

For code examples and approval rules, continue to the
[FewToken integration guide](/contracts/v2/fewtoken/integrating).
