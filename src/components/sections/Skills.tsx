import { SKILLS, SKILL_GROUPS } from '@/constants/SkillsData';
import { withBase } from '@/lib/assets';

const Skills = () => (
  <div>
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8" aria-label="Stack principal">
      {SKILLS.map((skill) => (
        <li
          key={skill.title}
          className="card flex flex-col items-center gap-2.5 px-3 py-4 text-center transition-colors hover:border-line-strong"
        >
          <img
            src={withBase(skill.icon)}
            alt=""
            width={40}
            height={40}
            className="size-10 select-none object-contain"
            draggable={false}
            loading="lazy"
            decoding="async"
          />
          <span className="text-xs font-medium text-ink-muted">{skill.title}</span>
        </li>
      ))}
    </ul>

    <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
      {SKILL_GROUPS.map((group) => (
        <section key={group.title} aria-label={group.title}>
          <h3 className="text-sm font-semibold text-ink">{group.title}</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-line px-2.5 py-0.5 text-xs font-medium text-ink-muted"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  </div>
);

export default Skills;
