import { ExternalLinkIcon, GithubIcon } from '@/components/Icons/Icons';
import { PROJECTS } from '@/constants/ProjectsData';
import { withBase } from '@/lib/assets';
import type { Project } from '@/types/portfolio';

const ProjectMeta = ({ project }: { project: Project }) => (
  <>
    <h3 className="text-xl font-semibold text-ink">
      {project.title} <span className="font-normal text-ink-faint">· {project.year}</span>
    </h3>

    <p className="mt-3 text-sm leading-6 text-ink-muted">{project.description}</p>

    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tecnologías">
      {project.tags.map((tag) => (
        <li key={tag} className="rounded-full border border-line px-2.5 py-0.5 text-xs font-medium text-ink-muted">
          {tag}
        </li>
      ))}
    </ul>

    <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-medium">
      <a
        href={project.web}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 text-accent transition-opacity hover:opacity-80"
      >
        Ver demo
        <ExternalLinkIcon className="size-3.5" />
      </a>
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 text-ink-muted transition-colors hover:text-ink"
      >
        <GithubIcon className="size-4" />
        Código
      </a>
    </div>
  </>
);

const ProjectImage = ({ project, priority = false }: { project: Project; priority?: boolean }) => (
  <a
    href={project.web}
    target="_blank"
    rel="noreferrer"
    aria-label={`Abrir demo de ${project.title}`}
    className="group block overflow-hidden bg-surface-2"
  >
    <img
      src={withBase(project.img)}
      alt={`Captura de pantalla de ${project.title}`}
      className="aspect-video w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
    />
  </a>
);

const Projects = () => {
  const [featured, ...rest] = PROJECTS;

  return (
    <div className="space-y-6">
      {/* Proyecto destacado a lo ancho; el resto en grilla para variar el ritmo visual */}
      <article className="card grid overflow-hidden md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <ProjectImage project={featured} priority />
        <div className="flex flex-col justify-center p-6 md:p-8">
          <ProjectMeta project={featured} />
        </div>
      </article>

      <div className="grid gap-6 md:grid-cols-2">
        {rest.map((project) => (
          <article key={project.id} className="card flex flex-col overflow-hidden">
            <ProjectImage project={project} />
            <div className="flex flex-1 flex-col p-6">
              <ProjectMeta project={project} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
