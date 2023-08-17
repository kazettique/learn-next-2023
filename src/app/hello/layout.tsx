import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function layout({children}: Props) {
  return (
    <>
      <div>hello layout</div>
      <div>{ children}</div>
    </>
  )
}