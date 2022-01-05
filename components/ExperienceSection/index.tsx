import React from 'react'
import ExperienceItem, { ExperienceItemProps } from './ExperienceItem'

export type ExperienceProps = {
  children: ExperienceItemProps[],
}

export default function ExperienceSection({ children }: ExperienceProps) {
  return (
    <section id="experience" className="text-white bg-gray-800">
      <div className="container px-2 py-16 mx-auto">
        <h2 className="mb-16 text-4xl tracking-widest text-center uppercase md:mb-24 md:text-6xl">My Experience</h2>
        <div className="p-2 bg-gray-900 border-l-2 rounded border-primary md:p-8">
          <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2">
            {
              children.map((item, index) => <ExperienceItem {...item} key={index} />)
            }
          </div>
        </div>
      </div>
    </section>
  )
}