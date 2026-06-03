# BeforeSwapDelta


```solidity
type BeforeSwapDelta is int256;
```

## BeforeSwapDeltaLibrary

Library for getting the specified and unspecified deltas from the BeforeSwapDelta type


## State Variables
### ZERO_DELTA
A BeforeSwapDelta of 0


```solidity
BeforeSwapDelta public constant ZERO_DELTA = BeforeSwapDelta.wrap(0);
```


## Functions
### getSpecifiedDelta

extracts int128 from the upper 128 bits of the BeforeSwapDelta
returned by beforeSwap


```solidity
function getSpecifiedDelta(BeforeSwapDelta delta) internal pure returns (int128 deltaSpecified);
```

### getUnspecifiedDelta

extracts int128 from the lower 128 bits of the BeforeSwapDelta
returned by beforeSwap and afterSwap


```solidity
function getUnspecifiedDelta(BeforeSwapDelta delta) internal pure returns (int128 deltaUnspecified);
```

# toBeforeSwapDelta


```solidity
function toBeforeSwapDelta(int128 deltaSpecified, int128 deltaUnspecified)
    pure
    returns (BeforeSwapDelta beforeSwapDelta);
```

