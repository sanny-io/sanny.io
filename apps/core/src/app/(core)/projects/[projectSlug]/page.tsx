import { OptimizedImage } from '@/components/optimized-image'
import { ProjectModal } from '@/components/project-modal'
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
    <ProjectModal
      project={project!}
    />
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