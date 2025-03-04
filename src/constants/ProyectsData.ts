interface Proyecto {
  title: string;
  id: number;
  description: string;
  img: string;
  sitioWeb: string;
  codigo: string;
  imgPosicion: string[];
  position: 'left' | 'right';
}

export const Proyectos: Proyecto[] = [
  {
    title: 'Tic Tac Toe - 2024',
    id: 1,
    description:
      'Juego clásico de Tic Tac Toe desarrollado en ReactJS, donde competir con personas en la misma computadora.',
    img: '/Portafolio/Images/proyects/TicTacToe.webp',
    sitioWeb: 'https://tic-tac-toe-idkjvviers-projects.vercel.app',
    codigo: 'https://github.com/ldkjvvier/Tic-Tac-Toe',
    imgPosicion: ['md:col-start-1', 'md:col-start-2'],
    position: 'left'
  },
  {
    title: 'Pokedex - 2024',
    id: 2,
    description: 'Aplicación de Pokedex en ReactJS que permite buscar pokemones y ver detalles de cada uno.',
    img: '/Portafolio/Images/proyects/Pokedex.webp',
    sitioWeb: 'https://pokedex-flame-zeta.vercel.app',
    codigo: 'https://github.com/ldkjvvier/Pokedex',
    imgPosicion: ['md:col-start-2', 'md:col-start-1'],
    position: 'right'
  },
  {
    title: 'CineVerse - 2024',
    id: 3,
    description:
      'CineVerse es una aplicación web moderna desarrollada en Next.js que permite a los usuarios buscar y explorar una biblioteca de películas, con acceso a detalles como sinopsis y valoraciones.',
    img: '/Portafolio/Images/proyects/CineVerse.webp',
    sitioWeb: 'https://movies-client-next.vercel.app/browse',
    codigo: 'https://github.com/ldkjvvier/Movies-client-next',
    imgPosicion: ['md:col-start-1', 'md:col-start-2'],
    position: 'left'
  }
];
