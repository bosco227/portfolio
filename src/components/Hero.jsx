import { motion as Motion } from "framer-motion";
import ProfilePic from "./ProfilePic.";
import { translations } from "./translations/translations";
import { LanguageContext } from "./context/LanguageContext";
import { useContext } from "react";

export default function Hero() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  return (
    <Motion.section id="hero" className="hero-layout" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
      <div className="hero-copy">
        <p className="eyebrow">{t.heroEyebrow}</p>
        <h1>Antônio <em>Bosco.</em></h1>
        <h2>{t.role}</h2>
        <p className="lead">{t.header}</p>
        <div className="hero-actions">
          <a href="#projects" className="button button-primary">{t.projects}<span aria-hidden="true">↓</span></a>
          <a href="https://github.com/bosco227" target="_blank" rel="noreferrer" className="button button-secondary">GitHub <span aria-hidden="true">↗</span></a>
        </div>
        <p className="availability"><span aria-hidden="true" />{t.available}</p>
      </div>
      <ProfilePic />
    </Motion.section>
  );
}
