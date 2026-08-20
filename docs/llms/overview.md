---
id: overview
sidebar_position: 1
title: AI and LLM Resources
---

# AI and LLM Resources

Ring publishes two context files for coding assistants:

- [`llms.txt`](/llms.txt) is a short, curated product map with the main integration rules and links.
- [`llms-full.txt`](https://docs.ring.exchange/llms-full.txt) contains a larger curated set of reviewed integration
  pages.

Use `llms.txt` for normal questions. Use `llms-full.txt` only when the model needs the included guide text. The full file
does not contain every page and does not replace source review, onchain verification, or transaction simulation.

## Important context to preserve

When prompting an AI tool, state which surface you are using:

- Ring Swap for native pairs, swaps, and liquidity
- Few Protocol for FewToken wrapping and validation
- Uniswap v4 Integration for FewToken or Few hooks used with Uniswap v4

Always verify generated code against current [deployments](/contracts/v2/deployments) and
[network pool information](/contracts/v2/pools). Test contract integrations before using real funds.

Treat model output as untrusted. Check package versions, chain ID, bytecode, FewFactory mappings, pairs, approval
spenders, recipients, raw integer amounts, native value, price limits, deadlines, Permit2 data, and decoded calldata.
Never provide a model with private keys, seed phrases, API keys, signed transactions, or production secrets.

See [Security and Risk](/security-and-risk) before signing or submitting a generated transaction.

For editor setup examples, see [Use Ring docs in a coding assistant](/ai-coding/overview).
