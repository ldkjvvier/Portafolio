import { ToggleDarkMode } from './ToggleDarkMode'
export const Header = () => {

	const scrollTo = (id) => {
		const element = document.getElementById(id)
		element.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'nearest',
		})
	}

	return (
		<header className="z-50 border-b border-gray-100 transition-all  dark:border-gray-600 shadow-sm w-full flex justify-around bg-white dark:bg-slate-800 p-5 text-black dark:text-white fixed top-0 opacity-95">
			<div className="hover:scale-125 hidden md:block font-semibold transition text-xl">
				{'</>'}
			</div>
			<div className="flex gap-3">
				<ul className="flex gap-3 font-semibold ">
					<li>
						<a
							className="hover:text-gray-400 dark:hover:text-blue-400 transition"
							onClick={() => scrollTo('sobreMi')}
						>
							Sobre Mi
						</a>
					</li>
					<li>
						<a
							className="hover:text-gray-400 dark:hover:text-blue-400 transition"
							onClick={() => scrollTo('habilidades')}
						>
							Habilidades
						</a>
					</li>
					<li>
						<a
							className="hover:text-gray-400 dark:hover:text-blue-400  transition"
							onClick={() => scrollTo('proyectos')}
						>
							Proyectos
						</a>
					</li>

					<li>
						<a
							className="hover:text-gray-400 dark:hover:text-blue-400 transition"
							onClick={() => scrollTo('contacto')}
						>
							Contacto
						</a>
					</li>
				</ul>
				<ToggleDarkMode />
			</div>
		</header>
	)
}
