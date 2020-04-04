import React from 'react';
import ScrollMemory from 'react-router-scroll-memory';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {
  PersonalCard,
  Technologies,
  Introduction,
  Projects,
  Experiences,
  Contact,
  NavBar,
} from '../../components';

import DetailedProject from '../Projects/DetailedProject';

export default function App({ classes }) {
  return (
    <Router>
      <ScrollMemory />
      <div className="flex flex-col h-full lg:flex-row">
        <aside className="lg:w-1/4 w-full lg:fixed">
          <PersonalCard />
        </aside>
        <main className={classes.main}>
          <NavBar />
          <Route exact path="/">
            <Technologies />
            <Projects />
            <Experiences />
            <Introduction />
            <Contact />
          </Route>
          <Route path="/projects/:projectId" component={DetailedProject} />
        </main>
      </div>
    </Router>
  );
}