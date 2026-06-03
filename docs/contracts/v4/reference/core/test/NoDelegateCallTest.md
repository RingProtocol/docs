# NoDelegateCallTest

**Inherits:**
[NoDelegateCall](contracts/v4/reference/core/NoDelegateCall.md)


## Functions
### canBeDelegateCalled


```solidity
function canBeDelegateCalled() public view returns (uint256);
```

### cannotBeDelegateCalled


```solidity
function cannotBeDelegateCalled() public view noDelegateCall returns (uint256);
```

### getGasCostOfCanBeDelegateCalled


```solidity
function getGasCostOfCanBeDelegateCalled() external view returns (uint256);
```

### getGasCostOfCannotBeDelegateCalled


```solidity
function getGasCostOfCannotBeDelegateCalled() external view returns (uint256);
```

### callsIntoNoDelegateCallFunction


```solidity
function callsIntoNoDelegateCallFunction() external view;
```

### noDelegateCallPrivate


```solidity
function noDelegateCallPrivate() private view noDelegateCall;
```

