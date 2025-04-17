import { lazy } from 'react';
import { AbilitiesIcon, ProjectsIcon, ExperienceIcon } from '@/components/Icons/Icons';

const AboutMe = lazy(() => import('@/components/sections/AboutMe'));
const Experience = lazy(() => import('@/components/sections/Experience'));
const Skills = lazy(() => import('@/components/sections/Skills'));
const Projects = lazy(() => import('@/components/sections/Projects'));
const Inspiration = lazy(() => import('@/components/sections/Inspiration'));

import { JSX } from 'react';

export enum SectionId {
  About = 'about',
  Experience = 'experience',
  Skills = 'skills',
  Projects = 'projects',
  Inspiration = 'inspiration'
}

import { LazyExoticComponent } from 'react';

type ComponentType = LazyExoticComponent<() => JSX.Element>;
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
