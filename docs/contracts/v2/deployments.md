---
title: Contract Deployments
sidebar_position: 2
description: Ring Swap (FewV2) contract addresses for Ethereum, BNB Smart Chain, HyperEVM, MegaETH, and Robinhood.
---

# Ring Swap Contract Deployments

This is the maintained address directory for Ring Swap, FewFactory, routers, wrappers, and related contracts. Some
partner integrations and older tooling call this deployment family `FewV2`. The product name in these docs is Ring
Swap (v2).

Addresses are chain-specific. Select the network before copying an address, check that it has bytecode, and validate
the contract's immutable factory, FewFactory, WETH, or wrapper references where applicable. This directory does not
replace onchain verification.
The deployment and pool reference pages cover Ethereum (`1`), BNB Smart Chain (`56`), HyperEVM (`999`), and MegaETH (`4326`). Pool
addresses and discovery notes are documented separately in [Pools by Network](./pools).

SDK repositories also contain historical, testnet, and not-yet-published network constants. Those constants do not
establish current support. Robinhood deployment records are listed below; a Robinhood pool index is not included.

For automated ingestion of the original four networks, download the [Ring Swap deployment manifest](/data/ring-swap-v2.json). It keeps Ring-owned
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

[ring-chain-4663-start]: #

### Robinhood Mainnet

Chain ID: **4663**. Native currency: **ETH**.

FewToken is enabled for this integration.

