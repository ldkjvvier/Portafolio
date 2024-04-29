import PropTypes from 'prop-types'

export const ProyectCard = ({
	title,
	description,
	img,
	sitioWeb,
	codigo,
}) => {
	return (
		<li className="group grid md:grid-flow-col rounded-lg gap-2 space-y-2 py-12  ">
			<picture className="max-w-lg w-96 h-60 overflow-hidden rounded-2xl bg-gray-200 dark:bg-slate-900 border dark:border-slate-600 shadow-md">
				<img
					src={img}
					alt={title}
					className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
				/>
			</picture>
			<div className="flex flex-col justify-center p-3 text-gray-800 dark:text-gray-300">
				<div>
					<p className="text-xl md:text-2xl font-extrabold">{description}</p>
				</div>
				<footer className="mt-2">
					<ul className="flex gap-3 items-center font-bold">
						<li>
							<img
								src="https://avatars.githubusercontent.com/u/145422138?v=4"
								alt="User GitHub Avatar"
								className="w-8 h-8 rounded-full"
							/>
						</li>
						<li>
							<h3 className="mb-0 font-extrabold md:font-bold truncate text-sm md:text-lg">{title}</h3>
						</li>
						<li>
							<a
								href={sitioWeb}
								target="_blank"
								rel="noreferrer"
								className="text-black dark:text-gray-900 text-xs md:text-sm uppercase px-3 py-1 rounded-2xl bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out"
							>
								Sitio Web
							</a>
						</li>
						<li>
							<a
								href={codigo}
								target="_blank"
								rel="noreferrer"
								className="text-black dark:text-gray-900 text-xs md:text-sm uppercase px-3 py-1 rounded-2xl bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-80 hover:opacity-100 transition-opacity duration-500 ease-in-out "
							>
								Código
							</a>
						</li>
					</ul>
				</footer>
			</div>
		</li>
	)
}

ProyectCard.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	sitioWeb: PropTypes.string.isRequired,
	codigo: PropTypes.string.isRequired,
}