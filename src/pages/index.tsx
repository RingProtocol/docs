import React, { FC } from 'react'

import Link from '@docusaurus/Link'
import Layout from '@theme/Layout'

import { ArrowRight, Emblem1, Github } from '../components/Icons'

const tasks = [
  {
    title: 'Use Ring',
    description: 'Swap, manage liquidity, or browse pools in the Ring Interface.',
    to: 'https://app.ring.exchange/',
  },
  {
    title: 'Integrate Ring Swap',
    description: 'Start with the native AMM, network deployments, and contract guides.',
    to: '/contracts/v2/overview',
  },
  {
    title: 'Build with the SDK',
    description: 'Create FewToken-aware pairs, routes, quotes, and trades in TypeScript.',
    to: '/sdk/v2/overview',
  },
  {
    title: 'Use the Routing API',
    description: 'Request partner quotes with execution-ready router calldata.',
    to: '/api/routing/overview',
  },
]

const products = [
  {
    eyebrow: 'Asset layer',
    title: 'Few Protocol',
    description: 'Resolves and wraps original ERC-20 assets into canonical FewToken addresses.',
    to: '/concepts/few-protocol',
  },
  {
    eyebrow: 'Native AMM',
    title: 'Ring Swap (v2)',
    description: 'Provides FewToken pools, swaps, liquidity, and routing on supported networks.',
    to: '/contracts/v2/overview',
  },
  {
    eyebrow: 'External environment',
    title: 'Uniswap v4 Integration',
    description: 'Covers FewToken and Few hooks used with Uniswap v4 contracts.',
    to: '/contracts/v4/overview',
  },
]

const references = [
  {
    title: 'Contract deployments',
    description: 'Factory, router, wrapper, Permit2, and related addresses by network.',
    to: '/contracts/v2/deployments',
  },
  {
    title: 'Networks and pools',
    description: 'Ethereum pool discovery plus published BSC and HyperEVM pair addresses.',
    to: '/contracts/v2/pools',
  },
  {
    title: 'FewToken integration',
    description: 'Resolve canonical wrappers and select the correct approval spender.',
    to: '/contracts/v2/fewtoken/integrating',
  },
  {
    title: 'Contract map',
    description: 'Choose the correct contract for wrapping, pair discovery, swaps, or v4 integration.',
    to: '/contracts/overview',
  },
]

const repositories = [
  { title: 'Ring Swap core', to: 'https://github.com/RingProtocol/few-v2-core' },
  { title: 'Ring Swap periphery', to: 'https://github.com/RingProtocol/few-periphery' },
  { title: 'Ring SDKs', to: 'https://github.com/RingProtocol/sdks' },
  { title: 'Documentation', to: 'https://github.com/RingProtocol/docs' },
]

