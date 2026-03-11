import { useEffect, useState } from "react";
import {
  CONTACT_TEMPLATES,
  EXPERIENCE,
  PROFILE,
  PROJECTS,
  SKILLS,
  STATS,
} from "../data/portfolioData";
import { CONTACT_API_URL, CV_DOWNLOAD_URL } from "../config/env";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import HeroSection from "../components/sections/HeroSection.jsx";
import StatsSection from "../components/sections/StatsSection.jsx";
import ExperienceSection from "../components/sections/ExperienceSection.jsx";
import ProjectsSection from "../components/sections/ProjectsSection.jsx";
import SkillsSection from "../components/sections/SkillsSection.jsx";
import ResearchSection from "../components/sections/ResearchSection.jsx";
import ContactModal from "../components/sections/ContactModal.jsx";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactType, setContactType] = useState("talk");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openContactModal = (type) => {
    const template = CONTACT_TEMPLATES[type] || CONTACT_TEMPLATES.talk;
    setContactType(type);
    setContactForm({
      name: "",
      email: "",
      subject: template.subject,
      message: template.message,
    });
    setSubmitMessage("");
    setIsContactOpen(true);
  };

  const handleCvDownload = () => {
    window.open(CV_DOWNLOAD_URL, "_blank", "noopener,noreferrer");
  };

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    if (!contactForm.name || !contactForm.email) {
      setSubmitMessage("Please provide your name and email.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      });
      const result = await response.json();
      if (response.ok && result.success) {
        setSubmitMessage("Success! I will get back to you soon.");
        if (contactType === "cv") {
          window.open(CV_DOWNLOAD_URL, "_blank", "noopener,noreferrer");
        }
        setTimeout(() => setIsContactOpen(false), 2000);
      } else {
        setSubmitMessage(result.message || "Something went wrong.");
      }
    } catch {
      setSubmitMessage("Error connecting to server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 font-sans">
      <Navbar
        scrolled={scrolled}
        isDark={isDark}
        onToggleDark={() => setIsDark(!isDark)}
        onCvDownload={handleCvDownload}
        brandLabel="Al Rafi"
      />

      <HeroSection profile={PROFILE} onOpenContact={openContactModal} onCvDownload={handleCvDownload} />
      <StatsSection stats={STATS} />
      <ExperienceSection experience={EXPERIENCE} />
      <ProjectsSection projects={PROJECTS} />
      <SkillsSection skills={SKILLS} />
      {/* <ResearchSection /> */}

      <ContactModal
        isOpen={isContactOpen}
        contactType={contactType}
        contactForm={contactForm}
        submitMessage={submitMessage}
        isSubmitting={isSubmitting}
        onClose={() => setIsContactOpen(false)}
        onSubmit={handleContactSubmit}
        onChange={setContactForm}
      />

      <Footer profile={PROFILE} onOpenContact={openContactModal} />
    </div>
  );
}
