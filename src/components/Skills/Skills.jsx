import { SkillsCard } from './SkillsCard'
import { skillsData } from '../../data/SkillsData'
export const Skills = () => {
	return (
		<div id="habilidades" className="scroll-m-36">
			<div className="my-20 border-b border-gray-400 ">
				<h2 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-white sm:text-4xl mb-3">
					Habilidades
				</h2>
			</div>

			<div className="grid grid-cols-4 md:grid-cols-8 grid-rows-5 place-items-center">
				{skillsData.map((skill, index) => {
					return (
						<span className="w-[72px]" key={index}>
							<SkillsCard
								icon={
									<img
										src={skill.icon}
										alt={skill.title}
										className="w-12 h-12 select-none drag-none pointer-events-none"
									/>
								}
								title={skill.title}
								color={skill.color}
							/>
						</span>
					)
				})}
			</div>
		</div>
	)
}
