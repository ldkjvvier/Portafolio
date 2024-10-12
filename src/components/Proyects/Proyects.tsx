import { ProyectCard } from './ProyectCard'
import { CustomTitle } from '../CustomTitle'
import { ProyectsIcon } from '../Icons/Icons'
export const Proyects = () => {
	return (
		<div id="proyectos" className=" scroll-m-32">
			<CustomTitle title="Proyectos" icon={<ProyectsIcon />} />
			<ul className="grid grid-rows-2 gap-8">
				<ProyectCard />
			</ul>
		</div>
	)
}
