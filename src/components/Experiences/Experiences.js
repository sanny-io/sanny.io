import React from 'react';
import Experience from './Experience';

export default function Experiences ({ heading, contents }) {
  return (
    <section className="px-4 py-10 md:p-12 bg-gray-100">
      <h2 className="text-4xl md:text-5xl mb-10 capitalize text-center">{heading}</h2>

      <div className="flex flex-wrap justify-center">
        {contents.map((experience, index) => {
          return <Experience {...experience} reverse={index % 2 === 0} key={index} />
        })}
      </div>
    </section>
  );
}