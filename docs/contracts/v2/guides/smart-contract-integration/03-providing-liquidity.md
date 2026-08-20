---
id: providing-liquidity
title: Providing Liquidity
---

Adding liquidity transfers both assets into a pool and returns LP tokens. The pool reserve ratio can be manipulated,
and the first liquidity provider sets the initial ratio. Use an independent price policy before committing assets.

## Use a reviewed allowlist

Ring Swap factories are permissionless. A pair's existence does not show that Ring reviewed either token or that the
pair is suitable for deposits. A production integration should allow only reviewed entries containing:

- chain ID and original token addresses
- FewFactory and canonical FewToken addresses
- Ring Swap Factory and pair address
- allowed Ring Swap Router
- token behavior assumptions, including decimals, transfer fees, rebasing, callbacks, and approval behavior
- independent price source, freshness bound, and deposit limits

Confirm `FewFactory.getWrappedToken(underlying)` and `Ring Swap Factory.getPair(fewTokenA, fewTokenB)` onchain before a
deposit. If the pair does not exist, require a separate reviewed pool-creation flow. Do not let a normal deposit create
an arbitrary wrapper or pair from user-supplied tokens.

## Set price limits before submission

The `amountADesired` and `amountBDesired` values express the intended deposit ratio. Calculate them before the
transaction from a fresh independent price observation. Do not read the reserve ratio inside the same transaction and
treat it as a fair price.

Set `amountAMin` and `amountBMin` from the approved tolerance. These values protect each side of the deposit if the pool
state moves before confirmation. They do not protect against a bad external price assumption.

For a new pair, require a second review of the initial ratio, minimum locked liquidity, token ordering, and recipient.
An incorrect initial ratio can transfer value to the first arbitrageur.

## Approvals and recipient

For `addLiquidity` and `addLiquidityETH`, approve the selected Ring Swap Router for the original ERC-20 inputs. The
router resolves and wraps the FewTokens internally. Prefer exact allowances and clear temporary allowances after the
call when the token supports it.

The `to` parameter receives the LP tokens. Validate it separately from token refund and swap recipients. Never use the
Pair, Factory, Router, FewFactory, FewToken, Permit2, or a burn address as the LP recipient unless the reviewed design
explicitly requires it.

Pass a caller-approved future deadline and simulate the exact transaction at the latest block. After execution, verify
the actual token amounts deposited, LP tokens received, recipient, remaining allowances, and any refunded dust.

See [Security and Risk](/security-and-risk) for the shared address and approval checklist.
