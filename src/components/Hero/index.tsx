import React from 'react';
import Social from '../Social';
// @ts-ignore
import { attributes as info } from '../../content/info.md';
import myPicture from '../../../assets/images/me.png';
import ResponsiveImage from '../ResponsiveImage';

export default function Hero() {
  return (
    <React.Fragment>
      <section id="about" className="flex flex-col-reverse items-center justify-center px-6 pt-8 mb-8 space-y-6 space-y-reverse md:mb-16 md:space-y-0 md:space-x-16 md:pt-16 md:flex-row">
        <div className="text-center md:text-right">
          <h1 className="mb-4 text-5xl font-bold text-white md:text-7xl">{info.name}</h1>
          <h2 className="mb-4 text-3xl font-light tracking-wide text-blue-400">{info.title}</h2>
          <Social />
        </div>
        <div className="pb-8 border-b-4 border-blue-600 md:border-l-4 md:border-b-0 md:pl-8 md:pb-0">
          {
            <ResponsiveImage
              className="rounded-full"
              src={myPicture}
              alt="Sanny Sherief"
              screens={{ md: '45vw', '*': '270px' }}
              images={import.meta.globEager('/assets/images/me/*')}
            />
          }
        </div>
      </section>
      <span aria-hidden="true" className="block mx-auto mb-8 text-6xl text-center text-blue-600 md:hidden motion-safe:animate-bounce">&darr;</span>
    </React.Fragment>
  )
}