/**
 * Resuelve una ruta de `public/` respetando el `base` configurado en Vite
 * (GitHub Pages sirve el sitio bajo /Portafolio/).
 */
export const withBase = (path: string): string => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
