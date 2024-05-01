import PropTypes from 'prop-types'
export const Tooltip = ({ children, text }) => {
	return (
		<div className="has-tooltip">
			{children}
			<span className="tooltip p-2 mt-3 bg-gray-600 text-sm rounded opacity-60">
				{text}
			</span>
		</div>
	)
}

Tooltip.propTypes = {
	children: PropTypes.node.isRequired,
	text: PropTypes.string.isRequired,
}