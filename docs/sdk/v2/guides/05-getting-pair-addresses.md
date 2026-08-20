---
id: getting-pair-addresses
title: Pair Addresses
---

## getPair

The most obvious way to get the address for a pair is to call [getPair](../../../contracts/v2/reference/smart-contracts/factory#getpair) on the factory. If the pair exists, this function will return its address, else `address(0)` (`0x0000000000000000000000000000000000000000`).

- The authoritative onchain check for whether that factory has recorded a pair.
- Requires an on-chain lookup.

## CREATE2

Ring Swap pair addresses can also be computed _without any on-chain lookups_ because the factory uses
[CREATE2](https://eips.ethereum.org/EIPS/eip-1014). In Ring Swap, this is chain-aware: use the factory for the target
network and the corresponding entry in `INIT_CODE_HASH_MAP`.

|                        |                                                                                |
| :--------------------- | :----------------------------------------------------------------------------- |
| `address`              | The [factory address](../../../contracts/v2/reference/smart-contracts/factory) |
| `salt`                 | `keccak256(abi.encodePacked(token0, token1))`                                  |
| `keccak256(init_code)` | `INIT_CODE_HASH_MAP[chainId]`                                                    |

- `token0` must be strictly less than `token1` by sort order.

* Can be computed offline.
* Requires the ability to perform `keccak256`.
* In Ring Swap, `token0` and `token1` should be the actual pair tokens, which are often `FewToken` addresses rather than the original ERC-20 addresses shown to users.

A CREATE2 result is only a predicted address. It does not prove that the pair is deployed, belongs to the intended
factory, or contains reviewed assets. Confirm `factory.getPair(token0, token1)`, bytecode, `token0()`, and `token1()`
before use.

## Examples

### SDK prediction

The SDK helper computes the expected CREATE2 address:

```typescript
import { ChainId, Token, WETH9 } from '@ring-protocol/sdk-core'
import { Pair, getFewTokenFromOriginalToken } from '@ring-protocol/v2-sdk'

const DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'Dai Stablecoin')
const fewDAI = getFewTokenFromOriginalToken(DAI, ChainId.MAINNET)
const fewWETH = getFewTokenFromOriginalToken(WETH9[ChainId.MAINNET], ChainId.MAINNET)

const pairAddress = Pair.getAddress(fewDAI, fewWETH)
```

`Pair.getAddress()` relies on the factory and init-code constants in the installed package. The published v1.0.0
package must not be used for MegaETH. On every chain, treat the result as a candidate and require
`factory.getPair(fewDAI.address, fewWETH.address)` to return the same address before reading reserves or moving funds.

### Manual TypeScript Example

This example makes use of the [Ring V2 SDK](../reference/getting-started). Manual derivation has the same trust
boundary as `Pair.getAddress()`: factory state and deployed pair code remain authoritative.

```typescript
import { ChainId, Token, WETH9 } from '@ring-protocol/sdk-core'
import { FACTORY_ADDRESS_MAP, INIT_CODE_HASH_MAP, getFewTokenFromOriginalToken } from '@ring-protocol/v2-sdk'
import { pack, keccak256 } from '@ethersproject/solidity'
import { getCreate2Address } from '@ethersproject/address'

const chainId = ChainId.MAINNET
const DAI = new Token(chainId, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'Dai Stablecoin')
const fewDAI = getFewTokenFromOriginalToken(DAI, chainId)
const fewWETH = getFewTokenFromOriginalToken(WETH9[chainId], chainId)
const [token0, token1] = fewDAI.sortsBefore(fewWETH) ? [fewDAI, fewWETH] : [fewWETH, fewDAI]

const pair = getCreate2Address(
  FACTORY_ADDRESS_MAP[chainId],
  keccak256(['bytes'], [pack(['address', 'address'], [token0.address, token1.address])]),
  INIT_CODE_HASH_MAP[chainId]
)
```
