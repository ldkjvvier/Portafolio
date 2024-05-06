import { SunIcon, MoonIcon } from './Icons/Icons'
import { useState } from 'react'
import { useEffect } from 'react'

export const ToggleDarkMode = () => {
	const [darkMode, setDarkMode] = useState('black')

	const toggleDarkMode = () => {
		if (darkMode === 'black') {
			setDarkMode('white')
			localStorage.setItem('darkMode', 'white')
			document.documentElement.classList.remove('dark')
		} else {
			setDarkMode('black')
			localStorage.setItem('darkMode', 'black')
			document.documentElement.classList.add('dark')
		}
	}

	useEffect(() => {
		/* Comprobar si existe el item darkMode */
		if (!localStorage.getItem('darkMode')) {
			/* Si no existe, lo creamos con el valor 'black' */
			localStorage.setItem('darkMode', 'white')
		}
		/* Obtenemos el estado del modo oscuro del localStorage */
		const darkMode = localStorage.getItem('darkMode')
		/* Si el estado del modo oscuro existe, lo guardamos en el estado */
		darkMode && setDarkMode(darkMode)
		/* Si el estado del modo oscuro existe, agregamos la clase dark al html */
		darkMode === 'black'
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark')
	}, [])

	return (
		<div
			onClick={toggleDarkMode}
			className="hover:scale-110 transition-all text-black dark:text-white dark:hover:text-blue-400"
		>
			{darkMode != 'black' ? (
				<SunIcon color={darkMode} />
			) : (
				<MoonIcon color={darkMode} />
			)}
		</div>
	)
}
