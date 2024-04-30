import { SkillsCard } from "./SkillsCard"

export const Skills = () => {
	return (
		<div id="habilidades" className="scroll-m-36">
			<div className="my-20 border-b border-gray-400 ">
				<h2 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-white sm:text-4xl mb-3">
					Habilidades
				</h2>
			</div>

			<div className="grid grid-cols-4 md:grid-cols-7 grid-rows-5 place-items-center">
				<span className="w-[72px]">
					<SkillsCard
						icon={
							<img
								src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
								alt="HTML5"
								className="w-12 h-12"
							/>
						}
						title="HTML5"
						color={'bg-orange-500'}
					/>
				</span>
				<span className="w-[72px]">
					<SkillsCard
						icon={
							<img
								src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
								alt="CSS3"
								className="w-12 h-12"
							/>
						}
						title="CSS3"
						color={'bg-cyan-500'}
					/>
				</span>

				<span className="w-[72px]">
					{' '}
					<SkillsCard
						icon={
							<img
								src="https://res.cloudinary.com/dkbp6rk0s/image/upload/v1684983603/technologies-assets/jspng_qo7hoo.png"
								alt="JavaScript"
								className="w-12 h-12"
							/>
						}
						title="JavaScript"
						color={'bg-yellow-500'}
					/>
				</span>
				<span className="w-[72px]">
					<SkillsCard
						icon={
							<img
								src="https://res.cloudinary.com/dkbp6rk0s/image/upload/v1682702145/technologies-assets/react-logo_qnia0o.svg"
								alt="React"
								className="w-12 h-12"
							/>
						}
						title="React"
						color={'bg-blue-500'}
					/>
				</span>
				<span className="w-[72px]">
					<SkillsCard
						icon={
							<img
								src="https://res.cloudinary.com/dkbp6rk0s/image/upload/v1684984279/technologies-assets/nodejspng_hzte7g.png"
								alt="NodeJS"
								className="w-12 h-12"
							/>
						}
						title="NodeJS"
						color={'bg-green-600'}
					/>
				</span>
				<span className="w-[72px]">
					<SkillsCard
						icon={
							<img
								src="https://res.cloudinary.com/dkbp6rk0s/image/upload/v1684984279/technologies-assets/mongopng_j6ztnm.png"
								alt="MongoDB"
								className="w-12 h-12"
							/>
						}
						title="MongoDB"
						color={'bg-green-500'}
					/>
				</span>
				<span className="w-[72px]">
					<SkillsCard
						icon={
							<img
								src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png"
								alt="MySQL"
								className="w-12 h-12"
							/>
						}
						title="MySQL"
						color={'bg-blue-500'}
					/>
				</span>
				<span className="md:col-start-2 w-[72px]">
					<SkillsCard
						icon={
							<img
								src="https://res.cloudinary.com/dkbp6rk0s/image/upload/v1682702148/technologies-assets/firebase-logo_fzecel.svg"
								alt="Firebase"
								className="w-12 h-12"
							/>
						}
						title="Firebase"
						color={'bg-yellow-500'}
					/>
				</span>
				<span className="w-[72px]">
					<SkillsCard
						icon={
							<img
								src="https://res.cloudinary.com/dkbp6rk0s/image/upload/v1682702145/technologies-assets/tailwind-logo_rfdyid.svg"
								alt="TailwindCSS"
								className="w-12 h-12"
							/>
						}
						title="TailwindCSS"
						color={'bg-cyan-500'}
					/>
				</span>

				<span className="w-[72px]">
					<SkillsCard
						icon={
							<img
								src="https://static-00.iconduck.com/assets.00/bootstrap-icon-512x512-f3dudm5z.png"
								alt="Bootstrap"
								className="w-12 h-12"
							/>
						}
						title="Bootstrap"
						color="bg-purple-500"
					/>
				</span>
				{/* Redux */}
				<span className="w-[72px]">
					<SkillsCard
						icon={
							<img
								src="https://res.cloudinary.com/dkbp6rk0s/image/upload/v1682702145/technologies-assets/redux-logo_bwg2wg.svg"
								alt="Redux"
								className="w-12 h-12"
							/>
						}
						title="Redux"
						color={'bg-purple-600'}
					/>
				</span>
				{/* Git */}
				<span className="w-[72px]">
					<SkillsCard
						icon={
							<img
								src="https://res.cloudinary.com/dkbp6rk0s/image/upload/v1684985528/technologies-assets/gitpng_vtiuiv.png"
								alt="Git"
								className="w-12 h-12"
							/>
						}
						title="Git"
						color={'bg-red-500'}
					/>
				</span>
			</div>
		</div>
	)
}
