import { FileIcon, GithubIcon, LinkedInIcon, MailIcon } from '@/components/Icons/Icons';
import { ABOUT_ME } from '@/constants/AboutMeData';
import { openCvViewer } from '@/hooks/useCvViewer';
import { showToast } from '@/hooks/useToast';
import { copyText } from '@/lib/clipboard';

const SOCIAL_LINKS = [
  { label: 'GitHub', href: ABOUT_ME.links.github, icon: GithubIcon },
  { label: 'LinkedIn', href: ABOUT_ME.links.linkedin, icon: LinkedInIcon }
] as const;

const AboutMe = () => {
  const experienceYears = new Date().getFullYear() - ABOUT_ME.experienceStartYear;

  const handleCopyEmail = async () => {
    const ok = await copyText(ABOUT_ME.links.email);
    showToast(ok ? 'Correo copiado al portapapeles' : 'No se pudo copiar el correo');
  };

  return (
    <div className="fade-up py-20 md:py-28">
      <p className="text-sm font-medium text-accent">
        {ABOUT_ME.role} · {ABOUT_ME.location}
      </p>

      <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight text-ink sm:text-6xl md:text-7xl">
        {ABOUT_ME.name}
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-7 text-ink-muted sm:text-lg sm:leading-8">
        {ABOUT_ME.description.replace('{experience}', String(experienceYears))}
      </p>

      <div className="mt-9 flex flex-wrap items-center gap-3">
        <a href="#projects" className="btn btn-primary">
          Ver proyectos
        </a>
        <button type="button" onClick={openCvViewer} className="btn btn-secondary">
          <FileIcon className="size-4" />
          Ver CV
        </button>
      </div>

      <ul className="mt-7 flex items-center gap-2" aria-label="Redes de contacto">
        {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label} className="icon-btn">
              <Icon className="size-4.5" />
            </a>
          </li>
        ))}
        <li>
          <button
            type="button"
            className="icon-btn"
            aria-label="Copiar correo electrónico"
            title="Copiar correo electrónico"
            onClick={handleCopyEmail}
          >
            <MailIcon className="size-4.5" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default AboutMe;
