import { initializePayload } from '@/services/payload'
import Image from 'next/image'
import { TailwindImage } from '@/components/tailwind-image'
import Link from 'next/link'
import slugify from 'slugify'

export async function Projects() {
  const payload = await initializePayload()
  const projects = await payload.findGlobal({
    slug: 'projects',
  })

  return (
    <section
      id='projects'
      className='container px-4 py-16 mx-auto text-white bg-gray-900'
    >
      <h2
        className='mb-16 text-5xl tracking-widest text-center uppercase md:mb-32 md:text-6xl'
      >
        {projects.title}
      </h2>

      <div
        className='flex flex-col gap-8 lg:gap-24'
      >
        {
          projects.projects?.map(project => (
            <div
              key={project.id}
              className='flex border border-gray-800 shadow-xl'>
              <a
                className='hidden w-3/5 lg:flex lg:flex-col lg:justify-center'
                href={project.liveUrl!}
                target='__blank'
                rel='noopener noreferrer'
              >
                <TailwindImage
                  src={project.image.url}
                  width={project.image.width}
                  height={project.image.height}
                  className='object-cover w-full duration-200 filter drop-shadow-2xl'
                  alt={`Preview of ${project.name}`}

                  sizes={{
                    'lg': 30,
                  }}
                />
              </a>

              <div
                className='flex flex-col w-full p-4 md:p-8 lg:w-2/5'
              >
                <h3
                  className='inline-block mb-2 text-4xl font-semibold hover:text-blue-500 w-max'
                >
                  <a
                    href={project.liveUrl!}
                    target='__blank'
                    rel='noopener noreferrer'
                    title={project.name}
                  >
                    {project.name}
                  </a>
                </h3>

                <div
                  className='mb-4 prose leading-6'

                  dangerouslySetInnerHTML={{
                    __html: project.ledeHtml!,
                  }}
                />

                <ol
                  className='flex flex-wrap -m-1 mb-4 gap-2 '
                >
                  {
                    project.tags?.map(tag => (
                      <li
                        key={tag}
                        className='tag'
                      >
                        {tag}
                      </li>
                    ))
                  }
                </ol>

                <div
                  className='flex mt-auto gap-3 text-sm'
                >
                  <Link
                    scroll={false}
                    className='button'
                    href={`/projects/${slugify(project.name, {
                      lower: true,
                    })}`}
                  >
                    View More Details
                  </Link>

                  {
                    project.sourceUrl ?
                      <a
                        href={project.sourceUrl}
                        className='inline-flex items-center text-secondary'
                        target='__blank'
                        rel='noopener noreferrer'
                      >
                        {/* <Icon type='github' className='inline w-5 mr-2' /> */}
                        View Source
                      </a>
                      : null
                  }
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}