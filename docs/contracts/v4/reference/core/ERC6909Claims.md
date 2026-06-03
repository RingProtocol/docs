# ERC6909Claims

**Inherits:**
[ERC6909](contracts/v4/reference/core/ERC6909.md)

ERC6909Claims inherits ERC6909 and implements an internal burnFrom function


## Functions
### _burnFrom

Burn `amount` tokens of token type `id` from `from`.

*if sender is not `from` they must be an operator or have sufficient allowance.*


```solidity
function _burnFrom(address from, uint256 id, uint256 amount) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`from`|`address`|The address to burn tokens from.|
|`id`|`uint256`|The currency to burn.|
|`amount`|`uint256`|The amount to burn.|


