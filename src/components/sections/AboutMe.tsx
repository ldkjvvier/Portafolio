import { GithubIcon, LinkedinIcon, EmailIcon, CvIcon } from '../Icons/Icons';
import { Notificacion } from '../Notificacion';
import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Tooltip } from '../Tooltip';
export const AboutMe = () => {
  const date = new Date();
  const experience = date.getFullYear() - 2022;
  // Notificacion email copiado
  const [showNotificacion, setShowNotificacion] = useState(false);

  const handleEmailCopy = (): void => {
    const email = 'javier.a.mada@gmail.com';

    navigator.clipboard
      .writeText(email)
      .then(() => {
        setShowNotificacion(true);
        setTimeout(() => {
          setShowNotificacion(false);
        }, 3000);
      })
      .catch((err) => {
        console.error('Error al copiar el correo electrónico', err);
      });
  };

  return (
    <section className="flex-block md:flex items-center mt-96 md:mt-0 h-screen w-full scroll-m-60">
      {showNotificacion && <Notificacion message={'Email copiado al portapapeles'} />}
      <div className="flex flex-col  text-start md:w-full sm:w-12/12 md:m-5 sm:m-0 gap-3">
        <section>
          {' '}
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to bg-cyan-500 bg-clip-text text-transparent pb-1">
            Javier Madariaga
          </h1>
          <h1 className="text-step-2 font-bold capitalize font-code text-black dark:text-gray-100">
            FullStack Developer
          </h1>
          <p className="mt-2 animate-fade-up dark:text-[#D1D1E9] text-gray-400">
            Analista Programador de inacap con {experience} años de experiencia en el desarrollo de aplicaciones web y
            móviles, con conocimientos en React, NodeJS, MongoDB, MySQL, Firebase, Git, entre otros.
          </p>
        </section>
        <section className="flex gap-3">
          <ButtonTooltip text={'Github'} href={'https://www.github.com/ldkjvvier'} icon={<GithubIcon />} />

          <ButtonTooltip
            text={'Linkedin'}
            href={'https://www.linkedin.com/in/javiermadariaga/'}
            icon={<LinkedinIcon />}
          />
          <ButtonTooltip text={'Correo electronico'}>
            <span
              className="block dark:bg-transparent rounded-full p-1 cursor-pointer"
              onClick={() => handleEmailCopy()}
            >
              <EmailIcon />
            </span>
          </ButtonTooltip>
          <ButtonTooltip text={'Visualizar CV'} href={'https://www.github.com/ldkjvvier'} icon={<CvIcon />} />
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
