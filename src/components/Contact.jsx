import { motion as Motion } from "framer-motion";
import { useContext } from "react";
import { LanguageContext } from "./context/LanguageContext";
import { translations } from "./translations/translations";

export default function Footer() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <Motion.section id="contact" className="pt-28 scroll-mt-24" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <div className="contact-panel">
        <div>
          <div className="system-label"><span>04</span>{t.contactEyebrow}</div>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>
        </div>
        <a href="mailto:antoniobosco2612@gmail.com" className="cyber-button cyber-button-primary">{t.contactCta}<span>↗</span></a>
      </div>

      <footer className="border-t border-cyan-300/10 py-10 mt-20">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-slate-500">
          <div className="brand-lockup">
            <span className="brand-mark">AB</span>
            <span className="brand-copy"><strong>Antônio Bosco</strong><small>© {new Date().getFullYear()}</small></span>
          </div>
          <div className="flex justify-center gap-6 text-sm">
            <a href="https://github.com/bosco227" target="_blank" rel="noreferrer" className="hover:text-cyan-300 transition">GitHub</a>
            <a href="https://www.linkedin.com/in/antonio-bosco-720721362/" target="_blank" rel="noreferrer" className="hover:text-cyan-300 transition">LinkedIn</a>
            <a href="mailto:antoniobosco2612@gmail.com" className="hover:text-cyan-300 transition">Email</a>
          </div>
        </div>
      </footer>
    </Motion.section>
  );
}
