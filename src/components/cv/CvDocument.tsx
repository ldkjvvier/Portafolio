import { ABOUT_ME } from '@/constants/AboutMeData';
import { CV } from '@/constants/CvData';
import { EDUCATION, LANGUAGES } from '@/constants/EducationData';
import { EXPERIENCES } from '@/constants/Experiences';
import { SKILL_GROUPS } from '@/constants/SkillsData';

const formatMonth = (date: string) => {
  const formatted = new Date(`${date}T00:00:00`).toLocaleDateString('es-ES', { month: 'short', year: 'numeric' });
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};

const formatGraduation = (date: string) => {
  const formatted = new Date(`${date}-01T00:00:00`).toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};

const SectionTitle = ({ children }: { children: string }) => (
  <h3 className="mb-3 border-b border-zinc-200 pb-1.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-blue-700">
    {children}
  </h3>
);

/**
 * El CV como documento. Se renderiza siempre como "papel" (colores fijos,
 * independientes del tema) porque es la vista previa exacta del PDF que se
 * descarga; los estilos de impresión de index.css lo convierten en el PDF.
 */
export const CvDocument = () => (
  <article className="cv-document bg-white px-7 py-8 text-[0.8rem] leading-normal text-zinc-800 sm:px-10 sm:py-10">
    <header>
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">{ABOUT_ME.name}</h2>
      <p className="mt-1 text-sm font-medium text-blue-700">{ABOUT_ME.role}</p>
      <p className="mt-2 text-xs text-zinc-500">
        {ABOUT_ME.location} · {ABOUT_ME.links.email} · github.com/ldkjvvier · linkedin.com/in/javiermadariaga ·{' '}
        {CV.siteUrl}
      </p>
    </header>

    <section className="mt-6" aria-label="Resumen">
      <p className="text-justify leading-relaxed text-zinc-700">{CV.summary}</p>
    </section>

    <section className="mt-7" aria-label="Experiencia profesional">
      <SectionTitle>Experiencia profesional</SectionTitle>
      <div className="space-y-5">
        {EXPERIENCES.map((experience) => (
          <div key={`${experience.company}-${experience.startDate}`} className="cv-entry">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h4 className="font-semibold text-zinc-900">{experience.title}</h4>
              <p className="text-xs tabular-nums text-zinc-500">
                {formatMonth(experience.startDate)} – {experience.isCurrent ? 'Actualidad' : formatMonth(experience.endDate)}
              </p>
            </div>
            <p className="mt-0.5 text-xs font-medium text-zinc-600">
              {experience.company}
              {experience.type ? ` · ${experience.type.charAt(0).toUpperCase()}${experience.type.slice(1)}` : ''}
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-4 text-zinc-700 marker:text-zinc-400">
              {experience.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    <section className="mt-7" aria-label="Formación">
      <SectionTitle>Formación</SectionTitle>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h4 className="font-semibold text-zinc-900">{EDUCATION.degree}</h4>
        <p className="text-xs tabular-nums text-zinc-500">{formatGraduation(EDUCATION.graduationDate)}</p>
      </div>
      <p className="mt-0.5 text-xs font-medium text-zinc-600">
        {EDUCATION.institution} · {EDUCATION.location}
      </p>
      {EDUCATION.honors && <p className="mt-1 text-zinc-700">Honores: {EDUCATION.honors}.</p>}
    </section>

    <section className="mt-7" aria-label="Idiomas">
      <SectionTitle>Idiomas</SectionTitle>
      <ul className="space-y-1 text-zinc-700">
        {LANGUAGES.map((language) => (
          <li key={language.name}>
            <span className="font-medium text-zinc-900">{language.name}:</span> {language.level}.
          </li>
        ))}
      </ul>
    </section>

    <section className="mt-7" aria-label="Habilidades">
      <SectionTitle>Habilidades</SectionTitle>
      <ul className="space-y-1.5 text-zinc-700">
        {SKILL_GROUPS.map((group) => (
          <li key={group.title}>
            <span className="font-medium text-zinc-900">{group.title}:</span> {group.skills.join(', ')}.
          </li>
        ))}
      </ul>
    </section>
  </article>
);
