'use client'

import type { Agile } from 'payload-types'
import { useRef } from 'react'
import { useIntersectionObserver, useMediaQuery } from 'usehooks-ts'

const sizes: [string, number][] = [
  ['2xl', 1400],
  ['xl', 1280],
  ['lg', 1024],
  ['md', 768],
  ['sm', 640],
]

export function Agile({ backgroundImage, descriptionHtml, ...rest }: Agile) {
  const { ref, isIntersecting } = useIntersectionObserver({
    freezeOnceVisible: true,
  })

  const mediaQueries = sizes.map(([, width]) => (
    useMediaQuery(`(min-width: ${width}px)`)
  ))

  let deviceSizeIndex = mediaQueries.findIndex(isMatch => !!isMatch)

  if (deviceSizeIndex === -1) {
    deviceSizeIndex = sizes.length - 1
  }

  const largestDeviceSizeIndex = useRef(deviceSizeIndex)

  if (deviceSizeIndex < largestDeviceSizeIndex.current) {
    largestDeviceSizeIndex.current = deviceSizeIndex
  }

  const [deviceSize] = sizes[largestDeviceSizeIndex.current]

  return (
    <section
      ref={ref}
      className='bg-fixed bg-cover'

      style={{
        backgroundImage: isIntersecting
          ? `url(${backgroundImage.sizes[deviceSize].url})`
          : undefined,
      }}
    >
      <div
        className='bg-black/80'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
        >
          <path
            fill='#262626'
            d='M0,288L1440,0L1440,0L0,0Z'
          >
          </path>
        </svg>

        <div
          className='container flex flex-col p-8 mx-auto space-y-8 text-left text-white lg:flex-row'
        >
          <h2
            className='mr-32 text-6xl font-black uppercase md:text-7xl lg:text-8xl'
          >
            Did <br />someone <br />say <br /><span className='text-primary'>agile</span>?
          </h2>

          <div
            className='pb-8 space-y-8 text-xl border-primary border-b-[3px] self-start'

            dangerouslySetInnerHTML={{
              __html: descriptionHtml!,
            }}
          />
        </div>

        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
          className='rotate-180 -mb-[1px]'
        >
          <path
            fill='#2563eb'
            d='M0,288L1440,0L1440,0L0,0Z'
          >
          </path>
        </svg>
      </div>
    </section>
  )
}