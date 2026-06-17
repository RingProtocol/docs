---
id: fixed-yield
title: Fixed Yield
sidebar_position: 4
description: Deposit USDR into Ring Fixed Yield, earn fixed 6% APR by elapsed time, and withdraw principal anytime.
---

# Fixed Yield

Fixed Yield is a USDR deposit product. Users deposit `USDR`, rewards accrue at a fixed `6% APR` by elapsed time, and
principal can be withdrawn at any time.

![Fixed Yield flow](./images/fixed-yield-timeline.svg)

## What users can do

- Deposit `USDR` while the reward program is open.
- Make multiple deposits; the position accumulates and rewards update by timestamp.
- Claim accrued USDR rewards without withdrawing principal.
- Exit the position at any time to withdraw principal and claim accrued rewards.

The current frontend flow is USDR-only. Users who start with `USDT`, `USDC`, or `DAI` can first use
[USDR Mint](./usdr-mint) or available swap liquidity to get USDR.

## Reward program timing

Fixed Yield no longer uses a lock or shared maturity. The important timestamps are:

| Field | What it means |
| --- | --- |
| Program start | Deposits can begin. |
| Program end | Rewards stop accruing. Users can still withdraw principal. |

`programEnd` is not a lock. It only bounds the 6% APR reward budget so the vault does not create unlimited reward debt.

The interface shows whether deposits are open, remaining cap, active deposited amount, and when rewards stop accruing.

## Reward model

Rewards are fixed at `6% APR` and paid in `USDR`.

The reward is calculated by elapsed time:

```text
reward = principal * 6% * elapsed / 365 days
elapsed = min(current time, program end) - last position update
```

If a user deposits at 12:00 and exits one month later at 12:00, the reward is calculated on that exact elapsed month.
If a user deposits again later, the vault first records rewards earned so far, then the larger position starts accruing
from the new update timestamp.

## Deposit flow

1. The user gets USDR through [USDR Mint](./usdr-mint) or swap liquidity.
2. The user approves the Fixed Yield vault to spend USDR.
3. While the program is open, the user deposits USDR.
4. The vault wraps the deposited principal into `fwUSDR`.
5. The position accrues USDR rewards over time.
6. The user can claim rewards or exit at any time.
7. On exit, the vault unwraps principal back to USDR and transfers accrued USDR rewards.

## Reward funding

The vault must already hold enough USDR reward reserve to cover the worst case: the full active cap earning 6% APR until
`programEnd`. If reward reserves are not funded, deposits are blocked rather than accepting underfunded positions.

This is why the interface may show a disabled or failed deposit state even if the user has enough USDR.

## Why a deposit can fail

| Reason | What it means |
| --- | --- |
| Not open yet | The current time is before the program start. |
| Program ended | The current time is after the program end, so new deposits no longer accrue rewards. |
| Cap reached | Active USDR principal has reached the deposit cap. |
| Reward reserve not funded | The vault does not have enough USDR reserve for the worst-case reward liability. |
| Deposit paused | The guardian has paused new deposits. Existing withdrawals are not paused. |
| Approval rejected | The wallet approval transaction was rejected or timed out. |

## Security model

The Fixed Yield vault is designed as a narrow no-lock fixed APR vault:

- no owner
- no upgradeability
- no lending
- no AMO
- no LP operations
- no admin sweep
- no withdrawal pause

The immutable guardian can pause or unpause new deposits, and can reschedule an empty program before any deposit enters.
The guardian cannot withdraw principal, redirect withdrawals, change APR, change caps, add tokens, or pause exits.

Once any USDR has been deposited, the schedule for that program is locked.

## Relationship to USDR Mint

USDR Mint and Fixed Yield are separate flows:

- `USDR Mint`: deposit `USDT`, `USDC`, or `DAI` and receive `USDR`.
- `Fixed Yield`: deposit `USDR`, earn fixed USDR rewards by elapsed time, and withdraw principal anytime.

This keeps minting, liquidity exits, and fixed-yield deposits separate so each contract has a smaller responsibility.
