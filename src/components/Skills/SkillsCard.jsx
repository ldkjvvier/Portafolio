import PropTypes from 'prop-types'

export const SkillsCard = ({ icon, title, color }) => {
	return (
		<div className=' transition hover:scale-110'>
			<div
				className={`${color} bg-opacity-20 dark:bg-opacity-30 rounded-lg p-3 cursor-pointer flex items-center justify-center`}
			>
				{icon}
			</div>
			<h3 className="text-sm text-center leading-8 font-bold text-black dark:text-cyan-50 mb-3">
				{title}
			</h3>
		</div>
	)
}

SkillsCard.propTypes = {
	icon: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
}
