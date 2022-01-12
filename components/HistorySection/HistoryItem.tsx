import type { History } from '../../types'
import React from 'react'
import Markdown from '../Markdown'
import { stringifyDate } from '../../util'

type Props = History

export default function HistoryItem({ name, title, description, startDate, endDate, url }: Props) {
  return (
    <div className="w-full p-4 duration-300 bg-gray-900 border border-gray-800 rounded hover:bg-gray-800">
      <h3 className={`inline-block mb-2 text-4xl font-semibold ${url ? 'hover:text-blue-500' : ''}`}>
        <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
      </h3>
      <p className="mb-1 text-xl font-light uppercase text">{title}</p>
      <p className="mb-4">{`${stringifyDate(new Date(startDate))} - ${endDate ? stringifyDate(new Date(endDate)) : 'Present'}`}</p>
      <hr className="w-64 mb-4 border-t-2 border-primary" />

      <Markdown className="space-y-4">
        {description}
      </Markdown>
    </div>
  )
}