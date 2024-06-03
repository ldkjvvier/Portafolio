import PropTypes from 'prop-types'
export const UserIspiration = ({username, url}) => {
  const imageName = username.toLowerCase()
  return (
		<a
			className="z-50 w-16 h-16 rounded-full cursor-pointer border-4 overflow-hidden border-slate-500/20 sm:border-white/10"
			target="_blank"
			href={url}
			rel="noreferrer"
		>
			<img
				src={`Images/inspiration/${imageName}.jpg`}
				alt={`avatar ${username}`	}
			/>
		</a>
	)
}





UserIspiration.propTypes = {
	username: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
}
