import React, { type ReactNode } from 'react'
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal'
import Link from '@docusaurus/Link'

// The primary menu displays the navbar items
export default function NavbarMobilePrimaryMenu(): ReactNode {
  const mobileSidebar = useNavbarMobileSidebar()

  const navLinks = [
    { label: 'Start Here', to: '/concepts/overview' },
    { label: 'Ring Swap', to: '/contracts/v2/overview' },
    { label: 'v4 Integration', to: '/contracts/v4/overview' },
    { label: 'Build', to: '/build/overview' },
    { label: 'Wallet', to: '/wallet/overview' },
  ]

  return (
    <ul className="menu__list">
      {navLinks.map((link, i) => (
        <li key={i} className="menu__list-item">
          <Link className="menu__link" to={link.to} onClick={() => mobileSidebar.toggle()}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
