import { motion as Motion } from "framer-motion";
import { LanguageContext } from "./context/LanguageContext";
import { translations } from "./translations/translations";
import { useContext } from "react";

export default function About() {
  const techs = ["React", "NextJS", "NestJS", "JavaScript", "Django", "PostgreSQL", "NodeJS", "TailwindCSS", "Git"];
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <Motion.section id="about" className="py-28 scroll-mt-24" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <div className="section-heading">
        <div>
          <div className="system-label"><span>02</span>{t.aboutEyebrow}</div>
          <h1>{t.aboutTitle}</h1>
        </div>
        <p>{t.aboutIntro}</p>
      </div>

      <div className="mt-14 grid lg:grid-cols-[0.9fr_1.1fr] gap-6 items-stretch">
        <div className="info-panel space-y-9 text-slate-300">
          <div className="info-block"><span>01 /</span><div><h2>{t.who}</h2><p>{t.whoText}</p></div></div>
          <div className="info-block"><span>02 /</span><div><h2>{t.goal}</h2><p>{t.goalText}</p></div></div>
        </div>

        <div className="stack-panel">
          <div className="panel-topline"><span>{t.tools}</span><small>STACK // ACTIVE</small></div>
          <div className="stack-grid">
            {techs.map((tech, index) => <span key={tech} className="stack-chip"><i>{String(index + 1).padStart(2, "0")}</i>{tech}</span>)}
          </div>
        </div>
      </div>
    </Motion.section>
  );
}
