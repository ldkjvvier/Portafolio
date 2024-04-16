import PropTypes from 'prop-types';

export const ProyectCard = ({
	title,
	description,
	img,
	sitioWeb,
	codigo,
}) => {
	return (
		<li className=" w-66 h-96 bg-white dark:bg-slate-800/50  rounded-lg border border-gray-700">
			<picture>
				<img
					src={img}
					alt={title}
					className="rounded-t-lg w-full max-h-44 object-cover"
				/>
			</picture>
			<div className="flex flex-col p-3">
				<h3 className="text-xl font-bold text-black dark:text-gray-200 mb-3">
					{title}
				</h3>
				<p className="text-sm text-gray-800 dark:text-gray-300">
					{description}
				</p>
			</div>
			<footer className="flex justify-between items-center p-3">
				<div>
					<img
						src="https://avatars.githubusercontent.com/u/145422138?v=4"
						alt="User GitHub Avatar"
						className="w-8 h-8 rounded-full"
					/>
				</div>
				<div className="flex gap-3 text-bottom">
					<a
						href={sitioWeb}
						target="_blank"
						rel="noreferrer"
						className="text-purple-400 text-xs font-medium hover:underline"
					>
						Sitio Web
					</a>
					<a
						href={codigo}
						target="_blank"
						rel="noreferrer"
						className="text-purple-400 text-xs font-medium hover:underline"
					>
						Código
					</a>
				</div>
			</footer>
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