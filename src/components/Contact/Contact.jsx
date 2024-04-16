import { useState } from 'react'

export const Contact = () => {
	const [contactData, setContactData ] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const handleSubmit = (e) => {
		e.preventDefault()

		const formData = new FormData(e.target)
		const data = Object.fromEntries(formData)
    setContactData(data)
    console.log(contactData)

    location.href = `mailto:javier.a.mada@gmail.com?subject=${data.name} - ${data.email}&body=${contactData.message}`



	}

	return (
		<section
			className="flex justify-center items-center gap-20"
			id="contacto"
		>
			<div className="py-24 sm:py-32 w-full">
				<div className="my-20 border-b border-gray-400">
					<h2 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-white sm:text-4xl mb-3">
						Contacto
					</h2>
				</div>
				<form
					action="#"
					method="POST"
					onSubmit={(e) => handleSubmit(e)}
					className="mx-auto mt-16 max-w-xl sm:mt-20"
				>
					<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 w-full">
						<div className="sm:col-span-2">
							<label
								htmlFor="name"
								className="block text-sm font-semibold leading-6 text-black dark:text-white"
							>
								Nombre
							</label>
							<div className="mt-2.5">
								<input
									type="text"
									name="name"
									id="name"
									autoComplete="given-name"
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div className="sm:col-span-2">
							<label
								htmlFor="email"
								className="block text-sm font-semibold leading-6 text-black dark:text-white"
							>
								Correo
							</label>
							<div className="mt-2.5">
								<input
									type="email"
									name="email"
									id="email"
									autoComplete="email"
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-2">
							<label
								htmlFor="message"
								className="block text-sm font-semibold leading-6 text-black dark:text-white"
							>
								Mensaje
							</label>
							<div className="mt-2.5">
								<textarea
									name="message"
									id="message"
									rows={4}
									className=" block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 resize-none"
									defaultValue={''}
								/>
							</div>
						</div>
					</div>
					<div className="mt-10">
						<button className="flex justify-around w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
							Enviar
						</button>
					</div>
				</form>
			</div>
		</section>
	)
}
