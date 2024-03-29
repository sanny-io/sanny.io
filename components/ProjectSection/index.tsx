import type { Project } from '../../types'
import React, { useState, createContext } from 'react'
import ProjectItem from './ProjectItem'
import { Dialog } from '@headlessui/react'
import Tag from './Tag'
import Markdown from '../Markdown'
import Icon from '../Icon'
import Image from 'next/image'

type Props = {
  children: Project[],
}

export type IProjectsContextProvider = {
  setActiveProject?: React.Dispatch<Project>,
}

export const ProjectsContext = createContext<IProjectsContextProvider>({ setActiveProject: undefined })

export default function ProjectSection({ children }: Props) {
  const [activeProject, setActiveProject] = useState<Project>()
  const closeDialog = () => setActiveProject(undefined)

  return (
    <ProjectsContext.Provider value={{ setActiveProject } as IProjectsContextProvider}>
      <section id="projects" className="container px-4 py-16 mx-auto text-white bg-gray-900">
        <h2 className="mb-16 text-5xl tracking-widest text-center uppercase md:mb-32 md:text-6xl">My projects</h2>
        <div className="flex flex-col space-y-16 md:space-y-32">
          {
            children.map((project, key) => <ProjectItem key={key} {...project} reverse={key % 2 !== 0} />)
          }
        </div>
      </section>

      {
        activeProject !== undefined &&
        <Dialog
          open={true}
          onClose={closeDialog}
          className="fixed inset-0 w-screen h-screen text-white"
        >
          <Dialog.Overlay className="fixed w-screen h-screen bg-black/50" />

          <div className="flex flex-col justify-center w-full h-full">
            <div className="z-50 p-4 overflow-y-auto" onClick={e => e.target === e.currentTarget && closeDialog()}>
              <div className="container relative p-4 mx-auto bg-gray-900 border-l-4 border-primary">
                <button
                  className="absolute text-3xl text-gray-300 right-3 top-1 hover:text-gray-500"
                  onClick={closeDialog}
                  aria-label="Close project details window"
                >
                  &times;
                </button>

                <Dialog.Title as="h3" className="inline-block mb-4 text-6xl font-semibold hover:text-blue-500">
                  <a href={activeProject.url} target="_blank">{activeProject.name}</a>
                </Dialog.Title>

                <ul className="flex flex-wrap -m-1">
                  {
                    activeProject.tags?.map((tag, key) => <li className="m-1" key={key}><Tag>{tag}</Tag></li>)
                  }
                </ul>

                {
                  activeProject.sourceUrl &&
                    <div className="my-6">
                      <a
                        href={activeProject.sourceUrl}
                        className="items-center full button link"
                        target="__blank"
                        rel="noopener noreferrer"
                      >
                        <Icon type="github" className="inline w-5 mr-2" />
                        View Source
                      </a>
                  </div>
                }

                <hr className="my-4 border-t-2 border-primary" />

                <div className="grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2">
                  <Markdown className="row-start-2 mb-4 space-y-5 lg:row-start-auto">
                    {activeProject.description}
                  </Markdown>

                  <a href={activeProject.url} target="__blank" rel="noopener noreferrer">
                    <Image
                      src={activeProject.image.url}
                      width={activeProject.image.width}
                      height={activeProject.image.height}
                      placeholder="blur"
                      blurDataURL={activeProject.image.blur.url}
                      layout="responsive"
                      className="object-cover w-full"
                      alt={`Preview of ${activeProject.name}`} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      }
    </ProjectsContext.Provider>
  )
}