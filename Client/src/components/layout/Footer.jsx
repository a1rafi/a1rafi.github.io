import { Linkedin, Mail } from "lucide-react";

export default function Footer({ profile, onOpenContact }) {
  return (
    <footer className="pt-24 pb-12 px-6 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16 border-b border-white/5 pb-16">
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-4xl font-black">Ready to scale up?</h2>
            <p className="text-slate-400 max-w-sm">
              I&apos;m always looking for ambitious projects that push the boundaries of AI and software
              engineering.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <button
              onClick={() => onOpenContact("talk")}
              className="px-10 py-5 bg-emerald-600 hover:bg-emerald-700 rounded-2xl font-bold transition-all shadow-xl shadow-emerald-600/10 flex items-center gap-3"
            >
              <Mail className="w-5 h-5" /> Let&apos;s Connect
            </button>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-white/5 border border-white/10 hover:bg-white/10 rounded-2xl font-bold transition-all flex items-center gap-3"
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm font-medium">
          <div>(c) {new Date().getFullYear()} {profile.name}. {profile.location}.</div>
          <div className="flex gap-8">
            <a href={profile.github} className="hover:text-emerald-500 transition-colors">
              GitHub
            </a>
            <a href={profile.linkedin} className="hover:text-emerald-500 transition-colors">
              LinkedIn
            </a>
            <button onClick={() => onOpenContact("cv")} className="hover:text-emerald-500 transition-colors">
              CV
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
