import { Metadata } from 'next'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {}

export const metadata: Metadata = {
  title: 'dashboard page'
}

export default function Page({ }: Props) {

  return (
    <div>
      <div>this is dashboard page</div>
      <Link href='/hello'>go to hello</Link>
      <Link href='/dashboard'>go to dashboard</Link>
    </div>
  )
}