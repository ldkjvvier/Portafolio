import { Skills, Projects, AboutMe, Inspiration, Experience } from '@/components/sections';
import { AbilitiesIcon, ProjectsIcon, ExperienceIcon } from '@/components/Icons/Icons';

interface PageSection {
  id: string;
  title: string;
  label?: string;
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
    id: 'experience',
    title: 'Experiencia laboral',
    label: 'Experiencia',
    component: Experience,
    icon: ExperienceIcon
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
    id: 'inspiration',
    title: 'Inspiración',
    component: Inspiration
  }
];
