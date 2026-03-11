import { Download, Github, Linkedin, Mail, Terminal } from "lucide-react";
import AnimatedTitle from "../common/AnimatedTitle.jsx";

export default function HeroSection({ profile, onOpenContact, onCvDownload }) {
  return (
    <section className="pt-24 md:pt-32 pb-16 px-6 overflow-hidden relative min-h-[90vh] flex items-center">
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
      <div className="max-w-6xl mx-auto relative w-full">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1 space-y-6 md:space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold tracking-wide">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              OPEN FOR COLLABORATION
            </div>
            <AnimatedTitle />
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              I&apos;m{" "}
              <span className="font-semibold text-slate-900 dark:text-white">{profile.name}</span>, a
              CSE graduate from Brac University. I bridge the gap between AI research and
              production-ready applications, specializing in privacy-preserving machine learning.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onOpenContact("talk")}
                className="flex items-center gap-2 px-6 md:px-8 py-3.5 md:py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold transition-all shadow-xl shadow-emerald-600/20 active:scale-95"
              >
                <Mail className="w-5 h-5" /> Let&apos;s Talk
              </button>
              <button
                onClick={onCvDownload}
                className="flex items-center gap-2 px-6 md:px-8 py-3.5 md:py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-2xl font-bold hover:border-emerald-500 hover:text-emerald-600 transition-all shadow-sm active:scale-95"
              >
                <Download className="w-5 h-5 text-emerald-600" /> Download CV
              </button>
              <div className="flex items-center gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 md:p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-600 dark:text-slate-300 hover:text-emerald-600 transition-all shadow-sm"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 md:p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-600 dark:text-slate-300 hover:text-emerald-600 transition-all shadow-sm"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="w-64 h-64 lg:w-80 lg:h-80 relative z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-700 rounded-[2.5rem] rotate-6 opacity-20 animate-pulse" />
              <div className="absolute inset-0 bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col items-center justify-center border-4 border-emerald-500/30">
                <Terminal className="w-16 h-16 text-emerald-500 mb-4 opacity-50" />
                <div className="text-emerald-500 font-mono text-xs lg:text-sm">
                  {"const alRafi = {"}
                  <br />
                  &nbsp;&nbsp;{"status: \"Coding\","}
                  <br />
                  &nbsp;&nbsp;{"focus: \"AI/ML\""}
                  <br />
                  {"};"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
