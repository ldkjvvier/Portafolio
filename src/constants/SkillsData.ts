import type { Skill, SkillGroup } from '@/types/portfolio';

/** Stack principal: se muestra como grilla de iconos. */
export const SKILLS: Skill[] = [
  { title: 'JavaScript', icon: 'abilities/js.png' },
  { title: 'TypeScript', icon: 'abilities/Typescript.png' },
  { title: 'React', icon: 'abilities/react.png' },
  { title: 'Next.js', icon: 'abilities/nextjs.png' },
  { title: 'Tailwind CSS', icon: 'abilities/tailwind.png' },
  { title: 'Node.js', icon: 'abilities/nodejs.png' },
  { title: 'MongoDB', icon: 'abilities/mongodb.png' },
  { title: 'PostgreSQL', icon: 'abilities/postgresql.svg' },
  { title: 'Docker', icon: 'abilities/docker.svg' },
  { title: 'n8n', icon: 'abilities/n8n.svg' },
  { title: 'Azure', icon: 'abilities/azure.svg' },
  { title: 'AWS Lambda', icon: 'abilities/aws-lambda.png' },
  { title: 'Git', icon: 'abilities/git.png' }
];

/** Detalle por área, alineado al CV. */
export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Automatización y ciberseguridad',
    skills: ['Automatización SOC', 'SOAR', 'n8n', 'Playbooks de respuesta', 'Entra ID', 'VPN / NAC', 'Ticketing']
  },
  {
    title: 'Inteligencia artificial',
    skills: ['LLM', 'Agentes de IA en n8n', 'Chatbots', 'Triage de alertas con IA', 'Prompt engineering']
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Redux', 'TanStack Query', 'MUI', 'Tailwind CSS']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'APIs REST', 'JWT', 'Zod', 'Mongoose']
  },
  {
    title: 'Bases de datos',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQL']
  },
  {
    title: 'Cloud y DevOps',
    skills: ['AWS Lambda', 'Amazon S3', 'Azure', 'Docker', 'Linux']
  },
  {
    title: 'Testing y calidad',
    skills: ['Jest', 'Vitest', 'Postman', 'Code review']
  },
  {
    title: 'Lenguajes',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Java']
  },
  {
    title: 'Metodologías y herramientas',
    skills: ['Git', 'Pull Requests', 'Scrum', 'Jira']
  }
];
