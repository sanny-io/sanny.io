import React from 'react';
import { Image } from '../App';

export default function PersonalCard({ name, headshot, title, description, classes, links }) {
  return (
    <div className={`${classes.root} min-h-screen flex flex-col justify-center text-center p-6 text-white`}>
      <h1 className="text-4xl mb-4 font-semibold">{name}</h1>
      <Image src={headshot} className={`${classes.headshot} mx-auto rounded-full mb-4`} alt={name} />
      <span className="text-gray-400 mb-2">{title}</span>
      <div className="mb-1">
        <ul className="flex justify-center">
          {links.map((link, index) => {
            return (
              <li key={index} className="mx-1 text-white">
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <Image src={link.icon} alt={link.icon} />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
      <p className="mb-6">{description}</p>
    </div>
  );
}