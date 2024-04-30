import { ProyectCard } from './ProyectCard'

export const Proyects = () => {
	return (
		<div id="proyectos" className=" scroll-m-32">
			<div className="my-20 border-b border-gray-400">
				<h2 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-white sm:text-4xl mb-3">
					Proyectos
				</h2>
			</div>
			<ul className="grid grid-rows-2 gap-8">
				<ProyectCard/>
			</ul>
		</div>
	)
}
