import { OptimizedImage } from '@/components/optimized-image'
import { getProjects, initializePayload } from '@/services/payload'
import ExportedImage from 'next-image-export-optimizer'
import Image from 'next/image'
import Link from 'next/link'
import slugify from 'slugify'

type Props = {
  params: {
    projectSlug: string,
  },
}

export default async function ProjectPage({ params: { projectSlug } }: Props) {
  const projects = await getProjects()

  projectSlug = projectSlug.toLowerCase()

  const project = projects.projects?.find(project => (
    projectSlug === slugify(project.name, {
      lower: true,
    })
  ))

  return (
    <dialog
      open
      className='fixed z-50 flex flex-col w-full h-full bg-black/50'
    >
      <div
        className='container relative p-4 m-auto bg-gray-900 border-l-4 border-primary'
      >
        <Link
          href='/'
          autoFocus
          scroll={false}
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
            <OptimizedImage
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

export async function generateStaticParams() {
  const projects = await getProjects()

  return projects.projects?.map(project => ({
    projectSlug: slugify(project.name, {
      lower: true,
    })
  }))
}