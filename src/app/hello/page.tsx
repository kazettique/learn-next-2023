  import Link from 'next/link'
import React from 'react'
import Navigation from '../components/Navigation'

type Props = {}

export default function page({ }: Props) {
  return (
    <div>
      <div>hello from app hello route</div>
      <Navigation />

    </div>
  )
}