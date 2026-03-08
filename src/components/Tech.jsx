import { motion } from "framer-motion";

export default function Tech() {
  const techs = [
    "JavaScript",
    "React",
    "Node",
    "Python",
    "HTML",
    "CSS",
    "Tailwind",
    "Git",
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <section className="py-16">
        <h2 className="text-2xl font-bold mb-8">Technologies</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techs.map((tech) => (
            <div key={tech} className="bg-slate-800 p-4 rounded-lg text-center">
              {tech}
            </div>
          ))}
        </div>
      </section>
    </motion.section>
  );
}
