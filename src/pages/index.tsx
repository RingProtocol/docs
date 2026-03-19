import React, { FC } from 'react'

import Link from '@docusaurus/Link'
import Layout from '@theme/Layout'
import cn from 'classnames'

import {
  Emblem1,
  Emblem2,
  ThickX,
  Hexagon,
  BookOpen,
  ArrowRight,
  Github,
  Npm,
} from '../components/Icons'

export const actions = [
  {
    title: 'What is Ring?',
    icon: 'book-open',
    to: '/concepts/overview',
    text: 'Learn about the core concepts of the Ring Protocol, Swaps, Pools, Liquidity, and more.',
    color: 'pink',
  },
  {
    title: 'Integrate with Ring',
    icon: 'x',
    to: '/sdk/v2/overview',
    text: `Learn how to integrate with Ring by building a dApp through guided examples.`,
    color: 'blue',
  },
  {
    title: 'The Ring smart contracts',
    icon: 'hexagon',
    to: '/contracts/v4/overview',
    text: `Learn about the architecture of the Ring Protocol smart contracts through guided examples.`,
    color: 'green',
  },
]

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
    title: 'RingProtocol/v4-sdk',
    href: 'https://github.com/RingProtocol/sdks/tree/main/sdks/v4-sdk',
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
    text: 'Fetch the price of tokens in a specific Pool',
    to: 'sdk/v2/guides/swaps/quoting',
  },
  {
    title: 'Create a Trade',
    text: 'Fetch a Quote for a Trade and execute the Trade',
    to: '/sdk/v3/guides/swaps/trading',
  },
  {
    title: 'Route trades',
    text: 'Use Routing to get optimized prices for your Trades',
    to: '/sdk/v3/guides/swaps/routing',
  },
  {
    title: 'Provide liquidity',
    text: "Contribute to a Pool's liquidity by using tokens to earn fees",
    to: '/sdk/v3/guides/liquidity/minting',
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
    to: 'contracts/v4/quickstart/swap',
  },
  {
    title: 'Provide Liquidity',
    text: 'Provide liquidity from a smart contract in Solidity',
    to: 'contracts/v4/quickstart/manage-liquidity/setup-liquidity',
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
    <Layout title="Ring Docs" description="Technical Documentation For The Ring Protocol">
      <div className="content-page-padding w-full flex flex-col">
        <div className="w-full flex flex-col items-center px-6 py-20 sm:py-16 rounded-large bg-light-surface-2 dark:bg-dark-surface-2">
          <h1 className="text-center serif-heading-0 text-light-neutral-1 dark:text-dark-neutral-1 flex flex-row items-center flex-wrap justify-center">
            <span>Build</span>
            <Emblem1 className="mx-2" />
            <span>with</span>
            <Emblem2 className="mx-2" />
            <span>Ring</span>
          </h1>
          <p className="mt-2 text-center subheading-2 text-light-neutral-2 dark:text-dark-neutral-2">
            Dive into the world of DeFi apps, integrations, and developer tooling built on top of the Ring Protocol.
          </p>
        </div>

        <div className="default-grid py-padding-x-large">
          {actions.map((action, i) => {
            return (
              <Link
                key={action.title}
                to={action.to}
                className={cn('col-span-full rounded-medium p-padding-medium', {
                  'md:col-span-4': i === 0,
                  'sm:col-span-4 md:col-span-2': i > 0,
                  'bg-light-accent-2 dark:bg-dark-accent-2': action.color === 'pink',
                  'bg-light-blue dark:bg-dark-blue': action.color === 'blue',
                  'bg-light-green dark:bg-dark-green': action.color === 'green',
                })}
              >
                <div>
                  <div className="mb-8 flex">
                    {action.icon === 'book-open' ? (
                      <div className="flex flex-row items-center py-2 px-3 bg-light-surface-1 dark:bg-dark-surface-1 rounded-small">
                        <BookOpen />
                        <span className="ml-1 button-label-4 text-light-accent-1 dark:text-dark-accent-1">
                          Getting started
                        </span>
                      </div>
                    ) : null}
                    {action.icon === 'x' ? <ThickX /> : null}
                    {action.icon === 'hexagon' ? <Hexagon /> : null}
                  </div>
                  <div>
                    <h3
                      className={cn('subheading-1', {
                        'text-light-accent-1 dark:text-dark-accent-1': action.color === 'pink',
                        'text-blue-base': action.color === 'blue',
                        'text-green-base dark:text-green-vibrant': action.color === 'green',
                      })}
                    >
                      {action.title}
                    </h3>
                    <p className="mt-1 body-3 text-light-neutral-2 dark:text-dark-neutral-2">{action.text}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="divider"></div>

        <div className="py-padding-x-large">
          <h3 className="text-light-neutral-1 dark:text-dark-neutral-1 heading-2">Integrate Ring Dex</h3>
          <div className="default-grid mt-6">
            {dAppGuides.map((card) => (
              <ArticleLinkCard key={card.title} title={card.title} description={card.text} url={card.to} />
            ))}
          </div>
        </div>

        <div className="divider" />

        <div className="py-padding-x-large">
          <h3 className="text-light-neutral-1 dark:text-dark-neutral-1 heading-2">Integrate dApp to Ring Wallet</h3>
          <div className="default-grid mt-6">
            {smartContractGuides.map((card) => (
              <ArticleLinkCard key={card.title} title={card.title} description={card.text} url={card.to} />
            ))}
          </div>
        </div>

        <div className="divider" />

        <div className="py-padding-x-large">
          <h3 className="text-light-neutral-1 dark:text-dark-neutral-1 heading-2">Quick Links</h3>
          <div className="flex flex-wrap">
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
        <h4 className="transition subheading-2 text-light-neutral-1 dark:text-dark-neutral-1 group-hover:text-light-pink-vibrant dark:group-hover:text-dark-pink-vibrant">
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
