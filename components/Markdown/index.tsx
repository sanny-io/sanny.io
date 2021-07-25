import React from 'react'
import ReactMarkdown, { ReactMarkdownOptions } from 'react-markdown'

export default function Markdown(options: ReactMarkdownOptions): React.ReactElement {
  return (
    <ReactMarkdown className={`markdown ${options.className || ''}`}>
      {options.children}
    </ReactMarkdown>
  )
}