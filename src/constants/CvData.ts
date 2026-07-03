/**
 * Datos propios del documento CV. El contenido de experiencia, formación,
 * idiomas y habilidades se toma de las mismas constantes que alimentan la web
 * (una sola fuente de verdad); aquí solo vive lo exclusivo del documento.
 */
export const CV = {
  /** Ruta del PDF dentro de public/ (se resuelve con withBase) */
  filePath: 'cv/javier-madariaga-cv.pdf',
  /** Nombre sugerido al descargar */
  fileName: 'Javier-Madariaga-CV.pdf',
  summary:
    'Más de 1 año de experiencia en desarrollo de software y automatización en ciberseguridad (SOC). Participé en la automatización de operaciones, alcanzando un 60% de automatización y asegurando el cumplimiento del 100% de los SLA en la primera respuesta ante alertas de seguridad. Experiencia en desarrollo Full Stack, integración de sistemas y orquestación de workflows, enfocándome en la optimización de procesos y reducción de tiempos operativos mediante soluciones escalables.',
  siteUrl: 'ldkjvvier.github.io/Portafolio'
} as const;
