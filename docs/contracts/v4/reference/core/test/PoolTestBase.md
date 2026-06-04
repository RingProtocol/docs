# PoolTestBase

**Inherits:**
[IUnlockCallback](../interfaces/IUnlockCallback)


## State Variables
### manager

```solidity
IPoolManager public immutable manager;
```


## Functions
### constructor


```solidity
constructor(IPoolManager _manager);
```

### _fetchBalances


```solidity
function _fetchBalances(Currency currency, address user, address deltaHolder)
    internal
    view
    returns (uint256 userBalance, uint256 poolBalance, int256 delta);
```

