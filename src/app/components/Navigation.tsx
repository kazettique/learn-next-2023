'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

type Props = {}

type NavLink = {
  name: string;
  href: string;
}

const NAV_LIST: NavLink[] = [
  {
    name: 'Dashboard',
    href: '/dashboard'
  },
  {
    name: 'Hello',
    href: '/hello'
  },
  {
    name: 'Library',
    href: '/library'
  }
]

export default function Navigation({ }: Props) {
  const pathname = usePathname();

  return (
    <div className="flex divide-x divide-yellow-500">
      {
        NAV_LIST.map(nav => (
          <Link className={pathname === nav.href ? 'text-blue-500' : 'text-gray-500'}
            href={nav.href}
            key={nav.name}
          >
            {nav.name}
          </Link>
        ))
      }
    </div>
  )
}