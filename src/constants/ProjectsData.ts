interface Project {
  title: string;
  id: number;
  description: string;
  img: string;
  web: string;
  github: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'Tic Tac Toe - 2024',
    id: 1,
    description:
      'Juego clásico de Tic Tac Toe desarrollado en React/Vite, donde podrás competir contra la maquina o personas en la misma computadora.',
    img: '/Portafolio/Images/projects/TicTacToe.webp',
    web: 'https://tic-tac-toe-idkjvviers-projects.vercel.app',
    github: 'https://github.com/ldkjvvier/Tic-Tac-Toe'
  },
  {
    title: 'Pokedex - 2024',
    id: 2,
    description: 'Clon de Pokedex hecho en React/Vite que permite buscar Pokemones y ver los detalles de cada uno.',
    img: '/Portafolio/Images/projects/Pokedex.webp',
    web: 'https://pokedex-flame-zeta.vercel.app',
    github: 'https://github.com/ldkjvvier/Pokedex'
  },
  {
    title: 'CineVerse - 2024',
    id: 3,
    description:
      'Plataforma web desarrollada con Next.js que permite a los usuarios descubrir, buscar y explorar una amplia colección de películas. Ofrece información detallada como sinopsis, valoraciones y géneros.',
    img: '/Portafolio/Images/projects/CineVerse.webp',
    web: 'https://movies-client-next.vercel.app/browse',
    github: 'https://github.com/ldkjvvier/Movies-client-next'
  }
];
