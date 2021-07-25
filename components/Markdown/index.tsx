import React from 'react'
import ReactMarkdown, { ReactMarkdownOptions } from 'react-markdown'

export default function Markdown(options: ReactMarkdownOptions): React.ReactElement {
  return (
    <div className={`markdown ${options.className || ''}`}>
      <ReactMarkdown>
        {options.children}
      </ReactMarkdown>
    </div>
  )
}