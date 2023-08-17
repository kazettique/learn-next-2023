import { Metadata } from 'next';
import React, { ReactElement, ReactNode } from 'react'

type Props = {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'dashboard layout'
}

export default function layout({ children }: Props) {
  return (
    <>
      <div>dashboard layout</div>
      {children}
    </>
  )
}