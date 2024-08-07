import { initializePayload } from '@/services/payload'

export async function AboutMe() {
  const payload = await initializePayload()
  const aboutMe = await payload.findGlobal({
    slug: 'about-me',
  })

  return (
    <section>
      <div>
        <div
          className='container relative max-w-lg px-4 mx-auto'
        >
          <h2
            className='mb-16 text-5xl font-light tracking-widest text-center uppercase text-secondary md:text-6xl'
          >
            {aboutMe.title}
          </h2>

          <article
            className='mb-16 prose leading-6'

            dangerouslySetInnerHTML={{
              __html: aboutMe.descriptionHtml!,
            }}
          />
        </div>
      </div>
    </section>
  )
}