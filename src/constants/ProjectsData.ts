import type { Project } from '@/types/portfolio';

export const PROJECTS: Project[] = [
  {
    id: 3,
    title: 'CineVerse',
    year: 2024,
    description:
      'Plataforma web desarrollada con Next.js para descubrir, buscar y explorar películas, con sinopsis, valoraciones y géneros.',
    img: 'Images/projects/CineVerse.webp',
    web: 'https://movies-client-next.vercel.app/browse',
    github: 'https://github.com/ldkjvvier/Movies-client-next',
    tags: ['Next.js', 'TypeScript', 'API REST']
  },
  {
    id: 2,
    title: 'Pokedex',
    year: 2024,
    description: 'Clon de Pokedex hecho en React y Vite que permite buscar Pokémon y ver el detalle de cada uno.',
    img: 'Images/projects/Pokedex.webp',
    web: 'https://pokedex-flame-zeta.vercel.app',
    github: 'https://github.com/ldkjvvier/Pokedex',
    tags: ['React', 'Vite', 'PokéAPI']
  },
  {
    id: 1,
    title: 'TicTacToe',
    year: 2024,
    description: 'Juego clásico de Tic Tac Toe en React, con modo contra la máquina o entre dos personas.',
    img: 'Images/projects/TicTacToe.webp',
    web: 'https://tic-tac-toe-idkjvviers-projects.vercel.app',
    github: 'https://github.com/ldkjvvier/Tic-Tac-Toe',
    tags: ['React', 'Vite']
  }
];
