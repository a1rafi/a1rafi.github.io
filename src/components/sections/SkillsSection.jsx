import { Cpu } from "lucide-react";
import SectionHeading from "../common/SectionHeading.jsx";

export default function SkillsSection({ skills }) {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading icon={Cpu}>Technical Stack</SectionHeading>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup) => {
            const SkillIcon = skillGroup.icon;
            return (
              <div
                key={skillGroup.category}
                className="p-8 bg-white dark:bg-slate-900/50 rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:border-emerald-500/30 transition-all"
              >
                <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <SkillIcon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-emerald-100/50 dark:bg-emerald-900/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
