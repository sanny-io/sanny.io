import React from 'react';
import styles from './styles.module.css';
import SocialIcons from '../SocialIcons';

const InfoCard = ({ name, title, headshot, social, description, email }) => {
  return (
    <div className={`${styles.InfoCard} min-h-screen flex flex-col justify-center text-center p-6 text-white`}>
      <h1 className="text-4xl mb-4 font-semibold">{name}</h1>
      <img className={`${styles.Headshot} mx-auto rounded-full mb-4`} src={headshot} alt={name} />
      <span className="text-gray-600 mb-2">{title}</span>
      <div className="mb-2">
        <SocialIcons social={social} />
      </div>
      <p className="mb-6">{description}</p>
    </div>
  );
}

export default InfoCard;