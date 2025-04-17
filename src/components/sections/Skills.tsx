import { SKILLS } from '@/constants/SkillsData';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Skills = () => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-8 grid-rows-5 gap-y-6 place-items-center">
      {SKILLS.map((skill) => (
        <div key={skill.name} className="w-[72px] text-center group" role="listitem">
          <div
            className={`${skill.lightBackground} ${skill.darkBackground} rounded-lg p-3 transition-transform duration-200 group-hover:scale-110 cursor-pointer flex items-center justify-center`}
            aria-label={`Skill icon: ${skill.title}`}
          >
            <LazyLoadImage
              src={`/Portafolio/abilities/${skill.name}.png`}
              alt={`${skill.title} logo`}
              className="w-12 h-12 select-none pointer-events-none"
              draggable={false}
            />
          </div>
          <h3 className="text-sm font-semibold text-black dark:text-gray-300 mt-2 truncate" title={skill.title}>
            {skill.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Skills;
