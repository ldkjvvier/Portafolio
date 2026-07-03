import { useState, type FormEvent } from 'react';
import { GithubIcon, LinkedInIcon, MailIcon } from '@/components/Icons/Icons';
import { ABOUT_ME } from '@/constants/AboutMeData';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (name: string, email: string, message: string): FormErrors => {
  const errors: FormErrors = {};
  if (!name.trim()) errors.name = 'Escribe tu nombre.';
  if (!email.trim()) errors.email = 'Escribe tu correo.';
  else if (!EMAIL_PATTERN.test(email)) errors.email = 'El correo no tiene un formato válido.';
  if (!message.trim()) errors.message = 'Cuéntame en qué puedo ayudarte.';
  return errors;
};

const DIRECT_CHANNELS = [
  { label: ABOUT_ME.links.email, href: `mailto:${ABOUT_ME.links.email}`, icon: MailIcon, external: false },
  { label: 'LinkedIn', href: ABOUT_ME.links.linkedin, icon: LinkedInIcon, external: true },
  { label: 'GitHub', href: ABOUT_ME.links.github, icon: GithubIcon, external: true }
] as const;

export const Contact = () => {
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '');
    const email = String(formData.get('email') ?? '');
    const message = String(formData.get('message') ?? '');

    const nextErrors = validate(name, email, message);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const subject = encodeURIComponent(`Contacto desde el portafolio: ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    window.location.href = `mailto:${ABOUT_ME.links.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
      <div>
        <p className="max-w-md text-sm leading-7 text-ink-muted">
          Si tienes una vacante, un proyecto o una idea, escríbeme por el canal que prefieras. Respondo por correo y
          LinkedIn.
        </p>

        <ul className="mt-6 space-y-3">
          {DIRECT_CHANNELS.map(({ label, href, icon: Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                className="inline-flex items-center gap-3 text-sm font-medium text-ink transition-colors hover:text-accent"
              >
                <Icon className="size-4.5 text-ink-faint" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-ink">
              Nombre
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Tu nombre"
              className="input"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p id="name-error" className="text-sm text-red-600 dark:text-red-400">
                {errors.name}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-ink">
              Correo
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="nombre@empresa.com"
              className="input"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-red-600 dark:text-red-400">
                {errors.email}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2 sm:col-span-2">
            <label htmlFor="message" className="text-sm font-medium text-ink">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Cuéntame el contexto y lo que necesitas."
              className="input min-h-32 resize-y"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p id="message-error" className="text-sm text-red-600 dark:text-red-400">
                {errors.message}
              </p>
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-faint">Se abrirá tu cliente de correo con el mensaje listo para enviar.</p>
          <button type="submit" className="btn btn-primary w-full sm:w-auto">
            Enviar mensaje
          </button>
        </div>
      </form>
    </div>
  );
};
