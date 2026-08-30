---
title: Pools by Network
sidebar_position: 3
description: Ring Swap (FewV2) pool discovery references for Ethereum, BNB Smart Chain, HyperEVM, and MegaETH.
keywords:
  - FewV2
  - BSC
  - BNB Smart Chain
  - HyperEVM
  - Ring Swap pool address
---

# Ring Swap Pools by Network

This page lists pool discovery references by network. It does not repeat the full deployment tables; Factory addresses
appear only where they help integrators discover pools. Routers, wrappers, Permit2, and the complete contract directory
are maintained in [Contract Deployments](./deployments). Both pages cover Ethereum (`1`), BNB Smart Chain (`56`),
HyperEVM (`999`), and MegaETH (`4326`) in the same order.

| Network | Chain ID | Pool reference |
| --- | ---: | --- |
| Ethereum | `1` | Live Ring Pool Explorer |
| BNB Smart Chain | `56` | Curated reference pool and factory snapshot |
| HyperEVM | `999` | Complete factory snapshot at the listed block |
| MegaETH | `4326` | Complete factory snapshot at the listed block |

Pair addresses are chain-specific. Select the network first, then use that network's Ring Swap Factory and FewToken
mappings.

For automated ingestion, use the [Ring Swap deployment manifest](/data/ring-swap-v2.json). The manifest records the
same contract, FewToken, and Pair relationships without requiring table scraping.

Some partner APIs call Ring Swap liquidity `FewV2`. This is the network-specific pool reference for that
integration name.

This page publishes stable integration references, not live liquidity metrics. Reserves and TVL change every
block and are intentionally omitted.

Ring Swap factories are permissionless. Anyone can create a pair when the contracts allow it. A pair in a factory, this
table, a token list, or an explorer is not proof that Ring reviewed or endorses the assets. Use an application-level
allowlist and verify every FewToken through FewFactory and every pair through the Ring Swap Factory.

:::warning Do not transfer assets to a pair address
Pair addresses hold pool reserves and LP accounting. They are not user deposit addresses. Use a reviewed Router or
contract integration with a minimum output or maximum input, future deadline, verified recipient, and fresh simulation.
:::

## Ethereum Mainnet

