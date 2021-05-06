import React from 'react';
import Social from '../Social';
// @ts-ignore
import { attributes as info } from '../../content/info.md';
import myPictureUrl from '../../../assets/images/me.jpg';

export default function Hero() {
  return (
    <React.Fragment>
      <section className="flex flex-col-reverse items-center justify-center px-6 pt-8 mb-16 space-y-6 space-y-reverse md:space-y-0 md:space-x-16 md:pt-16 md:flex-row">
        <div className="text-center md:text-right">
          <h1 className="mb-4 text-5xl font-bold text-white md:text-7xl">{info.name}</h1>
          <h2 className="mb-4 text-3xl font-light tracking-wide text-blue-400">{info.title}</h2>
          <Social />
        </div>
        <div className="pb-8 border-b-4 border-blue-600 md:border-l-4 md:border-b-0 md:pl-8 md:pb-0">
          <img className="rounded-full" src={myPictureUrl} width="250px" alt="Sanny Sherief" />
        </div>
      </section>
      <span aria-hidden="true" className="block mx-auto mb-8 text-6xl text-center text-blue-600 md:hidden motion-safe:animate-bounce">&darr;</span>
    </React.Fragment>
  )
}