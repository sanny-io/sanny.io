import React, { ReactNode } from 'react';

export type TagProps = {
  children: ReactNode,
}

export default function Tag({ children }: TagProps) {
  return (
    <span className="px-2 py-1 bg-blue-600 rounded-md">{children}</span>
  )
}