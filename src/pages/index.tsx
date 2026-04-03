import React, { FC } from 'react'

import Link from '@docusaurus/Link'
import Layout from '@theme/Layout'

import {
  Emblem1,
  ThickX,
  Hexagon,
  BookOpen,
  ArrowRight,
  Github,
  Npm,
} from '../components/Icons'

export const actions = [
  {
    title: 'Understand the protocol',
    icon: 'book-open',
    to: '/concepts/overview',
    text: 'Start with Ring concepts, pools, swaps, liquidity, and the protocol architecture.',
    color: 'orange',
  },
  {
    title: 'Integrate the SDKs',
    icon: 'x',
    to: '/sdk/v2/overview',
    text: 'Use Ring SDKs to fetch data, price assets, route trades, and wire up app flows.',
    color: 'brown',
  },
  {
    title: 'Work with contracts',
    icon: 'hexagon',
    to: '/contracts/overview',
    text: 'Reference deployments, contract architecture, and extension points for protocol integrations.',
    color: 'green',
  },
]

const heroLinks = [
  { label: 'Concepts', to: '/concepts/overview' },
  { label: 'Contracts', to: '/contracts/overview' },
  { label: 'SDKs', to: '/sdk/v2/overview' },
  { label: 'Wallet', to: '/wallet/overview' },
]

const heroHighlights = [
  { label: 'Core sections', value: '4' },
  { label: 'Quick start paths', value: '12+' },
  { label: 'Reference docs', value: '200+' },
]

const sectionDescriptions = {
  sdk: 'Start with integration patterns, routing, price data, and liquidity flows for apps built on Ring.',
  contracts: 'Jump into contract setup, swaps, liquidity, hooks, and other protocol extension surfaces.',
  resources: 'Reach repositories, deployment references, community channels, and protocol resources quickly.',
}

export const developerLinks = [
  {
    title: 'RingProtocol/v4-core',
    href: 'https://github.com/RingProtocol/v4-core/',
    icon: 'github',
  },
  {
    title: 'RingProtocol/v4-periphery',
    href: 'https://github.com/RingProtocol/v4-periphery',
    icon: 'github',
  },
  {
    title: 'RingProtocol/ring-sdks',
    href: 'https://github.com/RingProtocol/ring-sdks',
    icon: 'github',
  },
  {
    title: 'Deployment addresses',
    href: '/contracts/v4/deployments',
    icon: 'github',
  },
]

export const dAppGuides = [
  {
    title: 'Fetch token prices',
    text: 'Understand pricing and reserve-based quotes in Ring Swap (v2)',
    to: '/sdk/v2/guides/pricing',
  },
  {
    title: 'Create a Trade',
    text: 'Construct and execute trades with the v2 SDK',
    to: '/sdk/v2/guides/trading',
  },
  {
    title: 'Route trades',
    text: 'Fetch pair and market data for routing logic',
    to: '/sdk/v2/guides/fetching-data',
  },
  {
    title: 'Provide liquidity',
    text: 'Derive pair addresses and prepare integrations around Ring Swap (v2)',
    to: '/sdk/v2/guides/getting-pair-addresses',
  },
]
export const smartContractGuides = [
  {
    title: 'Setup your environment',
    text: 'Prepare your local environment by installing the required dependencies',
    to: '/contracts/v4/quickstart/hooks/setup',
  },
  {
    title: 'Implement a Swap',
    text: 'Start swapping from a smart contract in Solidity',
    to: '/contracts/v4/quickstart/swap',
  },
  {
    title: 'Provide Liquidity',
    text: 'Provide liquidity from a smart contract in Solidity',
    to: '/contracts/v4/quickstart/manage-liquidity/setup-liquidity',
  },
  {
    title: 'Implement Flash Swaps',
    text: 'Implement Flash Swaps from a smart contract in Solidity',
    to: '/contracts/v4/guides/flash-accounting',
  },
  {
    title: 'Create a Hook',
    text: 'Create your first hook to customize pool behavior in Solidity',
    to: '/contracts/v4/guides/hooks/your-first-hook',
  },
]

