import React from 'react'

export type TagProps = {
  children: React.ReactNode,
}

export default function Tag({ children }: TagProps) {
  return (
    <span className="px-2 py-1 text-sm bg-primary">{children}</span>
  )
}