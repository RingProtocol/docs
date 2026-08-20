---
id: overview
sidebar_position: 1
title: Routing API
---

# Ring Routing API

The Routing API is a partner endpoint that requests a swap quote from the liquidity sources enabled for that partner.
A successful response is a point-in-time quote, not a guarantee of execution or the best price available in every
market. The caller must validate and simulate the returned transaction before submitting it.

## Endpoint

```text
POST https://gateway.ring.exchange/v1/partner/quote
```

A staging environment is available at `https://gateway.testring.org/v1/partner/quote`. Coordinate with the Ring team
before targeting it.

## Authentication

Every request requires three headers:

| Header | Required | Description |
| --- | --- | --- |
| `x-api-key` | Yes | Partner API key issued by Ring. Keep it on your backend and out of end-user devices, logs, URLs, and source control. |
| `x-partner-id` | Yes | Lowercase partner slug assigned during onboarding. The gateway checks that it belongs to the API key. |
| `Content-Type` | Yes | `application/json` |

A missing or invalid API key returns `403`. A missing or mismatched partner ID returns `400` with
`errorCode: VALIDATION_ERROR`.

## Supported chains

The partner endpoint currently accepts Ethereum Mainnet (`chainId: 1`). Do not send another chain ID unless Ring has
enabled it for your partner account and confirmed the deployment in writing.

## Quick start

The example requests an exact-input quote for 100 USDT. USDT has 6 decimals, so the raw amount is `100000000`.
Replace the `swapper` placeholder with the checksummed address of your filler contract. The address receives the output.

```bash
curl -X POST "https://gateway.ring.exchange/v1/partner/quote" \
  -H "Content-Type: application/json" \
  -H "x-api-key: YOUR_API_KEY" \
  -H "x-partner-id: YOUR_PARTNER_SLUG" \
  -d '{
    "tokenIn": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    "tokenOut": "0x0000000000000000000000000000000000000000",
    "amount": "100000000",
    "tokenInChainId": 1,
    "tokenOutChainId": 1,
    "swapper": "0xYOUR_CHECKSUMMED_FILLER_ADDRESS",
    "type": "EXACT_INPUT",
    "slippageTolerance": 0.5
  }'
```

The placeholder is intentionally not a valid address. Do not replace it with a burn address, router, pool, or shared
treasury unless that address is the intended output recipient.

### Required fields

| Field | Description |
| --- | --- |
| `tokenIn` / `tokenOut` | Token addresses. Use `0x0000000000000000000000000000000000000000` for native ETH. Verify ERC-20 addresses independently. |
| `amount` | Integer string in the token's smallest unit. For `EXACT_INPUT`, it is the input amount. For `EXACT_OUTPUT`, it is the requested output amount. |
| `tokenInChainId` / `tokenOutChainId` | Both must be the chain enabled for the partner request. They are currently `1`. |
| `swapper` | Filler contract that submits the transaction and receives the output. The generated calldata is bound to this address. |
| `type` | `EXACT_INPUT` or `EXACT_OUTPUT`. |

### Optional fields

| Field | Default | Description |
| --- | --- | --- |
| `protocols` | `['FewV2']` | Classic sources to consider. Accepted values are `V2`, `V3`, `V4`, `FewV2`, `mixed`, and `limit`. The partner endpoint defaults to Ring Swap only; the public quote endpoint has a separate default. Availability still depends on chain and partner configuration. |
| `slippageTolerance` | None | Maximum slippage percentage. For example, `0.5` means 0.5%. The service accepts values from 0 through 20, but the caller must choose a limit suitable for the order. |
| `autoSlippage` | None | Set to `DEFAULT` only when your integration has been reviewed for automatic slippage. |

Do not send both `slippageTolerance` and `autoSlippage`. If your risk policy requires a fixed maximum, send
`slippageTolerance` and enforce the same bound when validating the response.

To make the Ring Swap restriction explicit, send:

```json
{
  "protocols": ["FewV2"]
}
```

The presence of a protocol name in the request does not prove that it produced the returned route. Inspect the response
and your service logs before reporting source usage.

## Response

A successful request returns HTTP `200`. Values below are illustrative and are not a live market quote:

