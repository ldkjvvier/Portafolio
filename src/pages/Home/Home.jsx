import { SobreMi } from '../../components/SobreMi/SobreMi'
import { Header } from '../../components/layout/Header'
import { Habilidades } from '../../components/Habilidades/Habilidades'
import { Proyects } from '../../components/Proyects/Proyects'
import { Contact } from '../../components/Contact/Contact'
import { Footer } from '../../components/layout/Footer'

export const Home = () => {
	return (
		<div>
			<Header />
			<div className="mx-auto p-4 lg:w-[100ch]">
				<div
					className="absolute  top-[-0rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem] right-0"
					aria-hidden="true"
				>
					<div
						className="relative right-0 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:right-[calc(50%-40rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
						}}
					/>
				</div>

				<SobreMi />
				<Habilidades />
				<Proyects />
				<Contact />
				<div
					className="absolute inset-x-0 bottom-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:bottom-[-30rem]"
					aria-hidden="true"
				>
					<div
						className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
						style={{
							clipPath: 'polygon(10% 10%, 100% 0%, 60% 90%, 0% 80%)',
						}}
					/>
				</div>

				<div
					className="absolute inset-x-90 bottom-[-0rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:bottom-[-100rem] right-0"
					aria-hidden="true"
				>
					<div
						className="relative right-10 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:right-[calc(50%-40rem)] sm:w-[72.1875rem]"
						style={{
							clipPath: 'polygon(20% 50%, 100% 0%, 60% 90%, 0% 80%)',
						}}
					/>
				</div>
			</div>
			<Footer />
		</div>
	)
}
