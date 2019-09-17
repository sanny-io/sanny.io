import React from 'react';
import NavBar from './../NavBar';
import Intro from './../Intro';
import InfoCard from './../InfoCard';
import Technologies from './../Technologies';
import Projects from './../Projects';
import Experiences from './../Experiences';
import Contact from './../Contact';
import styles from './styles.module.css';
import data from '../../data';
import './../../index.css';

function App() {
  const links = [
    ['Technologies', 'Technologies'],
    ['Projects', 'Projects'],
    ['Experience', 'Experiences'],
    ['About me', 'Intro'],
    ['Contact Me', 'Contact'],
  ];

  return (
    <div className={`${styles.App} flex flex-col lg:flex-row`}>
      <aside className="lg:w-1/4 w-full lg:fixed">
        <InfoCard {...data.intro.card} />
      </aside>
      <main className={`${styles.Main} lg:w-3/4 w-full h-full`}>
        <NavBar links={links} />
        <Technologies {...data.technologies} />
        <Projects {...data.projects} />
        <Experiences {...data.experiences} />
        <Intro {...data.intro} />
        <Contact {...data.contact} />
      </main>
    </div>
  );
}

export default App;
