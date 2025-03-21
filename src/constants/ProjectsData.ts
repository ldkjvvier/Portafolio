interface Project {
  title: string;
  id: number;
  description: string;
  img: string;
  web: string;
  github: string;
  imgPosition: ['md:col-start-1', 'md:col-start-2'] | ['md:col-start-2', 'md:col-start-1'];
  position: 'left' | 'right';
}

export const PROJECTS: Project[] = [
  {
    title: 'Tic Tac Toe - 2024',
    id: 1,
    description:
      'Juego clásico de Tic Tac Toe desarrollado en ReactJS, donde competir con personas en la misma computadora.',
    img: '/Portafolio/Images/projects/TicTacToe.webp',
    web: 'https://tic-tac-toe-idkjvviers-projects.vercel.app',
    github: 'https://github.com/ldkjvvier/Tic-Tac-Toe',
    imgPosition: ['md:col-start-1', 'md:col-start-2'],
    position: 'left'
  },
  {
    title: 'Pokedex - 2024',
    id: 2,
    description: 'Aplicación de Pokedex en ReactJS que permite buscar Pokemones y ver detalles de cada uno.',
    img: '/Portafolio/Images/projects/Pokedex.webp',
    web: 'https://pokedex-flame-zeta.vercel.app',
    github: 'https://github.com/ldkjvvier/Pokedex',
    imgPosition: ['md:col-start-2', 'md:col-start-1'],
    position: 'right'
  },
  {
    title: 'CineVerse - 2024',
    id: 3,
    description:
      'CineVerse es una aplicación web moderna desarrollada en Next.js que permite a los usuarios buscar y explorar una biblioteca de películas, con acceso a detalles como sinopsis y valoraciones.',
    img: '/Portafolio/Images/projects/CineVerse.webp',
    web: 'https://movies-client-next.vercel.app/browse',
    github: 'https://github.com/ldkjvvier/Movies-client-next',
    imgPosition: ['md:col-start-1', 'md:col-start-2'],
    position: 'left'
  }
];
