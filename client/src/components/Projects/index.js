import React from 'react';
import Project from '../Project';

const Projects = ({ heading, contents }) => {
  return (
    <section className="Projects px-4 py-10 md:p-12 bg-blue-900">
      <h2 className="text-4xl md:text-5xl text-center text-white mb-10 capitalize">{heading}</h2>
      <div className="flex flex-wrap justify-center -mx-2 overflow-hidden">
        {contents.map((project, index) => {
          return (
            <div className="my-4 px-2 w-full md:w-1/2 flex justify-center overflow-hidden" key={index}>
              <Project {...project} />
            </div>
          );
        })
        }
      </div>
    </section>
  );
};

export default Projects;