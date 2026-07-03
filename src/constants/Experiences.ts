import type { Experience } from '@/types/portfolio';

export const EXPERIENCES: Experience[] = [
  {
    title: 'Especialista en Ciberseguridad · Full Stack y Automatización',
    company: 'Grupo Falabella',
    companyUrl: 'https://www.grupofalabella.com',
    startDate: '2025-05-01',
    endDate: '',
    isCurrent: true,
    highlights: [
      'Automatización de operaciones SOC con un SOAR desarrollado in-house y n8n, contribuyendo a un 60% de automatización de la operación y al cumplimiento del 100% de los SLA de primera respuesta ante alertas.',
      'Desarrollo de un chatbot interno en n8n para optimizar flujos manuales y reducir tiempos operativos en tareas repetitivas.',
      'Orquestación de flujos de respuesta: envío de correos de alerta, generación de tickets y ejecución de tareas operativas asociadas a alertas.',
      'Automatizaciones de contención de usuarios en entornos cloud y on-premise: baja de conexión VPN/NAC y reseteo de contraseñas.',
      'Despliegue de proyectos en servidores Linux con Docker y levantamiento de recursos en Azure para soportar nuevas automatizaciones e integraciones.'
    ]
  },
  {
    title: 'Desarrollador Full Stack',
    company: 'Freelance',
    type: 'remoto',
    startDate: '2024-10-01',
    endDate: '2025-05-01',
    highlights: [
      'Desarrollo de aplicaciones Full Stack con TypeScript, Node.js, Express, MongoDB y Next.js.',
      'Diseño e implementación de interfaces responsivas y accesibles con MUI y Tailwind CSS, enfocadas en experiencia de usuario.',
      'Construcción y consumo de APIs REST, validando endpoints y flujos mediante pruebas en Postman.',
      'Implementación de autenticación y manejo de sesiones con Express Session, considerando buenas prácticas de seguridad y escalabilidad.'
    ]
  },
  {
    title: 'Practicante de Desarrollo de Software',
    company: 'Principal Financial Group',
    companyUrl: 'https://www.principal.cl',
    type: 'híbrido',
    startDate: '2024-07-01',
    endDate: '2024-10-01',
    highlights: [
      'Desarrollo de aplicaciones frontend y backend con Next.js, TypeScript y arquitecturas serverless en AWS Lambda.',
      'Implementación de metodologías ágiles bajo Scrum, gestionando tareas con TargetProcess.',
      'Colaboración en la creación de soluciones escalables y optimizadas para mejorar el rendimiento en infraestructuras serverless.',
      'Participación activa en revisiones de código y control de versiones con Git y Pull Requests.',
      'Supervisión y ejecución del despliegue de aplicaciones en el ambiente de desarrollo, asegurando su correcta integración y funcionamiento.'
    ]
  },
  {
    title: 'Desarrollador de Software',
    company: 'Rubic',
    companyUrl: 'https://rubic.cl',
    type: 'remoto',
    startDate: '2023-07-01',
    endDate: '2024-01-01',
    highlights: [
      'Desarrollo de aplicaciones frontend y backend con React y Node.js.',
      'Gestión de sesiones de usuario con Express Session y almacenamiento en MongoDB.',
      'Diseño e implementación de bases de datos en MongoDB para la persistencia de datos.'
    ]
  }
];
