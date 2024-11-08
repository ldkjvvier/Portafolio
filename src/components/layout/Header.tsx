import { ToggleDarkMode } from '../ToggleDarkMode';

export const Header = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  };

  return (
    <header className="z-50 border-b border-gray-100 transition-all  dark:border-gray-600 shadow-sm w-full flex justify-around bg-white dark:bg-background p-5 text-black dark:text-white fixed top-0 opacity-95">
      <div className="hover:scale-125 hidden md:block font-semibold transition text-xl cursor-pointer">{'</>'}</div>
      <div className="flex gap-3">
        <ul className="flex gap-3 font-semibold ">
          <li>
            <a
              className="hover:text-gray-400 dark:hover:text-blue-400 transition cursor-pointer"
              onClick={() => scrollTo('about')}
            >
              Sobre Mi
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-400 dark:hover:text-blue-400 transition cursor-pointer"
              onClick={() => scrollTo('skills')}
            >
              Habilidades
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-400 dark:hover:text-blue-400  transition cursor-pointer"
              onClick={() => scrollTo('projects')}
            >
              Proyectos
            </a>
          </li>

          <li>
            <a
              className="hover:text-gray-400 dark:hover:text-blue-400 transition cursor-pointer"
              onClick={() => scrollTo('contact')}
            >
              Contacto
            </a>
          </li>
        </ul>
        <span className="cursor-pointer">
          <ToggleDarkMode />
        </span>
      </div>
    </header>
  );
};
