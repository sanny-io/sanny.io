import { initializePayload } from '@/services/payload'
import Image from 'next/image'

export async function ResponsiveDesign() {
  const payload = await initializePayload()
  const responsiveDesign = await payload.findGlobal({
    slug: 'responsive-design',
  })

  return (
    <section
      className='pb-8 bg-primary md:pb-32'
    >
      <div
        className='container flex flex-col px-4 mx-auto lg:flex-row lg:space-x-14'
      >
        <div
          className='self-center w-1/2 mb-8 lg:w-1/3 md:mb-16'
        >
          <Image
            src={responsiveDesign.image.url}
            width={responsiveDesign.image.width}
            height={responsiveDesign.image.height}
            className='duration-200'
            alt='Sample site as viewed on a mobile phone'
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