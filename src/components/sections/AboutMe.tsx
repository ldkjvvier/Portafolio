import { GithubIcon, LinkedInIcon, EmailIcon, CvIcon } from '../Icons/Icons';
import { Notification } from '../Notification';
import { useMemo, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Tooltip } from '../Tooltip';
import { ABOUT_ME } from '@/constants/AboutMeData';
export const AboutMe = () => {
  const experience = useMemo(() => new Date().getFullYear() - ABOUT_ME.experienceStartYear, []);
  const [showNotification, setShowNotification] = useState(false);

  const handleEmailCopy = (): void => {
    const email = ABOUT_ME.links.email;
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
      })
      .catch((err) => console.error('Error al copiar el correo electrónico', err));
  };

  return (
    <section className="flex-block md:flex items-center my-64 sm:my-96 md:mt-12 w-full">
      {showNotification && <Notification message="Email copiado al portapapeles" />}

      <div className="flex flex-col text-start md:w-full sm:w-12/12 md:m-5 sm:m-0 gap-3">
        <section>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-500 bg-clip-text text-transparent pb-1 dark:drop-shadow-lg">
            {ABOUT_ME.name}
          </h1>
          <h2 className="text-step-2 font-bold capitalize font-code text-black dark:text-gray-200">{ABOUT_ME.title}</h2>
          <p className="mt-2 animate-fade-up text-gray-700 dark:text-gray-300">
            {ABOUT_ME.description.replace('{experience}', experience.toString())}
          </p>
        </section>

        <section className="flex gap-3">
          <ButtonTooltip text="Github" href={ABOUT_ME.links.github} icon={<GithubIcon />} />
          <ButtonTooltip text="LinkedIn" href={ABOUT_ME.links.linkedin} icon={<LinkedInIcon />} />

          <ButtonTooltip text="Correo electrónico">
            <button className="block rounded-full p-1" onClick={handleEmailCopy} aria-label="Copiar correo">
              <EmailIcon />
            </button>
          </ButtonTooltip>

          <ButtonTooltip text="Visualizar CV" href={ABOUT_ME.links.cv} icon={<CvIcon />} />
        </section>
      </div>

      <div className="hidden sm:block">
        <div className="h-[600px] w-[544px]">
          <Spline
            scene={ABOUT_ME.splineScene}
            aria-label="Animación 3D interactiva"
            title={'Animación 3D interactiva'}
          />
        </div>
      </div>
    </section>
  );
};

interface ButtonTooltipProps {
  text: string;
  href?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const ButtonTooltip = ({ text, href, icon, children }: ButtonTooltipProps) => (
  <Tooltip text={text}>
    {href ? (
      <span className="block dark:bg-transparent rounded-full p-1">
        <a href={href} target="_blank" rel="noreferrer">
          {icon}
        </a>
      </span>
    ) : (
      children
    )}
  </Tooltip>
);
