
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import PagesMaster from './pages/pages_master.jsx'
import './assets/css/global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PagesMaster />
    </BrowserRouter>
  </StrictMode>
);
