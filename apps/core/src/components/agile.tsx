'use client'

import type { Agile } from 'payload-types'
import { useIntersectionObserver } from 'usehooks-ts'

type Size = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export const sizes: Record<Size, number> = {
  'sm': 640,
  'md': 768,
  'lg': 1024,
  'xl': 1280,
  '2xl': 1400,
}

export function Agile({ backgroundImage, descriptionHtml }: Agile) {
  const { ref, isIntersecting } = useIntersectionObserver({
    freezeOnceVisible: true,
  })

  const mediaQueries = Object
    .entries(sizes)
    .map(([size, width]) => (
      `
      @media (min-width: ${width}px) {
        :root {
          --agile-background: url("${backgroundImage.sizes[size].url}");
        }
      }
    `
    ))
    .join('\n')

  return (
    <>
      <section
        ref={ref}
        className='bg-fixed bg-cover'

        style={{
          backgroundImage: isIntersecting
            ? `var(--agile-background)`
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

      <style>
        {
          `
            :root {
              --agile-background: url("${backgroundImage.sizes.sm.url}");
            }

            ${mediaQueries}
          `
        }
      </style>
    </>
  )
}