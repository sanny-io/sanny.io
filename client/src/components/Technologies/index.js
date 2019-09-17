import React from 'react';
import Technology from './../Technology';

const Technologies = ({ heading, contents }) => {
  return (
    <section className="Technologies flex flex-col justify-center px-4 py-10 md:p-12 bg-gray-900 min-h-screen">
      <h2 className="text-4xl md:text-5xl text-center text-white mb-10 capitalize">{heading}</h2>
      <div className="flex flex-wrap items-stretch justify-center -mx-2 overflow-hidden">
        {contents.map((technology, index) => {
          return (
            <div className="my-2 px-2 w-full md:w-1/2 overflow-hidden" key={index}>
              <Technology {...technology} />
            </div>
          );
        })
        }
      </div>
    </section>
  );
}

export default Technologies;