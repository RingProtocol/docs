---
id: overview
sidebar_position: 1
title: Routing API
---

# Ring Routing API

A partner-facing quote endpoint that returns the best executable swap quote from Ring Protocol Pools.

## Endpoint

```
POST https://gateway.ring.exchange/v1/partner/quote
```

A staging environment is available at `https://gateway.testring.org/v1/partner/quote` — coordinate with the Ring team before targeting it.

## Authentication

Every request requires three headers:

| Header | Required | Description |
|---|---|---|
| `x-api-key` | Yes | Your partner API key. Issued by Ring — email [contact@ring.exchange](mailto:contact@ring.exchange) to request one (see [Getting access](#getting-access)). Treat as a secret; proxy through your backend, do not ship to end-user devices. |
| `x-partner-id` | Yes | Your partner slug (lower-case), assigned during onboarding (e.g. `orbs`). The slug and key are cross-checked: a key issued to partner A cannot impersonate partner B. |
| `Content-Type` | Yes | `application/json` |

A missing or invalid `x-api-key` returns `403` (rejected by the gateway). A missing or mismatched `x-partner-id` returns `400` with `errorCode: VALIDATION_ERROR`.

## Supported chains

Currently **only Ethereum Mainnet (`chainId: 1`)** is supported. Additional chains will be enabled as they are reviewed and rolled out. Coordinate with the Ring team before targeting other chains.

## Quick start

```bash
curl -X POST "https://gateway.ring.exchange/v1/partner/quote" \
  -H "Content-Type: application/json" \
  -H "x-api-key: YOUR_API_KEY" \
  -H "x-partner-id: YOUR_PARTNER_SLUG" \
  -d '{
    "tokenIn":  "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    "tokenOut": "0x0000000000000000000000000000000000000000",
    "amount":   "1000000000101000000",
    "tokenInChainId":  1,
    "tokenOutChainId": 1,
    "swapper": "0xYourFillerContractAddress",
    "type": "EXACT_INPUT"
  }'
```

### Required fields

| Field | Description |
|---|---|
| `tokenIn` / `tokenOut` | Token addresses. Use `0x0000000000000000000000000000000000000000` for the chain's native asset (ETH). |
| `amount` | Raw amount in the token's smallest unit (wei for ETH, 6-decimal units for USDT, etc.). For `EXACT_INPUT` this is the input amount; for `EXACT_OUTPUT` it's the desired output amount. |
| `tokenInChainId` / `tokenOutChainId` | Chain ID. Both must equal `1` (Ethereum mainnet). |
| `swapper` | **Your filler contract address.** Used to generate the calldata, and set as the recipient of the swap output. If wrong, the calldata won't match and output tokens will be sent to the wrong address. |
| `type` | `EXACT_INPUT` or `EXACT_OUTPUT`. |

### Optional fields

| Field | Default | Description |
|---|---|---|
| `protocols` | `["FewV2"]` | Liquidity sources to consider for the route. Currently only `FewV2` is supported. |
| `autoSlippage` | — | Set to `DEFAULT` for automatic slippage selection. |

## Response

A successful request returns HTTP `200`:

```json
{
  "requestId": "fe67ff8b-79e7-46c7-84d3-b6816d2c136a",
  "routing": "CLASSIC",
  "quote": {
    "chainId": 1,
    "tradeType": "EXACT_INPUT",
    "swapper": "0xYourFillerContractAddress",
    "input": {
      "amount": "1000000000101000000",
      "token": "0xdAC17F958D2ee523a2206206994597C13D831ec7"
    },
    "output": {
      "amount": "405123456789",
      "token": "0x0000000000000000000000000000000000000000",
      "recipient": "0xYourFillerContractAddress"
    },
    "methodParameters": {
      "to":       "0x24e743CcE93235641f2be8Ce7ffC6330903ab96f",
      "calldata": "0x...",
      "value":    "0"
    },
    "route": [ /* ordered list of pool hops */ ],
    "slippage": 0.5,
    "gasFee":    "662490501387712",
    "gasFeeUSD": "1.59",
    "gasUseEstimate": "63592",
    "quoteId": "d21e3281-5f14-4a4c-8369-d1a7250fca9f"
  },
  "permitData": { /* Permit2 typed data, when input token requires approval */ }
}
```

### What to grab from the response

To execute the swap on-chain, take these three fields and submit a transaction:

| Field | Use |
|---|---|
| `quote.methodParameters.to` | Router contract address — destination of your transaction |
| `quote.methodParameters.calldata` | Encoded swap calldata — the `data` field of your transaction |
| `quote.methodParameters.value` | Native token value to attach (in wei) — the `value` field of your transaction |

If `permitData` is present, sign the Permit2 typed data first and submit the signature alongside the swap.

The endpoint does **not** validate sender balances or token approvals — it only returns calldata. If you call it from a filler contract, make sure the contract has the input tokens (and required approvals) before submitting the transaction.

### Other useful fields

| Field | Description |
|---|---|
| `routing` | Routing mode used to produce the quote. Currently `CLASSIC`. |
| `quote.input.amount`, `quote.output.amount` | Final input and output amounts (wei). |
| `quote.slippage` | Effective slippage applied (percent). |
| `quote.gasFee`, `quote.gasFeeUSD` | Estimated gas fee in wei and USD. |
| `quote.route` | Ordered list of pool hops used for the quote. |
| `quote.quoteId`, `requestId` | UUIDs — useful for support tickets and log correlation. |

## Errors

| Status | `errorCode` | Cause |
|---|---|---|
| `400` | `VALIDATION_ERROR` | Missing or malformed field, missing `x-partner-id`, partner-id / API-key mismatch, unsupported chain. |
| `403` | — | Missing or invalid `x-api-key`. Rejected at the gateway, never reaches the service. |
| `404` | `NO_QUOTES_AVAILABLE` | No quoter returned a usable price for the requested pair. |
| `429` | `TOO_MANY_REQUESTS` | Per-partner rate limit (default 10 rps / burst 20) or monthly quota (default 5M / month) exceeded. Honor `Retry-After`. |
| `500` | varies | Upstream quoter failure. Retry with exponential backoff. |

## Integration notes

- **Token addresses**: use the checksummed ERC-20 contract address. For native ETH, use `0x0000000000000000000000000000000000000000`.
- **Amounts** are strings in the token's smallest unit.
- **Permit2**: when `permitData` is present in the response, sign the typed data with the swapper key and include the signature in your transaction. Without it, the swap will revert.
- **`FewV2` routing**: quotes are sourced from Ring Protocol Pools and route through FewToken-wrapped liquidity, which can offer better pricing for certain pairs.

## Getting access

To request a partner API key, email **[contact@ring.exchange](mailto:contact@ring.exchange)** with your project name, website / app URL, intended use, and estimated traffic. The Ring team will review and reply with your API key and assigned `x-partner-id` slug.
