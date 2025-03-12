import { GithubIcon, LinkedInIcon, EmailIcon, CvIcon } from '../Icons/Icons';
import { Notification } from '../Notification';
import { useEffect, useMemo, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Tooltip } from '../Tooltip';
export const AboutMe = () => {
  const experience = useMemo(() => new Date().getFullYear() - 2022, []);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => setShowNotification(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  const handleEmailCopy = (): void => {
    const email = 'javier.a.mada@gmail.com';
    navigator.clipboard
      .writeText(email)
      .then(() => setShowNotification(true))
      .catch((err) => console.error('Error al copiar el correo electrónico', err));
  };

  return (
    <section className="flex-block md:flex items-center my-96 md:mt-0 w-full">
      {showNotification && <Notification message={'Email copiado al portapapeles'} />}
      <div className="flex flex-col  text-start md:w-full sm:w-12/12 md:m-5 sm:m-0 gap-3">
        <section>
          {' '}
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-500 bg-clip-text text-transparent pb-1 dark:drop-shadow-lg">
            Javier Madariaga
          </h1>
          <h1 className="text-step-2 font-bold capitalize font-code text-black dark:text-gray-200">
            FullStack Developer
          </h1>
          <p className="mt-2 animate-fade-up text-gray-700 dark:text-gray-300">
            Analista Programador de Inacap con {experience} años de experiencia en el desarrollo de aplicaciones web y
            móviles, con conocimientos en React, NodeJS, MongoDB, MySQL, Firebase, Git, entre otros.
          </p>
        </section>
        <section className="flex gap-3">
          <ButtonTooltip text={'Github'} href={'https://www.github.com/ldkjvvier'} icon={<GithubIcon />} />

          <ButtonTooltip
            text={'LinkedIn'}
            href={'https://www.linkedin.com/in/javiermadariaga/'}
            icon={<LinkedInIcon />}
          />
          <ButtonTooltip text={'Correo electrónico'}>
            <span className="block rounded-full p-1" onClick={() => handleEmailCopy()}>
              <EmailIcon />
            </span>
          </ButtonTooltip>
          <ButtonTooltip
            text={'Visualizar CV'}
            href={'https://drive.google.com/file/d/17oFnIEoHa-3AuWYAxN0y33tL_FlVoHGn/view'}
            icon={<CvIcon />}
          />
        </section>
      </div>

      <div className="hidden sm:block">
        {/* Contenedor de carga que ocupa espacio */}
        <div className="h-[600px] w-[544px]">
          <Spline scene="https://prod.spline.design/Evj8fK2J5nOkiW9l/scene.splinecode" />
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

const ButtonTooltip = ({ text, href, icon, children }: ButtonTooltipProps) => {
  return (
    <Tooltip text={text}>
      {href && (
        <span className="block dark:bg-transparent rounded-full p-1">
          <a href={href} target="_blank" rel="noreferrer">
            {icon}
          </a>
        </span>
      )}
      {children}
    </Tooltip>
  );
};
