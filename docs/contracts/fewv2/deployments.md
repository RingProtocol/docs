---
title: Ring Protocol Contracts
sidebar_position: 2
---

The latest version of Ring Swap and Few Protocol are deployed at the addresses listed below.

## Mainnet Deployments

### ETH Mainnet

| Contract | ETH Mainnet Address |
| --- | --- |
| Ring Swap Factory | `0xeb2A625B704d73e82946D8d026E1F588Eed06416` |
| Few Factory | `0x7D86394139bf1122E82FDF45Bb4e3b038A4464DD` |
| Ring Swap Router | `0x39d1d8fcC5E6EEAf567Bce4e29B94fec956D3519` |
| UniversalRouter | `0xEff87A51f5Abd015F1AFCD5737BBab450eA15A24` |
| Permit2 | `0x000000000022D473030F116dDEE9F6B43aC78BA3` |
| FewETHWrapper | `0xAda6059b4F6244Acd8934095Ed0162C5Df6B5ebB` |
| FewETHHook | `0x044301939dEB7ca53C4733dd4D9B3bc5Ea0c6888` |
| FewUNIHook | `0x4b3E2a8cF36c7EB0fBa2A5b39B20c896C6f22888` |
| FewWBTCHook | `0x0FE942AFdb2F51e25cbf892aAd175C6A574F2888` |
| FewUSDCHook | `0x4b2EB653D13E6C9ac5A0A01fDe22F2C8d6592888` |
| FewDAIHook | `0x85B648a64Aed6307D5d5Ce26e6Ae086C17Bde888` |
| FewUSDTHook | `0xBAdF77d50478b4432eF1F243B9C0bC7869486888` |
| FewCBBTCHook | `0x8347b7A3807C681513D2B51b8223e59aA16a2888` |
| FewweETHHook | `0x877323adBf747f85eb8D182D42f01f34A5492888` |
| FewwstETHHook | `0x75ae0292E8AD3ab60B9A1A7B3046d3F4Abdfa888` |

| Value | ETH Mainnet |
| --- | --- |
| Ring Swap Pair Init Code | `0xa7ae6a5ec37f0c21bbdac560794258c4089b8ae3ffa6e3909b53c6091764a676` |
| Few Wrapped Token Init Code | `0x2bdba5734ddf754fb149ef1faa937956c52cfd1f24d68163a95f42d08ec06d38` |

### MegaETH Mainnet

