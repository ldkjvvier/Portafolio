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
    <header className="fixed top-0 z-50 w-screen px-4 py-4 mx-auto transition-all flex justify-center text-sm">
      <section className="header-section max-w-sm md:max-w-2xl flex items-center justify-center rounded-full px-3 py-2 text-theme-primary-light dark:text-theme-primary-dark">
        {/* Desktop Nav */}
        <nav className="flex items-center gap-1 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 font-medium">
          {filteredSections.map(({ id, title, label }) => (
            <a
              href={`#${id}`}
              aria-label={title}
              key={id}
              className="cursor-pointer transition-colors duration-200 hover:text-theme-hover-light dark:hover:text-theme-hover-dark"
            >
              {label ?? title}
            </a>
          ))}
          <ToggleDarkMode />
        </nav>
      </section>
    </header>
  );
};
