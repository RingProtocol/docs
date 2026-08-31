---
title: Contract Deployments
sidebar_position: 2
description: Ring Swap (FewV2) contract addresses for Ethereum, BNB Smart Chain, HyperEVM, and MegaETH.
---

# Ring Swap Contract Deployments

This is the maintained address directory for Ring Swap, FewFactory, routers, wrappers, and related contracts. Some
partner integrations and older tooling call this deployment family `FewV2`. The product name in these docs is Ring
Swap (v2).

Addresses are chain-specific. Select the network before copying an address, check that it has bytecode, and validate
the contract's immutable factory, FewFactory, WETH, or wrapper references where applicable. This directory does not
replace onchain verification.
Both reference pages cover Ethereum (`1`), BNB Smart Chain (`56`), HyperEVM (`999`), and MegaETH (`4326`). Pool
addresses and discovery notes are documented separately in [Pools by Network](./pools).

SDK repositories also contain historical, testnet, and not-yet-published network constants. Those constants do not
establish current support. This directory and its manifest cover only the four maintained mainnet sets named above.

For automated ingestion, download the [Ring Swap deployment manifest](/data/ring-swap-v2.json). It keeps Ring-owned
contracts separate from external dependencies and includes the documented FewToken and Pair mappings by chain.
The accompanying [onchain verification record](/data/ring-swap-v2-status.json) records the fixed-block code,
factory/router dependency, FewToken mapping, runtime-code-hash, Pair identity, and documented-reserve checks for the
four maintained mainnet sets.

`UniversalRouter` rows are published Ring routing endpoints. Do not infer that every Interface, API, or route uses that
address. Select the execution flow first and allow only the router approved for that flow.

Ring-published hook addresses used with external Uniswap v4 infrastructure are documented separately under
[FewToken Liquidity and Aggregator Integration](/contracts/v4/guides/fewtoken-liquidity-aggregation).

:::warning Addresses are not deposit destinations
Do not transfer assets directly to a Factory, Pair, Router, FewFactory, FewToken, wrapper, hook, or Permit2 contract.
Call the documented function through a reviewed integration. A listed address does not by itself establish an approval
spender, token endorsement, audit result, current liquidity level, or redemption guarantee.
:::

Before a transaction, use the [Security and Risk](/security-and-risk) checklist. Verify the chain ID, code, recipient,
raw amount, token path, spender, deadline, price limit, and simulation result.

## Mainnet Deployments

### Ethereum Mainnet {#eth-mainnet}

