export const Footer = () => {
	const date = new Date()
	const year = date.getFullYear()
	return (
		<footer className="border-t border-gray-200 transition-all dark:border-gray-500 text-center bg-white dark:bg-background p-5 text-black dark:text-white font-medium">
			<p>© {year} Javier Madariaga</p>
		</footer>
	)
}
