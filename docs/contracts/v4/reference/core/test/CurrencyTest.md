# CurrencyTest


## Functions
### transfer


```solidity
function transfer(Currency currency, address to, uint256 amount) external;
```

### balanceOfSelf


```solidity
function balanceOfSelf(Currency currency) external view returns (uint256);
```

### balanceOf


```solidity
function balanceOf(Currency currency, address owner) external view returns (uint256);
```

### isAddressZero


```solidity
function isAddressZero(Currency currency) external pure returns (bool);
```

### toId


```solidity
function toId(Currency currency) external pure returns (uint256);
```

### fromId


```solidity
function fromId(uint256 id) external pure returns (Currency);
```

