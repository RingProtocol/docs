---
id: glossary
title: Glossary
sidebar_position: 6
---

## Automated Market Maker

An automated market maker is a smart contract on Ethereum that holds liquidity reserves. Users can trade against these reserves at prices determined by a fixed formula. Anyone may contribute liquidity to these smart contracts, earning pro-rata trading fees in return.

## Asset

While a digital asset can take many forms, Ring primarily works with ERC-20 assets. In Ring's current architecture, original ERC-20 assets may also be wrapped into `FewToken` before being used in trading or integrations.

## Concentrated Liquidity

Liquidity that is allocated within a determined price range.

## Constant Product Formula

The automated market making formula commonly used by AMMs. In Ring Swap (v2), this follows the familiar x\*y=k model.

## Core

Smart contracts that are considered foundational and essential for Ring to exist.

## ERC20

ERC20 tokens are fungible tokens on Ethereum. Ring supports all standard ERC20 implementations.

## Factory

A smart contract that deploys a unique trading contract for a token pair.

## Flash Swap

A trade that uses the tokens purchased before paying for them.

## Invariant

The “k” value in the constant product formula X\*Y=K

## Liquidity Provider / "LP"

A liquidity provider is someone who deposits ERC20 tokens into a given liquidity pool. Liquidity providers take on price risk and are compensated with trading fees.

## Liquidity

Digital assets that are stored in a Ring pool contract, and are able to be traded against by traders.

## Mid Price

The price between the available buy and sell prices. In Ring Swap (v2), this is the ratio of the two token reserves in the pool.

## Observation

An instance of historical price and liquidity data of a given pair.

## Pair

A smart contract deployed from the Ring Swap (v2) factory that enables trading between two ERC-20 assets.

## Periphery

External smart contracts that are useful, but not required for Ring to exist. New periphery contracts can always be deployed without migrating liquidity.

## Pool

A contract-based liquidity venue that pairs two assets for trading. In the current Ring docs, the term "pool" is most often used when referring to Uniswap v4 or other non-v2 liquidity environments.

## Position

An instance of liquidity defined by upper and lower tick. And the amount of liquidity contained therein.

## Price Impact

The difference between the mid-price and the execution price **caused by your trade size relative to the pool’s liquidity**. This is an expected result of the constant product formula in AMMs.

## Protocol Fees

Fees that are rewarded to the protocol itself, rather than to liquidity providers.

## Range

Any interval between two ticks of any distance.

## Range Order

An approximation of a limit order, in which a single asset is provided as liquidity across a specified range, and is continuously swapped to the destination address as the spot price crosses the range.

## Reserves

The liquidity available within a pair or pool.

## Slippage

The total difference between the expected price at the time of submitting a transaction and the actual execution price, which may include price impact and other market movements that occur before the transaction is mined.

## Spot Price

The current price of a token relative to another within a given pair.

## Swap Fees

The fees collected upon swapping which are rewarded to liquidity providers.

## Tick Interval

The price space between two nearest ticks.

## Tick

The boundaries between discrete areas in price space.