- **Chain ID:** `1`
- **Contracts:** [Ethereum deployments](./deployments#eth-mainnet)
- **Pools:** [Browse Ethereum pools in the Ring Pool Explorer](https://app.ring.exchange/explorer#/explore/pools)

Ethereum pools are discovered through the live explorer instead of a static table. At block `25,852,592`, the Ring
Swap Factory returned `467` pairs and FewFactory returned `83` FewTokens. These counts are discovery checkpoints, not
an endorsed-token list.

## BNB Smart Chain

- **Chain ID:** `56`
- **Network aliases:** `BNB Smart Chain`, `BSC`
- **Ring Swap Factory:** [`0x4De602A30Ad7fEf8223dcf67A9fB704324C4dd9B`](https://bscscan.com/address/0x4De602A30Ad7fEf8223dcf67A9fB704324C4dd9B)
- **Contracts:** [BNB Smart Chain deployments](./deployments#bsc-mainnet)

### Curated reference pool

| Pool | Pair address |
| --- | --- |
| `fwWBNB / fwETH` | [`0xFF1513E452a6033e2d9601a4559bF273f83D5470`](https://bscscan.com/address/0xFF1513E452a6033e2d9601a4559bF273f83D5470) |

### Token mapping

| FewToken | Decimals | Original token |
| --- | ---: | --- |
| `fwWBNB`: [`0x7f0172b75d3823D8aF04feE3A3f6a14aBD68EFE1`](https://bscscan.com/address/0x7f0172b75d3823D8aF04feE3A3f6a14aBD68EFE1) | `18` | `WBNB`: [`0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c`](https://bscscan.com/address/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c) |
| `fwETH`: [`0x86fa03945646a99A03543e7e0036361Ffadc73E6`](https://bscscan.com/address/0x86fa03945646a99A03543e7e0036361Ffadc73E6) | `18` | `ETH`: [`0x2170Ed0880ac9A755fd29B2688956BD959F933F8`](https://bscscan.com/address/0x2170Ed0880ac9A755fd29B2688956BD959F933F8) |

The BSC factory returned `52` pairs and FewFactory returned `54` FewTokens at block `118,545,001`. The table above is deliberately curated. It is not a complete
factory index, a recommendation, or a guarantee of current liquidity. Integrators that enumerate the permissionless
factory must still apply their own token and pair allowlist and validate both FewToken addresses through FewFactory.

## HyperEVM

- **Chain ID:** `999`
- **Ring Swap Factory:** [`0x4AfC2e4cA0844ad153B090dc32e207c1DD74a8E4`](https://hyperevmscan.io/address/0x4AfC2e4cA0844ad153B090dc32e207c1DD74a8E4)
- **Contracts:** [HyperEVM deployments](./deployments#hyper-mainnet)

### Factory pools at the snapshot block

| Pool | Pair address |
| --- | --- |
| `fwUSD₮0 / fwWHYPE` | [`0xf3760B19f1Baa2bFcf6Bd6e5d174e129c80aeD17`](https://hyperevmscan.io/address/0xf3760B19f1Baa2bFcf6Bd6e5d174e129c80aeD17) |
| `fwUETH / fwWHYPE` | [`0x0185E8e8B7FDf22638ecB2D781b3EA7E8AA2452a`](https://hyperevmscan.io/address/0x0185E8e8B7FDf22638ecB2D781b3EA7E8AA2452a) |
| `fwUSDH / fwUSDC` | [`0xabEd9A9aDe03a80ED98f903Eb9db62DE55C9DDF3`](https://hyperevmscan.io/address/0xabEd9A9aDe03a80ED98f903Eb9db62DE55C9DDF3) |
| `fwUSDH / fwUSD₮0` | [`0xf37f1e83BEb55F1b88AF9A8Df1a746e79C222150`](https://hyperevmscan.io/address/0xf37f1e83BEb55F1b88AF9A8Df1a746e79C222150) |
| `fwUSD₮0 / fwUSDC` | [`0x8868a630dD13A954D3f8B186508EF6c733BE959F`](https://hyperevmscan.io/address/0x8868a630dD13A954D3f8B186508EF6c733BE959F) |

### Token mapping

| FewToken | Decimals | Original token |
| --- | ---: | --- |
| `fwWHYPE`: [`0x9e1148bC3665a9f7C35F313d89c0432c34928AEf`](https://hyperevmscan.io/address/0x9e1148bC3665a9f7C35F313d89c0432c34928AEf) | `18` | `WHYPE`: [`0x5555555555555555555555555555555555555555`](https://hyperevmscan.io/address/0x5555555555555555555555555555555555555555) |
| `fwUSD₮0`: [`0x7576dd9a2775bFd789616d9eA7A2af21d06782D0`](https://hyperevmscan.io/address/0x7576dd9a2775bFd789616d9eA7A2af21d06782D0) | `6` | `USD₮0`: [`0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb`](https://hyperevmscan.io/address/0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb) |
| `fwUETH`: [`0x0C47cbbEDE5d8c6f9614cF770C26c3315205C397`](https://hyperevmscan.io/address/0x0C47cbbEDE5d8c6f9614cF770C26c3315205C397) | `18` | `UETH`: [`0xBe6727B535545C67d5cAa73dEa54865B92CF7907`](https://hyperevmscan.io/address/0xBe6727B535545C67d5cAa73dEa54865B92CF7907) |
| `fwUSDC`: [`0xd2646b9B02859416D8cBc759F85f0676f6E19974`](https://hyperevmscan.io/address/0xd2646b9B02859416D8cBc759F85f0676f6E19974) | `6` | `USDC`: [`0xb88339CB7199b77E23DB6E890353E22632Ba630f`](https://hyperevmscan.io/address/0xb88339CB7199b77E23DB6E890353E22632Ba630f) |
| `fwUSDH`: [`0x09D21E89EF332347eb3E1E496f1265a600e364C1`](https://hyperevmscan.io/address/0x09D21E89EF332347eb3E1E496f1265a600e364C1) | `6` | `USDH`: [`0x111111a1a0667d36bD57c0A9f569b98057111111`](https://hyperevmscan.io/address/0x111111a1a0667d36bD57c0A9f569b98057111111) |

At block `44,377,743`, the HyperEVM factory returned five pairs and FewFactory returned five FewTokens. All five pair addresses, pair tokens, and
FewToken-to-original-token mappings above were read onchain. This records factory state, not token review, price quality,
liquidity, or suitability for user funds.

## MegaETH Mainnet

- **Chain ID:** `4326`
- **Ring Swap Factory:** [`0x47C436602d2598d0ef4b50888F29a528B6Bccc95`](https://megaeth.blockscout.com/address/0x47C436602d2598d0ef4b50888F29a528B6Bccc95)
- **Contracts:** [MegaETH deployments](./deployments#megaeth-mainnet)

### Factory pools at the snapshot block

| Pool | Pair address |
| --- | --- |
| `fwWETH / fwUSDm` | [`0xB33FE892Dd65dD0739F3de89e69C8E98d4733556`](https://megaeth.blockscout.com/address/0xB33FE892Dd65dD0739F3de89e69C8E98d4733556) |

### Token mapping

| FewToken | Decimals | Original token |
| --- | ---: | --- |
| `fwWETH`: [`0x65c46c31E340D6C546309733CF50Ef4d150094C4`](https://megaeth.blockscout.com/address/0x65c46c31E340D6C546309733CF50Ef4d150094C4) | `18` | `WETH`: [`0x4200000000000000000000000000000000000006`](https://megaeth.blockscout.com/address/0x4200000000000000000000000000000000000006) |
| `fwUSDm`: [`0xE9Cd1B2C75e648449256325d5D06b3D63DC66Aa5`](https://megaeth.blockscout.com/address/0xE9Cd1B2C75e648449256325d5D06b3D63DC66Aa5) | `6` | `USDm`: [`0xFAfDdbb3FC7688494971a79cc65DCa3EF82079E7`](https://megaeth.blockscout.com/address/0xFAfDdbb3FC7688494971a79cc65DCa3EF82079E7) |

At block `25,102,142`, the MegaETH factory returned one pair and FewFactory returned two FewTokens. The pair tokens and FewToken-to-original-token mappings
above were read onchain. The pair held nonzero reserves at that block, but this snapshot does not establish current
depth, price quality, trading volume, asset review, or suitability for user funds.

The published `@ring-protocol/v2-sdk@1.0.0` does not support MegaETH FewToken and pair derivation. Do not use its
MegaETH address helpers until the [SDK support table](/sdk/v2/overview#published-network-support) names a fixed published
version.

## Verification snapshot

The Ethereum, BSC, HyperEVM, and MegaETH tables were checked on `2026-08-28`. A snapshot records the
addresses and mappings returned at the listed blocks. It does not prove current code, reserves, trading volume, asset
quality, approval safety, or suitability for a particular order size. Recheck the factory and wrapper mappings at the
block used for your transaction.
