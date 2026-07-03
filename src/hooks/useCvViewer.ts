import { useCallback, useEffect, useRef, useState } from 'react';

const CV_VIEWER_EVENT = 'app:cv-viewer';

/**
 * El visor es enlazable: /#cv (o ?cv en el primer load) lo abre directamente.
 * Es el enlace pensado para compartir el CV (LinkedIn, correo, etc.).
 */
const CV_HASH = '#cv';

const isCvUrl = () =>
  window.location.hash === CV_HASH || new URLSearchParams(window.location.search).has('cv');

/** Abre el visor de CV desde cualquier punto de la app (hero, command palette…). */
export const openCvViewer = () => {
  window.dispatchEvent(new Event(CV_VIEWER_EVENT));
};

/** Estado del visor de CV. Se monta una sola vez, dentro de CvViewer. */
export const useCvViewer = () => {
  const [open, setOpen] = useState(isCvUrl);
  const previousTitleRef = useRef(typeof document !== 'undefined' ? document.title : '');

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    const handleHashChange = () => setOpen(isCvUrl());

    window.addEventListener(CV_VIEWER_EVENT, handleOpen);
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener(CV_VIEWER_EVENT, handleOpen);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Mantiene URL y título sincronizados con el visor, para que el enlace
  // #cv sea copiable directamente desde la barra del navegador.
  useEffect(() => {
    if (open) {
      previousTitleRef.current = document.title;
      document.title = 'CV · Javier Madariaga';
      if (window.location.hash !== CV_HASH || window.location.search) {
        history.replaceState(null, '', `${window.location.pathname}${CV_HASH}`);
      }
      return () => {
        document.title = previousTitleRef.current;
      };
    }

    if (window.location.hash === CV_HASH) {
      history.replaceState(null, '', window.location.pathname);
    }
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return { open, close };
};
