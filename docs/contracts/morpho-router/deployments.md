---
title: Deployment Addresses
sidebar_position: 3
---

# FewMorphoRouter Deployments

The current tracked deployment in the router repository is on Ethereum Sepolia.

## Sepolia

| Contract | Address |
| --- | --- |
| FewMorphoRouter | `0xd5ee07e77209df777728B922FbDc52222F32d481` |
| Owner | `0xA1e54Ef984302C863f4e359fbF04C100F02a1c30` |
| Guardian | `0xA1e54Ef984302C863f4e359fbF04C100F02a1c30` |
| Morpho | `0xd011EE229E7459ba1ddd22631eF7bF528d424A14` |
| AdaptiveCurveIRM | `0x8C5dDCD3F601c91D1BF51c8ec26066010ACAbA7c` |
| Oracle Factory | `0xa6c843fc53aAf6EF1d173C4710B26419667bF6CD` |
| MetaMorphoFactory | `0x98CbFE4053ad6778E0E3435943aC821f565D0b03` |
| WETH | `0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14` |
| DAI | `0x5fbad067f69eBbc276410D78fF52823be133eD48` |
| USDC | `0xA7a151d60Bbd522d3611C2dB3F1F972Ee9904B3e` |
| fwWETH | `0x98b902eF4f9fEB2F6982ceEB4E98761294854D61` |
| fwDAI | `0x09D8486e42Aa76229a563bFa0f07CA301aCd29C9` |
| fwUSDC | `0x76AC72683C5b7F22C6B5Ed85B5B1511702464F7e` |
| fwDAI Vault | `0x9D9d28A3ae26a40Ce8B904c89Cc3C515EF1C0475` |

## Market Configuration

| Parameter | Value |
| --- | --- |
| Chain ID | `11155111` |
| Market ID | `0xCCB30F9DB4B3ADD563F8FE45154FA809AB79C61D85BB39766759CA28A4CCF136` |
| Loan Token | `0x09D8486e42Aa76229a563bFa0f07CA301aCd29C9` (`fwDAI`) |
| Collateral Token | `0x98b902eF4f9fEB2F6982ceEB4E98761294854D61` (`fwWETH`) |
| Oracle | `0x3C8bed4E15e76Cf1a5725B81BBeC0481053DD13d` |
| IRM | `0x8C5dDCD3F601c91D1BF51c8ec26066010ACAbA7c` |
| LLTV | `945000000000000000` |

## Wrapper Notes

Current wrapper assumptions documented in the router repository:

- `fwWETH` and `fwDAI` are treated as 1:1 wrappers
- both wrappers use 18 decimals in the current Sepolia setup
- `token()` on the wrapper returns the underlying asset
- `fwUSDC` exists on Sepolia but is not part of the current router scope

## Current Whitelist Scope

The expected first-version whitelist is:

- wrappers: `fwWETH`, `fwDAI`
- vaults: `fwDAI Vault`
- markets: the `fwWETH` / `fwDAI` market above

## Deployment and Configuration Scripts

The router repository includes these scripts:

- `script/DeployRouter.s.sol`
- `script/ConfigureRouter.s.sol`
- `script/DeployAndConfigureRouter.s.sol`

If environment overrides are omitted, the scripts default to the Sepolia values above.
