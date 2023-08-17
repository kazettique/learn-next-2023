import Link from 'next/link'
import React from 'react'

type Props = {}

export default function page({ }: Props) {
  return (
    <div>
      <div>hello from app hello route</div>
      <Link href='/dashboard' >go to dashboard</Link>
    </div>
  )
}