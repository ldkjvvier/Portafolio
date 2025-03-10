import { Skills, Projects, Contact, AboutMe, Inspiration } from '@/components/sections';
import { AbilitiesIcon, ProjectsIcon, ContactIcon } from '@/components/Icons/Icons';

interface PageSection {
  id: string;
  title: string;
  component: React.FC;
  icon?: React.FC;
}

export const PAGE_SECTIONS: PageSection[] = [
  {
    id: 'about',
    title: 'Sobre mi',
    component: AboutMe
  },
  {
    id: 'skills',
    title: 'Habilidades',
    component: Skills,
    icon: AbilitiesIcon
  },
  {
    id: 'projects',
    title: 'Proyectos',
    component: Projects,
    icon: ProjectsIcon
  },
  {
    id: 'contact',
    title: 'Contacto',
    component: Contact,
    icon: ContactIcon
  },
  {
    id: 'inspiration',
    title: 'Inspiración',
    component: Inspiration
  }
];
