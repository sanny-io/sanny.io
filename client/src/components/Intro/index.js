import React from 'react';
import styles from './styles.module.css';

const Intro = ({ heading, contents }) => {
  return (
    <section className={`Intro ${styles.Intro} min-h-screen`}>
      <div className={`${styles.Dimmer} min-h-screen flex flex-col w-full px-4 py-10 md:p-12 text-white flex flex-col justify-center align-center`}>
        <h2 className="text-5xl capitalize font-bold">{heading}</h2>
        <div className="leading-loose text-left">
          {
            contents.map((content, index) => {
              return <p className="mb-4" key={index}>{content}</p>
            })
          }
        </div>
      </div>
    </section>
  );
}

export default Intro;