| Contract | Protocol | Address | Source |
| --- | --- | --- | --- |
| Core | Ring FewV2 | [`0x019bac14F283cAb4554eF768b36E8768Bd0C02CC`](https://robinhoodchain.blockscout.com/address/0x019bac14F283cAb4554eF768b36E8768Bd0C02CC) | [Source](https://robinhoodchain.blockscout.com/address/0x019bac14f283cab4554ef768b36e8768bd0c02cc) |
| Few Factory | Ring FewV2 | [`0x0b255357B5681BB59eD67502206a9ec5D03A4b11`](https://robinhoodchain.blockscout.com/address/0x0b255357B5681BB59eD67502206a9ec5D03A4b11) | [Source](https://robinhoodchain.blockscout.com/address/0x0b255357b5681bb59ed67502206a9ec5d03a4b11) |
| fwWETH | Ring FewV2 | [`0xDD4eaAccA3b077c01e8eF45207fc48Fd1B54C735`](https://robinhoodchain.blockscout.com/address/0xDD4eaAccA3b077c01e8eF45207fc48Fd1B54C735) | [Source](https://robinhoodchain.blockscout.com/address/0xDD4eaAccA3b077c01e8eF45207fc48Fd1B54C735) |
| FewETHWrapper | Ring FewV2 | [`0x0BCc27D609bFEAeB6f9Af7593041e35Ee7085b56`](https://robinhoodchain.blockscout.com/address/0x0BCc27D609bFEAeB6f9Af7593041e35Ee7085b56) | [Source](https://robinhoodchain.blockscout.com/address/0x0bcc27d609bfeaeb6f9af7593041e35ee7085b56) |
| Ring Swap Factory | Ring FewV2 | [`0x29e47F8E17341D3ab23839BC7d56d286b4a35a19`](https://robinhoodchain.blockscout.com/address/0x29e47F8E17341D3ab23839BC7d56d286b4a35a19) | [Source](https://robinhoodchain.blockscout.com/address/0x29e47f8e17341d3ab23839bc7d56d286b4a35a19) |
| V2-Compatible Router using Ring Factory | Ring FewV2 | [`0xfF48D78C60e5F8Cf5193e1c7AbDE84c5567D0564`](https://robinhoodchain.blockscout.com/address/0xfF48D78C60e5F8Cf5193e1c7AbDE84c5567D0564) | [Source](https://robinhoodchain.blockscout.com/address/0xff48d78c60e5f8cf5193e1c7abde84c5567d0564) |
| Ring Swap Router | Ring FewV2 | [`0x1C215f82d4943799b495662734837978f0F0f558`](https://robinhoodchain.blockscout.com/address/0x1C215f82d4943799b495662734837978f0F0f558) | [Source](https://robinhoodchain.blockscout.com/address/0x1c215f82d4943799b495662734837978f0f0f558) |
| Ring UniversalRouter | Shared infrastructure | [`0x269F10Ab1a7CE6c163B176D951eBd145A944A39D`](https://robinhoodchain.blockscout.com/address/0x269F10Ab1a7CE6c163B176D951eBd145A944A39D) | [Source](https://robinhoodchain.blockscout.com/address/0x269F10Ab1a7CE6c163B176D951eBd145A944A39D) |
| Ring MixedQuoterV2 | Shared infrastructure | [`0xc01f02abBBd53D72f0A00dc66D8AA9eF0183BF91`](https://robinhoodchain.blockscout.com/address/0xc01f02abBBd53D72f0A00dc66D8AA9eF0183BF91) | [Source](https://robinhoodchain.blockscout.com/address/0xc01f02abBBd53D72f0A00dc66D8AA9eF0183BF91) |
| Timelock | Ring FewV2 | [`0xd0A08130435A430bb530D2ECBb5d08af0b156134`](https://robinhoodchain.blockscout.com/address/0xd0A08130435A430bb530D2ECBb5d08af0b156134) | [Source](https://robinhoodchain.blockscout.com/address/0xd0a08130435a430bb530d2ecbb5d08af0b156134) |
| WETH | Shared infrastructure | [`0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73`](https://robinhoodchain.blockscout.com/address/0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73) | [Source](https://robinhoodchain.blockscout.com/address/0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73) |
| Permit2 | Shared infrastructure | [`0x000000000022D473030F116dDEE9F6B43aC78BA3`](https://robinhoodchain.blockscout.com/address/0x000000000022D473030F116dDEE9F6B43aC78BA3) | [Source](https://robinhoodchain.blockscout.com/address/0x000000000022D473030F116dDEE9F6B43aC78BA3) |
| Multicall3 | Shared infrastructure | [`0xcA11bde05977b3631167028862bE2a173976CA11`](https://robinhoodchain.blockscout.com/address/0xcA11bde05977b3631167028862bE2a173976CA11) | [Source](https://robinhoodchain.blockscout.com/address/0xcA11bde05977b3631167028862bE2a173976CA11) |
| UniswapV2Factory | Uniswap v2 | [`0x8bcEaA40B9AcdfAedF85AdF4FF01F5Ad6517937f`](https://robinhoodchain.blockscout.com/address/0x8bcEaA40B9AcdfAedF85AdF4FF01F5Ad6517937f) | [Source](https://github.com/Uniswap/contracts/blob/37936185dee7decf681360ec799c124e0e034672/deployments/json/4663.json) |
| UniswapV2Router02 | Uniswap v2 | [`0x89e5DB8B5aA49aA85AC63f691524311AEB649eba`](https://robinhoodchain.blockscout.com/address/0x89e5DB8B5aA49aA85AC63f691524311AEB649eba) | [Source](https://github.com/Uniswap/contracts/blob/37936185dee7decf681360ec799c124e0e034672/deployments/json/4663.json) |
| UniswapV3Factory | Uniswap v3 | [`0x1f7d7550B1b028f7571E69A784071F0205FD2EfA`](https://robinhoodchain.blockscout.com/address/0x1f7d7550B1b028f7571E69A784071F0205FD2EfA) | [Source](https://github.com/Uniswap/contracts/blob/37936185dee7decf681360ec799c124e0e034672/deployments/json/4663.json) |
| QuoterV2 | Uniswap v3 | [`0x33e885eD0Ec9bF04EcfB19341582aADCb4c8A9E7`](https://robinhoodchain.blockscout.com/address/0x33e885eD0Ec9bF04EcfB19341582aADCb4c8A9E7) | [Source](https://github.com/Uniswap/contracts/blob/37936185dee7decf681360ec799c124e0e034672/deployments/json/4663.json) |
| SwapRouter02 | Uniswap v3 | [`0xCaf681a66D020601342297493863E78C959E5cb2`](https://robinhoodchain.blockscout.com/address/0xCaf681a66D020601342297493863E78C959E5cb2) | [Source](https://github.com/Uniswap/contracts/blob/37936185dee7decf681360ec799c124e0e034672/deployments/json/4663.json) |
| NonfungiblePositionManager | Uniswap v3 | [`0x73991a25C818Bf1f1128dEAaB1492D45638DE0D3`](https://robinhoodchain.blockscout.com/address/0x73991a25C818Bf1f1128dEAaB1492D45638DE0D3) | [Source](https://github.com/Uniswap/contracts/blob/37936185dee7decf681360ec799c124e0e034672/deployments/json/4663.json) |
| TickLens | Uniswap v3 | [`0x7DfD4F31be6814D2906BDE155c3e1B146EAc1468`](https://robinhoodchain.blockscout.com/address/0x7DfD4F31be6814D2906BDE155c3e1B146EAc1468) | [Source](https://github.com/Uniswap/contracts/blob/37936185dee7decf681360ec799c124e0e034672/deployments/json/4663.json) |
| PoolManager | Uniswap v4 | [`0x8366a39CC670B4001A1121B8F6A443A643e40951`](https://robinhoodchain.blockscout.com/address/0x8366a39CC670B4001A1121B8F6A443A643e40951) | [Source](https://github.com/Uniswap/contracts/blob/37936185dee7decf681360ec799c124e0e034672/deployments/json/4663.json) |
| PositionManager | Uniswap v4 | [`0x58daec3116aae6D93017bAAea7749052E8a04fA7`](https://robinhoodchain.blockscout.com/address/0x58daec3116aae6D93017bAAea7749052E8a04fA7) | [Source](https://github.com/Uniswap/contracts/blob/37936185dee7decf681360ec799c124e0e034672/deployments/json/4663.json) |
| V4Quoter | Uniswap v4 | [`0x8Dc178eFB8111BB0973Dd9d722ebeFF267c98F94`](https://robinhoodchain.blockscout.com/address/0x8Dc178eFB8111BB0973Dd9d722ebeFF267c98F94) | [Source](https://github.com/Uniswap/contracts/blob/37936185dee7decf681360ec799c124e0e034672/deployments/json/4663.json) |
| StateView | Uniswap v4 | [`0xF3334192D15450CdD385c8B70e03f9A6bD9E673b`](https://robinhoodchain.blockscout.com/address/0xF3334192D15450CdD385c8B70e03f9A6bD9E673b) | [Source](https://github.com/Uniswap/contracts/blob/37936185dee7decf681360ec799c124e0e034672/deployments/json/4663.json) |
| UniswapInterfaceMulticall | Shared infrastructure | [`0x282A3C4D320Cc7f0d5eaf56B8029e4B88338f0a3`](https://robinhoodchain.blockscout.com/address/0x282A3C4D320Cc7f0d5eaf56B8029e4B88338f0a3) | [Source](https://github.com/Uniswap/contracts/blob/37936185dee7decf681360ec799c124e0e034672/deployments/json/4663.json) |

These are contract deployment records. They do not by themselves establish frontend availability, liquidity, or production acceptance.

[ring-chain-4663-end]: #

Ring UniversalRouter and Ring MixedQuoterV2 are Ring deployments supporting FewV2 and official Uniswap routes. The V2-Compatible Router above uses the **Ring Swap Factory**, not the official Uniswap v2 factory.

Robinhood uses Ring Swap Pair init-code hash `0xb7963b5cfdf9e42bd2e41aaa19203f3bf84b51b6b7b24b64f7ab2313101bd54c`. Do not use the older shared hash from the four-network manifest for Robinhood. The official Uniswap v2 Pair hash is `0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f`.

[Robinhood deployment and verification record](/data/robinhood-deployments.json) includes the verification block, runtime hashes, Router and Quoter deployment transactions, and checked factory/wrapped-token relationships. No pool inventory or reserve verification is claimed by this record.