| Value | MegaETH Mainnet |
| --- | --- |
| Network Name | `MegaETH Mainnet` |
| Chain ID | `4326` |
| Native Token | `ETH` |
| Official RPC | `https://mainnet.megaeth.com/rpc` |
| Official WebSocket | `wss://mainnet.megaeth.com/ws` |
| dRPC | `https://megaeth.drpc.org` |
| Etherscan | [mega.etherscan.io](https://mega.etherscan.io/) |
| Blockscout | [megaeth.blockscout.com](https://megaeth.blockscout.com/) |
| MegaETH Docs | [docs.megaeth.com](https://docs.megaeth.com/) |
| Network Status | [uptime.megaeth.com](https://uptime.megaeth.com/) |

The official RPC may reject some unauthenticated script requests. For CLI usage, `https://megaeth.drpc.org`
can be used as a fallback RPC.

| Contract | MegaETH Mainnet Address |
| --- | --- |
| WETH | `0x4200000000000000000000000000000000000006` |
| Core | `0x732819C68c72D09465B8FaDF8156A79d21E87DCA` |
| Few Factory | `0x6AE74eC9D067C734060FC5edB66fC6D48682970E` |
| fwWETH | `0x65c46c31E340D6C546309733CF50Ef4d150094C4` |
| FewETHWrapper | `0xb0Bd0CD58551b71079F36B198276832242D02C0F` |
| Ring Swap Factory | `0x47C436602d2598d0ef4b50888F29a528B6Bccc95` |
| UniswapV2Router02 | `0xE73442C4b87283D75768F3668B411fc2348B429b` |
| Ring Swap Router | `0x88a9A29FA981721C04fdC367ab7e3C83A4C65db9` |
| UniversalRouter | `0x9256667638ED96ba4eCb30bD23efD2A182e1bC98` |
| Timelock | `0xb0BEa0daA0E57c43d92711f9dF2d0D54CebEEA72` |
| Permit2 | `0x000000000022D473030F116dDEE9F6B43aC78BA3` |
| Multicall3 | `0xcA11bde05977b3631167028862bE2a173976CA11` |

| Value | MegaETH Mainnet |
| --- | --- |
| Ring Swap Pair Init Code | `0xa7ae6a5ec37f0c21bbdac560794258c4089b8ae3ffa6e3909b53c6091764a676` |
| Few Wrapped Token Init Code | `0x2bdba5734ddf754fb149ef1faa937956c52cfd1f24d68163a95f42d08ec06d38` |

#### MegaETH Deployment Notes

- `Core` is initialized.
- `Core` governor has been transferred to the timelock at `0xb0BEa0daA0E57c43d92711f9dF2d0D54CebEEA72`.
- The deployer governor has been revoked.
- Timelock admin is `0x9336D0C82299Da0ab178271792954ADFD6f10fD7`.
- Timelock delay is `172800` seconds, or 2 days.
- `Permit2` and `Multicall3` are MegaETH OP Stack preinstalls, not contracts deployed by Ring.

### BSC Mainnet

| Contract | BSC Mainnet Address |
| --- | --- |
| Ring Swap Factory | `0x4De602A30Ad7fEf8223dcf67A9fB704324C4dd9B` |
| Few Factory | `0xEeE400Eabfba8F60f4e6B351D8577394BeB972CD` |
| Ring Swap Router | `0x20504f37A95eF80e3FC7476c4801fb39AaE6bAd0` |
| UniversalRouter | `0x1Fb6ef969D925f0B81245cE28F2cAD95b638CfCC` |
| Permit2 | `0x000000000022D473030F116dDEE9F6B43aC78BA3` |
| FewETHWrapper | `0xf9d7ff2f6A0c3631A807199276a493Af8097916F` |

| Value | BSC Mainnet |
| --- | --- |
| Ring Swap Pair Init Code | `0xa7ae6a5ec37f0c21bbdac560794258c4089b8ae3ffa6e3909b53c6091764a676` |
| Few Wrapped Token Init Code | `0x2bdba5734ddf754fb149ef1faa937956c52cfd1f24d68163a95f42d08ec06d38` |

### Hyper Mainnet

| Contract | Hyper Mainnet Address |
| --- | --- |
| Ring Swap Factory | `0x4AfC2e4cA0844ad153B090dc32e207c1DD74a8E4` |
| Few Factory | `0x6B65ed7315274eB9EF06A48132EB04D808700b86` |
| Ring Swap Router | `0x701D1d675415efA2d2429fB122ccC6dD4FCcA959` |
| UniversalRouter | `0xE65081EFa5ad4A196B1Df768716c337e6AB140E9` |
| Permit2 | `0x000000000022D473030F116dDEE9F6B43aC78BA3` |
| FewETHWrapper | `0x068B60ECbC934b0a0dde20FdFf0dE925b97B971F` |

| Value | Hyper Mainnet |
| --- | --- |
| Ring Swap Pair Init Code | `0xa7ae6a5ec37f0c21bbdac560794258c4089b8ae3ffa6e3909b53c6091764a676` |
| Few Wrapped Token Init Code | `0x2bdba5734ddf754fb149ef1faa937956c52cfd1f24d68163a95f42d08ec06d38` |

### Base Mainnet

| Contract | Base Mainnet Address |
| --- | --- |
| Ring Swap Factory | `0x9BfFC3B30D6659e3D84754cc38865B3D60B4980E` |
| Few Factory | `0xb3Ad7754f363af676dC1C5be40423FE538a47920` |
| Ring Swap Router | `0x224749CDd5791480ECEBE452e5FFAEfEf94Cd254` |
| UniversalRouter | `0x9a8C67C02250EC50f16b6143D139CbDB131f1e07` |
| Permit2 | `0x000000000022D473030F116dDEE9F6B43aC78BA3` |
| FewETHWrapper | `0x20E6B1260d12910C0Ab13c1AbEBCFe24AE9c4fe7` |

| Value | Base Mainnet |
| --- | --- |
| Ring Swap Pair Init Code | `0xa7ae6a5ec37f0c21bbdac560794258c4089b8ae3ffa6e3909b53c6091764a676` |
| Few Wrapped Token Init Code | `0x2bdba5734ddf754fb149ef1faa937956c52cfd1f24d68163a95f42d08ec06d38` |

### Arbitrum Mainnet

| Contract | Arbitrum Mainnet Address |
| --- | --- |
| Ring Swap Factory | `0x1246Fa62467a9AC0892a2d2A9F9aafC2F5609442` |
| Few Factory | `0x974Cc3F3468cd9C12731108148C4DABFB5eE556F` |
| Ring Swap Router | `0xD69ed581480239357515e200560353AF1BbaA46A` |
| UniversalRouter | `0xf293096D3C33610461a7bd101D201683111749b8` |
| Permit2 | `0x000000000022D473030F116dDEE9F6B43aC78BA3` |
| FewETHWrapper | `0xEeE400Eabfba8F60f4e6B351D8577394BeB972CD` |

| Value | Arbitrum Mainnet |
| --- | --- |
| Ring Swap Pair Init Code | `0xa7ae6a5ec37f0c21bbdac560794258c4089b8ae3ffa6e3909b53c6091764a676` |
| Few Wrapped Token Init Code | `0x2bdba5734ddf754fb149ef1faa937956c52cfd1f24d68163a95f42d08ec06d38` |

### Unichain Mainnet

| Contract | Unichain Mainnet Address |
| --- | --- |
| Ring Swap Factory | `0xEeE400Eabfba8F60f4e6B351D8577394BeB972CD` |
| Few Factory | `0x974Cc3F3468cd9C12731108148C4DABFB5eE556F` |
| Ring Swap Router | `0xf9d7ff2f6A0c3631A807199276a493Af8097916F` |
| UniversalRouter | `0xE17e4e8A43c1A0a1844BDe72ACA86Be3B81b28aF` |
| Permit2 | `0x000000000022D473030F116dDEE9F6B43aC78BA3` |
| FewETHWrapper | `0xc43a3Dd1b16168e00297315d679840e30A89df42` |

| Value | Unichain Mainnet |
| --- | --- |
| Ring Swap Pair Init Code | `0xa7ae6a5ec37f0c21bbdac560794258c4089b8ae3ffa6e3909b53c6091764a676` |
| Few Wrapped Token Init Code | `0x2bdba5734ddf754fb149ef1faa937956c52cfd1f24d68163a95f42d08ec06d38` |

### Story Mainnet

| Contract | Story Mainnet Address |
| --- | --- |
| Ring Swap Factory | `0xEeE400Eabfba8F60f4e6B351D8577394BeB972CD` |
| Few Factory | `0x974Cc3F3468cd9C12731108148C4DABFB5eE556F` |
| Ring Swap Router | `0xf9d7ff2f6A0c3631A807199276a493Af8097916F` |
| UniversalRouter | `0x3374bEa3C2A347231f93Fc366346AD6e56c7af49` |
| Permit2 | `0x000000000022D473030F116dDEE9F6B43aC78BA3` |
| FewETHWrapper | `0xc43a3Dd1b16168e00297315d679840e30A89df42` |

| Value | Story Mainnet |
| --- | --- |
| Ring Swap Pair Init Code | `0xa7ae6a5ec37f0c21bbdac560794258c4089b8ae3ffa6e3909b53c6091764a676` |
| Few Wrapped Token Init Code | `0x2bdba5734ddf754fb149ef1faa937956c52cfd1f24d68163a95f42d08ec06d38` |
