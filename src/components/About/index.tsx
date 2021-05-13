import React from 'react';
// @ts-ignore
import { ReactComponent as Content } from '../../content/about.md';
import { ReactComponent as JawSvg } from '../../../assets/jaw.svg';

export default function About() {
  return (
    <section>
      <div className="text-white">
        <div className="container relative max-w-lg px-4 mx-auto">
          <h2 className="mb-16 text-5xl font-light tracking-widest text-center text-blue-400 uppercase md:text-6xl">About me</h2>

          <article className="mb-16 space-y-8">
            <Content />
          </article>
          {/* <JawSvg className="absolute -left-96 -top-10" /> */}
          {/* <JawSvg className="absolute transform scale-x-[-1] -top-10 -right-96" /> */}
        </div>
      </div>

      <div className="bg-gray-800">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 63">
          <path fill="#171717" d="M390,0H0V63C132.73,38.18,256.36,25.76,390,25.76S667.27,38.18,800,63V0Z" />
        </svg>
        {/* <svg viewBox="0 0 960 100" width="100%" xmlns="http://www.w3.org/2000/svg" version="1.1"><path d="M0 48L12.3 53C24.7 58 49.3 68 74 73.2C98.7 78.3 123.3 78.7 148 73.2C172.7 67.7 197.3 56.3 221.8 50.7C246.3 45 270.7 45 295.2 44.3C319.7 43.7 344.3 42.3 369 45.2C393.7 48 418.3 55 443 56.8C467.7 58.7 492.3 55.3 517 57.8C541.7 60.3 566.3 68.7 591 69C615.7 69.3 640.3 61.7 664.8 54.7C689.3 47.7 713.7 41.3 738.2 35.8C762.7 30.3 787.3 25.7 812 32.7C836.7 39.7 861.3 58.3 886 66.2C910.7 74 935.3 71 947.7 69.5L960 68L960 0L947.7 0C935.3 0 910.7 0 886 0C861.3 0 836.7 0 812 0C787.3 0 762.7 0 738.2 0C713.7 0 689.3 0 664.8 0C640.3 0 615.7 0 591 0C566.3 0 541.7 0 517 0C492.3 0 467.7 0 443 0C418.3 0 393.7 0 369 0C344.3 0 319.7 0 295.2 0C270.7 0 246.3 0 221.8 0C197.3 0 172.7 0 148 0C123.3 0 98.7 0 74 0C49.3 0 24.7 0 12.3 0L0 0Z" fill="#171717"></path></svg> */}
      </div>
    </section>
  )
}