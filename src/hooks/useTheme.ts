import { useCallback, useEffect, useState } from 'react';

export type ThemeMode = 'light' | 'dark' | 'system';

const STORAGE_KEY = 'themeMode';
const THEME_EVENT = 'app:thememode';

const isThemeMode = (value: unknown): value is ThemeMode =>
  value === 'light' || value === 'dark' || value === 'system';

const readStoredMode = (): ThemeMode => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return isThemeMode(stored) ? stored : 'system';
  } catch {
    return 'system';
  }
};

const applyMode = (mode: ThemeMode) => {
  const dark = mode === 'dark' || (mode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.classList.toggle('dark', dark);
};

/**
 * Estado del tema (claro / oscuro / sistema) persistido en localStorage.
 * El primer paint lo resuelve el script inline de index.html. Un evento
 * interno mantiene sincronizadas todas las instancias del hook
 * (p. ej. el toggle del header y la command palette).
 */
export const useTheme = () => {
  const [mode, setMode] = useState<ThemeMode>(readStoredMode);

  useEffect(() => {
    const handleExternalChange = (event: Event) => {
      const next = (event as CustomEvent<ThemeMode>).detail;
      if (isThemeMode(next)) setMode(next);
    };
    window.addEventListener(THEME_EVENT, handleExternalChange);
    return () => window.removeEventListener(THEME_EVENT, handleExternalChange);
  }, []);

  useEffect(() => {
    applyMode(mode);

    if (mode !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => applyMode('system');
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [mode]);

  const setTheme = useCallback((next: ThemeMode) => {
    setMode(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* sin persistencia disponible; el tema aplica solo a la sesión */
    }
    window.dispatchEvent(new CustomEvent<ThemeMode>(THEME_EVENT, { detail: next }));
  }, []);

  return { mode, setTheme };
};
