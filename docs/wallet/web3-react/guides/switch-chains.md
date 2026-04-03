---
title: Switching Chains
sidebar_position: 3
---

# Switching Chains With `web3-react`

:::info
This guide describes chain switching with the external `web3-react` package family. It supports frontend integration around Ring Swap, but it is not a Ring SDK package guide.
:::

This guide covers how to prompt a connected wallet to switch chains using `web3-react`. It is based on the upstream [`web3-react` example](https://github.com/Uniswap/examples/tree/main/web3-react).

For help on provider setup and connector wiring first, see:

- [Connecting Wallets](./connect-wallet)
- [Supported Connectors](./connectors)

The input parameters to this guide are the chains that the dApp should support and their RPC URLs.

For this guide, the primary external package is:

- [`@web3-react/core`](https://www.npmjs.com/package/@web3-react/core)

## Switching Chains

After the frontend is set up to use `web3-react`, switching chains requires the target `chainId` and the current `connectionType`:

```typescript reference title="Defining the function" referenceLinkText="View on GitHub" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/connections.ts#L64
```

The connector is then retrieved from the current connection type:

```typescript reference title="Retrieving the connector" referenceLinkText="View on GitHub" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/connections.ts#L69
```

For `Network` and `WalletConnect`, the example switches chains by calling `activate` with the supplied `chainId`:

```typescript reference title="Switching chains for Network and WalletConnect" referenceLinkText="View on GitHub" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/connections.ts#L71-L74
```

Other connectors build an `AddEthereumChainParameter` object and pass that into `activate`:

```typescript reference title="Switching chains for the other connectors" referenceLinkText="View on GitHub" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/connections.ts#L77-L84
```

The chain metadata for those parameters is defined in the example constants file:

```typescript reference title="Defining the chain parameters" referenceLinkText="View on GitHub" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/constants.ts#L27-L40
```

## Ring Integration Note

Chain switching usually happens before Ring-specific calls are made. A common frontend split is:

- `web3-react` manages wallet connection and chain selection
- the public Ring SDK packages handle Ring Swap pricing, pairs, routes, and FewToken-aware logic

## Next Steps

Once the wallet is on the correct chain, the app can continue into Ring-specific flows powered by the public Ring SDK packages.
