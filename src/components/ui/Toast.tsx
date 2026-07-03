import { CheckIcon } from '@/components/Icons/Icons';

interface ToastProps {
  message: string;
  visible: boolean;
}

/**
 * Aviso transitorio no intrusivo. Se mantiene montado con aria-live
 * para que los lectores de pantalla anuncien el mensaje al aparecer.
 */
export const Toast = ({ message, visible }: ToastProps) => (
  <div
    role="status"
    aria-live="polite"
    className={`card fixed bottom-5 right-5 z-50 flex items-center gap-2.5 px-4 py-3 text-sm text-ink shadow-lg transition-all duration-200 ${
      visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
    }`}
  >
    {visible && (
      <>
        <CheckIcon className="size-4 text-accent" />
        {message}
      </>
    )}
  </div>
);
