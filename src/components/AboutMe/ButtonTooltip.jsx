import { Tooltip } from '../Tooltip'
import PropTypes from 'prop-types'

export const ButtonTooltip = ({ text, href, icon, children }) => {
	return (
		<Tooltip text={text}>
			{href && (
				<span className="block dark:bg-transparent rounded-full p-1">
					<a href={href} target="_blank" rel="noreferrer">
						{icon}
					</a>
				</span>
			)}
			{children}
		</Tooltip>
	)
}

ButtonTooltip.propTypes = {
	text: PropTypes.string.isRequired,
	href: PropTypes.string,
	icon: PropTypes.node,
	children: PropTypes.node,
}
