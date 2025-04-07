import { SunIcon, MoonIcon, SystemIcon } from './Icons/Icons';
import { useState, useEffect } from 'react';

export const ToggleDarkMode = () => {
  const [themeMode, setThemeMode] = useState('system');
  const [menuOpen, setMenuOpen] = useState(false);

  const applyThemeMode = (mode: string) => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else if (mode === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else if (mode === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', prefersDark);
      document.documentElement.classList.toggle('light', !prefersDark);
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('themeMode') ?? 'system';
    setThemeMode(storedTheme);
    applyThemeMode(storedTheme);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (themeMode === 'system') {
        applyThemeMode('system');
      }
    };
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [themeMode]);

  const handleThemeChange = (mode: 'system' | 'dark' | 'light') => {
    setThemeMode(mode);
    localStorage.setItem('themeMode', mode);
    applyThemeMode(mode);
    setMenuOpen(false);
  };

  const buttonStyle = 'w-full text-left p-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-700';
  return (
    <div className="relative cursor-pointer transition-transform duration-200 ease-in-out flex items-center justify-center">
      <button
        className="hover:scale-125 transition-all text-theme-primary-light dark:text-theme-primary-dark hover:text-theme-hover-light dark:hover:text-theme-hover-dark"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {themeMode === 'light' ? <SunIcon /> : themeMode === 'dark' ? <MoonIcon /> : <SystemIcon />}
      </button>

      {menuOpen && (
        <div className="absolute top-10 right-0 min-w-32 rounded-md border border-neutral-100 bg-neutral-100 p-1 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] dark:border-neutral-500/20 dark:bg-neutral-500">
          <ul>
            <li>
              <button className={buttonStyle} onClick={() => handleThemeChange('light')}>
                Light
              </button>
            </li>
            <li>
              <button className={buttonStyle} onClick={() => handleThemeChange('dark')}>
                Dark
              </button>
            </li>
            <li>
              <button className={buttonStyle} onClick={() => handleThemeChange('system')}>
                System
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
