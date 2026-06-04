import math from 'remark-math'
import katex from 'rehype-katex'
import tailwindPlugin from './plugins/tailwind-config.cjs'
import dotenv from 'dotenv'
import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'

dotenv.config()

const config: Config = {
  staticDirectories: ['static'],
  customFields: {
    stagingEnv: process.env.REACT_APP_STAGING,
    nodeEnv: process.env.NODE_ENV,
  },
  title: 'Ring Protocol Docs',
  tagline: 'Developer documentation and integration guides',
  url: process.env.DOCS_SITE_URL || 'https://docs.ring.exchange',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  favicon: 'img/favicon.png',
  organizationName: 'RingProtocol',
  projectName: 'docs',
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'referrer',
        content: 'strict-origin-when-cross-origin',
      },
    },
  ],
  themeConfig: {
    image: 'img/twitter_card_bg.jpg',
    prism: {
      additionalLanguages: ['solidity'],
    },
    // algolia: {
    //   apiKey: '32465e2ab6f7554ff014e64c0d92171c', //  Search-Only API Key (Public & safe to commit)
    //   indexName: process.env.ALGOLIA_INDEX_NAME || 'ring-docs',
    //   appId: 'S0IDD0YGLZ',
    // },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    navbar: {
      items: [
        {
          type: 'doc',
          docId: 'concepts/overview',
          label: 'Concepts',
        },
        {
          type: 'doc',
          docId: 'contracts/overview',
          label: 'Contracts',
        },
        {
          type: 'doc',
          docId: 'sdk/v2/overview',
          label: 'SDKs',
        },
        {
          type: 'doc',
          docId: 'api/overview',
          label: 'APIs',
        },
        {
          type: 'doc',
          docId: 'wallet/overview',
          label: 'Wallet',
        },
        // {
        //   type: 'doc',
        //   docId: 'builder-support/get-funded',
        //   label: 'Support',
        // },
        {
          type: 'doc',
          docId: 'llms/overview',
          label: 'LLMs',
        },
        {
          label: 'Share Feedback',
          to: 'https://discord.com/invite/TefBNDZBQP',
          target: '_blank',
          rel: 'noreferrer',
        },
        // {
        //   label: "Ring Foundation",
        //   to: 'https://x.com/ProtocolRing',
        //   target: '_blank',
        //   rel: 'noreferrer',
        // },
        {
          label: 'GitHub',
          to: 'https://github.com/RingProtocol/docs/',
          target: '_blank',
          rel: 'noreferrer',
        },
      ],
      /* using custom navbar */
    },
    footer: {
      /* using custom footer */
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',
      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          editUrl: 'https://github.com/RingProtocol/docs/tree/main/',
          includeCurrentVersion: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  plugins: [
    tailwindPlugin,
    ['@saucelabs/theme-github-codeblock', {}],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/wallet/integrate-dapp/dapp-integration',
            from: ['/wallet/guides/dapp-integration.md', '/wallet/guides/dapp-integration.mdx'],
          },
          {
            to: '/wallet/overview',
            from: ['/wallet/overview.md', '/wallet/overview.mdx'],
          },
          {
            to: '/concepts/overview',
            from: [
              '/concepts',
              '/protocol/V2/concepts/core-',
              '/protocol/V2/concepts/protocol',
              '/protocol/V2/concepts/protocol-overview/',
            ],
          },
          {
            to: '/concepts/protocol/swaps',
            from: [
              '/protocol/concepts/advanced/integration-issues',
              '/protocol/V2/concepts/core-concepts/swaps',
              '/concepts/introduction/swaps',
              '/concepts/protocol/liquidity',
            ],
          },
          {
            to: '/concepts/protocol/fees',
            from: ['/protocol/V2/concepts/advanced-topics/fees'],
          },
          {
            to: '/concepts/glossary',
            from: ['/protocol/V2/concepts/protocol-overview/glossary', '/v2/glossary'],
          },
          {
            to: '/contracts/overview',
            from: ['/contracts/', '/reference/smart-contracts', '/protocol', '/v4'],
          },
          {
            to: '/contracts/v2/deployments',
            from: ['/docs/deployments', '/deployments'],
          },
          {
            to: '/contracts/v2/overview',
            from: ['/contracts/fewv2', '/contracts/fewv2/overview'],
          },
          {
            to: '/contracts/v2/deployments',
            from: '/contracts/fewv2/deployments',
          },
          {
            to: '/contracts/v2/fewtoken/integrating',
            from: '/contracts/fewv2/integrating',
          },
          {
            to: '/contracts/v2/fewtoken/get-fewtoken-address-via-fewfactory',
            from: '/contracts/fewv2/get-fewtoken-address-via-fewfactory',
          },
          {
            to: '/contracts/v2/fewtoken/get-erc20-token-address-via-fewfactory',
            from: '/contracts/fewv2/get-erc20-token-address-via-fewfactory',
          },
          {
            to: '/contracts/v2/concepts/how-ring-swap-works/ring-swap-model',
            from: [
              '/protocol/V2',
              '/protocol/V2/concepts/protocol-',
              '/v2/',
              '/contracts/v2',
              '/contracts/v2/overview.md',
              '/contracts/v2/concepts/protocol-overview',
              '/contracts/v2/concepts/protocol-overview/how-',
              '/contracts/v2/concepts/protocol-overview/ring-swap-model',
              '/protocol/v2/introduction',
            ],
          },
          {
            to: '/contracts/v2/concepts/how-ring-swap-works/ecosystem-participants',
            from: '/contracts/v2/concepts/protocol-overview/ecosystem-participants',
          },
          {
            to: '/contracts/v2/concepts/how-ring-swap-works/glossary',
            from: '/contracts/v2/concepts/protocol-overview/glossary',
          },
          {
            to: '/contracts/v2/concepts/how-ring-swap-works/smart-contracts',
            from: [
              '/protocol/V2/reference/smart-contracts',
              '/protocol/V2/concepts/protocol-overview/smart-contracts',
              '/contracts/v2/concepts/protocol-overview/smart-contracts',
              '/contracts/v2/reference/smart-co',
            ],
          },
          {
            to: '/contracts/v2/overview',
            from: '/protocol/V2/reference/core',
          },
          {
            to: '/contracts/v2/concepts/core-concepts/pools',
            from: '/protocol/V2/concepts/advanced-topics/understanding-returns',
          },
          {
            to: '/contracts/v2/concepts/core-concepts/pools',
            from: '/protocol/V2/concepts/core-concepts/pools',
          },
          {
            to: '/contracts/v4/overview',
            from: [
              '/contracts/v4/concepts/v4-architecture-overview',
              '/contracts/v4/concepts/v4-',
              '/contracts/v4/concepts/overview',
              '/contracts/v4/concepts/intro-to-v4',
              '/concepts/overview4',
              '/contracts/v4/concepts/in-tro-to-v4',
            ],
          },
          {
            to: '/contracts/v4/guides/hooks/your-first-hook',
            from: [
              '/contracts/v4/first-hook/building-your-own-hook',
              '/tutorials/',
              '/contracts/v4/guides/hooks/setup',
            ],
          },
          {
            to: '/contracts/v4/guides/hooks/hook-deployment',
            from: [
              '/contracts/v4/concepts/hook-deployment',
              '/contracts/v4/first-hook/hook-deployment',
              '/contracts/v4/first-hook/testing-hooks',
            ],
          },
          {
            to: '/contracts/v4/guides/custom-accounting',
            from: '/contracts/v4/guides/hooks/Volatility-fee-hook',
          },
          {
            to: '/sdk/v2/overview',
            from: ['/sdk/2.0.0/introduction', '/sdk/2.0.0/reference/getting-started', '/v2/SDK/getting-started'],
          },
          {
            to: '/sdk/v2/guides/pricing',
            from: ['/sdk/2.0.0/guides/pricing', '/v2/advanced-topics/pricing', '/sdk/2.0.0/guides/pring'],
          },
          {
            to: '/sdk/v2/guides/trading',
            from: '/sdk/2.0.0/guides/trading',
          },
          {
            to: '/sdk/v2/guides/fetching-data',
            from: '/sdk/v2/reference/fetcher',
          },
          {
            to: '/sdk/v2/guides/quick-start',
            from: '/sdk/v2/reference/token',
          },
          {
            to: '/sdk/v2/reference/trade',
            from: '/sdk/2.0.0/reference/trade',
          },
          {
            to: '/sdk/core/reference/enums/ChainId',
            from: '/sdk/core/reference/enums/SupportedChainId',
          },
          {
            to: '/api/overview',
            from: '/sdk/subgraph/subgraph-data',
          },
          {
            to: '/',
            from: ['/developers/', '/conce'],
          },
        ],
        createRedirects() {
          return undefined
        },
      },
    ],
    [
      'docusaurus-plugin-llms',
      {
        // Options here
        generateLLMsTxt: false,
        generateLLMsFullTxt: true,
        docsDir: 'docs',
        ignoreFiles: [
          'examples/*',
          'plugins/*',
          'scripts/*',
          'src/*',
          'static/*',
          'submodules/*',
          'CONTRIBUTING.md',
          '02-overview.mdx',
          'docs/archived',
          'docs/concepts',
          'docs/contracts/permit2',
          'docs/contracts/smart-wallet',
          'docs/contracts/universal-router',
          'docs/contracts/v1',
          'docs/contracts/v2',
          'docs/sdk/swap-widget',
        ],
        title: 'LLMs.txt for Ring Protocol Documentation',
        description: 'Expanded reference documentation for Ring Protocol integrations, contracts, and SDKs',
        llmsFullTxtFilename: 'llms-full.txt',
        includeBlog: false,
        // Content cleaning options
        excludeImports: true,
        removeDuplicateHeadings: true,
        // Control documentation order
        includeOrder: [
          // 'docs/contracts/v4/*',
          // 'docs/sdk/v4/*',
          // 'docs/api/*',
        ],
        includeUnmatchedLast: true,
        // Path transformation options
        pathTransformation: {
          // Paths to ignore when constructing URLs (will be removed if found)
          ignorePaths: ['docs'],
          // Paths to add when constructing URLs (will be prepended if not already present)
          addPaths: [],
        },
        // Custom LLM files for specific documentation sections
        customLLMFiles: [],
      },
    ],
  ],
}
export default config
