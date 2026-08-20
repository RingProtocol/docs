# Ring Documentation

This web application contains all documentation for Ring Protocol products. It is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

# Information Architecture

The main navigation follows the reader's task instead of mirroring the source directory:

- **Start Here** defines Few Protocol, Ring Swap, and the boundary between native Ring products and external integrations.
- **Ring Swap (v2)** contains the native AMM, contract deployments, pools, FewToken wrapping, guides, and reference material.
- **Uniswap v4 Integration** contains Ring-specific FewToken and hook integration material. Generic v4 reference pages remain available by URL but do not dominate the sidebar.
- **Build** contains the Ring Swap SDK, SDK Core, and Routing API.
- **Ring Wallet** contains wallet use and dApp integration.
- **Reference** contains shared contracts and AI context resources.

Keep existing document URLs stable when reorganizing navigation. Prefer sidebar changes and redirects over moving
large groups of files in one change.

Each product should provide:

- an overview that says what the product is and when to use it
- task-based guides with a testable end state
- network-specific deployments and pool discovery where applicable
- technical reference material that is collapsed or removed from the main path

Before publishing an integration page:

- verify every chain-specific address and link
- use raw integer token units in executable examples
- document the exact approval spender for each flow
- require recipient, price-limit, deadline, and simulation checks
- keep unreviewed pages out of `llms-full.txt`

## Adding Documentation

> **After deploying your change, please make sure you [update the search indices](#how-to-update-search-indices-with-algolia) if a new file was added as part of the change**
### Overview
A product overview should answer:

- What is this product?
- When should a reader use it instead of another Ring surface?
- What are its high-level components?
- Which task should the reader start with?
- Where do the source, deployment, SDK, API, and security references live?

A good example is the [Ring Swap overview](./docs/contracts/v2/overview.md).

### Guides
> Guides should follow the **Principles of a Good Guide**:
- A guide corresponds to a reusable piece of code that demonstrates a single concept in the Ring ecosystem.
- Guides have three parts:
    1. An **introduction** that explains the concept that the piece of code implements and a summary of what the guide will cover and result in.
    2. A step-by-step **walkthrough** of each line of the example code 
    3. An **output** or end state that users can test against what they’re seeing to know if they implemented correctly
- Guides do not show source code snippets that should not be included in the example (IE using snippets from a source contract to explain how to integrate with it). If a guide needs to reference an external piece of code it should link to the source code or technical reference.
- We keep Links and References ***only at the bottom*** of pages and reference them using footnotes to **keep distractions at a minimum**
- Our goal is to have the developer build something within **10 minutes per guide** but also provide the option for a deep dive by providing references to extra content.
- Guides should end with a **transition** to the next one, recommendations and real world projects examples
- Each guides should refer to a code example in our example-repo
- Guides should be standalone pieces
- Use the least dependencies as possible
- Input changes (eg address, tokens, amounts) should be in the code

By implementing these consistent principles Ring will have docs that are easy to understand and produce reusable code for its community.


A good example is a focused product-specific guide with a clear integration path and runnable end state.

### Technical References
This should contain the technical reference for the exported interfaces. A good example is the [Ring SDK Core reference](./docs/sdk/core/reference/overview.md).
These files can be created using the [guides below](#how-to-create-a-technical-reference).

# Contributing to Ring Docs

## Guidelines
Contributing to the docs site is a great way to get involved in the dev community and help other developers along the way! Check out our guidelines [here](./CONTRIBUTING.md).

## Checklist for adding a new product

- Did I pick the right section for the product? 
- Did I create the product folder?
- Did I introduce any new concepts? If so add under */concepts/<category_name><product_name>*
- Did I include an Overview of the product under *<category_name>/<product_name>/overview* ?
- Did I include Guides of the product under *<category_name>/<product_name>/guides* ?
- Did I include Technical Reference of the product under *<category_name>/<product_name>/reference* ?
- Did I give a descriptive name/id to each document? This is important because that shows up in the URL
- Did I open a PR using the [contributing](./CONTRIBUTING.md) guidelines?
- Did I [update the search indices](#how-to-update-search-indices-with-algolia) after my change was deployed?

## Checklist example

Let's walk through an example by considering the *Permit2* smart contract:
-  Did I pick the right section for the product? 
    - In this case, [contracts](./docs/contracts/) 
- Did I create the product folder? 
    - In this case, [yes](./docs/contracts/permit2/)
- Did I introduce any new concepts? 
    - No
- Did I include an Overview of the product under */contracts/permit2/overview* ?
    - Yes, I did add them [here](./docs/contracts/permit2/overview.md)
- Did I include Guides of the product under *contracts/permit2/guides* ?
    - No. Add that directory only when Permit2-specific guide content is ready.
- Did I include Technical Reference of the product under *contracts/permit2/reference* ?
    - Yes I added them [here](./docs/contracts/permit2/reference)
- Did I open a PR using the [Contributing](./CONTRIBUTING.md) guidelines?
    - Yes
- Did I update the search indices after my change was deployed?
    - Yes I did using the [guides below](#how-to-update-search-indices-with-algolia)

# How to create a Technical Reference
## How to generate markdown files from solidity Natspec comments

Install solidity doc gen
`yarn add --dev solidity-docgen`

Configure solidity-docgen in your `hardhat.config.js` file:
```javascript
require('solidity-docgen');

module.exports = {
  docgen: {
    path: './docs',
    clear: true,
    runOnCompile: false,
    templates: './templates', // optional custom templates
  }
};
```

Put the updated template `contract.hbs` in a /templates folder (optional)

Run `npx hardhat docgen` to generate documentation

# How to generate markdown files from typescript comments

`yarn add --dev typedoc typedoc-plugin-markdown`

Depending on how your project was created, you might have to install Typescript:
`yarn add --dev typescript`

`yarn typedoc --out <docs> src/index.ts`

You might have to use the `--skipErrorChecking` flag to the `typedoc` command for cases where types are fetched during transpile time, such as contract ABIs.

See https://www.npmjs.com/package/typedoc-plugin-markdown for details.

# How to Update search indices with algolia

- Create an .env file with `APPLICATION_ID` and the `API_KEY` (Admin API Key w/ write access, should be kept secret). 
If you don't have those, one for the Engineering Managers should be able to help you.
- Edit config.json file if needed:
    - Start url from updated website
    - Sitemap URL from updated website: eg for docs: https://docs.ring.exchange/sitemap.xml
    - Use "ring-docs" as the index name
- [Install](https://www.docker.com/products/docker-desktop/) and start running Docker Desktop
- Install jq `brew install jq`
- Run `docker run -it --env-file=.env -e "CONFIG=$(cat ./config.json | jq -r tostring)" algolia/docsearch-scraper`

## Installation

```console
yarn install
```

## Local Development

```console
yarn run start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Clear cache

```console
yarn docusaurus clear
```

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.


## Deployment
The application is automatically deployed to production on Vercel when changes are merged into **main**.
