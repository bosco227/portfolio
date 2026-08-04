import { motion as Motion } from "framer-motion";
import ProfilePic from "./ProfilePic.";
import { translations } from "./translations/translations";
import { LanguageContext } from "./context/LanguageContext";
import { useContext } from "react";

export default function Hero() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <Motion.section
      id="hero"
      className="min-h-[calc(100vh-76px)] grid lg:grid-cols-[1.2fr_0.8fr] gap-14 lg:gap-20 items-center py-20 lg:py-24 scroll-mt-24"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-3xl">
        <div className="system-label"><span>01</span>{t.heroEyebrow}</div>
        <div className="availability"><i />{t.available}</div>

        <h1 className="hero-title">Antônio <span>Bosco</span></h1>
        <h2 className="text-xl sm:text-2xl text-slate-200 mt-5 font-medium">{t.role}</h2>
        <p className="text-slate-400 mt-6 max-w-2xl text-base sm:text-lg leading-relaxed">{t.header}</p>

        <div className="flex flex-wrap gap-4 mt-9">
          <a href="#projects" className="cyber-button cyber-button-primary">{t.projects}<span>↘</span></a>
          <a href="https://github.com/bosco227" target="_blank" rel="noreferrer" className="cyber-button cyber-button-secondary">GitHub<span>↗</span></a>
        </div>

        <div className="hero-metrics">
          <div><strong>09</strong><span>{t.metricProjects}</span></div>
          <div><strong>09</strong><span>{t.metricTools}</span></div>
          <div><strong>03</strong><span>{t.metricLanguages}</span></div>
        </div>
      </div>

      <ProfilePic />
    </Motion.section>
  );
}
