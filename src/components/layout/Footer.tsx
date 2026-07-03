import { GithubIcon, LinkedInIcon, MailIcon } from '@/components/Icons/Icons';
import { ABOUT_ME } from '@/constants/AboutMeData';

const FOOTER_LINKS = [
  { label: 'GitHub', href: ABOUT_ME.links.github, icon: GithubIcon },
  { label: 'LinkedIn', href: ABOUT_ME.links.linkedin, icon: LinkedInIcon },
  { label: 'Correo', href: `mailto:${ABOUT_ME.links.email}`, icon: MailIcon }
] as const;

export const Footer = () => (
  <footer className="border-t border-line">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
      <p className="text-sm text-ink-muted">
        © {new Date().getFullYear()} {ABOUT_ME.name} · {ABOUT_ME.role}
      </p>

      <ul className="flex items-center gap-2">
        {FOOTER_LINKS.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
              aria-label={label}
              className="icon-btn"
            >
              <Icon className="size-4" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);
