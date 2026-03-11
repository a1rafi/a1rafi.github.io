import { useEffect, useState } from "react";
import { PROJECTS, PROFILE } from "../data/portfolioData";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import ProjectsSection from "../components/sections/ProjectsSection.jsx";

export default function ProjectsPage() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const handleFooterContact = (type) => {
    if (type === "cv") {
      window.open("/cv.pdf", "_blank", "noopener,noreferrer");
      return;
    }
    window.location.href = `mailto:${PROFILE.email}`;
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 font-sans">
      <Navbar
        scrolled={scrolled}
        isDark={isDark}
        onToggleDark={() => setIsDark(!isDark)}
        onCvDownload={() => window.open("/cv.pdf", "_blank", "noopener,noreferrer")}
        brandLabel="Al Rafi"
        links={[{ href: "#/", label: "Home" }]}
      />

      <section className="pt-28 pb-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold tracking-wide">
            PORTFOLIO SHOWCASE
          </div>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight">
            All Projects
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
            A full index of builds across AI, full-stack web, and computer vision. Each project
            includes the core stack and impact summary.
          </p>
        </div>
      </section>

      <ProjectsSection projects={PROJECTS} showViewAllLink={false} />

      <Footer profile={PROFILE} onOpenContact={handleFooterContact} />
    </div>
  );
}
