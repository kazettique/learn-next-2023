import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function template({ children }: Props) {
  return (
    <>
      <div>dashboard template</div>
      <div>{children}</div>
    </>
  )
}