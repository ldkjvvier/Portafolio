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