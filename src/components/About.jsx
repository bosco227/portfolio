import { motion as Motion } from "framer-motion";
import { LanguageContext } from "./context/LanguageContext";
import { translations } from "./translations/translations";
import { useContext } from "react";

export default function About() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const items = [
    { title: t.who, text: t.whoText },
    { title: t.tools, text: t.toolsText },
    { title: t.goal, text: t.goalText },
  ];

  return (
    <Motion.section id="about" className="content-section" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
      <div className="section-heading">
        <div><p className="eyebrow">{t.aboutEyebrow}</p><h2>{t.aboutTitle}</h2></div>
        <p className="lead">{t.aboutIntro}</p>
      </div>
      <div className="feature-grid">
        {items.map((item, index) => (
          <article className="feature-item" key={item.title}>
            <span className="feature-index">{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </Motion.section>
  );
}
