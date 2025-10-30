
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import PagesMaster from './pages/pages_master.jsx';

export default function render(url) {
  console.log('Registering SSR.jsx ', url);
  return (
    <StaticRouter location={url}>
      <PagesMaster />
    </StaticRouter>
  );
}
