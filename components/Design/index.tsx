import React from 'react'
import Image from 'next/image'
import mock from '../../public/assets/images/mock.png'
import Markdown from '../Markdown'

export type DesignProps = {
  children: string,
}

export default function Design({ children }: DesignProps) {
  return (
    <section className="pb-8 text-white bg-primary md:pb-32">
      {/* <div className="container flex flex-col px-4 mx-auto lg:flex-row lg:space-x-14"> */}
      <div className="container flex flex-col px-4 mx-auto lg:flex-row lg:space-x-14">
        <div className="self-center w-full mb-8 lg:w-1/2 md:mb-16">
          <Image
            src={mock}
            placeholder="blur"
            layout="responsive"
            className="duration-200"
            alt="Sample site as viewed on various devices"
          />
        </div>
        <div className="lg:w-1/2">
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