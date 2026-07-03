import type { SVGProps } from 'react';

/**
 * Set de iconos del proyecto (trazos estilo Tabler, 24x24, stroke 1.75).
 * Tamaño y color se heredan del contexto via `currentColor` y la prop `className`;
 * los iconos no llevan estados hover propios: eso es responsabilidad del botón/enlace.
 */
type IconProps = SVGProps<SVGSVGElement>;

const defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true
} as const;

export const GithubIcon = (props: IconProps) => (
  <svg {...defaultProps} className="size-5" {...props}>
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </svg>
);

export const LinkedInIcon = (props: IconProps) => (
  <svg {...defaultProps} className="size-5" {...props}>
    <path d="M8 11v5" />
    <path d="M8 8v.01" />
    <path d="M12 16v-5" />
    <path d="M16 16v-3a2 2 0 0 0-4 0" />
    <path d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z" />
  </svg>
);

export const MailIcon = (props: IconProps) => (
  <svg {...defaultProps} className="size-5" {...props}>
    <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

export const FileIcon = (props: IconProps) => (
  <svg {...defaultProps} className="size-5" {...props}>
    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
    <path d="M9 9h1" />
    <path d="M9 13h6" />
    <path d="M9 17h6" />
  </svg>
);

export const ExternalLinkIcon = (props: IconProps) => (
  <svg {...defaultProps} className="size-4" {...props}>
    <path d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" />
    <path d="M11 13l9-9" />
    <path d="M15 4h5v5" />
  </svg>
);

export const CheckIcon = (props: IconProps) => (
  <svg {...defaultProps} className="size-5" {...props}>
    <path d="M5 12l5 5L20 7" />
  </svg>
);

export const DownloadIcon = (props: IconProps) => (
  <svg {...defaultProps} className="size-5" {...props}>
    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    <path d="M7 11l5 5 5-5" />
    <path d="M12 4v12" />
  </svg>
);

export const XIcon = (props: IconProps) => (
  <svg {...defaultProps} className="size-5" {...props}>
    <path d="M18 6L6 18" />
    <path d="M6 6l12 12" />
  </svg>
);

export const SearchIcon = (props: IconProps) => (
  <svg {...defaultProps} className="size-5" {...props}>
    <circle cx="10" cy="10" r="7" />
    <path d="M21 21l-6-6" />
  </svg>
);

export const HashIcon = (props: IconProps) => (
  <svg {...defaultProps} className="size-5" {...props}>
    <path d="M5 9h14" />
    <path d="M5 15h14" />
    <path d="M11 4L7 20" />
    <path d="M17 4l-4 16" />
  </svg>
);

export const SunIcon = (props: IconProps) => (
  <svg {...defaultProps} className="size-5" {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 3v2m0 14v2M5.6 5.6l1.4 1.4m9.9 9.9 1.4 1.4M3 12h2m14 0h2M5.6 18.4 7 17m9.9-9.9 1.4-1.4" />
  </svg>
);

export const MoonIcon = (props: IconProps) => (
  <svg {...defaultProps} className="size-5" {...props}>
    <path d="M12 3h.4a7.5 7.5 0 0 0 7.9 12.8A9 9 0 1 1 12 3" />
  </svg>
);

export const SystemIcon = (props: IconProps) => (
  <svg {...defaultProps} className="size-5" {...props}>
    <path d="M3 5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
    <path d="M7 20h10" />
    <path d="M9 16v4" />
    <path d="M15 16v4" />
  </svg>
);
