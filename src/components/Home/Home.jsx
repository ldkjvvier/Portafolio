import {
	GithubIcon,
	LinkedinIcon,
	EmailIcon,
	CvIcon,
} from '../Icons/Icons'
import { Tooltip } from '../Tooltip'
import { Notificacion } from '../Notificacion'
import { useState } from 'react'

export const Home = () => {

	// Notificacion email copiado
	const [showNotificacion, setShowNotificacion] = useState(false)

	const EmailCopy = () => {
		const email = 'javier.a.mada@gmail.com'

		navigator.clipboard.writeText(email)
		setShowNotificacion(true)
		setTimeout(() => {
			setShowNotificacion(false)
		}, 3000)
	}
	
	const DownloadCv = () => {
		
		const url = document.createElement('a')
		url.href =
			'https://docs.google.com/document/d/19RmmmTdcQyST2vWox2jpx-CYo3YAnyQL/export?format=pdf'

		url.download = 'JavierMadariagaCV.pdf'
		url.click()
	}

	return (
		<section
			className="flex-block md:flex items-center mt-96 md:mt-0 h-screen w-full scroll-m-60"
			id="sobreMi"
		>
			{showNotificacion && (
				<Notificacion message={'Email copiado al portapapeles'} />
			)}
			<div className="flex flex-col  text-start md:w-full sm:w-12/12 md:m-5 sm:m-0 gap-3">
				<section>
					{' '}
					<h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to bg-cyan-500 bg-clip-text text-transparent pb-1">
						Javier Madariaga
					</h1>
					<h1 className="text-step-2 font-bold capitalize font-code text-black dark:text-white">
						FullStack Developer
					</h1>
					<p className="text-slate-500 mt-2">
						Analista Programador de inacap con 2 años de experiencia
						en el desarrollo de aplicaciones web y móviles, con
						conocimientos en React, NodeJS, MongoDB, MySQL, Firebase,
						Git, entre otros.
					</p>
				</section>
				<section className="flex gap-3">
					<Tooltip text={'Github'}>
						<span className="block bg-slate-100/80  dark:bg-transparent rounded-full p-1">
							<a
								href="https://www.github.com/ldkjvvier"
								target="_blank"
								rel="noreferrer"
							>
								<GithubIcon />
							</a>
						</span>
					</Tooltip>
					<Tooltip text={'Linkedin'}>
						<span className="block bg-slate-100/80  dark:bg-transparent rounded-full p-1">
							<a
								href="https://www.linkedin.com/in/javier-antonio-madariaga-diaz-993a96216/"
								target="_blank"
								rel="noreferrer"
							>
								<LinkedinIcon />
							</a>
						</span>
					</Tooltip>
					<Tooltip text={'Correo electronico'}>
						<span
							className="block bg-slate-100/80 dark:bg-transparent rounded-full p-1 cursor-pointer"
							onClick={() => EmailCopy()}
						>
							<EmailIcon />
						</span>
					</Tooltip>
					<Tooltip text={'Descargar CV'}>
						<span className="block bg-slate-100/80 dark:bg-transparent rounded-full p-1 cursor-pointer"
							onClick={() => DownloadCv()}
						>
							<CvIcon />
						</span>
					</Tooltip>
				</section>
			</div>

			<div className="hidden sm:block">
				<spline-viewer url="https://prod.spline.design/Evj8fK2J5nOkiW9l/scene.splinecode"></spline-viewer>
			</div>
		</section>
	)
}
