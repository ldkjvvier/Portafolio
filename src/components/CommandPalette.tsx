import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentType,
  type KeyboardEvent as ReactKeyboardEvent,
  type SVGProps
} from 'react';
import { createPortal } from 'react-dom';
import {
  FileIcon,
  GithubIcon,
  HashIcon,
  LinkedInIcon,
  MailIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
  SystemIcon
} from '@/components/Icons/Icons';
import { ABOUT_ME } from '@/constants/AboutMeData';
import { PAGE_SECTIONS } from '@/constants/PageSections';
import { openCvViewer } from '@/hooks/useCvViewer';
import { useTheme } from '@/hooks/useTheme';
import { showToast } from '@/hooks/useToast';
import { copyText } from '@/lib/clipboard';

interface Command {
  id: string;
  label: string;
  group: string;
  keywords?: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  run: () => void;
}

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

/** Búsqueda insensible a mayúsculas y tildes. */
const normalize = (text: string) => text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

export const CommandPalette = ({ open, onClose }: CommandPaletteProps) => {
  const { setTheme } = useTheme();
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const commands = useMemo<Command[]>(() => {
    const navigation: Command[] = PAGE_SECTIONS.map((section) => ({
      id: `nav-${section.id}`,
      label: `Ir a ${section.title}`,
      group: 'Navegación',
      keywords: section.description,
      icon: HashIcon,
      run: () => {
        window.location.hash = `#${section.id}`;
      }
    }));

    const openExternal = (url: string) => window.open(url, '_blank', 'noopener,noreferrer');

    return [
      ...navigation,
      {
        id: 'copy-email',
        label: 'Copiar correo electrónico',
        group: 'Contacto',
        keywords: ABOUT_ME.links.email,
        icon: MailIcon,
        run: async () => {
          const ok = await copyText(ABOUT_ME.links.email);
          showToast(ok ? 'Correo copiado al portapapeles' : 'No se pudo copiar el correo');
        }
      },
      {
        id: 'open-cv',
        label: 'Ver CV',
        group: 'Contacto',
        keywords: 'curriculum resume pdf',
        icon: FileIcon,
        run: () => openCvViewer()
      },
      {
        id: 'open-github',
        label: 'Abrir GitHub',
        group: 'Contacto',
        keywords: 'repositorios código',
        icon: GithubIcon,
        run: () => openExternal(ABOUT_ME.links.github)
      },
      {
        id: 'open-linkedin',
        label: 'Abrir LinkedIn',
        group: 'Contacto',
        keywords: 'perfil profesional',
        icon: LinkedInIcon,
        run: () => openExternal(ABOUT_ME.links.linkedin)
      },
      {
        id: 'theme-light',
        label: 'Tema claro',
        group: 'Tema',
        keywords: 'light modo',
        icon: SunIcon,
        run: () => setTheme('light')
      },
      {
        id: 'theme-dark',
        label: 'Tema oscuro',
        group: 'Tema',
        keywords: 'dark modo',
        icon: MoonIcon,
        run: () => setTheme('dark')
      },
      {
        id: 'theme-system',
        label: 'Tema del sistema',
        group: 'Tema',
        keywords: 'system auto',
        icon: SystemIcon,
        run: () => setTheme('system')
      }
    ];
  }, [setTheme]);

  const filtered = useMemo(() => {
    const term = normalize(query.trim());
    if (!term) return commands;

    // Las coincidencias en el label pesan más que las de grupo/keywords.
    const rank = (command: Command): number => {
      const label = normalize(command.label);
      if (label.startsWith(term)) return 0;
      if (label.includes(term)) return 1;
      if (normalize(`${command.group} ${command.keywords ?? ''}`).includes(term)) return 2;
      return -1;
    };

    return commands
      .map((command) => ({ command, rank: rank(command) }))
      .filter(({ rank: value }) => value >= 0)
      .sort((a, b) => a.rank - b.rank)
      .map(({ command }) => command);
  }, [commands, query]);

  // Al abrir: enfocar el input y bloquear el scroll de fondo; al cerrar, restaurar.
  useEffect(() => {
    if (!open) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    setQuery('');
    setActiveIndex(0);
    inputRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus();
    };
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    listRef.current?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex]);

  if (!open) return null;

  const runCommand = (command: Command) => {
    onClose();
    command.run();
  };

  const handleKeyDown = (event: ReactKeyboardEvent) => {
    switch (event.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowDown':
        event.preventDefault();
        setActiveIndex((index) => Math.min(index + 1, filtered.length - 1));
        break;
      case 'ArrowUp':
        event.preventDefault();
        setActiveIndex((index) => Math.max(index - 1, 0));
        break;
      case 'Home':
        event.preventDefault();
        setActiveIndex(0);
        break;
      case 'End':
        event.preventDefault();
        setActiveIndex(filtered.length - 1);
        break;
      case 'Enter': {
        event.preventDefault();
        const command = filtered[activeIndex];
        if (command) runCommand(command);
        break;
      }
    }
  };

  let lastGroup = '';

  // Portal a <body>: el backdrop-filter del header sticky crea un containing
  // block que recortaría el overlay `fixed` si se renderizara dentro de él.
  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 px-4 pt-[14vh] backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Paleta de comandos"
        className="card fade-up w-full max-w-lg overflow-hidden shadow-2xl"
        onKeyDown={handleKeyDown}
      >
        <div className="flex items-center gap-3 border-b border-line px-4">
          <SearchIcon className="size-4 shrink-0 text-ink-faint" />
          <input
            ref={inputRef}
            type="text"
            role="combobox"
            aria-expanded="true"
            aria-controls="command-list"
            aria-activedescendant={filtered[activeIndex] ? `command-${filtered[activeIndex].id}` : undefined}
            aria-label="Buscar comando"
            placeholder="Buscar sección o acción…"
            autoComplete="off"
            spellCheck={false}
            className="h-12 w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink-faint"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <kbd className="kbd shrink-0">Esc</kbd>
        </div>

        <ul id="command-list" ref={listRef} role="listbox" aria-label="Comandos" className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 && (
            <li className="px-3 py-8 text-center text-sm text-ink-faint">Sin resultados para «{query}»</li>
          )}

          {filtered.map((command, index) => {
            const showGroup = query.trim() === '' && command.group !== lastGroup;
            lastGroup = command.group;
            const Icon = command.icon;

            return (
              <li key={command.id}>
                {showGroup && (
                  <p className="px-3 pb-1 pt-3 text-xs font-medium text-ink-faint" aria-hidden="true">
                    {command.group}
                  </p>
                )}
                <button
                  type="button"
                  id={`command-${command.id}`}
                  role="option"
                  aria-selected={index === activeIndex}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                    index === activeIndex ? 'bg-surface-2 text-ink' : 'text-ink-muted'
                  }`}
                  onMouseMove={() => setActiveIndex(index)}
                  onClick={() => runCommand(command)}
                >
                  <Icon className="size-4 shrink-0 text-ink-faint" />
                  {command.label}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4 border-t border-line px-4 py-2.5 text-xs text-ink-faint">
          <span className="inline-flex items-center gap-1.5">
            <kbd className="kbd">↑↓</kbd> navegar
          </span>
          <span className="inline-flex items-center gap-1.5">
            <kbd className="kbd">Enter</kbd> ejecutar
          </span>
        </div>
      </div>
    </div>,
    document.body
  );
};
