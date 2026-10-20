import { readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

// Inserta en dist/index.html el HTML renderizado por src/entry-server.tsx
// (compilado antes en dist-ssr con `vite build --ssr`).
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ssrDir = path.join(root, 'dist-ssr');
const indexPath = path.join(root, 'dist', 'index.html');
const placeholder = '<div id="root"></div>';

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);
const template = await readFile(indexPath, 'utf8');

if (!template.includes(placeholder)) {
  throw new Error(`No se encontró ${placeholder} en dist/index.html`);
}

// Reemplazo con función: evita que patrones como `$&` del HTML se interpreten.
await writeFile(indexPath, template.replace(placeholder, () => `<div id="root">${render()}</div>`));
await rm(ssrDir, { recursive: true, force: true });

console.log('Prerender listo: dist/index.html');
