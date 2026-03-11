import { Briefcase } from "lucide-react";
import SectionHeading from "../common/SectionHeading.jsx";

export default function ExperienceSection({ experience }) {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading icon={Briefcase}>Professional Path</SectionHeading>
        <div className="space-y-12">
          {experience.map((item) => (
            <div key={item.role} className="group relative pl-12">
              <div className="absolute left-0 top-2 bottom-0 w-px bg-slate-200 dark:bg-slate-800" />
              <div className="absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-emerald-600 ring-4 ring-emerald-100 dark:ring-emerald-900/30 transition-transform group-hover:scale-125" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                  {item.role}
                </h3>
                <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-bold text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                  {item.period}
                </span>
              </div>
              <div className="flex items-center gap-2 text-lg font-semibold text-emerald-600 mb-6">
                {item.company}
              </div>
              <ul className="grid gap-4">
                {item.description.map((desc) => (
                  <li key={desc} className="flex gap-4 text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                    <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
