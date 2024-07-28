import { initializePayload } from '@/services/payload'
import Image from 'next/image'

export async function MyExperience() {
  const payload = await initializePayload()
  const experiences = await payload.findGlobal({
    slug: 'my-experience',
  })

  return (
    <section
      id='experience'
      className='bg-gray-800'
    >
      <div
        className='container px-2 py-16 mx-auto'
      >
        <h2
          className='mb-16 text-4xl tracking-widest text-center uppercase md:mb-24 md:text-6xl'
        >
          {experiences.title}
        </h2>

        <div
          className='p-2 bg-gray-900 border-l-2 rounded border-primary md:p-8'
        >
          <div
            className='grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2'
          >
            {
              experiences.experiences?.map(experience => (
                <div
                  key={experience.id}
                  className='flex p-6 transition-colors duration-300 border border-gray-700 rounded hover:border-blue-500'
                >
                  <div
                    className='hidden w-full min-w-14 max-w-14 mr-6 md:inline-block self-center'

                    dangerouslySetInnerHTML={{
                      __html: experience.icon,
                    }}
                  />

                  <div>
                    <h3
                      className='text-xl font-bold text-blue-500'
                    >
                      {experience.name}
                    </h3>

                    <p>
                      {experience.description}
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}