- **Chain ID:** `1`
- **Explorer:** [Etherscan](https://etherscan.io/)
- **Pools:** [Browse live pools in the Ring Pool Explorer](https://app.ring.exchange/explorer#/explore/pools)

| Contract | Ethereum Mainnet Address |
| --- | --- |
| Wrapped native token (dependency): WETH | `0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2` |
| Core | `0xB2799ed78490EA642d2ECb23cB2cE9b8ACC087D4` |
| Ring Swap Factory | `0xeb2A625B704d73e82946D8d026E1F588Eed06416` |
| Few Factory | `0x7D86394139bf1122E82FDF45Bb4e3b038A4464DD` |
| fwWETH | `0xa250CC729Bb3323e7933022a67B52200fE354767` |
| Ring Swap Router | `0x39d1d8fcC5E6EEAf567Bce4e29B94fec956D3519` |
| UniversalRouter | `0x24e743CcE93235641f2be8Ce7ffC6330903ab96f` |
| Permit2 | `0x000000000022D473030F116dDEE9F6B43aC78BA3` |
| FewETHWrapper | `0xAda6059b4F6244Acd8934095Ed0162C5Df6B5ebB` |

| Value | Ethereum Mainnet |
| --- | --- |
| Ring Swap Pair Init Code | `0xa7ae6a5ec37f0c21bbdac560794258c4089b8ae3ffa6e3909b53c6091764a676` |
| Few Wrapped Token Init Code | `0x2bdba5734ddf754fb149ef1faa937956c52cfd1f24d68163a95f42d08ec06d38` |

### BNB Smart Chain {#bsc-mainnet}

- **Chain ID:** `56`
- **Explorer:** [BscScan](https://bscscan.com/)
- **Pools:** [BSC reference pool and token mappings](./pools#bnb-smart-chain)

| Contract | BNB Smart Chain Address |
| --- | --- |
| Wrapped native token (dependency): WBNB | `0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c` |
| Core | `0x4Fe312cD4FE3B6F060902d9f742b9B7dfBE2AA50` |
| Ring Swap Factory | `0x4De602A30Ad7fEf8223dcf67A9fB704324C4dd9B` |
| Few Factory | `0xEeE400Eabfba8F60f4e6B351D8577394BeB972CD` |
| fwWBNB | `0x7f0172b75d3823D8aF04feE3A3f6a14aBD68EFE1` |
| Ring Swap Router | `0x20504f37A95eF80e3FC7476c4801fb39AaE6bAd0` |
| UniversalRouter | `0x1Fb6ef969D925f0B81245cE28F2cAD95b638CfCC` |
| Permit2 | `0x000000000022D473030F116dDEE9F6B43aC78BA3` |
| FewETHWrapper | `0xf9d7ff2f6A0c3631A807199276a493Af8097916F` |

| Value | BNB Smart Chain |
| --- | --- |
| Ring Swap Pair Init Code | `0xa7ae6a5ec37f0c21bbdac560794258c4089b8ae3ffa6e3909b53c6091764a676` |
| Few Wrapped Token Init Code | `0x2bdba5734ddf754fb149ef1faa937956c52cfd1f24d68163a95f42d08ec06d38` |

### HyperEVM {#hyper-mainnet}

- **Chain ID:** `999`
- **Explorer:** [HyperEVMScan](https://hyperevmscan.io/)
- **Pools:** [HyperEVM factory pools and token mappings](./pools#hyperevm)

| Contract | HyperEVM Address |
| --- | --- |
| Wrapped native token (dependency): WHYPE | `0x5555555555555555555555555555555555555555` |
| Core | `0x1cda28aD2915356EB618518b1bDD3f462aeF3803` |
| Ring Swap Factory | `0x4AfC2e4cA0844ad153B090dc32e207c1DD74a8E4` |
| Few Factory | `0x6B65ed7315274eB9EF06A48132EB04D808700b86` |
| fwWHYPE | `0x9e1148bC3665a9f7C35F313d89c0432c34928AEf` |
| Ring Swap Router | `0x701D1d675415efA2d2429fB122ccC6dD4FCcA959` |
| UniversalRouter | `0xE65081EFa5ad4A196B1Df768716c337e6AB140E9` |
| Permit2 | `0x000000000022D473030F116dDEE9F6B43aC78BA3` |
| FewETHWrapper | `0x068B60ECbC934b0a0dde20FdFf0dE925b97B971F` |

| Value | HyperEVM |
| --- | --- |
| Ring Swap Pair Init Code | `0xa7ae6a5ec37f0c21bbdac560794258c4089b8ae3ffa6e3909b53c6091764a676` |
| Few Wrapped Token Init Code | `0x2bdba5734ddf754fb149ef1faa937956c52cfd1f24d68163a95f42d08ec06d38` |

### MegaETH Mainnet

- **Chain ID:** `4326`
- **Pools:** [MegaETH pool discovery notes](./pools#megaeth-mainnet)

| Contract | MegaETH Mainnet Address |
| --- | --- |
| WETH | `0x4200000000000000000000000000000000000006` |
| Core | `0x732819C68c72D09465B8FaDF8156A79d21E87DCA` |
| Few Factory | `0x6AE74eC9D067C734060FC5edB66fC6D48682970E` |
| fwWETH | `0x65c46c31E340D6C546309733CF50Ef4d150094C4` |
| FewETHWrapper | `0xb0Bd0CD58551b71079F36B198276832242D02C0F` |
| Ring Swap Factory | `0x47C436602d2598d0ef4b50888F29a528B6Bccc95` |
| V2-Compatible Router | `0xE73442C4b87283D75768F3668B411fc2348B429b` |
| Ring Swap Router | `0x88a9A29FA981721C04fdC367ab7e3C83A4C65db9` |
| UniversalRouter | `0x9256667638ED96ba4eCb30bD23efD2A182e1bC98` |
| Timelock | `0xb0BEa0daA0E57c43d92711f9dF2d0D54CebEEA72` |
| Permit2 | `0x000000000022D473030F116dDEE9F6B43aC78BA3` |
| Multicall3 | `0xcA11bde05977b3631167028862bE2a173976CA11` |

| Value | MegaETH Mainnet |
| --- | --- |
| Ring Swap Pair Init Code | `0xa7ae6a5ec37f0c21bbdac560794258c4089b8ae3ffa6e3909b53c6091764a676` |
| Few Wrapped Token Init Code | `0x2bdba5734ddf754fb149ef1faa937956c52cfd1f24d68163a95f42d08ec06d38` |
