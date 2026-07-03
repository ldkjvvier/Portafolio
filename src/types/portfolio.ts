import type { ComponentType } from 'react';

export type WorkMode = 'remoto' | 'presencial' | 'híbrido';

export interface Experience {
  title: string;
  company: string;
  companyUrl?: string;
  /** Modalidad de trabajo; se omite cuando no se conoce */
  type?: WorkMode;
  /** Fecha ISO (YYYY-MM-DD) */
  startDate: string;
  /** Fecha ISO; vacía cuando `isCurrent` es true */
  endDate: string;
  isCurrent?: boolean;
  highlights: string[];
}

export interface Project {
  id: number;
  title: string;
  year: number;
  description: string;
  /** Ruta relativa dentro de public/ (se resuelve con withBase) */
  img: string;
  web: string;
  github: string;
  tags: string[];
}

export interface Skill {
  title: string;
  /** Ruta del icono relativa a public/ (se resuelve con withBase) */
  icon: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  /** Fecha ISO (YYYY-MM) de titulación */
  graduationDate: string;
  honors?: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Inspiration {
  id: number;
  username: string;
  url: string;
  /** Ruta relativa dentro de public/ (se resuelve con withBase) */
  icon: string;
}

export interface PageSection {
  id: string;
  title: string;
  description?: string;
  navigationLabel?: string;
  showInNavigation?: boolean;
  component: ComponentType;
}
