---
title: How to Identify a FewToken
sidebar_position: 3
---

A supported FewToken is the wrapper address returned by the official `FewFactory` for an underlying ERC-20.

The canonical check is:

```text
FewFactory.getWrappedToken(underlying) == candidateFewToken
```

Token metadata is not an identity source. `symbol` and `name` are not important for determining whether an address is a supported FewToken. A `token()` method or pool can be useful for discovery, but the supported FewToken check must still resolve through `FewFactory`.

## Interfaces

```solidity
interface IFewFactory {
    function getWrappedToken(address originalToken) external view returns (address wrappedToken);
}

interface IFewWrappedToken {
    function token() external view returns (address originalToken);
}
```

## If You Start from an Original ERC20

Resolve the FewToken directly from the official `FewFactory`:

```solidity
address fewToken = IFewFactory(fewFactory).getWrappedToken(originalToken);
require(fewToken != address(0), "FewToken not found");
```

Use the returned `fewToken` for Ring Swap pairs and paths.

## If You Start from a Candidate FewToken

When a FewToken address comes from an external source, first read its underlying token, then confirm that `FewFactory` maps that underlying token back to the same candidate:

```solidity
function isSupportedFewToken(address candidateFewToken) external view returns (bool) {
    // This call reverts if the candidate does not implement the FewToken interface.
    address originalToken = IFewWrappedToken(candidateFewToken).token();
    address expectedFewToken = IFewFactory(fewFactory).getWrappedToken(originalToken);

    return expectedFewToken != address(0) && expectedFewToken == candidateFewToken;
}
```

For integrations that need a reverting check:

```solidity
function _assertSupportedFewToken(address candidateFewToken) internal view returns (address originalToken) {
    originalToken = IFewWrappedToken(candidateFewToken).token();

    address expectedFewToken = IFewFactory(fewFactory).getWrappedToken(originalToken);
    require(expectedFewToken != address(0), "FewToken not found");
    require(expectedFewToken == candidateFewToken, "unsupported FewToken");
}
```

## JavaScript Example

```typescript
import { ethers } from 'ethers'

const fewFactoryAbi = ['function getWrappedToken(address originalToken) view returns (address)']
const fewTokenAbi = ['function token() view returns (address)']

async function isSupportedFewToken({
  provider,
  fewFactoryAddress,
  candidateFewToken,
}: {
  provider: ethers.providers.Provider
  fewFactoryAddress: string
  candidateFewToken: string
}): Promise<boolean> {
  const fewToken = new ethers.Contract(candidateFewToken, fewTokenAbi, provider)
  let originalToken: string

  try {
    originalToken = await fewToken.token()
  } catch {
    return false
  }

  const fewFactory = new ethers.Contract(fewFactoryAddress, fewFactoryAbi, provider)
  const expectedFewToken = await fewFactory.getWrappedToken(originalToken)

  return (
    expectedFewToken !== ethers.constants.AddressZero &&
    ethers.utils.getAddress(expectedFewToken) === ethers.utils.getAddress(candidateFewToken)
  )
}
```

## Approval Spender Selection

After identifying the FewToken, choose the approval spender from the integration path:

- Official router flow: approve the official Ring Router, Universal Router, or Permit2 address for the chain.
- Manual wrap flow: approve the supported FewToken returned by `FewFactory`.

Display metadata and external route metadata should not be used as the approval spender source.
