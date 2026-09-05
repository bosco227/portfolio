import { motion as Motion } from "framer-motion";
import { useContext } from "react";
import { LanguageContext } from "./context/LanguageContext";
import { translations } from "./translations/translations";

export default function Contact() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  return (
    <Motion.section id="contact" className="contact-section" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
      <div className="contact-copy">
        <p className="eyebrow">{t.contactEyebrow}</p>
        <h2>{t.contactTitle}</h2>
        <p className="lead">{t.contactText}</p>
        <a href="mailto:antoniobosco2612@gmail.com" className="button button-primary">{t.contactCta}<span aria-hidden="true">↗</span></a>
      </div>
      <footer className="page-footer">
        <span>© {new Date().getFullYear()} Antônio Bosco</span>
        <div><a href="https://github.com/bosco227" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/antonio-bosco-720721362/" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:antoniobosco2612@gmail.com">Email</a></div>
      </footer>
    </Motion.section>
  );
}
