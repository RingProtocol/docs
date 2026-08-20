---
id: security-and-risk
title: Security and Risk
sidebar_position: 98
description: Checks to complete before using Ring addresses, contracts, SDKs, APIs, or AI-generated code.
---

# Security and Risk

Ring contracts and pools run on public networks. Transactions are irreversible, pool state can change before a
transaction confirms, and permissionless factories can contain assets or pairs that Ring has not reviewed.

## Verify before signing

Check all of the following in your own application or contract:

1. The wallet and RPC are connected to the intended chain ID.
2. Every contract has bytecode on that chain and its immutable factory, wrapper, and router references match the
   [deployment page](/contracts/v2/deployments).
3. `FewFactory.getWrappedToken(underlying)` returns each FewToken used in the path.
4. `Ring Swap Factory.getPair(tokenA, tokenB)` returns each pair used by the route.
5. The sender, recipient, input token, output token, raw amount, native value, minimum output or maximum input,
   deadline, and calldata selector match the user's intent.
6. A fresh independent price check supports the configured limit. A pool reserve ratio is not an independent oracle.
7. A simulation at the latest block succeeds without unexpected transfers, approvals, callbacks, or recipients.

Do not send assets directly to a Factory, Pair, Router, FewToken, wrapper, hook, or Permit2 contract unless the
documented function explicitly requires that transfer. A contract address is not a deposit address.

## Approval spenders

The correct spender depends on the flow:

| Flow | Token being approved | Spender |
| --- | --- | --- |
| Ring Swap Router swap or add liquidity | Original ERC-20 input | The Ring Swap Router selected for that chain |
| Manual FewToken wrap | Original ERC-20 input | The FewToken returned by that chain's `FewFactory` |
| Universal Router with Permit2 | Original ERC-20 input | Permit2 for the ERC-20 allowance, then the selected Universal Router in the bounded Permit2 authorization |
| Remove Ring Swap liquidity | Pair LP token | The selected Ring Swap Router, or the same router in the LP permit |

For a standard ERC-20 approval, prefer an exact amount and clear it after the operation when the token supports that
flow. For Permit2, also use a short expiration and signature deadline. Before signing Permit2 data, verify the EIP-712
chain ID, verifying contract, permit type, spender, token, amount, nonce, expiration, and signature deadline. An
allowance permit does not by itself authorize a recipient or a specific swap. Verify those fields in the final
calldata, and do not sign typed data solely because a quote or website supplied it.

## Pool and token listings

Ring Swap factories are permissionless. Anyone may create a wrapper or pair when the contracts allow it, and token
metadata can be copied. A pool's existence, an explorer page, a token symbol, or its appearance in a third-party list
does not show that Ring reviewed the token or endorses the pool.

Use an application-level allowlist for assets and pairs that can receive user funds. For each entry, store the chain ID,
underlying token, FewToken, pair, factory, allowed router, and the block at which the relationship was verified. Recheck
the relationship before a transaction when the source may have changed.

## Integration surfaces

- SDKs calculate values and calldata but do not verify every external address or current pool condition for you.
- The Routing API returns a quote from its configured sources. The caller must validate and simulate the response.
- AI context files can be stale or incomplete. Never execute generated code or transactions without review.
- Wallets, RPC providers, explorers, bridges, indexers, aggregators, and other linked services have their own security
  and availability risks.

## FewToken controls and backing

FewToken behavior includes permissionless wrap and unwrap functions as well as privileged roles. Read
[Few Protocol and FewToken](/concepts/few-protocol) before treating a FewToken as a claim on an underlying asset.
Role holders, pause state, balances, and issuance history must be checked onchain for the selected network.

## Report a problem

For an incorrect public address, link, or documentation page, open a
[Ring docs issue](https://github.com/RingProtocol/docs/issues/new) with the affected page, chain ID, contract address,
and transaction hash when relevant.

For a potential security vulnerability, use the Ring Interface's current
[Contact Us channel](https://discord.com/invite/TefBNDZBQP) only to request a private reporting route. Do not post
exploit details in a public channel. This site does not currently publish a dedicated private vulnerability-reporting
address. Never send a private key, seed phrase, API key, signed transaction, or other secret.
