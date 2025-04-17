import { PROJECTS } from '@/constants/ProjectsData';

const Projects = () => (
  <ul className="flex flex-col gap-12">
    {PROJECTS.map(({ id, web, img, title, description, github }, i) => {
      const isEven = i % 2 === 0;
      const [imagePosition, textPosition] = isEven
        ? ['md:col-start-1', 'md:col-start-2']
        : ['md:col-start-2', 'md:col-start-1'];
      const imageAlign = isEven ? 'md:justify-start' : 'md:justify-end';

      return (
        <li key={id} className="group grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-4 py-6 md:py-12">
          <div className={`w-full flex justify-center ${imageAlign} ${imagePosition}`}>
            <a href={web} target="_blank" rel="noreferrer">
              <img
                src={img}
                alt={title}
                className="w-full max-w-[420px] h-auto aspect-video object-cover group-hover:scale-105 group-hover:md:scale-110 transition-transform duration-500 ease-out overflow-hidden rounded-2xl bg-gray-200 dark:bg-slate-900 border dark:border-slate-700/80 shadow-2xl shadow-black/60 cursor-pointer"
              />
            </a>
          </div>

          <div
            className={`${textPosition} md:row-start-1 flex flex-col justify-center p-4 text-gray-800/90 dark:text-gray-300`}
          >
            <p className="text-lg sm:text-xl md:text-2xl font-extrabold text-pretty">{description}</p>
            <footer className="mt-4">
              <ul className="flex flex-wrap gap-3 items-center font-bold">
                <li>
                  <img
                    src="https://avatars.githubusercontent.com/u/145422138?v=4"
                    alt="User GitHub Avatar"
                    className="w-8 h-8 rounded-full drag-none pointer-events-none"
                  />
                </li>
                <li className="text-xs sm:text-sm md:text-lg truncate font-extrabold text-gray-800 dark:text-gray-200">
                  {title}
                </li>
                {[
                  { href: web, text: 'Web' },
                  { href: github, text: 'Código' }
                ].map(({ href, text }) => (
                  <li key={text}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-black dark:text-gray-900 text-xs md:text-sm uppercase px-3 py-1 rounded-2xl bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out"
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </footer>
          </div>
        </li>
      );
    })}
  </ul>
);

export default Projects;
