import { useEffect, useRef, useState } from 'react';
import { MoonIcon, SunIcon, SystemIcon } from '@/components/Icons/Icons';
import { useTheme, type ThemeMode } from '@/hooks/useTheme';

const THEME_OPTIONS: Array<{ value: ThemeMode; label: string; icon: typeof SunIcon }> = [
  { value: 'light', label: 'Claro', icon: SunIcon },
  { value: 'dark', label: 'Oscuro', icon: MoonIcon },
  { value: 'system', label: 'Sistema', icon: SystemIcon }
];

export const ThemeToggle = () => {
  const { mode, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  const ActiveIcon = THEME_OPTIONS.find((option) => option.value === mode)?.icon ?? SystemIcon;

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-label="Cambiar tema"
        aria-haspopup="menu"
        aria-expanded={open}
        className="icon-btn"
        onClick={() => setOpen((prev) => !prev)}
      >
        <ActiveIcon />
      </button>

      {open && (
        <ul
          role="menu"
          aria-label="Seleccionar tema"
          className="card absolute right-0 top-[calc(100%+0.5rem)] z-50 min-w-36 p-1.5 shadow-lg"
        >
          {THEME_OPTIONS.map(({ value, label, icon: Icon }) => {
            const isActive = value === mode;

            return (
              <li key={value}>
                <button
                  type="button"
                  role="menuitemradio"
                  aria-checked={isActive}
                  className={`flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-left text-sm transition-colors ${
                    isActive ? 'bg-accent-soft font-medium text-accent' : 'text-ink-muted hover:bg-surface-2 hover:text-ink'
                  }`}
                  onClick={() => {
                    setTheme(value);
                    setOpen(false);
                  }}
                >
                  <Icon className="size-4" />
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
