import React from 'react';

export default function Introduction({ heading, contents }) {
  return (
    <section className="bg-gray-800">
      <div className="flex w-full">
        <div className="px-4 py-10 md:p-12 text-white flex flex-col justify-center align-center">
          <h2 className="text-5xl capitalize font-bold">{heading}</h2>
          <div className="leading-loose text-left">
            {
              contents.map((content, index) => {
                return <p className="mb-4" key={index}>{content}</p>
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
}