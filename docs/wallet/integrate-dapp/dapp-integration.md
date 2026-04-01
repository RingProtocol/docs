---
id: dapp-integration
title: DApp Integration
sidebar_position: 2
---

**How does RingWallet run?** RingWallet is a web wallet that opens DApps in an iframe and injects `window.ethereum`, which meets [EIP-6963](https://eips.ethereum.org/EIPS/eip-6963) and [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193).

## 1. Integrate the SDK

**Get the SDK:** Load it from `https://wallet.ring.exchange/dappsdk.js`, or download it and include it in your DApp project (recommended to avoid a runtime dependency on the wallet host).

### 1.1 Add `dappsdk.js` to your project

You can either **self-host** the SDK or **load it from Ring Wallet**. Self-hosting is recommended so your DApp does not depend on the wallet server at runtime.

**Option A — Self-host (recommended)**  
Copy **`public/dappsdk.js`** from this repo into your DApp’s static/public directory, then use `src="/dappsdk.js"` in the script tag.

| Framework | Location |
|---|---|
| Plain HTML | Same directory as your HTML |
| React (CRA) | `public/dappsdk.js` |
| Next.js | `public/dappsdk.js` |
| Vue (Vite) | `public/dappsdk.js` |

**Option B — Load from Ring Wallet**  
Use the script URL from the wallet host (e.g. `https://wallet.ring.exchange/dappsdk.js`). You always get the latest SDK, but your DApp depends on that origin being available and you must allow it in CSP (see §2.3).

### 2.2 Add the script tag

**If self-hosting**, add the following `<script>` tag to the **top of `<head>`**, **before** your application bundle:

```html
<head>
  <script src="/dappsdk.js"></script>
  <!-- your app scripts below -->
</head>
```

**If loading from Ring Wallet**, use the full URL (replace with your actual Ring Wallet host if different):

```html
<head>
  <script src="https://wallet.ring.exchange/dappsdk.js"></script>
  <!-- your app scripts below -->
</head>
```

**Next.js (App Router)** — `app/layout.tsx` (use the full Ring Wallet URL if you chose Option B):

```tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <script src="/dappsdk.js" />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

**Next.js (Pages Router)** — `pages/_document.tsx`:

```tsx
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <script src="/dappsdk.js" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```

### 1.3 Allow CSP (if applicable)

If your DApp uses `Content-Security-Policy` headers or meta tags, make sure the policy allows the SDK script to run. Add the following to your `script-src` directive:

```
script-src 'self' 'unsafe-inline';
```

Or if you reference the SDK from a CDN:

```
script-src 'self' https://wallet.ring.exchange
```

If you don't have a CSP configured, no changes are needed.

### 1.4 What the SDK Injects

The SDK uses two standard Ethereum interfaces:

**`window.ethereum` (EIP-1193)**

The SDK sets `window.ethereum` to a Ring Wallet provider with an extra property `isRingWallet = true` for identification.

- **When running inside Ring Wallet's iframe** — the SDK always overrides `window.ethereum`, even if MetaMask (or another wallet extension) has already injected its own provider into the frame. This ensures that a PC user with MetaMask installed still connects through Ring Wallet when they open your DApp from the wallet.
- **When loaded as a standalone page** (DApp opened directly in the browser, not in the wallet iframe) — the SDK only injects if `window.ethereum` is not already set, so it does not conflict with MetaMask or other extensions in the user's normal browser session.

```javascript
window.ethereum              // EIP-1193 Provider
window.ethereum.isRingWallet  // true
```

**EIP-6963 Provider Discovery**

The SDK announces Ring Wallet via the standard EIP-6963 event mechanism, so libraries like wagmi v2+ and RainbowKit v2+ detect it automatically.

| Field | Value |
|---|---|
| `name` | `"Ring Wallet"` |
| `rdns` | `"exchange.ring.wallet"` |

To detect Ring Wallet specifically via EIP-6963:

```javascript
window.addEventListener('eip6963:announceProvider', (event) => {
  if (event.detail.info.rdns === 'exchange.ring.wallet') {
    const provider = event.detail.provider
    // use provider...
  }
})
window.dispatchEvent(new Event('eip6963:requestProvider'))
```

To check if running inside Ring Wallet:

```javascript
function isInRingWallet() {
  return !!(window.ethereum && window.ethereum.isRingWallet)
}
```

### 1.5 Done

If your DApp uses standard Ethereum libraries (wagmi, ethers.js, web3.js, RainbowKit, etc.), **no further code changes are needed**. The SDK sets up `window.ethereum` and announces via EIP-6963 automatically.

### 1.6 X-Frame-Options (allow iframe embedding)

If Ring Wallet opens your DApp directly in an iframe (the iframe `src` points to your DApp URL), and your site responds with `X-Frame-Options: DENY`, the browser will refuse to load it and you will see an error like:

```text
Refused to display 'https://your-dapp.com/' in a frame because it set 'X-Frame-Options' to 'deny'.
```

In Vercel preview mode, add `X-Frame-Options: SAMEORIGIN` to your `vercel.json` file to allow embedding in Ring Wallet’s iframe.

## 2. Test

See [Test Your DApp](./test-your-dapp.md) for the full verification checklist and test URL examples.
