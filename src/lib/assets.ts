/**
 * Resuelve una ruta de `public/` respetando el `base` configurado en Vite.
 */
export const withBase = (path: string): string => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
