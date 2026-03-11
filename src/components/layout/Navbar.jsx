import { FileText, Moon, Sun } from "lucide-react";

const DEFAULT_LINKS = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#research", label: "Research" },
];

export default function Navbar({ scrolled, isDark, onToggleDark, onCvDownload, brandLabel, links }) {
  const navLinks = links ?? DEFAULT_LINKS;
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* <a href="/" className="flex items-center gap-2"> */}
        <button
          type="button"
          onClick={() => {
            window.location.hash = "/";
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2"
          aria-label="Go to home"
        >
          <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            R
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            {brandLabel}
            <span className="text-emerald-600">.</span>
          </span>
        </button>
        {/* </a> */}
        <div className="flex items-center gap-4">
          {navLinks.length > 0 && (
            <div className="hidden lg:flex gap-8 text-sm font-medium text-slate-600 dark:text-slate-300 mr-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="hover:text-emerald-600 transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          )}
          <button
            onClick={onCvDownload}
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-emerald-600/10 dark:bg-emerald-600/20 text-emerald-600 dark:text-emerald-400 rounded-xl text-sm font-bold hover:bg-emerald-600 hover:text-white transition-all border border-emerald-600/20"
          >
            <FileText className="w-4 h-4" /> CV
          </button>
          <button
            onClick={onToggleDark}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-emerald-600 transition-all border border-slate-200 dark:border-slate-700 active:scale-90"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
}
