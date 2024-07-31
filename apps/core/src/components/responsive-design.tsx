import { initializePayload } from '@/services/payload'
import Image from 'next/image'
import { OptimizedImage } from '@/components/optimized-image'

export async function ResponsiveDesign() {
  const payload = await initializePayload()
  const responsiveDesign = await payload.findGlobal({
    slug: 'responsive-design',
  })

  return (
    <section
      className='py-8 bg-primary'
    >
      <div
        className='container flex flex-col px-4 mx-auto lg:flex-row lg:space-x-14'
      >
        <div
          className='self-center w-1/2 mb-8 lg:w-1/3 md:mb-16 hidden md:block'
        >
          <OptimizedImage
            src={responsiveDesign.image.url}
            width={responsiveDesign.image.width}
            height={responsiveDesign.image.height}
            className='duration-200'
            alt={responsiveDesign.image.alt}
          />
        </div>

        <div
          className='w-full lg:w-2/3'
        >
          <h2
            className='mb-8 text-5xl font-light uppercase md:text-6xl'
          >
            {responsiveDesign.title}
          </h2>

          <div
            className='space-y-6 text-xl'
            dangerouslySetInnerHTML={{
              __html: responsiveDesign.descriptionHtml!,
            }}
          />
        </div>
      </div>
    </section>
  )
}