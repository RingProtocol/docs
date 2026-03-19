---
id: test-your-dapp
title: Test Your DApp
sidebar_position: 4
---

Open Ring Wallet with your API Key in the URL:

```text
https://wallet.ring.exchange/?testdapp=YOUR_API_KEY
```

Replace `YOUR_API_KEY` with your actual API Key. For example:

```text
http://wallet.ring.exchange/?testdapp=a3f2b1c8-9d4e-4f5a-b6c7-1234567890ab
```

Your DApp will appear in the DApp list even while in review. Click it to verify:

- [ ] Wallet connect dialog appears
- [ ] Transactions trigger the confirmation dialog
- [ ] Signature requests work
- [ ] Rejecting a request returns an error to your DApp

Once verified, notify the Ring Wallet team to set your DApp to **active**.
