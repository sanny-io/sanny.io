import React from 'react';
import Image from '../App/Image';
import { TagContainer } from './Tag';
import { Link } from 'react-router-dom';
import {LinkContainer as ProjectLinkContainer } from './Link';

export default function Project({ name, id, url, sourceUrl, image, tags, description }) {
  return (
    <div className="flex flex-col w-full h-full lg:w-3/4 text-gray-200">
      <Link to={`/projects/${id}`}>
        <Image className="w-full" src={image} alt={name} />
      </Link>
      <div className="flex flex-col p-4 h-full border-l border-r border-b rounded-b border-gray-700">
        <Link to={`/projects/${id}`} className="text-lg font-bold mr-2 hover:underline">
          {name}
        </Link>
        <ProjectLinkContainer links={[["View Project", url], ["View Source", sourceUrl]]} />
        <p className="mb-4">{description}</p>
        <TagContainer tags={tags} />
      </div>
    </div>
  );
}