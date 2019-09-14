import React from 'react';
import styles from './styles.module.css';

const Experience = ({ name, title, startDate, endDate, descriptions, reverse, image, url }) => {
  return (
    <article className={`w-full my-6 flex border ${reverse && 'flex-row-reverse'} border-gray-400`}>
      <img className={`${styles.Image} w-1/2 hidden md:block`} src={image} alt={name} />
      <div className={`w-full md:w-1/2 py-4 px-5 ${reverse && 'text-right'} font-light`}>
        <a className="text-4xl md:text-5xl" href={url} target="_blank" rel="noopener noreferrer">{name}</a>
        <p className="md:text-xl uppercase mb-1">{title}</p>
        <p className="text-gray-600 mb-4">{`${startDate} - ${endDate || 'Present'}`}</p>
        {descriptions.map((description, index) => {
          return <p className="mb-4" key={index}>{description}</p>
        })}
      </div>
    </article>
  );
};

export default Experience;