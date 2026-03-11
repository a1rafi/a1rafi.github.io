import { Code, ExternalLink, SquareArrowOutUpRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading.jsx";

export default function ProjectsSection({ projects, showViewAllLink = true }) {
  return (
    <section id="projects" className="py-20 px-6 bg-slate-100 dark:bg-slate-900/40">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <SectionHeading icon={Code}>Selected Projects</SectionHeading>
          {showViewAllLink && (
            <a href="#/projects" className="mb-8 flex items-center gap-2 text-emerald-600 font-bold hover:underline">
              View All Projects <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-8 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all group active:scale-[0.98]"
            >
              <div className="mb-6">
                <span className="text-[10px] font-black tracking-widest text-emerald-600 uppercase py-1.5 px-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                  {project.type}
                </span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                  {project.title}
                </h3>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-emerald-600 hover:border-emerald-300 transition-colors"
                    aria-label={`Open ${project.title}`}
                  >
                    <SquareArrowOutUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-bold px-2.5 py-1 bg-slate-50 dark:bg-slate-900 text-slate-500 rounded-md border border-slate-100 dark:border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
