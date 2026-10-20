import { Home } from './pages/Home/Home';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// #root llega con el HTML prerenderizado en el build (scripts/prerender.js).
// createRoot lo reemplaza en vez de hidratarlo: el tema y el visor de CV
// dependen del navegador y no coincidirían con el HTML generado en Node.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
