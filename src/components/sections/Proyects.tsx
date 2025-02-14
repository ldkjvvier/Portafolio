import { Proyectos } from '@/constants/ProyectsData';

export const Proyects = () => {
  return (
    <ul className="grid grid-rows-2 gap-8">
      {Proyectos.map(({ id, sitioWeb, img, title, imgPosicion, position, description, codigo }) => (
        <li key={id} className="group grid md:grid-cols-2 rounded-lg gap-2 space-y-2 py-12">
          <picture
            className={`w-full flex justify-center sm:justify-center ${
              position !== 'left' ? 'md:justify-end' : 'md:justify-start'
            }`}
          >
            <a href={sitioWeb} target="_blank" rel="noreferrer">
              <img
                src={img}
                alt={title}
                className="object-cover group-hover:scale-110 max-w-lg w-96 h-60 transition-transform duration-500 ease-out overflow-hidden rounded-2xl bg-gray-200 dark:bg-slate-900 border dark:border-slate-700/80 shadow-2xl shadow-black/60 cursor-pointer"
              />
            </a>
          </picture>
          <div
            className={`${imgPosicion[1]} md:row-start-1 flex flex-col justify-center p-3 text-gray-800/90 dark:text-gray-300`}
          >
            <p className="text-xl md:text-2xl font-extrabold text-pretty">{description}</p>
            <footer className="mt-2">
              <ul className="flex gap-3 items-center font-bold">
                <li>
                  <img
                    src="https://avatars.githubusercontent.com/u/145422138?v=4"
                    alt="User GitHub Avatar"
                    className="w-8 h-8 rounded-full drag-none pointer-events-none"
                  />
                </li>
                <li>
                  <h3 className="mb-0 font-extrabold md:font-bold truncate text-xs sm:text-sm md:text-lg text-gray-800 dark:text-gray-200">
                    {title}
                  </h3>
                </li>
                {[
                  { href: sitioWeb, text: 'Web' },
                  { href: codigo, text: 'Código' }
                ].map(({ href, text }) => (
                  <li key={text}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-black dark:text-gray-900 text-xs md:text-sm uppercase px-3 py-1 rounded-2xl bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out"
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </footer>
          </div>
        </li>
      ))}
    </ul>
  );
};
