import { useEffect, useState } from 'react';
import { ToggleDarkMode } from '../ToggleDarkMode';
import { PAGE_SECTIONS } from '@/constants/PageSections';

const INCLUDED_SECTIONS = ['about', 'experience', 'skills', 'projects'];
const filteredSections = PAGE_SECTIONS.filter(({ id }) => INCLUDED_SECTIONS.includes(id));

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 z-50 w-screen px-4 py-4 mx-auto transition-all flex justify-center text-[0.9rem]">
      <section className="header-section max-w-sm md:max-w-2xl flex items-center justify-center rounded-full px-6 py-2 text-black dark:text-white">
        {/* Desktop Nav */}
        <nav className="flex items-center gap-6">
          <ul className="flex gap-5 font-medium">
            {filteredSections.map(({ id, title, label }) => (
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
      </section>
    </header>
  );
};