```json
{
  "requestId": "fe67ff8b-79e7-46c7-84d3-b6816d2c136a",
  "routing": "CLASSIC",
  "quote": {
    "chainId": 1,
    "tradeType": "EXACT_INPUT",
    "swapper": "0xYOUR_CHECKSUMMED_FILLER_ADDRESS",
    "input": {
      "amount": "100000000",
      "token": "0xdAC17F958D2ee523a2206206994597C13D831ec7"
    },
    "output": {
      "amount": "40000000000000000",
      "token": "0x0000000000000000000000000000000000000000",
      "recipient": "0xYOUR_CHECKSUMMED_FILLER_ADDRESS"
    },
    "methodParameters": {
      "to": "0x24e743CcE93235641f2be8Ce7ffC6330903ab96f",
      "calldata": "0x...",
      "value": "0"
    },
    "route": [],
    "slippage": 0.5,
    "gasFee": "662490501387712",
    "gasFeeUSD": "1.59",
    "gasUseEstimate": "63592",
    "quoteId": "d21e3281-5f14-4a4c-8369-d1a7250fca9f"
  }
}
```

`permitData` may also be present when the integration requires a Permit2 signature.

### Validate before execution

Treat every response as untrusted transaction input. Before signing or submitting it:

1. Match `requestId` and `quoteId` to the request you just made. Reject stale or replayed application state.
2. Require `quote.chainId`, `tradeType`, `swapper`, input token, output token, input amount, and recipient to match the
   user's confirmed intent.
3. Check the raw output or input limit against your own slippage and independent price policy.
4. Require `methodParameters.to` to be in the router allowlist approved for that chain and for the sources enabled in
   your partner configuration. Do not learn this allowlist from the response itself.
5. Decode the calldata and verify its selector, recipient, tokens, path, amount limits, deadline, Permit2 spender, and
   native value. Reject unknown commands or callbacks.
6. Ensure `methodParameters.value` is zero for an ERC-20 input and equals the intended native input when ETH is used.
7. Requote near submission time, then simulate the exact `{ from, to, data, value }` at the latest block. Reject a
   revert, unexpected transfer, unknown approval, or changed recipient.

The endpoint does not check the filler's balances, allowances, signing policy, or final transaction state.

### Permit2 responses

Do not sign `permitData` until the integration has decoded whether it uses Permit2 `AllowanceTransfer`,
`SignatureTransfer`, or a witness transfer, and checked the complete EIP-712 domain and message. At minimum, verify:

- chain ID and Permit2 verifying contract
- owner and allowed spender
- token and raw amount
- nonce, expiration, and signature deadline
- requested transfer amount and final recipient in the submitted calldata

An allowance permit does not by itself authorize a particular recipient or prove an intent to execute a particular
quote. Claim recipient or quote binding only when the decoded witness type actually signs those fields. Otherwise,
enforce them independently when validating the final calldata.

Follow the signed-permit requote or submission flow supplied during partner onboarding. Do not append a signature to
calldata or reuse a permit across quotes unless the documented flow explicitly requires it.

### Other response fields

| Field | Description |
| --- | --- |
| `routing` | Routing mode used for this response. |
| `quote.input.amount`, `quote.output.amount` | Raw integer amounts in each token's smallest unit. They are not always wei. |
| `quote.slippage` | Slippage percentage applied by the quote. Confirm it matches the request and your policy. |
| `quote.gasFee`, `quote.gasFeeUSD` | Estimates only. Actual gas cost can differ. |
| `quote.route` | Ordered route metadata. Validate each source and pool rather than trusting display labels. |
| `quote.quoteId`, `requestId` | Correlation IDs for logs and support. They are not execution authorization. |

## Errors

| Status | `errorCode` | Cause |
| --- | --- | --- |
| `400` | `VALIDATION_ERROR` | Missing or malformed field, partner mismatch, or unsupported chain. |
| `403` | Not applicable | Missing or invalid API key. The gateway rejects the request. |
| `404` | `NO_QUOTES_AVAILABLE` | No configured source returned a usable quote. This does not prove that no market exists elsewhere. |
| `429` | `TOO_MANY_REQUESTS` | Rate limit or quota exceeded. Honor `Retry-After`. |
| `500` | Varies | Service or upstream failure. Retry only when the request is idempotent, with bounded exponential backoff. |

## Getting access

Request access through an established Ring integration contact whose identity you have independently verified. Provide
the project name, website or app URL, intended use, estimated traffic, and filler or executor contract address. Ring
will provide the API key, partner ID, enabled sources, approved router allowlist, and any partner-specific execution
steps through that verified onboarding channel. Do not send credentials, signatures, or other secrets through public
issues, chat rooms, or an unverified email address.
