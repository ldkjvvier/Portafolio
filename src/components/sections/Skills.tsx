import { SKILLS } from '@/constants/SkillsData';
export const Skills = () => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-8 grid-rows-5 place-items-center">
      {SKILLS.map((skill, index) => {
        return (
          <span className="w-[72px]" key={index}>
            <div className="transition hover:scale-110" aria-label={`skill icon ${skill.title}`}>
              <div
                className={`${skill.color} bg-opacity-20 dark:bg-opacity-30 rounded-lg p-3 cursor-pointer flex items-center justify-center`}
              >
                <img
                  src={skill.icon}
                  alt={skill.title}
                  loading="lazy"
                  className="w-12 h-12 select-none drag-none pointer-events-none"
                />
              </div>
              <h3
                className="text-sm text-center leading-8 font-bold text-black dark:text-gray-300 mb-3 truncate"
                title={skill.title}
              >
                {skill.title}
              </h3>
            </div>
          </span>
        );
      })}
    </div>
  );
};
