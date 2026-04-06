import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  DEVOPS_SKILL,
  OTHER_SKILL,
  SKILL_DATA,
} from "@/constants";

const SKILL_GROUPS = [
  SKILL_DATA,
  FRONTEND_SKILL,
  BACKEND_SKILL,
  FULLSTACK_SKILL,
  DEVOPS_SKILL,
  OTHER_SKILL,
];

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-6 h-full relative overflow-hidden py-20"
    >
      <SkillText />

      {SKILL_GROUPS.map((group, groupIndex) => (
        <div
          key={groupIndex}
          className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center"
        >
          {group.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
      ))}

      {/* Background Video */}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};