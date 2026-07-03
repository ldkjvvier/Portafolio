# AGENTS.md

## Project Snapshot

- Personal portfolio SPA built with Vite 6, React 19, TypeScript 5, and Tailwind CSS 4.
- Deployment target is GitHub Pages; treat this as a static site with a configured base URL.
- Product overview lives in [README.md](README.md), but commands and build behavior should be taken from [package.json](package.json) and [vite.config.ts](vite.config.ts).

## Commands

- `npm install` installs dependencies.
- `npm run dev` starts the local Vite server.
- `npm run lint` is the fastest code validation step and fails on warnings.
- `npm run build` is the main validation step; it runs lint, `tsc`, and the Vite production build.
- `npm run preview` serves the production build locally.
- `npm run deploy` publishes `dist/` to GitHub Pages.
- There is no test script in this repository.

## Architecture

- Entry point: [src/main.tsx](src/main.tsx) renders [src/pages/Home/Home.tsx](src/pages/Home/Home.tsx).
- The home page is registry-driven: [src/constants/PageSections.ts](src/constants/PageSections.ts) defines the ordered sections and [src/pages/Home/Home.tsx](src/pages/Home/Home.tsx) maps them into the page.
- Section implementations live in [src/components/sections](src/components/sections) and are re-exported through [src/components/sections/index.ts](src/components/sections/index.ts).
- Portfolio content is mostly constant-driven. Keep project, skill, experience, and similar data in [src/constants](src/constants) instead of hardcoding repeated content inside JSX.
- Shared layout components live in [src/components/layout](src/components/layout); reusable UI primitives in [src/components/ui](src/components/ui); shared types in [src/types/portfolio.ts](src/types/portfolio.ts).
- Theme state lives in [src/hooks/useTheme.ts](src/hooks/useTheme.ts) (consumed by [src/components/ThemeToggle.tsx](src/components/ThemeToggle.tsx) and the command palette); an inline script in [index.html](index.html) applies the theme class before first paint.
- The command palette ([src/components/CommandPalette.tsx](src/components/CommandPalette.tsx)) is opened from the Header (Ctrl/Cmd+K) and exposes navigation, theme, and contact actions.
- Global design tokens (semantic CSS variables mapped via Tailwind `@theme inline`), dark mode styles, and base component classes (`.btn`, `.card`, `.input`, `.icon-btn`, `.kbd`) live in [src/index.css](src/index.css).
- Asset paths in constants are relative to `public/` and resolved with `withBase` from [src/lib/assets.ts](src/lib/assets.ts).
- The CV viewer ([src/components/cv/CvViewer.tsx](src/components/cv/CvViewer.tsx)) renders [src/components/cv/CvDocument.tsx](src/components/cv/CvDocument.tsx), which is composed from the same constants as the site (experience, education, skills); CV-only content lives in [src/constants/CvData.ts](src/constants/CvData.ts). The downloadable PDF at `public/cv/javier-madariaga-cv.pdf` is a print-to-PDF of that document: after changing CV data, regenerate it by opening the viewer in the browser and printing to PDF (A4; the `@media print` styles in [src/index.css](src/index.css) isolate the document), then replace the file.
- Static assets live under [public/abilities](public/abilities) and [public/Images](public/Images).

## Editing Conventions

- Use the `@/` alias for imports from `src`, consistent with [tsconfig.app.json](tsconfig.app.json) and [vite.config.ts](vite.config.ts).
- Keep UI copy in Spanish unless the user explicitly requests a language change.
- Prefer small presentational components fed by typed constants over embedding large data objects directly in components.
- Preserve the existing PascalCase component filenames and barrel-export pattern in [src/components/sections/index.ts](src/components/sections/index.ts).
- When adding a new section, update all of the following:
  - the component in `src/components/sections`
  - the barrel export in [src/components/sections/index.ts](src/components/sections/index.ts)
  - the registry entry in [src/constants/PageSections.ts](src/constants/PageSections.ts)
  - the navigation allowlist in [src/components/layout/Header.tsx](src/components/layout/Header.tsx) if it should appear in the header
- Preserve light/dark theme pairs in constant data and Tailwind classes; theme preference is persisted in `localStorage`.

## Pitfalls

- Lint uses `--max-warnings 0`; even a warning breaks the standard validation flow.
- TypeScript is strict and rejects unused locals and parameters; avoid placeholder variables and partial refactors.
- GitHub Pages uses the non-root base URL configured in [vite.config.ts](vite.config.ts), so asset and navigation changes must remain static-host friendly.
- Heavy visual elements and animations should be checked on mobile and desktop before finalizing edits.
- [README.md](README.md) is currently incomplete, so treat the source files and config files as the source of truth.

## Validation

- For TS, TSX, CSS, and content edits, run `npm run lint`.
- Run `npm run build` after changes that affect imports, assets, configuration, deployment behavior, or section wiring.