# PoolId


```solidity
type PoolId is bytes32;
```

## PoolIdLibrary

Library for computing the ID of a pool


## Functions
### toId

Returns value equal to keccak256(abi.encode(poolKey))


```solidity
function toId(PoolKey memory poolKey) internal pure returns (PoolId poolId);
```

