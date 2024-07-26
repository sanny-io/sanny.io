import Image from 'next/image'
import { initializePayload } from '@/services/payload'

export async function Header() {
  const payload = await initializePayload()
  const header = await payload.findGlobal({
    slug: 'header',
  })

  return (
    <>
      <section
        id='about'
        className='flex flex-col-reverse items-center justify-center px-6 pt-8 mb-8 space-y-6 space-y-reverse md:mb-16 md:space-y-0 md:space-x-16 md:pt-16 md:flex-row'
      >
        <div
          className='text-center md:text-right'
        >
          <h1
            className='mb-4 text-5xl font-bold text-white md:text-7xl'
          >
            {header.name}
          </h1>

          <p
            className='mb-4 text-3xl font-light tracking-wide text-secondary'
          >
            {header.title}
          </p>

          {/* <Social /> */}
        </div>

        <div
          className='w-48 pb-8 border-b-4 border-primary md:w-72 md:border-l-4 md:border-b-0 md:pl-8 md:pb-0'
        >
          <Image
            priority
            src={header.image.url}
            width={header.image.width}
            height={header.image.height}
            alt='Headshot of Sanny Sherief'
            className='rounded-full'
            quality={100}
          />
        </div>
      </section>

      <span
        aria-hidden='true'
        className='block mx-auto mb-8 text-6xl text-center text-primary md:hidden motion-safe:animate-bounce'>
        &darr;
      </span>
    </>
  )
}