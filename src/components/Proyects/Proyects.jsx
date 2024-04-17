import { ProyectCard } from './ProyectCard'

export const Proyects = () => {
	return (
		<div id="proyectos" className=" scroll-m-32">
			<div className="my-20 border-b border-gray-400">
				<h2 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-white sm:text-4xl mb-3">
					Proyectos
				</h2>
			</div>
			<ul className="grid  md:grid-cols-3 grid-rows-2 gap-4 place-items-center">
				<ProyectCard
					title={'Tic Tac Toe'}
					description="Proyecto de juego de gato desarrollado en ReactJS, con
					funcionalidad de juego contra la computadora."
					img={'Images/TicTacToe.png'}
					sitioWeb={'https://ldkjvvier.github.io/Tic-Tac-Toe/'}
					codigo={'https://github.com/ldkjvvier/Tic-Tac-Toe'}
				/>
				<ProyectCard
					title={'Pokedex'}
					description="
					Proyecto de pokedex desarrollado en ReactJS, con funcionalidad de
					busqueda de pokemones y visualización de sus detalles.
				"
					img={'Images/Pokedex.png'}
					sitioWeb={''}
					codigo={'https://github.com/ldkjvvier/Pokedex'}
				/>
			</ul>
		</div>
	)
}
