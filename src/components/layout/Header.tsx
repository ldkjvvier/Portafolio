import { useEffect, useState } from 'react';
import { ToggleDarkMode } from '../ToggleDarkMode';
import { PAGE_SECTIONS } from '@/constants/PageSections';

export const Header = () => {
  const INCLUDED_SECTIONS = ['about', 'experience', 'skills', 'projects'];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Cierra el menú móvil al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  return (
    <header className="z-50 w-full fixed top-0 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md opacity-95 transition-all">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 sm:px-10 md:px-20 lg:px-36 py-4">
        {/* Logo */}
        <div className="text-xl font-semibold cursor-pointer transition-transform duration-200 hover:scale-110">
          {'</>'}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex gap-5 font-medium">
            {PAGE_SECTIONS.filter(({ id }) => INCLUDED_SECTIONS.includes(id)).map(({ id, title, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-label={title}
                  className="cursor-pointer transition-colors duration-200 hover:text-gray-700 dark:hover:text-blue-300"
                >
                  {label ?? title}
                </a>
              </li>
            ))}
          </ul>
          <ToggleDarkMode />
        </nav>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            className="text-gray-900 dark:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md backdrop-blur-sm transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100 py-6' : 'max-h-0 overflow-hidden opacity-0 py-0'
        }`}
      >
        <ul className="flex flex-col gap-4 items-center font-medium px-4">
          {PAGE_SECTIONS.filter(({ id }) => INCLUDED_SECTIONS.includes(id)).map(({ id, title, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-label={title}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 transition-colors duration-200 hover:text-gray-700 dark:hover:text-blue-300"
              >
                {label ?? title}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-center">
          <ToggleDarkMode />
        </div>
      </div>
    </header>
  );
};
