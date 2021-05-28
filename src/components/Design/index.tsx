import React from 'react';
// @ts-ignore
import { ReactComponent as Content } from '../../content/design.md';
import ResponsiveImage from '../ResponsiveImage';

export default function Design() {
  return (
    <section className="pb-8 text-white bg-blue-600 md:pb-32">
      <div className="container flex flex-col px-4 mx-auto lg:flex-row lg:space-x-14">
        <ResponsiveImage
          src="/assets/images/mock.png"
          className="self-center mb-8 md:mb-16 lg:w-1/2"
          screens={{ lg: '90vw', '*': '60vw' }}
          images={import.meta.globEager('/assets/images/mock/*')}
          alt="Sample site as viewed on various devices"
        />
        <div>
          <h2 className="mb-8 text-5xl font-light uppercase md:text-6xl">Responsive <br />Design</h2>
          <div className="space-y-6 text-xl">
            <Content />
          </div>
        </div>
      </div>
    </section>
  )
}