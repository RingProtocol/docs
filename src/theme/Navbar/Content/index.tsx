import React, { type ReactNode } from 'react'
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal'
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle'
import SearchBar from '@theme/SearchBar'
import Link from '@docusaurus/Link'
import { Menu, MiniUnicon } from '@site/src/components/Icons'
import clsx from 'clsx'

// function useNavbarItems() {
//   // TODO temporary casting until ThemeConfig type is improved
//   return useThemeConfig().navbar.items as NavbarItemConfig[]
// }

// function NavbarItems({ items }: { items: NavbarItemConfig[] }): ReactNode {
//   return (
//     <>
//       {items.map((item, i) => (
//         <ErrorCauseBoundary
//           key={i}
//           onError={(error) =>
//             new Error(
//               `A theme navbar item failed to render.
// Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
// ${JSON.stringify(item, null, 2)}`,
//               { cause: error },
//             )
//           }
//         >
//           <NavbarItem {...item} />
//         </ErrorCauseBoundary>
//       ))}
//     </>
//   )
// }

export default function NavbarContent(): ReactNode {
  const mobileSidebar = useNavbarMobileSidebar()

  const navLinks = [
    { label: 'Concepts', to: '/concepts/overview' },
    { label: 'Contracts', to: '/contracts/overview' },
    { label: 'SDKs', to: '/sdk/v2/overview' },
    // { label: 'APIs', to: '/api/subgraph/overview' },
    { label: 'Wallet', to: '/wallet/overview' },
    // { label: 'Support', to: '/builder-support/get-funded' },
    // { label: 'LLMs', to: '/llms/overview' },
  ]

  return (
    <div
      className={clsx(
        'navbar__inner',
        'site-max-width w-full min-h-nav-h flex flex-row items-center rounded-large border border-light-surface-3 bg-light-surface-1/95 px-4 py-3 shadow-light-short backdrop-blur dark:border-dark-surface-3 dark:bg-dark-surface-1/95 dark:shadow-dark-short sm:px-5',
      )}
    >
      <Link className="flex flex-row items-center flex-shrink-0" to="/" target="_self" aria-label="Ring Protocol documentation home">
        <MiniUnicon className="w-8 h-8 mr-3" />
        <div className="flex flex-col">
          <p className="Navbar__logo-text body-1 text-light-accent-1 dark:text-dark-accent-1 mb-0">Ring Protocol</p>
          <p className="body-4 text-light-neutral-2 dark:text-dark-neutral-2 mb-0">Docs for builders</p>
        </div>
      </Link>

      <div className="flex flex-row items-center sm:hidden gap-3 ml-auto">
        <div className="flex-1 min-w-0">
          <SearchBar />
        </div>
        <button
          className="flex items-center rounded-small border border-light-surface-3 bg-light-surface-2 px-2 py-2 dark:border-dark-surface-3 dark:bg-dark-surface-2"
          onClick={mobileSidebar.toggle}
        >
          <Menu />
        </button>
      </div>

      <div className="hidden sm:flex flex-1 items-center justify-between ml-8">
        <nav className="flex flex-row items-center gap-2 rounded-full border border-light-surface-3 bg-light-surface-2 px-2 py-2 dark:border-dark-surface-3 dark:bg-dark-surface-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="rounded-full px-3 py-2 body-3 text-light-neutral-2 dark:text-dark-neutral-2 hover:bg-light-surface-1 hover:text-light-accent-1 dark:hover:bg-dark-surface-1 hover:dark:text-dark-accent-1 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <SearchBar />
          <div className="rounded-full border border-light-surface-3 bg-light-surface-2 px-1 dark:border-dark-surface-3 dark:bg-dark-surface-2">
            <NavbarColorModeToggle />
          </div>
          <Link
            className="button-label-4 rounded-full border border-light-surface-3 bg-light-accent-2 px-4 py-2.5 text-light-accent-1 transition hover:bg-light-accent-2-hovered dark:border-dark-surface-3 dark:bg-dark-accent-2 dark:text-dark-accent-1 dark:hover:bg-dark-accent-2-hovered"
            to="https://discord.com/invite/TefBNDZBQP"
            target="_blank"
            rel="noreferrer"
          >
            Share feedback
          </Link>
        </div>
      </div>
    </div>
  )
}
