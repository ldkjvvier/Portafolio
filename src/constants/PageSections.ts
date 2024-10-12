import { Skills, Proyects, Contact, AboutMe, Inspiration } from '@/components/sections';
import { HabilitiesIcon, ProyectsIcon, ContactIcon } from '@/components/Icons/Icons';

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
    icon: HabilitiesIcon
  },
  {
    id: 'projects',
    title: 'Proyectos',
    component: Proyects,
    icon: ProyectsIcon
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
