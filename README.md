# Portafolio · Javier Madariaga

Portafolio personal de Javier Madariaga, desarrollador Full Stack especializado en automatización de ciberseguridad (SOC) con n8n, SOAR y LLM.

- **Sitio:** [javiermadariaga.vercel.app](https://javiermadariaga.vercel.app/)
- **CV:** [javiermadariaga.vercel.app/#cv](https://javiermadariaga.vercel.app/#cv)
- **LinkedIn:** [javiermadariaga](https://www.linkedin.com/in/javiermadariaga/)

## Tecnologías

- React 19, TypeScript y Tailwind CSS 4, compilado con Vite.
- Prerender en el build: el HTML publicado incluye todo el contenido, para buscadores y vistas previas en redes.
- Visor de CV integrado, que genera el mismo documento que el PDF descargable.
- Tema claro y oscuro, y paleta de comandos (Ctrl/⌘ + K).
- Desplegado en Vercel: cada push a `main` publica a producción.

## Desarrollo

```bash
npm install
npm run dev
```

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor local de desarrollo |
| `npm run lint` | ESLint (falla con cualquier advertencia) |
| `npm run build` | Lint, tipos, build de producción y prerender |
| `npm run preview` | Sirve el build de producción |

El contenido (experiencia, habilidades, proyectos y CV) vive en `src/constants`. En esos textos, lo que va entre `**` se muestra en negrita.
