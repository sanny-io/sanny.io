import React from 'react'
import HistoryItem, { HistoryItemProps } from './HistoryItem'

export type HistoryProps = {
  children: HistoryItemProps[],
}

export default function History({ children }: HistoryProps) {
  return (
    <section id="history" className="container px-4 py-16 mx-auto text-white md:px-32">
      <hr className="mb-16 border-t-2 border-primary" />
      <h2 className="mb-16 text-5xl tracking-widest text-center uppercase lg:text-left lg:mb-24 md:text-6xl">My history</h2>
      <ul className="flex flex-col space-y-6">
        {
          children.sort((a, b) => +b.startDate - +a.startDate).map((item, key) => <li key={key}><HistoryItem {...item} /></li>)
        }
      </ul>
    </section>
  )
}