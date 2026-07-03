import { useEffect, useRef, useState } from 'react';

const TOAST_EVENT = 'app:toast';

/** Muestra un aviso transitorio desde cualquier punto de la app. */
export const showToast = (message: string) => {
  window.dispatchEvent(new CustomEvent<string>(TOAST_EVENT, { detail: message }));
};

/**
 * Estado del toast global. Se monta una sola vez (en Home) y escucha
 * los mensajes emitidos con `showToast`.
 */
export const useToast = (hideAfterMs = 2500) => {
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const handleToast = (event: Event) => {
      setMessage((event as CustomEvent<string>).detail);
      setVisible(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setVisible(false), hideAfterMs);
    };

    window.addEventListener(TOAST_EVENT, handleToast);
    return () => {
      window.removeEventListener(TOAST_EVENT, handleToast);
      clearTimeout(timeoutRef.current);
    };
  }, [hideAfterMs]);

  return { message, visible };
};
