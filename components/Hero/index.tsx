import React from 'react'
import Social from '../Social'
import Image from 'next/image'
import me from '../../public/assets/images/me.png'

export type HeroProps = {
  name: string,
  title: string,
}

export default function Hero({ name, title }: HeroProps) {
  return (
    <>
      <section id="about" className="flex flex-col-reverse items-center justify-center px-6 pt-8 mb-8 space-y-6 space-y-reverse md:mb-16 md:space-y-0 md:space-x-16 md:pt-16 md:flex-row">
        <div className="text-center md:text-right">
          <h1 className="mb-4 text-5xl font-bold text-white md:text-7xl">{name}</h1>
          <p className="mb-4 text-3xl font-light tracking-wide text-blue-400">{title}</p>

          <Social />
        </div>

        <div className="w-48 pb-8 border-b-4 border-blue-600 md:w-72 md:border-l-4 md:border-b-0 md:pl-8 md:pb-0">
          <Image
            priority
            src={me}
            className="rounded-full"
            layout="responsive"
            quality={100} />
        </div>
      </section>

      <span aria-hidden="true" className="block mx-auto mb-8 text-6xl text-center text-blue-600 md:hidden motion-safe:animate-bounce">&darr;</span>
    </>
  )
}