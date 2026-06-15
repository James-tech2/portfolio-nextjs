"use client";
import { skillContent } from "@/data/skillContent";
import SkillCard from "../utils/components/SkillCard";

interface SkillsProps {
  skillContent: typeof skillContent;
}

const Skills = ({ skillContent }: SkillsProps) => {
  return (
    <section
      id="skills"
      className="min-h-full py-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white"
      aria-label="Skills Section"
    >
      <div className="max-w-5xl mx-auto px-6">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-bold">Skills</h2>
          <p className="text-gray-300 mt-2 max-w-2xl mx-auto">
            Full-stack developer — front-end, back-end, cloud & tooling. I build
            reliable, performant, and maintainable applications across the
            stack.
          </p>
        </header>

        <div className="grid gap-6 xl:grid-cols-2">
          <SkillCard title="Front-end" items={skillContent.frontEnd} />
          <SkillCard
            title="Back-end & Databases"
            items={skillContent.backEnd}
          />
          <SkillCard title="Cloud & DevOps" items={skillContent.cloud} />
          <SkillCard title="Tools & Testing" items={skillContent.tools} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
