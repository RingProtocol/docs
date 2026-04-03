---
title: Connecting Wallets
sidebar_position: 1
---

# Connecting Wallets With `web3-react`

:::info
This guide is about using the external `@web3-react/*` packages in a frontend app. It is related to Ring integrations, but it is not documentation for a public Ring SDK package.
:::

This guide covers how to connect wallets with `web3-react`. It is based on the upstream [`web3-react` example](https://github.com/Uniswap/examples/tree/main/web3-react), which remains useful when building a Ring Swap frontend that also uses the public Ring SDK packages.

In this example we walk through setting up `web3-react` and connecting the most common browser-injected connector, [MetaMask](https://metamask.io/), using [@web3-react/metamask](https://www.npmjs.com/package/@web3-react/metamask).

The input parameters to this guide are the chains that we want our app to be able to connect to and their RPC URLs.

The guide covers:

1. Creating a `web3-react` `Web3ReactProvider`
2. Building a `web3-react` injected connector
3. Connecting and disconnecting the application to the connector

At the end of the guide, the dApp should be able to connect and disconnect a MetaMask connector.

For this guide, the following external packages are used:

- [`@web3-react/core`](https://www.npmjs.com/package/@web3-react/core)
- [`@web3-react/types`](https://www.npmjs.com/package/@web3-react/types)
- [`@web3-react/metamask`](https://www.npmjs.com/package/@web3-react/metamask)

## Creating a `Web3ReactProvider`

To interact with the methods that `web3-react` exposes, first set up a `Web3ReactProvider` and wrap the application in it. `web3-react` uses a React context so the exposed hooks can be used without extra per-component configuration.

Start by creating a React component called `Web3ContextProvider` that wraps the `Web3ReactProvider` setup:

```typescript reference title="Defining the Web3React component" referenceLinkText="View on GitHub" customStyling
https://github.com/Uniswap/examples/blob/81ec93e97b0afded621e177fe5f34fc9f98f80b0/web3-react/src/libs/components/Web3ContextProvider.tsx#L24
```

Then render the imported `Web3ReactProvider` with the `children` within it:

```typescript reference title="Implementing the component" referenceLinkText="View on GitHub" customStyling
https://github.com/Uniswap/examples/blob/81ec93e97b0afded621e177fe5f34fc9f98f80b0/web3-react/src/libs/components/Web3ContextProvider.tsx#L30-L34
```

The example maps a list of `Connections` to tuples of connector and hooks. The third element tracks the connection type, which is later used to determine the active wallet connection.

After creating `Web3ContextProvider`, wrap the whole application with it from the entry file:

```typescript reference title="Wrapping the app with the web3 context" referenceLinkText="View on GitHub" customStyling
https://github.com/Uniswap/examples/blob/7ac3853bc465aecc428a32be584bbeb833b0a63c/web3-react/src/index.tsx#L16-L22
```

## Building an Injected Connector

The `Web3ReactProvider` receives a list of prioritized connectors, usually declared as `PRIORITIZED_CONNECTORS`. The order controls which connector should be considered active when more than one is connected.

```typescript reference title="Creating the prioritized connectors list" referenceLinkText="View on GitHub" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/connections.ts#L33-L39
```

An injected connector supports wallets that inject an Ethereum provider into the browser window. MetaMask is the most common example.

Import `initializeConnector` from `@web3-react/core` and the `MetaMask` type from `@web3-react/metamask`:

```typescript reference title="Importing connector dependencies" referenceLinkText="View on GitHub" customStyling
https://github.com/Uniswap/examples/blob/856dbb002e7f38120554ef226f4309c96ce6ea79/web3-react/src/libs/injected.ts#L1-L2
```

Then initialize the MetaMask connector:

```typescript reference title="Initializing the MetaMask connector" referenceLinkText="View on GitHub" customStyling
https://github.com/Uniswap/examples/blob/81ec93e97b0afded621e177fe5f34fc9f98f80b0/web3-react/src/libs/injected.ts#L7-L9
```

The return type is a tuple of the initialized connector and the hooks that can be used with it. The example then wraps that tuple into a `Connection` object:

```typescript reference title="Creating a connection instance" referenceLinkText="View on GitHub" customStyling
https://github.com/Uniswap/examples/blob/856dbb002e7f38120554ef226f4309c96ce6ea79/web3-react/src/libs/injected.ts#L16-L20
```

## Connecting And Disconnecting

After building the injected connector, use it from the UI layer. The example `Option` component receives flags such as `isEnabled` and `isConnected`, along with callbacks for activate and deactivate:

```typescript reference title="Creating the Option component" referenceLinkText="View on GitHub" customStyling
https://github.com/Uniswap/examples/blob/81ec93e97b0afded621e177fe5f34fc9f98f80b0/web3-react/src/libs/components/Option.tsx#L5-L11
```

When the button is clicked, the example either activates or deactivates the connector:

```typescript reference title="The component user interface" referenceLinkText="View on GitHub" customStyling
https://github.com/Uniswap/examples/blob/81ec93e97b0afded621e177fe5f34fc9f98f80b0/web3-react/src/libs/components/Option.tsx#L38-L42
```

To connect the wallet, call `tryActivateConnector` with the injected connector:

```typescript reference title="The implementation of tryActivateConnector" referenceLinkText="View on GitHub" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/connections.ts#L90-L92
```

To disconnect, call `tryDeactivateConnector`:

```typescript reference title="The implementation of tryDeactivateConnector" referenceLinkText="View on GitHub" customStyling
https://github.com/Uniswap/examples/blob/81ec93e97b0afded621e177fe5f34fc9f98f80b0/web3-react/src/libs/connections.ts#L98-L100
```

## Ring Integration Note

Once a wallet connection is established, frontend code can then invoke the public Ring SDK packages for pricing, route construction, or pair interaction. Keep the boundary clear:

- use `web3-react` for wallet/session state
- use the Ring SDK packages for Ring Swap and FewToken logic

## Next Steps

Continue to the [supported connectors guide](./connectors).
