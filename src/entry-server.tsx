import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { Home } from './pages/Home/Home';

/**
 * Renderiza la página a HTML estático durante el build (ver scripts/prerender.js),
 * para que buscadores y crawlers sin JavaScript vean el contenido completo.
 */
export const render = () =>
  renderToString(
    <StrictMode>
      <Home />
    </StrictMode>
  );
