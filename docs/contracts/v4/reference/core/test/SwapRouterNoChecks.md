# SwapRouterNoChecks

**Inherits:**
[PoolTestBase](contracts/v4/reference/core/test/PoolTestBase.md)


## Functions
### constructor


```solidity
constructor(IPoolManager _manager) PoolTestBase(_manager);
```

### swap


```solidity
function swap(PoolKey memory key, IPoolManager.SwapParams memory params) external payable;
```

### unlockCallback


```solidity
function unlockCallback(bytes calldata rawData) external returns (bytes memory);
```

## Errors
### NoSwapOccurred

```solidity
error NoSwapOccurred();
```

## Structs
### CallbackData

```solidity
struct CallbackData {
    address sender;
    PoolKey key;
    IPoolManager.SwapParams params;
}
```

