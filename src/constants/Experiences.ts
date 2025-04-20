type ExperienceType = 'remoto' | 'presencial' | 'híbrido';

interface Experience {
  title: string;
  company: string;
  companyUrl: string;
  type: ExperienceType;
  startDate: string;
  endDate: string;
  isCurrent?: boolean;
  description: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    title: 'Desarrollador Fullstack',
    company: 'Freelance',
    companyUrl: '',
    type: 'remoto',
    startDate: '2024-10-01',
    endDate: '',
    isCurrent: true,
    description: [
      '• Desarrollo de aplicaciones Frontend y Backend como freelancer, utilizando tecnologías modernas como TypeScript, Node.js, Express, MongoDB, Next.js, MUI, Tailwind CSS y Express Session.',
      '• Construcción y consumo de API REST, con pruebas realizadas en Postman para asegurar la funcionalidad y consistencia de los endpoints.',
      '• Manejo del control de versiones con Git para mantener un ujo de trabajo colaborativo y controlado.',
      '• Diseño e implementación de interfaces accesibles y responsivas, integrando MUI y Tailwind para una experiencia de usuario moderna.',
      '• Gestión de autenticación y sesiones utilizando Express Session, enfocándome en la seguridad y escalabilidad de las aplicaciones.',
      '• Participación en el ciclo completo de desarrollo, incluyendo despliegue en entornos de desarrollo y pruebas.'
    ]
  },
  {
    title: 'Practicante de Desarrollo de Software',
    company: 'Principal Financial Group',
    companyUrl: 'https://www.principal.cl',
    type: 'híbrido',
    startDate: '2024-07-01',
    endDate: '2024-10-01',
    isCurrent: false,
    description: [
      '• Desarrollo de aplicaciones frontend y backend utilizando TypeScript, Next.js, y Node.js, aplicando estilos consistentes a través de la biblioteca interna de la empresa y utilizando arquitecturas serverless en AWS Lambda.',
      '• Implementación de metodologías ágiles bajo el marco Scrum, gestionando tareas y seguimiento de proyectos en TargetProcess para asegurar alineación y eficiencia en el desarrollo.',
      '• Colaboración activa en revisiones de código y gestión de versiones mediante Git y Pull Requests, garantizando la calidad del código y el cumplimiento de los estándares de desarrollo.',
      '• Contribución en la creación de soluciones escalables y optimizadas, orientadas a mejorar el rendimiento y la eficiencia de las aplicaciones sobre infraestructuras serverless.'
    ]
  },
  {
    title: 'Desarrollador de software',
    company: 'Rubic',
    companyUrl: 'https://rubic.cl',
    type: 'remoto',
    startDate: '2023-07-01',
    endDate: '2024-01-01',
    isCurrent: false,
    description: [
      '• Desarrollo de aplicaciones frontend y backend utilizando React y Node.js.',
      '• Gestión de sesiones de usuario a través de Express-session y almacenamiento en MongoDB.',
      '• Diseño e implementación de bases de datos en MongoDB para la persistencia de datos.'
    ]
  }
];
