import React, { createContext, useState } from 'react';
import Hero from '../Hero';
import About from '../About';
import Agile from '../Agile';
import Tech from '../Experience';
import Design from '../Design';
import Projects from '../Projects';
import NavBar from '../NavBar';
import { Details as ProjectDetails } from '../Projects/Item';
import History from '../History';
import Contact from '../Contact';
import AppContext from '../../state';

export default function App() {
  const [activeProject, setActiveProject] = useState<any>(null);
  const [activeProjectVisible, setActiveProjectVisible] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{
      // @ts-ignore
      setActiveProject: project => {
        setActiveProject(project);
        setActiveProjectVisible(true);
      },

      activeProjectVisible,
      setActiveProjectVisible,
    }}>
      <main className="min-h-screen overflow-y-hidden min-w-screen">
        <NavBar />

        <div className={`absolute w-full`}>
          <Hero />
          <About />
          <Tech />
          <Agile />
          <Design />
          <Projects />
          <History />
          <Contact />
        </div>
        <ProjectDetails {...activeProject} />
      </main>
    </AppContext.Provider>
  )
}
