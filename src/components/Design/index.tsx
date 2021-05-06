import React from 'react';
import mockImageUrl from '../../../assets/images/mock.png';
// import mock200 from '../../../assets/images/mock/mock_bb2gzo_c_scale,w_200.webp';
// import mock600 from '../../../assets/images/mock/mock_bb2gzo_c_scale,w_670.webp';
// import mock1000 from '../../../assets/images/mock/mock_bb2gzo_c_scale,w_1031.webp';
// import mock1200 from '../../../assets/images/mock/mock_bb2gzo_c_scale,w_1288.webp';
// import mock1400 from '../../../assets/images/mock/mock_bb2gzo_c_scale,w_1400.webp';
// @ts-ignore
import { ReactComponent as Content } from '../../content/design.md';
import ResponsiveImage from '../ResponsiveImage';

export default function Design() {
  return (
    <section className="pb-8 text-white bg-blue-600 md:pb-32">
      <div className="container flex flex-col px-4 mx-auto lg:flex-row lg:space-x-14">
        <ResponsiveImage
          className="self-start mb-8 md:mb-16 lg:w-1/2"
          screens={{ lg: '50vw', '*': '100vw' }}
          images={import.meta.globEager('/assets/images/mock/*')}
        />
        {/* <img className="self-start hidden mr-32 md:block" src={mockImageUrl} width="700px" /> */}
        {/* <img
          sizes="(min-width: 640px) 100vw, (min-width: 1024px) 50vw"
          loading="lazy"
          className=""
          srcSet={`
            ${mock200} 200w,
            ${mock600} 670w,
            ${mock1000} 1031w,
            ${mock1200} 1288w,
            ${mock1400} 1400w`}
          src={mock1400}
          alt=""></img> */}
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