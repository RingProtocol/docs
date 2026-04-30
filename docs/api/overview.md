---
id: overview
sidebar_position: 1
title: Overview
---

## Ring APIs

The **Ring Routing API** is a partner-facing quote service. It returns the best executable swap quote on a given pair, with execution-ready calldata, routing across Ring Swap v2, Uniswap v3 / v4, and FewToken-wrapped pools — and optionally racing external aggregators (1inch, Bitget, Enso, HiUni) for best execution.

## Quote API

```
POST https://gateway.ring.exchange/v1/partner/quote
```

Returns the optimal swap quote for a token pair, plus the router contract address and calldata to submit on-chain.

→ See the **[Routing API reference](./routing/overview)** for headers, request/response schema, supported chains, and examples.

## Getting access

The Routing API is gated by an API key issued per partner. To request access, email **[contact@ring.exchange](mailto:contact@ring.exchange)** with:

- Project name and website / app URL
- A short description of how you plan to use the API
- Estimated traffic (requests per day, peak rps if known)
- Filler / executor contract address (if applicable)

The Ring team will review and reply with your API key and assigned `x-partner-id` slug.

Default rate limits per partner: **10 rps**, burst **20**, **5,000,000 requests / month**. Custom limits available on request.
