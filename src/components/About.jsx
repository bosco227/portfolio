import { motion } from "framer-motion";
import { LanguageContext } from "./context/LanguageContext";
import { translations } from "./translations/translations";
import { useContext } from "react";

export default function About() {
  const techs = [
    "React",
    "Next.js",
    "JavaScript",
    "Django",
    "PostgreSQL",
    "Node.js",
    "TailwindCSS",
    "Git",
  ];

  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <motion.section
      id="about"
      className="py-20 scroll-mt-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-extrabold text-center">{t.aboutTitle}</h1>

      <div className="mt-12 grid md:grid-cols-2 gap-12 items-start">
        {/* TEXTO */}
        <div className="space-y-6 text-gray-300">
          <div>
            <h2 className="text-2xl font-semibold text-white">{t.who}</h2>
            <p className="mt-2">{t.whoText}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white">{t.goal}</h2>
            <p className="mt-2">{t.goalText}</p>
          </div>
        </div>

        {/* TECNOLOGIAS */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-white">{t.tools}</h2>

          <div className="flex flex-wrap gap-3">
            {techs.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-gray-300 hover:border-sky-400 hover:text-white transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
