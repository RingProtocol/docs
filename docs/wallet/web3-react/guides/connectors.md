---
title: Supported Connectors
sidebar_position: 2
---

# Supported Connectors In `web3-react`

:::info
This page documents external `web3-react` connectors as frontend integration options. They are not part of the public Ring SDK package surface.
:::

This guide covers how to connect a dApp to the different connectors that `web3-react` supports. It is based on the upstream [`web3-react` example](https://github.com/Uniswap/examples/tree/main/web3-react), which is still relevant when building a Ring frontend around the public SDK packages.

This example covers:

- Coinbase Wallet
- WalletConnect
- Network
- Gnosis Safe

For help setting up the provider and MetaMask flow first, see [Connecting Wallets](./connect-wallet).

The guide covers:

1. Building a Coinbase Wallet connector
2. Building a WalletConnect connector
3. Building a Network connector
4. Building a Gnosis Safe connector

For this guide, the following external packages are used:

- [`@web3-react/core`](https://www.npmjs.com/package/@web3-react/core)
- [`@web3-react/types`](https://www.npmjs.com/package/@web3-react/types)
- [`@web3-react/coinbase-wallet`](https://www.npmjs.com/package/@web3-react/coinbase-wallet)
- [`@web3-react/walletconnect`](https://www.npmjs.com/package/@web3-react/walletconnect)
- [`@web3-react/network`](https://www.npmjs.com/package/@web3-react/network)
- [`@web3-react/gnosis-safe`](https://www.npmjs.com/package/@web3-react/gnosis-safe)

## Coinbase Wallet

The example connector list includes a Coinbase Wallet connector:

```typescript reference title="Creating the prioritized connectors list" referenceLinkText="View on GitHub" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/connections.ts#L33-L39
```

Install the Coinbase Wallet packages, then import `CoinbaseWallet` and `initializeConnector`:

```typescript reference title="Importing the Coinbase Wallet connector" referenceLinkText="View on GitHub" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/coinbase.ts#L1-L2
```

Initialize the connector with the required options:

```typescript reference title="Initializing the Coinbase Wallet connector" referenceLinkText="View on GitHub" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/coinbase.ts#L8-L19
```

Then build the `Connection` wrapper:

```typescript reference title="Building the Coinbase Wallet connection" referenceLinkText="View on GitHub" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/coinbase.ts#L20-L24
```

## WalletConnect

To connect to WalletConnect, import the connector type and initialize it with the RPC map and QR-code options:

```typescript reference title="Importing the WalletConnect connector" referenceLinkText="View on GitHub" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/wallet-connect.ts#L1-L2
```

```typescript reference title="Initializing the WalletConnect connector" referenceLinkText="View on GitHub" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/wallet-connect.ts#L8-L17
```

The example uses a chain-to-RPC map from its constants file, then surfaces the connector through the UI:

```typescript reference title="Building the WalletConnect component" referenceLinkText="View on GitHub" customStyling
https://github.com/Uniswap/examples/blob/81ec93e97b0afded621e177fe5f34fc9f98f80b0/web3-react/src/libs/components/ConnectionOptions.tsx#L49-L56
```

## Network Connector

The Network connector is usually connected programmatically instead of through a button-driven UI. The example eagerly attempts to connect to it from the provider layer:

```typescript reference title="Hook to connect eagerly" referenceLinkText="View on GitHub" customStyling
https://github.com/Uniswap/examples/blob/81ec93e97b0afded621e177fe5f34fc9f98f80b0/web3-react/src/libs/components/Web3ContextProvider.tsx#L9-L13
```

Import and initialize it like this:

```typescript reference title="Importing the Network connector" referenceLinkText="View on GitHub" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/network.ts#L1-L2
```

```typescript reference title="Initializing the Network connector" referenceLinkText="View on GitHub" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/network.ts#L8-L15
```

Then wrap it as a `Connection`:

```typescript reference title="Creating a Network connection" referenceLinkText="View on GitHub" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/network.ts#L16-L20
```

## Gnosis Safe

The Gnosis Safe connector follows the same pattern, but requires less parameterization:

```typescript reference title="Importing the Gnosis Safe connector" referenceLinkText="View on GitHub" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/gnosis.tsx#L1-L2
```

```typescript reference title="Initializing a Gnosis Safe connector" referenceLinkText="View on GitHub" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/gnosis.tsx#L6-L9
```

```typescript reference title="Creating a Gnosis Safe connection" referenceLinkText="View on GitHub" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/gnosis.tsx#L10-L14
```

## Ring Integration Note

These connectors solve wallet connectivity. Ring-specific protocol behavior should still live in the public Ring SDK packages and your frontend integration code.

## Next Steps

Continue to [Switching Chains](./switch-chains).
