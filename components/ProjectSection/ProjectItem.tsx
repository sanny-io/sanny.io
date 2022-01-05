import type { Project } from '../../types'
import React, { useContext } from 'react'
import Tag from './Tag'
import Markdown from '../Markdown'
import Icon from '../Icon'
import Image from 'next/image'
import { ProjectsContext } from '.'

type Props = Project & {
  reverse: boolean,
}

export default function ProjectItem(props: Props) {
  const {
    name,
    url,
    sourceUrl,
    blurb,
    image,
    tags,
    reverse = false
  } = props

  const { setActiveProject } = useContext(ProjectsContext)

  return (
    <div className={`flex border border-gray-800 py-4 shadow-xl ${reverse ? 'text-right flex-row-reverse' : ''}`}>
      <a
        className="hidden w-3/5 lg:flex lg:flex-col lg:justify-center"
        href={url}
        target="__blank"
        rel="noopener noreferrer"
      >
        <Image
          src={image.url}
          width={image.width}
          height={image.height}
          className="object-cover w-full duration-200 filter drop-shadow-2xl"
          layout="responsive"
          placeholder="blur"
          blurDataURL={image.blur.url}
          alt={`Preview of ${name}`}
        />
      </a>

      <div className={`flex flex-col w-full px-4 py-2 md:py-4 md:px-8 lg:w-2/5 ${reverse ? 'items-end' : 'items-start'}`}>
        <h3 className="inline-block mb-2 text-4xl font-semibold hover:text-blue-500">
          <a href={url} target="__blank" rel="noopener noreferrer" title={name}>
            {name}
          </a>
        </h3>

        <Markdown className="mb-4 space-y-4">{blurb}</Markdown>

        <ul className={`flex flex-wrap -m-1 mb-4 ${reverse && 'justify-end'}`}>
          {
            tags?.map((tag, key) => <li className="m-1" key={key}><Tag>{tag}</Tag></li>)
          }
        </ul>

        <div className="flex mt-auto space-x-3 text-sm">
          <button className="primary button" onClick={() => {
            if (setActiveProject !== undefined) {
              setActiveProject(props)
            }
          }}>
            View More Details
          </button>
          <a
            href={sourceUrl}
            className="inline-flex items-center text-left button link"
            target="__blank"
            rel="noopener noreferrer"
          >
            <Icon type="github" className="inline w-5 mr-2" />
            View Source
          </a>
        </div>
      </div>
    </div>
  )
}