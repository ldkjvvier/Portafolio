type ExperienceType = 'remote' | 'onsite' | 'hybrid';

const experience: {
  title: string;
  company: string;
  companyUrl: string;
  type: ExperienceType;
  startDate: string;
  endDate: string;
  isCurrent?: boolean;
  description: string;
}[] = [
  {
    title: 'experiences.encora_senior_software_engineer.title',
    company: 'Encora Inc.',
    companyUrl: 'http://www.encora.com/',
    type: 'remote',
    startDate: '2024-09-01',
    endDate: '2024-09-01',
    isCurrent: true,
    description: 'experiences.encora_senior_software_engineer.description'
  },
  {
    title: 'experiences.fractalup_project_manager.title',
    company: 'FractalUp',
    companyUrl: 'https://www.info.fractalup.com/',
    type: 'remote',
    startDate: '2022-03-01',
    endDate: '2024-02-01',
    description: 'experiences.fractalup_project_manager.description'
  },
  {
    title: 'experiences.fractalup_fullstack.title',
    company: 'FractalUp',
    companyUrl: 'https://www.info.fractalup.com/',
    type: 'remote',
    startDate: '2021-02-01',
    endDate: '2022-02-01',
    description: 'experiences.fractalup_fullstack.description'
  }
];

const formatDate = (date: string) => {
  return new Date(`${date}T00:00:00`).toLocaleDateString('es-ES', {
    month: 'long',
    year: 'numeric'
  });
};

const typeClass = {
  remote: 'bg-blue-100 text-blue-800 dark:bg-sky-900 dark:text-sky-300',
  onsite: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
  hybrid: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
};

export const Experience = () => {
  return (
    <ol className="relative mx-3.5 mt-16 space-y-20 border-s-2 border-gray-200 dark:border-gray-700">
      {experience.map((exp, index) => {
        const startDateFormatted = formatDate(exp.startDate);
        const endDateFormatted = exp.isCurrent ? 'Presente' : formatDate(exp.endDate);

        return (
          <article className="flex flex-col gap-5 lg:flex-row" key={index}>
            <span className="absolute -start-[17px] flex size-8 items-center justify-center rounded-full bg-accent-400 dark:bg-accent-200"></span>

            <header className="lg:w-2/5">
              <h3 className="mb-2 flex items-center text-xl font-bold text-gray-800/90 dark:text-gray-300">
                {exp.title}
              </h3>

              <h4 className="mb-1 text-xl font-semibold text-gray-800/90 dark:text-gray-300">
                <a className="hover:underline" href={exp.companyUrl} target="_blank" rel="noopener noreferrer">
                  {exp.company}
                </a>
              </h4>
              <span
                className={`rounded px-2.5 py-0.5 text-sm font-medium capitalize ${
                  typeClass[exp.type as ExperienceType]
                }`}
              />
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
              <p className="text-pretty text-base text-gray-800/90 dark:text-gray-300">{exp.description}</p>
            </div>
          </article>
        );
      })}
    </ol>
  );
};
