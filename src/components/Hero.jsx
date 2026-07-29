import { motion } from "framer-motion";
import ProfilePic from "./ProfilePic.";
import { translations } from "./translations/translations";
import { LanguageContext } from "./context/LanguageContext";
import { useContext } from "react";

export default function Hero() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  return (
    <motion.section
      id="hero"
      className="min-h-[80vh] flex flex-col justify-center items-center text-center scroll-mt-24"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <ProfilePic />
      <h1 className="text-5xl font-extrabold">
        Antônio{" "}
        <span className="bg-linear-to-r from-sky-400 to-cyan-300 text-transparent bg-clip-text">
          Bosco
        </span>
      </h1>

      <h2 className="text-2xl text-gray-300 mt-4">
        {t.role}
      </h2>

      <p className="text-gray-400 mt-6 max-w-xl">{t.header}</p>

      <div className="flex gap-4 mt-8">
        <a
          href="#projects"
          className="px-6 py-3 bg-sky-500 rounded-lg font-medium
          hover:bg-sky-400 transition"
        >
          {t.projects}
        </a>

        <a
          href="https://github.com/bosco227"
          target="_blank"
          className="px-6 py-3 border border-slate-600 rounded-lg
          hover:border-sky-400 transition"
        >
          GitHub
        </a>
      </div>
    </motion.section>
  );
}
