---
id: install-pwa
title: Install as App (PWA)
sidebar_position: 2
---

Ring Wallet works in any modern browser, but installing it as an app (a PWA) gives you the best experience:

- Launches like a native app (full-screen window, no browser tabs)
- Stays pinned on your Home Screen / Dock / Start Menu
- Keeps the wallet in its own isolated window, reducing accidental navigation

:::warning
Always verify the URL before installing: `https://wallet.ring.exchange/`. Never install a “wallet” from a random link.
:::

## iPhone / iPad (iOS / iPadOS)

You must use **Safari** (not Chrome or an in-app browser) to install a PWA on iOS.

1. Open `https://wallet.ring.exchange/` in Safari.
2. Tap the **Share** button.
3. Tap **Add to Home Screen**.
4. Confirm the name, then tap **Add**.
5. Launch Ring Wallet from the new Home Screen icon.

:::tip
If you don’t see “Add to Home Screen”, scroll the share sheet, and make sure you’re in Safari (not inside Telegram/Discord/Twitter’s in-app browser). Use “Open in Safari” first.
:::

## Android (Chrome)

1. Open `https://wallet.ring.exchange/` in Chrome.
2. Tap the **⋮** menu in the top-right.
3. Tap **Install app** (or **Add to Home screen**).
4. Confirm **Install**.
5. Launch Ring Wallet from your app drawer / Home Screen.

## Desktop (macOS / Windows / Linux)

### Chrome / Edge

1. Open `https://wallet.ring.exchange/`.
2. Click the **Install** icon in the address bar (or go to the browser menu → **Install Ring Wallet**).
3. Confirm the install.

Ring Wallet then appears as a standalone app window, and you can pin it:

- **Windows**: Pin to Start / Taskbar
- **macOS**: Keep it in the Dock
- **Linux**: Pin via your desktop environment

### Safari (macOS)

On macOS, Safari supports saving websites as standalone apps.

1. Open `https://wallet.ring.exchange/` in Safari.
2. Use the Safari menu: **File → Add to Dock**.
3. Launch Ring Wallet from the Dock (and keep it there if you want).

## Updating the installed app

PWAs update automatically when the browser refreshes the app’s cached assets. If you suspect you’re on an old version:

- Fully close the app window, then open it again
- If needed, open the site in the browser and do a hard refresh, then relaunch the installed app

## Uninstalling

- **iOS/iPadOS**: Long-press the Ring Wallet icon → **Remove App** → **Delete App**
- **Android**: Long-press the app icon → **Uninstall**
- **Desktop (Chrome/Edge app)**: Open the app → menu → **Uninstall Ring Wallet** (or remove it from your OS app list)

## Troubleshooting

### There is no install option

- Make sure you’re using a supported browser (Safari on iOS; Chrome/Edge on desktop and Android)
- Make sure you’re on `https://wallet.ring.exchange/` (PWAs require HTTPS)
- Disable private/incognito mode and reload
- Try clearing site data for `wallet.ring.exchange`, then reload and try again
