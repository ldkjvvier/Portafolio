import { AbilitiesIcon, ProjectsIcon, ExperienceIcon } from '@/components/Icons/Icons';
import AboutMe from '@/components/sections/AboutMe';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Inspiration from '@/components/sections/Inspiration';
import { JSX } from 'react';

export enum SectionId {
  About = 'about',
  Experience = 'experience',
  Skills = 'skills',
  Projects = 'projects',
  Inspiration = 'inspiration'
}

type ComponentType = () => JSX.Element;
type IconType = () => JSX.Element;

interface PageSection {
  id: SectionId;
  title: string;
  label?: string;
  component: ComponentType;
  icon?: IconType;
}

export const PAGE_SECTIONS: PageSection[] = [
  {
    id: SectionId.About,
    title: 'Sobre mí',
    component: AboutMe
  },
  {
    id: SectionId.Experience,
    title: 'Experiencia laboral',
    label: 'Experiencia',
    icon: ExperienceIcon,
    component: Experience
  },
  {
    id: SectionId.Skills,
    title: 'Habilidades',
    icon: AbilitiesIcon,
    component: Skills
  },
  {
    id: SectionId.Projects,
    title: 'Proyectos',
    icon: ProjectsIcon,
    component: Projects
  },
  {
    id: SectionId.Inspiration,
    title: 'Inspiración',
    component: Inspiration
  }
];
