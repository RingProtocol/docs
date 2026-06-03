---
id: flash-swaps
title: Flash Swaps
---

Ring flash swaps allow you to withdraw up to the full reserves of any ERC20 token on Ring and execute arbitrary logic at no upfront cost, provided that by the end of the transaction you either:

- pay for the withdrawn ERC20 tokens with the corresponding pair tokens
- return the withdrawn ERC20 tokens along with a small fee

Flash swaps are useful because they remove upfront capital requirements and unnecessary order-of-operations constraints
for multi-step transactions involving Ring Swap liquidity.

## Examples

### Capital Free Arbitrage

One interesting use case for flash swaps is capital-free arbitrage. Constant-product AMMs create incentives for
arbitrageurs to trade pool prices toward broader market prices. This strategy is normally accessible only to traders with
sufficient capital to take advantage of arbitrage opportunities. Flash swaps remove this upfront capital requirement.

Imagine a scenario where the cost of buying 1 ETH on Ring is 200 DAI (which is calculated by calling `getAmountIn` with
1 ETH specified as an exact output), and on an external venue, 1 ETH buys 220 DAI. To anyone with 200 DAI available, this
situation represents a profit of 20 DAI before gas and execution risk. With flash swaps, the temporary capital can come
from the Ring pair itself.

### Withdrawing ETH from Ring Swap

The first step is to _optimistically_ withdraw 1 ETH from Ring via a flash swap. This will serve as the capital that we use to execute our arbitrage. Note that in this scenario, we're assuming that:

- 1 ETH is the pre-calculated profit-maximizing trade
- The price has not changed on Ring or the external venue since our calculation

It may be useful to calculate the profit-maximizing trade on-chain at the moment of execution, which is more robust to
price movements. This can be complex, depending on the strategy being executed. One common approach is trading against a
fixed external price, such as the average execution price from one or more external venues.

### Trade at External Venue

Once temporary capital of 1 ETH has been withdrawn from Ring Swap, it can be traded for 220 DAI on the external venue.
After receiving the DAI, the contract must repay the Ring pair. In this example, the amount required to cover 1 ETH is
200 DAI, calculated via `getAmountIn`, leaving 20 DAI before gas and execution risk.

## Instant Leverage

Flash swaps can be used to improve the efficiency of leverage flows that combine Ring Swap liquidity with lending protocols.

Consider Maker in its simplest form: a system which accepts ETH as collateral and allows DAI to be minted against it while ensuring that the value of the ETH never drops below 150% of the value of the DAI.

Say we use this system to deposit a principal amount of 3 ETH, and mint the maximum amount of DAI. At a price of 1 ETH / 200 DAI, we receive 400 DAI. In theory, we could lever this position up by selling the DAI for more ETH, depositing this ETH, minting the maximum amount of DAI (which would be less this time), and repeating until we've reached our desired leverage level.

It's quite simple to use Ring as a liquidity source for the DAI-to-ETH component of this process. However, looping through protocols in this way isn't particularly elegant, and can be gas-intensive.

Luckily, flash swaps enable us to withdraw the _full_ ETH amount upfront. If we wanted 2x leverage against our 3 ETH principal, we could simply request 3 ETH in a flash swap and deposit 6 ETH into Maker. This gives us the ability to mint 800 DAI. If we mint as much as we need to cover our flash swap (say 605), the remainder serves as a safety margin against price movements.

## Developer resources

- To see how to integrate a flash swap in your smart contract read [Using Flash Swaps](../../guides/smart-contract-integration/using-flash-swaps).
