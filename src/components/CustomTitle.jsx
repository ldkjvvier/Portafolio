import PropTypes from 'prop-types'
import { DevIcon } from './Icons/Icons'
export const CustomTitle = ({ title, icon = <DevIcon /> }) => {
	return (
		<div className="my-20 border-b border-slate-600 ">
			<h2 className="flex items-center mb-2 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
				{icon}
				{title}
			</h2>
		</div>
	)
}

CustomTitle.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.node,
}
