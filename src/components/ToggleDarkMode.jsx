import { SunIcon, MoonIcon, SystemIcon } from './Icons/Icons'
import { useState, useEffect } from 'react'

export const ToggleDarkMode = () => {
	const [themeMode, setThemeMode] = useState('system')

	const applyThemeMode = (mode) => {
		if (mode === 'dark') {
			document.documentElement.classList.add('dark')
			document.documentElement.classList.remove('light')
		} else if (mode === 'light') {
			document.documentElement.classList.add('light')
			document.documentElement.classList.remove('dark')
		} else if (mode === 'system') {
			const prefersDark = window.matchMedia(
				'(prefers-color-scheme: dark)'
			).matches
			document.documentElement.classList.toggle('dark', prefersDark)
			document.documentElement.classList.toggle('light', !prefersDark)
		}
	}

	const toggleThemeMode = () => {
		const nextMode =
			themeMode === 'light'
				? 'dark'
				: themeMode === 'dark'
				? 'system'
				: 'light'
		setThemeMode(nextMode)
		localStorage.setItem('themeMode', nextMode)
		applyThemeMode(nextMode)
	}

	useEffect(() => {
		// Verificar si hay una preferencia almacenada
		const storedTheme = localStorage.getItem('themeMode') || 'system'
		setThemeMode(storedTheme)
		applyThemeMode(storedTheme)

		// Escuchar cambios en el esquema de color del sistema
		const mediaQuery = window.matchMedia(
			'(prefers-color-scheme: dark)'
		)
		const handleChange = () => {
			if (themeMode === 'system') {
				applyThemeMode('system')
			}
		}
		mediaQuery.addEventListener('change', handleChange)

		return () => {
			mediaQuery.removeEventListener('change', handleChange)
		}
	}, [themeMode])

	return (
		<div
			onClick={toggleThemeMode}
			className="hover:scale-110 transition-all text-black dark:text-white dark:hover:text-blue-400"
		>
			{themeMode === 'light' ? (
				<SunIcon />
			) : themeMode === 'dark' ? (
				<MoonIcon />
			) : (
				<SystemIcon />
			)}
		</div>
	)
}
