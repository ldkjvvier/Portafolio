import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { DownloadIcon, MailIcon, XIcon } from '@/components/Icons/Icons';
import { CvDocument } from '@/components/cv/CvDocument';
import { ABOUT_ME } from '@/constants/AboutMeData';
import { CV } from '@/constants/CvData';
import { useCvViewer } from '@/hooks/useCvViewer';
import { withBase } from '@/lib/assets';

/**
 * Visor de CV en un modal: muestra el documento renderizado y permite
 * descargar el PDF alojado en public/cv. Se abre con `openCvViewer()`.
 */
export const CvViewer = () => {
  const { open, close } = useCvViewer();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };
    document.addEventListener('keydown', handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus();
    };
  }, [open, close]);

  if (!open) return null;

  return createPortal(
    <div
      className="cv-viewer-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Curriculum vitae"
        className="card fade-up flex max-h-full w-full max-w-3xl flex-col overflow-hidden shadow-2xl"
      >
        <header className="cv-viewer-header flex items-center gap-3 border-b border-line px-4 py-3 sm:px-5">
          <h2 className="min-w-0 truncate text-sm font-semibold text-ink">Curriculum vitae</h2>

          <div className="ml-auto flex items-center gap-2">
            <a
              href={`mailto:${ABOUT_ME.links.email}?subject=${encodeURIComponent('Contacto desde tu CV')}`}
              className="btn btn-secondary hidden h-9 px-3.5 text-xs sm:inline-flex"
            >
              <MailIcon className="size-4" />
              Contactar
            </a>
            <a href={withBase(CV.filePath)} download={CV.fileName} className="btn btn-primary h-9 px-3.5 text-xs">
              <DownloadIcon className="size-4" />
              Descargar PDF
            </a>
            <button ref={closeButtonRef} type="button" className="icon-btn size-9" aria-label="Cerrar visor" onClick={close}>
              <XIcon className="size-4" />
            </button>
          </div>
        </header>

        <div className="cv-viewer-body overflow-y-auto bg-surface-2 p-3 sm:p-6">
          <div className="mx-auto max-w-2xl overflow-hidden rounded-lg border border-line shadow-lg">
            <CvDocument />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
