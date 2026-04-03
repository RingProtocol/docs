---
title: web3-react Integration
sidebar_position: 1
---

# `web3-react` Integration

:::info
This section documents `web3-react` as an external frontend wallet-connection library. It is not part of the current public Ring SDK package line, which is limited to `@ring-protocol/sdk-core`, `@ring-protocol/v2-sdk`, and `@ring-protocol/uniswap-v2-sdk`.
:::

`web3-react` provides abstractions for connecting a dApp to wallet connectors and interacting with those active connections. It can still be useful around Ring Swap because frontend applications often need wallet connection, eager reconnect, and chain switching before they invoke the public Ring SDK packages.

This section currently covers:

- connecting injected wallets such as MetaMask
- wiring additional connectors like Coinbase Wallet, WalletConnect, Network, and Gnosis Safe
- prompting users to switch chains from the frontend

To begin, see the [guides](./guides/connect-wallet). The examples in this section still reference the upstream `web3-react` package family and example code.

## Installation

Install the external `web3-react` core package with npm:

```bash
npm install --save @web3-react/core
```

or with yarn:

```bash
yarn add @web3-react/core
```

## External Links

- [web3-react on GitHub](https://github.com/Uniswap/web3-react)
- [web3-react examples](https://github.com/Uniswap/examples/tree/main/web3-react)
- [@web3-react/core on npm](https://www.npmjs.com/package/@web3-react/core)
