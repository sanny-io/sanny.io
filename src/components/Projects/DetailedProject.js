import React, { useEffect, useState } from 'react';
import { TagContainer } from './Tag';
import { Image } from '../App';
import Markdown from 'react-markdown';
import Spinner from 'react-spinner';
import { projects } from '../../data';
import { LinkContainer } from './Link';
import 'react-spinner/react-spinner.css';
import './spinner.css';

export default function DetailedProject({ match }) {
  const id = match.params.projectId;
  const [text, setText] = useState();
  const [project, setProject] = useState();

  useEffect(() => {
    setProject(projects.contents.find(project => project.id === id));

    (async () => {
      const file = await import(`../../projects/${id}.md`);
      const response = await fetch(file.default);

      setText(await response.text());
    })();
  }, [id]);

  const links = [];

  if (project) {
    if (project.url) {
      links.push(['View Project', project.url]);
    }

    if (project.sourceUrl) {
      links.push(['View Source', project.sourceUrl]);
    }
  }

  return (
    <div className="bg-gray-900 h-full w-full text-white p-6 lg:pt-16">
      {text ?
        <>
          <div className="flex justify-between lg:h-32">
            <div className="w-3/4 mr-8">
              <h2>{project.name}</h2>
              <LinkContainer links={links} />
              <TagContainer tags={project.tags} />
            </div>
            <div className="hidden lg:block">
              <a href={project.url}>
                <Image src={project.image} className="max-h-full float-right" alt={project.name} />
              </a>
            </div>
          </div>
          <Markdown source={text} className="mt-8" />
        </>
        :
        <div className="h-full flex items-center justify-center">
          <Spinner />
        </div>
      }
    </div>
  );
}