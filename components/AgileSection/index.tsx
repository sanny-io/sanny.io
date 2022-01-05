import type { Section } from '../../types'
import React from 'react'
import Markdown from '../Markdown'
import { useInView } from 'react-intersection-observer'

type Props = Section

export default function AgileSection({ children }: Props) {
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true })

  return (
    <section
      className={`bg-fixed bg-cover ${inView ? 'bg-track md:bg-track-md lg:bg-track-lg xl:bg-track-xl 2xl:bg-track-2xl' : ''}`}
      style={!inView ? { backgroundImage: 'url(\'/assets/images/agile.svg\')' } : {}}
      ref={inViewRef}>
      <div className="bg-black/80">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#262626" d="M0,288L1440,0L1440,0L0,0Z"></path></svg>

        <div className="container flex flex-col p-8 mx-auto mb-8 space-y-8 text-left text-white md:mb-32 lg:flex-row">
          <h2 className="mr-32 text-6xl font-black uppercase md:text-7xl lg:text-8xl">
            Did <br />someone <br />say <br /><span className="text-primary">agile</span>?
          </h2>

          <div className="pb-8 space-y-8 text-xl border-primary border-b-[3px] self-start">
            <Markdown className="space-y-8">
              {children}
            </Markdown>
          </div>
        </div>

        <svg className="md:-mt-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2563EB" d="M0,224L1440,32L1440,320L0,320Z"></path></svg>
      </div>
    </section>
  )
}