import React from 'react'
import Markdown from '../Markdown'

type Props = {
  children: string,
}

export default function AboutSection({ children }: Props) {
  return (
    <section>
      <div className="text-white">
        <div className="container relative max-w-lg px-4 mx-auto">
          <h2 className="mb-16 text-5xl font-light tracking-widest text-center uppercase text-secondary md:text-6xl">About Me</h2>

          <article className="mb-16">
            <Markdown className="space-y-8">
              {children}
            </Markdown>
          </article>
        </div>
      </div>
    </section>
  )
}