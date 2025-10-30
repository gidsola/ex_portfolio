import { Routes, Route } from 'react-router-dom';

import Layout from '../layouts/default.jsx';

import Egg from './egg/egg.jsx';
import Home from './home/home.jsx';
import About from './about/about.jsx';
import Contact from './contact/contact.jsx';
import Education from './education/education.jsx';
import Projects from './projects/projects.jsx';
import Resume from './resume/resume.jsx';
import Services from './services/services.jsx';

export default function PagesMaster() {
  return (
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/egg" element={<Egg />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
  );
};
