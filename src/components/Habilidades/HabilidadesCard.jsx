import PropTypes from 'prop-types';

export const HabilidadesCard = ({ icon, title, color }) => {
  return (
		<div className="w-auto">
			<div
				className={`${color} bg-opacity-20 w-[72px] dark:bg-opacity-30 rounded-lg p-3 cursor-pointer`}
			>
				{icon}
			</div>
			<h3 className="block text-sm text-center leading-8 font-bold text-black dark:text-cyan-50 mb-3">
				{title}
			</h3>
		</div>
	)
}

HabilidadesCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
