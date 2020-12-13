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

export default function App({ classes }) {
  return (
    <Router>
      <ScrollMemory />
      <div className="flex flex-col min-h-screen lg:flex-row">
        <aside className="w-full lg:w-1/4 lg:fixed">
          <PersonalCard />
        </aside>
        <main className="lg:ml-auto lg:w-3/4">
          <NavBar />
          <Route exact path="/">
            <Technologies />
            <Projects />
            <Experiences />
            <Introduction />
            <Contact />
          </Route>
          {/* <Route path="/projects/:projectId" component={DetailedProject} /> */}
        </main>
      </div>
    </Router>
  );
}