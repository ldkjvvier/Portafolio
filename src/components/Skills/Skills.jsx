import { CustomTitle } from '../CustomTitle'
import { SkillsCard } from './SkillsCard'
import { skillsData } from '../../data/SkillsData'
export const Skills = () => {
	return (
		<div id="habilidades" className="scroll-m-36">
			<CustomTitle title="Habilidades" />

			<div className="grid grid-cols-4 md:grid-cols-8 grid-rows-5 place-items-center">
				{skillsData.map((skill, index) => {
					return (
						<span className="w-[72px]" key={index}>
							<SkillsCard
								icon={
									<img
										src={skill.icon}
										alt={skill.title}
										loading="lazy"
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
