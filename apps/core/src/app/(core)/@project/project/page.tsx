import { initializePayload } from '@/services/payload'
import Image from 'next/image'
import Link from 'next/link'

export default async function ProjectPage() {
  const payload = await initializePayload()
  const projects = await payload.findGlobal({
    slug: 'projects',
  })

  const project = projects.projects?.find(project => (
    project.id === '66a62bdc14cad99e65cf3eda'
  ))

  return (
    <dialog
      open
      className='flex flex-col w-screen h-screen bg-black/50'
    >
      <div
        className='container relative p-4 m-auto bg-gray-900 border-l-4 border-primary'
      >
        <Link
          href='/'
          className='absolute text-3xl text-gray-300 right-3 top-1 hover:text-gray-500'
          aria-label='Close project details window'
        >
          &times;
        </Link>

        <h3
          className='inline-block mb-4 text-6xl font-semibold hover:text-blue-500'
        >
          <a
            href={project!.liveUrl}
            target='_blank'
          >
            {project!.name}
          </a>
        </h3>

        <ul
          className='flex flex-wrap gap-2'
        >
          {
            project!.tags?.map(tag => (
              <li
                key={tag}
                className='tag'
              >
                {tag}
              </li>
            ))
          }
        </ul>

        {
          project!.sourceUrl ?
            <a
              href={project!.sourceUrl}
              className='button inline-block mt-4'
              target='__blank'
              rel='noopener noreferrer'
            >
              View Source
            </a>
            : null
        }

        <hr
          className='my-4 border-t-2 border-primary'
        />

        <div
          className='grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2'
        >
          <article
            className='prose w-max-none'

            dangerouslySetInnerHTML={{
              __html: project!.descriptionHtml!,
            }}
          />

          <a
            href={project!.liveUrl}
            target='__blank'
            rel='noopener noreferrer'
          >
            <Image
              src={project!.image.url}
              width={project!.image.width}
              height={project!.image.height}
              className='object-cover w-full'
              alt={`Preview of ${project.name}`} />
          </a>
        </div>
      </div>
    </dialog >
  )
}