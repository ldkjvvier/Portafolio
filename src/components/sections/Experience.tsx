import { EXPERIENCES } from '@/constants/Experiences';

const formatDate = (date: string) =>
  new Date(`${date}T00:00:00`).toLocaleDateString('es-ES', { month: 'short', year: 'numeric' });

const Experience = () => (
  <ol className="relative space-y-10 border-l border-line pl-6 sm:pl-8">
    {EXPERIENCES.map((experience) => {
      const start = formatDate(experience.startDate);
      const end = experience.isCurrent ? 'Actualidad' : formatDate(experience.endDate);

      return (
        <li key={`${experience.company}-${experience.startDate}`} className="relative">
          <span
            className={`absolute -left-6 top-1.5 size-3 -translate-x-1/2 rounded-full border-2 border-bg sm:-left-8 ${
              experience.isCurrent ? 'bg-accent' : 'bg-line-strong'
            }`}
            aria-hidden="true"
          />

          <article>
            <header className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-lg font-semibold text-ink">{experience.title}</h3>
              {experience.type && (
                <span className="rounded-full border border-line px-2.5 py-0.5 text-xs font-medium capitalize text-ink-muted">
                  {experience.type}
                </span>
              )}
            </header>

            <p className="mt-1 flex flex-wrap items-center gap-x-2 text-sm text-ink-muted">
              {experience.companyUrl ? (
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-ink transition-colors hover:text-accent"
                >
                  {experience.company}
                </a>
              ) : (
                <span className="font-medium text-ink">{experience.company}</span>
              )}
              <span aria-hidden="true">·</span>
              <span>
                <time dateTime={experience.startDate} className="capitalize">
                  {start}
                </time>
                {' a '}
                {experience.isCurrent ? (
                  end
                ) : (
                  <time dateTime={experience.endDate} className="capitalize">
                    {end}
                  </time>
                )}
              </span>
            </p>

            <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-sm leading-6 text-ink-muted marker:text-ink-faint">
              {experience.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        </li>
      );
    })}
  </ol>
);

export default Experience;
