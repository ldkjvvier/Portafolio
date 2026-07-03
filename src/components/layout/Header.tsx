import { useEffect, useMemo, useState } from 'react';
import { CommandPalette } from '@/components/CommandPalette';
import { SearchIcon } from '@/components/Icons/Icons';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ABOUT_ME } from '@/constants/AboutMeData';
import { HEADER_SECTIONS } from '@/constants/PageSections';

export const Header = () => {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const shortcutLabel = useMemo(
    () => (typeof navigator !== 'undefined' && /Mac/i.test(navigator.platform) ? '⌘ K' : 'Ctrl K'),
    []
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:px-6 lg:px-8">
        <a href="#about" className="shrink-0 text-sm font-semibold tracking-tight text-ink" aria-label="Ir al inicio">
          {ABOUT_ME.name}
        </a>

        <nav
          aria-label="Secciones del portafolio"
          className="hide-scrollbar ml-auto flex min-w-0 items-center gap-1 overflow-x-auto"
        >
          {HEADER_SECTIONS.map(({ id, title, navigationLabel }) => (
            <a
              key={id}
              href={`#${id}`}
              className="shrink-0 rounded-md px-3 py-2 text-sm text-ink-muted transition-colors hover:bg-surface-2 hover:text-ink"
            >
              {navigationLabel ?? title}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="icon-btn gap-2 sm:w-auto sm:px-3"
          aria-label={`Abrir paleta de comandos (${shortcutLabel})`}
          aria-haspopup="dialog"
          onClick={() => setPaletteOpen(true)}
        >
          <SearchIcon className="size-4" />
          <kbd className="kbd hidden sm:inline-flex" aria-hidden="true">
            {shortcutLabel}
          </kbd>
        </button>

        <ThemeToggle />
      </div>

      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </header>
  );
};
