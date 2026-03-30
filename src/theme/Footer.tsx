import React, { FC } from 'react'

import { MiniUnicon, Github, X, Discord } from '../components/Icons'

import { LinkBase, TextButton } from '../components/base/Button'

const footerData = {
  footerLinks: [
    {
      title: 'Developers',
      links: [
        {
          label: 'Dev Chat',
          href: 'https://discord.com/invite/TefBNDZBQP',
        },
        {
          label: 'Feedback',
          href: 'https://discord.com/invite/TefBNDZBQP',
        },
        {
          label: 'Whitepaper',
          href: 'https://app.ring.exchange/whitepaper-v2.pdf',
        },
      ],
    },
    {
      title: 'GitHub',
      links: [
        {
          label: 'ring-v4-core',
          href: 'https://github.com/RingProtocol/v4-core',
        },
        {
          label: 'ring-sdks',
          href: 'https://github.com/RingProtocol/sdks',
        },
        {
          label: 'ring-v4-periphery',
          href: 'https://github.com/RingProtocol/v4-periphery',
        },
        {
          label: 'Deployment addresses',
          href: '/contracts/fewv2/deployments',
        },
      ],
    },
    {
      title: 'Ecosystem',
      links: [
        {
          label: 'App',
          href: 'https://app.ring.exchange/',
        },
        {
          label: 'Analytics',
          href: 'https://app.ring.exchange/#/explore',
        },
      ],
    },
    {
      title: 'Community',
      links: [
        // {
        //   label: 'Blog',
        //   href: 'https://uniswapfoundation.org/blog/',
        // },
        {
          label: 'Governance',
          href: 'https://www.tally.xyz/gov/ring',
        },
        {
          label: 'Ring Twitter',
          href: 'https://x.com/ProtocolRing',
        },
      ],
    },
  ],
  footerGithubLink: 'https://github.com/RingProtocol/docs',
  footerXLink: 'https://x.com/ProtocolRing',
  footerDiscordLink: 'https://discord.com/invite/TefBNDZBQP',
}

const Footer: FC = () => {
  return (
    <footer className="Footer bg-light-surface-1 px-margin-mobile pt-margin-web dark:bg-dark-surface-1 sm:px-margin-web sm:pb-margin-web">
      <h2 className="sr-only">Footer</h2>
      <div className="default-grid rounded-large border border-light-surface-3 bg-light-surface-2 p-6 dark:border-dark-surface-3 dark:bg-dark-surface-2 sm:mb-20 sm:p-8">
        <div className="mb-12 flex flex-col items-start sm:col-span-8 md:col-span-3 md:mb-0">
          <LinkBase href="/" className="flex flex-row items-center">
            <MiniUnicon color="neutral-1" className="mb-[0.1875rem] h-8 w-8" />
            <p className="body-1 ml-2 text-light-neutral-1 dark:text-dark-neutral-1">Ring Protocol Docs</p>
          </LinkBase>
          <p className="mt-4 body-2 text-light-neutral-2 dark:text-dark-neutral-2">
            A builder-first documentation hub for protocol concepts, integrations, contracts, and wallet flows.
          </p>
        </div>
        <div className="col-span-4 sm:col-span-8 sm:flex sm:grid-cols-8 md:col-span-5">
          <nav className="grid w-full grid-cols-2 gap-gap-large sm:grid-cols-4">
            {footerData.footerLinks && footerData.footerLinks.length > 0 ? (
              <>
                {footerData.footerLinks.map((section) => (
                  <div key={section.title} className="space-y-[0.3125rem]">
                    <h3 className="body-1 text-light-neutral-1 dark:text-dark-neutral-1">{section.title}</h3>
                    <ul>
                      {section.links.map((link) => (
                        <li key={link.label}>
                          <TextButton
                            textClassName="body-2 text-light-neutral-2 dark:text-dark-neutral-2 group-hover:text-light-neutral-1 group-hover:dark:text-dark-neutral-1 transition-colors"
                            href={link.href}
                            label={link.label}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </>
            ) : null}
          </nav>
        </div>
      </div>
      <div className="flex flex-col-reverse border-light-surface-3 dark:border-dark-surface-3 sm:flex-row sm:items-center sm:justify-between sm:border-t sm:pt-padding-large">
        <p className="body-3 my-padding-large text-light-neutral-2 dark:text-dark-neutral-2 sm:my-0">
          @{new Date().getFullYear()} Ring Protocol Docs
        </p>
        <div className="flex flex-row space-x-gap-large border-b border-light-surface-3 px-2 py-margin-web dark:border-dark-surface-3 sm:border-0 sm:px-0 sm:py-0">
          {footerData?.footerGithubLink ? (
            <LinkBase className="group" href={footerData.footerGithubLink} ariaLabel="Link to Ring Labs Github">
              <Github className="h-6 w-6" />
            </LinkBase>
          ) : null}
          {footerData?.footerXLink ? (
            <LinkBase className="group" href={footerData.footerXLink} ariaLabel="Link to Ring Labs X account">
              <X className="h-6 w-6" />
            </LinkBase>
          ) : null}
          {footerData?.footerDiscordLink ? (
            <LinkBase className="group" href={footerData.footerDiscordLink} ariaLabel="Link to Ring Labs Discord">
              <Discord className="h-6 w-6" />
            </LinkBase>
          ) : null}
        </div>
      </div>
    </footer>
  )
}

export default Footer
