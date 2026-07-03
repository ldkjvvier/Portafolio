import { EDUCATION, LANGUAGES } from '@/constants/EducationData';

const formatGraduation = (date: string) => {
  const formatted = new Date(`${date}-01T00:00:00`).toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};

const Education = () => (
  <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-14">
    <article>
      <h3 className="text-lg font-semibold text-ink">{EDUCATION.degree}</h3>
      <p className="mt-1 text-sm text-ink-muted">
        {EDUCATION.institution} · {EDUCATION.location} ·{' '}
        <time dateTime={EDUCATION.graduationDate}>{formatGraduation(EDUCATION.graduationDate)}</time>
      </p>

      {EDUCATION.honors && (
        <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-accent">
          Honores: {EDUCATION.honors}
        </p>
      )}
    </article>

    <div>
      <h3 className="text-sm font-semibold text-ink">Idiomas</h3>
      <ul className="mt-3 space-y-2">
        {LANGUAGES.map((language) => (
          <li key={language.name} className="text-sm text-ink-muted">
            <span className="font-medium text-ink">{language.name}</span> · {language.level}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Education;
