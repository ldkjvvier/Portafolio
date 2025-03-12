import { ToggleDarkMode } from '../ToggleDarkMode';
import { PAGE_SECTIONS } from '@/constants/PageSections';

export const Header = () => {
  const INCLUDED_SECTIONS = ['about', 'experience', 'skills', 'projects'];

  return (
    <header className="z-50 border-b border-gray-200 dark:border-gray-700 shadow-md w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white fixed top-0 opacity-95 transition-all">
      <div className="max-w-screen-xl mx-auto flex justify-center md:justify-between items-center px-4 sm:px-10 md:px-20 lg:px-36 py-4">
        {/* Ícono de código */}
        <div className="hidden md:block text-xl font-semibold cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110">
          {'</>'}
        </div>

        {/* Menú de navegación */}
        <nav className="flex gap-6 items-center">
          <ul className="flex gap-5 font-medium">
            {PAGE_SECTIONS.filter(({ id }) => INCLUDED_SECTIONS.includes(id)).map(({ id, title, label }) => (
              <li key={id}>
                <a
                  className="cursor-pointer transition-colors duration-200 ease-in-out hover:text-gray-700 dark:hover:text-blue-300"
                  aria-label={title}
                  href={`#${id}`}
                >
                  {label ?? title}
                </a>
              </li>
            ))}
          </ul>
          <ToggleDarkMode />
        </nav>
      </div>
    </header>
  );
};
