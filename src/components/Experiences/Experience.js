import React from 'react';
import { Image } from '../App';

export default function Experience({ name, title, startDate, endDate, descriptions, reverse, image, url }) {
  return (
    <article className={`w-full my-6 flex border ${reverse && 'flex-row-reverse'} border-gray-400`}>
      <Image src={image} className="w-1/2 hidden xl:block" alt={name} />
      <div className={`xl:w-1/2 w-full py-4 px-5 ${reverse && 'text-right'} font-light`}>
        <a className="text-4xl md:text-5xl" href={url} target="_blank" rel="noopener noreferrer">{name}</a>
        <p className="md:text-xl uppercase mb-1">{title}</p>
        <p className="text-gray-800 mb-4">{`${startDate} - ${endDate || 'Present'}`}</p>
        {descriptions.map((description, index) => {
          return <p className="mb-4" key={index}>{description}</p>
        })}
      </div>
    </article>
  );
};