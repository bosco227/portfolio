import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "pomodoro-clone",
      desc: "Um projeto feito em React, um temporizador Pomodoro .",
      tech: "React puro",
      link: "https://pomodoro-clone-woad.vercel.app/",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <section className="py-16">
        <h2 className="text-2xl font-bold mb-8">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

              <p className="text-gray-400 mb-4">{project.desc}</p>

              <p className="text-sm text-sky-400">{project.tech}</p>

              <a href={project.link} className="text-center">
                Acessar
              </a>
            </div>
          ))}
        </div>
      </section>
    </motion.section>
  );
}
