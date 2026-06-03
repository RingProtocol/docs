# BalanceDelta

*Two `int128` values packed into a single `int256` where the upper 128 bits represent the amount0
and the lower 128 bits represent the amount1.*


```solidity
type BalanceDelta is int256;
```

## BalanceDeltaLibrary

Library for getting the amount0 and amount1 deltas from the BalanceDelta type


## State Variables
### ZERO_DELTA
A BalanceDelta of 0


```solidity
BalanceDelta public constant ZERO_DELTA = BalanceDelta.wrap(0);
```


## Functions
### amount0


```solidity
function amount0(BalanceDelta balanceDelta) internal pure returns (int128 _amount0);
```

### amount1


```solidity
function amount1(BalanceDelta balanceDelta) internal pure returns (int128 _amount1);
```

# sub


```solidity
function sub(BalanceDelta a, BalanceDelta b) pure returns (BalanceDelta);
```

# toBalanceDelta


```solidity
function toBalanceDelta(int128 _amount0, int128 _amount1) pure returns (BalanceDelta balanceDelta);
```

# eq


```solidity
function eq(BalanceDelta a, BalanceDelta b) pure returns (bool);
```

# add


```solidity
function add(BalanceDelta a, BalanceDelta b) pure returns (BalanceDelta);
```

# neq


```solidity
function neq(BalanceDelta a, BalanceDelta b) pure returns (bool);
```

