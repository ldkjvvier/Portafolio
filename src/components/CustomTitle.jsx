import PropTypes from 'prop-types'
import { DevIcon } from './Icons/Icons'
export const CustomTitle = ({ title }) => {
	return (
		<div className="my-20 border-b border-gray-400 ">
			<h2 className="flex items-center mb-2 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
				<DevIcon />
				{title}
			</h2>
		</div>
	)
}

CustomTitle.propTypes = {
	title: PropTypes.string.isRequired,
}
