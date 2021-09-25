import React from 'react'
import Markdown from '../Markdown'

export type AboutProps = {
  children: string,
}

export default function About({ children }: AboutProps) {
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

      {/* <div className="bg-gray-800">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 63">
          <path fill="#171717" d="M390,0H0V63C132.73,38.18,256.36,25.76,390,25.76S667.27,38.18,800,63V0Z" />
        </svg>
      </div> */}
    </section>
  )
}