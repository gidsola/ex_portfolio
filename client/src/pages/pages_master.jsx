import { Routes, Route } from 'react-router-dom';
import Layout from '../layouts/default.jsx';
import Home from './home/home.jsx';
import About from './about/about.jsx';
import Contact from './contact/contact.jsx';
import Education from './education/education.jsx';

export default function PagesMaster() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
      </Route>
    </Routes>
  );
};
