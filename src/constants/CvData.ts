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
  /** `**texto**` se muestra en negrita (ver RichText). */
  summary:
    'Desarrollador de software desde 2023 y, desde 2025, especialista en **automatización de ciberseguridad (SOC)**. En Grupo Falabella contribuí a **automatizar el 100% de la primera respuesta ante alertas de seguridad** y a **cumplir el 100% de sus SLA**, integrando SOAR, n8n y **LLM** para el triage de alertas. Experiencia en desarrollo Full Stack, integración de sistemas y orquestación de workflows, enfocándome en la optimización de procesos y reducción de tiempos operativos mediante soluciones escalables.',
  siteUrl: 'javiermadariaga.vercel.app'
} as const;
