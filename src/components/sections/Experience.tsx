import { EXPERIENCES } from '@/constants/Experiences';

const formatDate = (date: string) => {
  return new Date(`${date}T00:00:00`).toLocaleDateString('es-ES', {
    month: 'long',
    year: 'numeric'
  });
};

const typeClass = {
  remoto: 'bg-blue-100 text-blue-800 dark:bg-sky-900 dark:text-sky-300',
  presencial: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
  híbrido: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
};

export const Experience = () => {
  return (
    <ol className="relative mx-3.5 mt-16 space-y-20 border-s-2 border-gray-200 dark:border-gray-700">
      {EXPERIENCES.map((exp, index) => {
        const startDateFormatted = formatDate(exp.startDate);
        const endDateFormatted = exp.isCurrent ? 'Presente' : formatDate(exp.endDate);

        return (
          <article className="flex flex-col gap-5 lg:flex-row ml-6" key={index}>
            <span className="absolute -start-[17px] flex size-8 items-center justify-center rounded-full text-yellow-400 text-5xl">
              &bull;
            </span>

            <header className="lg:w-2/5">
              <h3 className="mb-2 flex items-center text-xl font-bold text-gray-800/90 dark:text-gray-300">
                {exp.title}
              </h3>

              <h4 className="mb-1 text-xl font-semibold text-gray-800/90 dark:text-gray-300">
                <a className="hover:underline" href={exp.companyUrl} target="_blank" rel="noopener noreferrer">
                  {exp.company}
                </a>
              </h4>
              <p
                aria-label={`Período de trabajo: ${startDateFormatted} - ${endDateFormatted}`}
                className="mb-3 block text-sm font-normal capitalize leading-none text-gray-800/90 dark:text-gray-300 lg:mb-5"
              >
                <time dateTime={exp.startDate} className="after:content-['-']">
                  {startDateFormatted}
                </time>
                <time dateTime={exp.endDate}>{endDateFormatted}</time>
              </p>

              <span className={`rounded px-2.5 py-0.5 text-sm font-medium capitalize ${typeClass[exp.type]}`}>
                {exp.type}
              </span>
            </header>

            <div className="flex-1 space-y-5 text-gray-800/90 dark:text-gray-300">
              {exp.description.map((line, index) => (
                <p className="text-pretty text-base text-gray-800/90 dark:text-gray-300" key={index}>
                  {line}
                </p>
              ))}
            </div>
          </article>
        );
      })}
    </ol>
  );
};