const Home = () => {
  return (
    <Layout title="Ring Protocol Docs" description="Guides and technical references for building on Ring Protocol">
      <div className="content-page-padding w-full flex flex-col">
        <div className="default-grid py-padding-x-large">
          <section className="col-span-full sm:col-span-5 rounded-large border border-light-surface-3 bg-light-surface-2 p-6 dark:border-dark-surface-3 dark:bg-dark-surface-2 sm:p-8">
            <div className="inline-flex items-center rounded-full bg-light-surface-1 px-4 py-2 dark:bg-dark-surface-1">
              <Emblem1 className="mr-2" />
              <span className="button-label-4 text-light-accent-1 dark:text-dark-accent-1">Developer documentation</span>
            </div>
            <h1 className="mt-6 serif-heading-0 text-light-neutral-1 dark:text-dark-neutral-1">Build on Ring without guessing where to start.</h1>
            <p className="mt-4 max-w-2xl subheading-2 text-light-neutral-2 dark:text-dark-neutral-2">
              Ring docs are organized around the choices builders actually make: understand the protocol, integrate SDKs,
              ship contract logic, or connect a wallet.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {heroLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="rounded-small border border-light-surface-3 bg-light-surface-1 px-4 py-2 button-label-3 text-light-neutral-1 transition hover:border-light-accent-1 hover:text-light-accent-1 dark:border-dark-surface-3 dark:bg-dark-surface-1 dark:text-dark-neutral-1 dark:hover:border-dark-accent-1 dark:hover:text-dark-accent-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-10 grid grid-cols-1 gap-4 border-t border-light-surface-3 pt-6 dark:border-dark-surface-3 sm:grid-cols-3">
              {heroHighlights.map((item) => (
                <div key={item.label}>
                  <p className="heading-3 text-light-neutral-1 dark:text-dark-neutral-1">{item.value}</p>
                  <p className="body-3 text-light-neutral-2 dark:text-dark-neutral-2">{item.label}</p>
                </div>
              ))}
            </div>
          </section>

          <aside className="col-span-full sm:col-span-3 flex flex-col gap-gap-large">
            <div className="rounded-large border border-light-surface-3 bg-light-surface-1 p-6 dark:border-dark-surface-3 dark:bg-dark-surface-1">
              <p className="button-label-4 uppercase tracking-[0.08em] text-light-accent-1 dark:text-dark-accent-1">Start here</p>
              <div className="mt-4 space-y-4">
                {actions.map((action) => (
                  <Link
                    key={action.title}
                    to={action.to}
                    className="block rounded-medium border border-light-surface-3 bg-light-surface-2 p-4 transition hover:border-light-accent-1 hover:bg-light-accent-2 dark:border-dark-surface-3 dark:bg-dark-surface-2 dark:hover:border-dark-accent-1 dark:hover:bg-dark-accent-2"
                  >
                    <p className="subheading-2 text-light-neutral-1 dark:text-dark-neutral-1">{action.title}</p>
                    <p className="mt-1 body-3 text-light-neutral-2 dark:text-dark-neutral-2">{action.text}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-large border border-light-surface-3 bg-light-surface-1 p-6 dark:border-dark-surface-3 dark:bg-dark-surface-1">
              <p className="button-label-4 uppercase tracking-[0.08em] text-light-accent-1 dark:text-dark-accent-1">Popular paths</p>
              <div className="mt-4 space-y-3">
                {dAppGuides.slice(0, 2).map((card) => (
                  <ArticleLinkRow key={card.title} title={card.title} url={card.to} />
                ))}
                {smartContractGuides.slice(0, 2).map((card) => (
                  <ArticleLinkRow key={card.title} title={card.title} url={card.to} />
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="default-grid">
          <Link className="col-span-full sm:col-span-4 rounded-large bg-light-orange-fade p-6 dark:bg-dark-orange-fade" to={actions[0].to}>
            <div className="mb-10 flex">
              <div className="flex flex-row items-center rounded-small bg-light-surface-1 px-3 py-2 dark:bg-dark-surface-1">
                <BookOpen />
                <span className="ml-1 button-label-4 text-light-accent-1 dark:text-dark-accent-1">Protocol overview</span>
              </div>
            </div>
            <h3 className="subheading-1 text-light-orange-vibrant dark:text-dark-orange-vibrant">{actions[0].title}</h3>
            <p className="mt-2 body-2 text-light-neutral-2 dark:text-dark-neutral-2">{actions[0].text}</p>
          </Link>
          <div className="col-span-full sm:col-span-4 flex flex-col gap-gap-large">
            <Link className="rounded-large bg-light-brown-fade p-6 dark:bg-dark-brown-fade" to={actions[1].to}>
              <div className="mb-10 flex">
                <ThickX />
              </div>
              <h3 className="subheading-1 text-light-brown-vibrant dark:text-dark-brown-vibrant">{actions[1].title}</h3>
              <p className="mt-2 body-2 text-light-neutral-2 dark:text-dark-neutral-2">{actions[1].text}</p>
            </Link>
            <Link className="rounded-large bg-light-green p-6 dark:bg-dark-green" to={actions[2].to}>
              <div className="mb-10 flex">
                <Hexagon />
              </div>
              <h3 className="subheading-1 text-green-base dark:text-green-vibrant">{actions[2].title}</h3>
              <p className="mt-2 body-2 text-light-neutral-2 dark:text-dark-neutral-2">{actions[2].text}</p>
            </Link>
          </div>
        </div>

        <div className="divider"></div>

        <div className="default-grid py-padding-x-large">
          <div className="col-span-full sm:col-span-2">
            <p className="button-label-4 uppercase tracking-[0.08em] text-light-accent-1 dark:text-dark-accent-1">SDK workflows</p>
            <h3 className="mt-3 text-light-neutral-1 dark:text-dark-neutral-1 heading-2">Build with Ring SDKs</h3>
            <p className="mt-3 body-2 text-light-neutral-2 dark:text-dark-neutral-2">{sectionDescriptions.sdk}</p>
          </div>
          <div className="col-span-full sm:col-span-6 default-grid mt-6 sm:mt-0">
            {dAppGuides.map((card) => (
              <ArticleLinkCard key={card.title} title={card.title} description={card.text} url={card.to} />
            ))}
          </div>
        </div>

        <div className="divider" />

        <div className="default-grid py-padding-x-large">
          <div className="col-span-full sm:col-span-2">
            <p className="button-label-4 uppercase tracking-[0.08em] text-light-accent-1 dark:text-dark-accent-1">Contract workflows</p>
            <h3 className="mt-3 text-light-neutral-1 dark:text-dark-neutral-1 heading-2">Build with Ring contracts</h3>
            <p className="mt-3 body-2 text-light-neutral-2 dark:text-dark-neutral-2">{sectionDescriptions.contracts}</p>
          </div>
          <div className="col-span-full sm:col-span-6 default-grid mt-6 sm:mt-0">
            {smartContractGuides.map((card) => (
              <ArticleLinkCard key={card.title} title={card.title} description={card.text} url={card.to} />
            ))}
          </div>
        </div>

        <div className="divider" />

        <div className="default-grid py-padding-x-large">
          <div className="col-span-full sm:col-span-2">
            <p className="button-label-4 uppercase tracking-[0.08em] text-light-accent-1 dark:text-dark-accent-1">Resources</p>
            <h3 className="mt-3 text-light-neutral-1 dark:text-dark-neutral-1 heading-2">Quick Links</h3>
            <p className="mt-3 body-2 text-light-neutral-2 dark:text-dark-neutral-2">{sectionDescriptions.resources}</p>
          </div>
          <div className="col-span-full sm:col-span-6 flex flex-wrap sm:mt-0">
            {developerLinks.map((devLink) => {
              return (
                <Link
                  key={devLink.title}
                  to={devLink.href}
                  className="mt-6 mr-4 group flex flex-row items-center transition rounded-medium py-padding-small px-padding-medium bg-light-surface-2 dark:bg-dark-surface-2 hover:bg-light-accent-2 hover:dark:bg-dark-accent-2"
                >
                  <>
                    {devLink.icon === 'github' ? <Github className="w-6 h-6" /> : null}
                    {devLink.icon === 'npm' ? <Npm className="w-5 h-5" /> : null}
                    <p className="transition group-hover:text-light-accent-1 group-hover:dark:text-dark-accent-1 ml-3 subheading-2 text-light-neutral-1 dark:text-dark-neutral-1">
                      {devLink.title}
                    </p>
                  </>
                </Link>
              )
            })}
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default Home

const ArticleLinkCard: FC<{
  title: string
  description: string
  url: string
}> = ({ title, description, url }) => {
  return (
    <Link
      href={url}
      className="col-span-full sm:col-span-4 md:col-span-2 group flex flex-row transition rounded-medium py-padding-small px-padding-medium bg-light-surface-2 dark:bg-dark-surface-2 hover:bg-light-accent-2 hover:dark:bg-dark-accent-2"
      target="_self"
    >
      <div className="flex flex-col w-full space-y-1">
        <h4 className="transition subheading-2 text-light-neutral-1 dark:text-dark-neutral-1 group-hover:text-light-accent-1 dark:group-hover:text-dark-accent-1">
          {title}
        </h4>
        <p className="body-3 text-light-neutral-2 dark:text-dark-neutral-2">{description}</p>
      </div>
      <div className="transition opacity-0 group-hover:opacity-100">
        <ArrowRight className="my-1 w-5 h-5" />
      </div>
    </Link>
  )
}

const ArticleLinkRow: FC<{
  title: string
  url: string
}> = ({ title, url }) => {
  return (
    <Link
      href={url}
      className="flex items-center justify-between rounded-small border border-light-surface-3 px-4 py-3 transition hover:border-light-accent-1 hover:bg-light-accent-2 dark:border-dark-surface-3 dark:hover:border-dark-accent-1 dark:hover:bg-dark-accent-2"
      target="_self"
    >
      <span className="body-3 text-light-neutral-1 dark:text-dark-neutral-1">{title}</span>
      <ArrowRight className="h-4 w-4" />
    </Link>
  )
}
