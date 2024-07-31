'use client'

import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Project } from 'payload-types'
import { OptimizedImage } from '@/components/optimized-image'

type ArrayOf<T> = T extends (infer U)[] ? U : never;

type Props = {
  project: ArrayOf<Project['projects']>,
}

export function ProjectModal({ project }: Props) {
  const router = useRouter()

  return (
    <Dialog
      open
      className='relative z-50'

      onClose={() => {
        router.push('/', {
          scroll: false,
        })
      }}
    >
      <div
        className='fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/50 overflow-y-auto'
      >
        <DialogPanel
          className='container relative p-4 m-auto bg-gray-900 border-l-4 border-primary'
        >
          <Link
            autoFocus
            data-autofocus
            href='/'
            scroll={false}
            className='absolute text-3xl text-gray-300 right-3 top-1 hover:text-gray-500'
            aria-label='Close project details window'
          >
            &times;
          </Link>

          <DialogTitle
            as='h3'
            className='inline-block mb-4 text-6xl font-semibold hover:text-blue-500'
          >
            <a
              href={project!.liveUrl}
              target='_blank'
            >
              {project!.name}
            </a>
          </DialogTitle>

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
        </DialogPanel>
      </div>
    </Dialog>
  )
}