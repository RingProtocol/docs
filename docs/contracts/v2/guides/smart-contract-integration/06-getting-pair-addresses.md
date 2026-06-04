---
id: getting-pair-addresses
title: Pair Addresses
---

## getPair

The most obvious way to get the address for a pair is to call [getPair](../../reference/smart-contracts/factory#getpair) on the factory. If the pair exists, this function will return its address, else `address(0)` (`0x0000000000000000000000000000000000000000`).

- The "canonical" way to determine whether or not a pair exists.
- Requires an on-chain lookup.

## CREATE2

Ring Swap pair addresses can also be computed _without any on-chain lookups_ because the factory uses
[CREATE2](https://eips.ethereum.org/EIPS/eip-1014). The following values are required for this technique:

|                        |                                                                                   |
| :--------------------- | :-------------------------------------------------------------------------------- |
| `address`              | The [factory address](../../reference/smart-contracts/factory#deployments)        |
| `salt`                 | `keccak256(abi.encodePacked(token0, token1))`                                     |
| `keccak256(init_code)` | The `Ring Swap Pair Init Code` for the target chain from the deployment table.     |

- `token0` must be strictly less than `token1` by sort order.

* Can be computed offline.
* Requires the ability to perform `keccak256`.

## Examples

### Solidity

```solidity
address factory = 0xeb2A625B704d73e82946D8d026E1F588Eed06416; // Ring Swap Factory on Ethereum mainnet
address token0 = 0xCAFE000000000000000000000000000000000000; // change me!
address token1 = 0xF00D000000000000000000000000000000000000; // change me!
bytes32 initCodeHash = 0xa7ae6a5ec37f0c21bbdac560794258c4089b8ae3ffa6e3909b53c6091764a676;

address pair = address(uint160(bytes20(keccak256(abi.encodePacked(
  hex'ff',
  factory,
  keccak256(abi.encodePacked(token0, token1)),
  initCodeHash
))));
```