const Home = () => {
  return (
    <Layout title="Ring Protocol Docs" description="Build with FewToken, Ring Swap, and Ring integrations">
      <main className="content-page-padding w-full">
        <div className="default-grid py-padding-x-large">
          <section className="col-span-full rounded-large border border-light-surface-3 bg-light-surface-2 p-6 dark:border-dark-surface-3 dark:bg-dark-surface-2 sm:col-span-5 sm:p-8">
            <div className="inline-flex items-center rounded-full bg-light-surface-1 px-4 py-2 dark:bg-dark-surface-1">
              <Emblem1 className="mr-2" />
              <span className="button-label-4 text-light-accent-1 dark:text-dark-accent-1">
                Developer documentation
              </span>
            </div>
            <h1 className="mt-6 serif-heading-0 text-light-neutral-1 dark:text-dark-neutral-1">
              Build with Ring without sorting through product versions first.
            </h1>
            <p className="mt-4 max-w-2xl subheading-2 text-light-neutral-2 dark:text-dark-neutral-2">
              Ring has a wrapped asset layer, one native AMM, and selected external integrations. Choose the task you
              need to complete, then use the matching contracts, SDK, or API.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/concepts/overview"
                className="rounded-small bg-light-accent-1 px-4 py-2 button-label-3 text-white transition hover:opacity-90 dark:bg-dark-accent-1"
              >
                Start here
              </Link>
              <Link
                to="/contracts/v2/pools"
                className="rounded-small border border-light-surface-3 bg-light-surface-1 px-4 py-2 button-label-3 text-light-neutral-1 transition hover:border-light-accent-1 hover:text-light-accent-1 dark:border-dark-surface-3 dark:bg-dark-surface-1 dark:text-dark-neutral-1 dark:hover:border-dark-accent-1 dark:hover:text-dark-accent-1"
              >
                Find a pool
              </Link>
            </div>
          </section>

          <aside className="col-span-full mt-6 sm:col-span-3 sm:mt-0">
            <div className="rounded-large border border-light-surface-3 bg-light-surface-1 p-6 dark:border-dark-surface-3 dark:bg-dark-surface-1">
              <p className="button-label-4 uppercase tracking-[0.08em] text-light-accent-1 dark:text-dark-accent-1">
                Choose a task
              </p>
              <div className="mt-4 space-y-3">
                {tasks.map((task) => (
                  <LinkRow key={task.title} {...task} />
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="divider" />

        <section className="py-padding-x-large">
          <div className="max-w-3xl">
            <p className="button-label-4 uppercase tracking-[0.08em] text-light-accent-1 dark:text-dark-accent-1">
              Product map
            </p>
            <h2 className="mt-3 heading-2 text-light-neutral-1 dark:text-dark-neutral-1">
              Three surfaces, three different jobs
            </h2>
            <p className="mt-3 body-2 text-light-neutral-2 dark:text-dark-neutral-2">
              Few Protocol is the asset layer. Ring Swap is the native trading system. Uniswap v4 is an external
              environment used by specific Ring integrations.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {products.map((product) => (
              <LinkCard key={product.title} {...product} />
            ))}
          </div>
        </section>

        <div className="divider" />

        <section className="py-padding-x-large">
          <div className="max-w-3xl">
            <p className="button-label-4 uppercase tracking-[0.08em] text-light-accent-1 dark:text-dark-accent-1">
              Reference
            </p>
            <h2 className="mt-3 heading-2 text-light-neutral-1 dark:text-dark-neutral-1">
              Select the network and workflow before copying an address
            </h2>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {references.map((reference) => (
              <LinkCard key={reference.title} eyebrow="Developer path" {...reference} />
            ))}
          </div>
        </section>

        <div className="divider" />

        <section className="default-grid py-padding-x-large">
          <div className="col-span-full sm:col-span-2">
            <p className="button-label-4 uppercase tracking-[0.08em] text-light-accent-1 dark:text-dark-accent-1">
              Source code
            </p>
            <h2 className="mt-3 heading-2 text-light-neutral-1 dark:text-dark-neutral-1">Repositories</h2>
          </div>
          <div className="col-span-full mt-6 flex flex-wrap gap-3 sm:col-span-6 sm:mt-0">
            {repositories.map((repository) => (
              <Link
                key={repository.title}
                to={repository.to}
                className="group flex items-center rounded-medium bg-light-surface-2 px-padding-medium py-padding-small transition hover:bg-light-accent-2 dark:bg-dark-surface-2 dark:hover:bg-dark-accent-2"
              >
                <Github className="h-5 w-5" />
                <span className="ml-3 subheading-2 text-light-neutral-1 transition group-hover:text-light-accent-1 dark:text-dark-neutral-1 dark:group-hover:text-dark-accent-1">
                  {repository.title}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Home

const LinkRow: FC<{ title: string; description: string; to: string }> = ({ title, description, to }) => (
  <Link
    to={to}
    className="flex items-start justify-between rounded-small border border-light-surface-3 px-4 py-3 transition hover:border-light-accent-1 hover:bg-light-accent-2 dark:border-dark-surface-3 dark:hover:border-dark-accent-1 dark:hover:bg-dark-accent-2"
  >
    <span>
      <span className="block subheading-2 text-light-neutral-1 dark:text-dark-neutral-1">{title}</span>
      <span className="mt-1 block body-3 text-light-neutral-2 dark:text-dark-neutral-2">{description}</span>
    </span>
    <ArrowRight className="ml-3 mt-1 h-4 w-4 shrink-0" />
  </Link>
)

const LinkCard: FC<{ eyebrow: string; title: string; description: string; to: string }> = ({
  eyebrow,
  title,
  description,
  to,
}) => (
  <Link
    to={to}
    className="group rounded-large border border-light-surface-3 bg-light-surface-2 p-6 transition hover:border-light-accent-1 hover:bg-light-accent-2 dark:border-dark-surface-3 dark:bg-dark-surface-2 dark:hover:border-dark-accent-1 dark:hover:bg-dark-accent-2"
  >
    <p className="button-label-4 uppercase tracking-[0.08em] text-light-accent-1 dark:text-dark-accent-1">{eyebrow}</p>
    <div className="mt-3 flex items-center justify-between">
      <h3 className="subheading-1 text-light-neutral-1 dark:text-dark-neutral-1">{title}</h3>
      <ArrowRight className="h-5 w-5 opacity-0 transition group-hover:opacity-100" />
    </div>
    <p className="mt-2 body-2 text-light-neutral-2 dark:text-dark-neutral-2">{description}</p>
  </Link>
)
