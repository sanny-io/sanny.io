import React, { ReactNode } from 'react';

export type TagProps = {
  children: ReactNode,
}

export default function Tag({ children }: TagProps) {
  return (
    <span className="px-2 py-1 text-sm bg-blue-500">{children}</span>
  )
}