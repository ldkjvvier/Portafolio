import PropTypes from 'prop-types'

export const CustomTitle = ({ title }) => {
	return (
		<div className="my-20 border-b border-gray-400 ">
			<h2 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-white sm:text-4xl mb-3">
				<span
					className="
        text-2xl font-bold tracking-tight text-slate-800 dark:text-white sm:text-3xl"
				>
					{`</>`}
				</span>
				{title}
			</h2>
		</div>
	)
}

CustomTitle.propTypes = {
	title: PropTypes.string.isRequired,
}
