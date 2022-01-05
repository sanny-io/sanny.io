import React from 'react'
import NextImage from 'next/image'
import Markdown from '../Markdown'
import { Image, Section } from '../../types'

type Props = Section & {
  image: Image,
}

export default function Design({ children, image }: Props) {
  return (
    <section className="pb-2 text-white bg-primary">
      {/* <div className="container flex flex-col px-4 mx-auto lg:flex-row lg:space-x-14"> */}
      <div className="container flex flex-col px-4 mx-auto lg:flex-row lg:space-x-14">
        <div className="self-center w-1/2 mb-8 lg:w-1/3 md:mb-16">
          <NextImage
            src={image.url}
            width={image.width}
            height={image.height}
            blurDataURL={image.blur.url}
            placeholder="blur"
            layout="responsive"
            className="duration-200"
            alt="Sample site as viewed on a mobile phone"
          />
        </div>

        <div className="w-full lg:w-2/3">
          <h2 className="mb-8 text-5xl font-light uppercase md:text-6xl">Responsive <br />Design</h2>

          <div className="space-y-6 text-xl">
            <Markdown>
              {children}
            </Markdown>
          </div>
        </div>
      </div>
    </section>
  )
}