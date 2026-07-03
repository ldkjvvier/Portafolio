import { AboutMe, Contact, Education, Experience, Inspiration, Projects, Skills } from '@/components/sections';
import type { PageSection } from '@/types/portfolio';

export const SECTION_ID = {
  About: 'about',
  Experience: 'experience',
  Education: 'education',
  Skills: 'skills',
  Projects: 'projects',
  Inspiration: 'inspiration',
  Contact: 'contact'
} as const;

export type SectionId = (typeof SECTION_ID)[keyof typeof SECTION_ID];

export const PAGE_SECTIONS: PageSection[] = [
  {
    id: SECTION_ID.About,
    title: 'Sobre mí',
    showInNavigation: true,
    component: AboutMe
  },
  {
    id: SECTION_ID.Experience,
    title: 'Experiencia',
    description: 'Roles en los que he trabajado y lo que aporté en cada uno.',
    showInNavigation: true,
    component: Experience
  },
  {
    id: SECTION_ID.Education,
    title: 'Formación',
    description: 'Estudios, reconocimientos e idiomas.',
    component: Education
  },
  {
    id: SECTION_ID.Skills,
    title: 'Habilidades',
    description: 'Tecnologías con las que construyo producto en el día a día.',
    showInNavigation: true,
    component: Skills
  },
  {
    id: SECTION_ID.Projects,
    title: 'Proyectos',
    description: 'Una selección de proyectos con demo en vivo y código abierto.',
    showInNavigation: true,
    component: Projects
  },
  {
    id: SECTION_ID.Inspiration,
    title: 'Inspiración',
    description: 'Creadores que me ayudan a seguir aprendiendo y mejorar mi criterio técnico.',
    component: Inspiration
  },
  {
    id: SECTION_ID.Contact,
    title: 'Contacto',
    showInNavigation: true,
    component: Contact
  }
];

export const HEADER_SECTIONS = PAGE_SECTIONS.filter((section) => section.showInNavigation);
