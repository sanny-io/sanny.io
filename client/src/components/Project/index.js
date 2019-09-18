import React from 'react';
import Tag from '../Tag';

const Project = ({ name, url, sourceUrl, image, tags, description }) => {
  return (
    <div className="flex flex-col w-full h-full lg:w-3/4 text-gray-200">
      <a href={url} target="_blank" rel="noreferrer noopener">
        <img className="w-full" src={image} alt={name} />
      </a>
      <div className="flex flex-col p-4 h-full border-l border-r border-b rounded-b border-gray-700">
        <a href={url} className="text-lg font-bold mr-2" target="_blank" rel="noreferrer noopener">
          {name}
        </a>
        {
          sourceUrl && (
            <a
              href={sourceUrl}
              className="text-gray-600 text-xs font-semibold"
              target="_blank"
              rel="noreferrer noopener">
              View Source
          </a>)
        }
        <p className="mb-4">{description}</p>
        <ul className="flex flex-wrap mt-auto text-xs -my-3">
          {tags.map((tag, index) => {
            return (
              <li className="mr-2 py-3" key={index}>
                <Tag key={index}>{tag}</Tag>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Project;