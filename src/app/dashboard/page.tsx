import { Metadata } from 'next'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Navigation from '../components/Navigation'

type Props = {}

export const metadata: Metadata = {
  title: 'dashboard page'
}

export default function Page({ }: Props) {

  return (
    <div>
      <div>this is dashboard page</div>
      <Navigation />
    </div>
  )
}