export const ABOUT_ME = {
  name: 'Javier Madariaga',
  role: 'Desarrollador Full Stack · Automatización y Ciberseguridad',
  location: 'Santiago, Chile',
  /** `**texto**` se muestra en negrita (ver RichText); `{experience}` se reemplaza por los años de experiencia. */
  description:
    'Analista Programador de INACAP con {experience} años de experiencia en **desarrollo Full Stack** y **automatización de ciberseguridad (SOC)**. En Grupo Falabella automatizo la respuesta a alertas de seguridad con n8n, SOAR y LLM, y construyo aplicaciones web, integraciones y workflows con TypeScript, React y Node.js.',
  /** Cifras clave bajo la presentación, pensadas para una lectura rápida. */
  keyFacts: [
    { value: '100%', label: 'de la primera respuesta ante alertas de seguridad, automatizada' },
    { value: '100%', label: 'de cumplimiento de los SLA de primera respuesta' },
    { value: 'IA', label: 'LLM en el triage de alertas SOC y en un chatbot interno' }
  ],
  experienceStartYear: 2023,
  links: {
    github: 'https://www.github.com/ldkjvvier',
    linkedin: 'https://www.linkedin.com/in/javiermadariaga/',
    email: 'javier.a.mada@gmail.com'
  }
} as const;
