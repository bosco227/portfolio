import { motion } from "framer-motion";
import { LanguageContext } from "./context/LanguageContext";
import { translations } from "./translations/translations";
import { useContext } from "react";

export default function Projects() {
  const projects = [
    {
      title: "Pomodoro Clone",
      desc: "Aplicação de temporizador baseada na técnica Pomodoro.",
      tech: ["React", "Tailwind"],
      link: "https://pomodoro-clone-woad.vercel.app/",
      image: "/pomodoro.png", // coloque um screenshot em /public
    },
  ];
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  return (
    <motion.section
      id="projects"
      className="py-20 scroll-mt-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-extrabold text-center mb-12">{t.p}</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden
hover:-translate-y-2 hover:border-sky-400 cursor-pointer transition duration-300"
          >
            {/* imagem */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold">{project.title}</h3>

              <p className="text-gray-400 mt-2">{project.desc}</p>

              {/* tecnologias */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-slate-700 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* botão */}
              <a
                href={project.link}
                target="_blank"
                className="inline-block mt-6 text-sky-400 hover:text-sky-300 transition"
              >
                {project.projects}
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
