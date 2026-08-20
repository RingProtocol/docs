---
id: overview
sidebar_position: 1
title: Overview
---

## Ring APIs

The **Ring Routing API** is a partner quote service. It requests a route from the sources enabled for that partner and
can return transaction calldata. A successful response still requires caller-side address, amount, recipient, deadline,
Permit2, and simulation checks.

## Quote API

```
POST https://gateway.ring.exchange/v1/partner/quote
```

Returns a point-in-time quote for a token pair, plus the proposed transaction target and calldata. It does not guarantee
execution, market-wide price optimality, or source availability.

See the **[Routing API reference](./routing/overview)** for headers, request/response schema, supported chains, and examples.

## Getting access

The Routing API is gated by an API key issued per partner. Request access through an established Ring integration
contact whose identity you have independently verified. The onboarding request should include:

- Project name and website / app URL
- A short description of how you plan to use the API
- Estimated traffic (requests per day, peak rps if known)
- Filler / executor contract address (if applicable)

The Ring team will provide the API key and assigned `x-partner-id` slug through the verified onboarding channel. Do not
send credentials, signatures, or other secrets through public issues, chat rooms, or an unverified email address.

Default rate limits per partner: **10 rps**, burst **20**, **5,000,000 requests / month**. Custom limits available on request.
