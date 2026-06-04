# CustomCurveHook

**Inherits:**
[BaseTestHooks](contracts/v4/reference/core/test/BaseTestHooks.md)


## State Variables
### manager

```solidity
IPoolManager immutable manager;
```


## Functions
### constructor


```solidity
constructor(IPoolManager _manager);
```

### onlyPoolManager


```solidity
modifier onlyPoolManager();
```

### beforeSwap


```solidity
function beforeSwap(address, PoolKey calldata key, IPoolManager.SwapParams calldata params, bytes calldata)
    external
    override
    onlyPoolManager
    returns (bytes4, BeforeSwapDelta, uint24);
```

### afterAddLiquidity


```solidity
function afterAddLiquidity(
    address,
    PoolKey calldata,
    IPoolManager.ModifyLiquidityParams calldata,
    BalanceDelta,
    BalanceDelta,
    bytes calldata
) external view override onlyPoolManager returns (bytes4, BalanceDelta);
```

### _getInputOutputAndAmount


```solidity
function _getInputOutputAndAmount(PoolKey calldata key, IPoolManager.SwapParams calldata params)
    internal
    pure
    returns (Currency input, Currency output, uint256 amount);
```

## Errors
### AddLiquidityDirectToHook

```solidity
error AddLiquidityDirectToHook();
```

