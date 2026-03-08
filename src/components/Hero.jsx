import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold">Antônio Bosco</h1>

        <p className="mt-4 mb-4 text-gray-600">
          Web Developer | JavaScript | React | Node
        </p>

        <div className="flex justify-center gap-4">
          <a
            className="bg-sky-500 px-4 py-2 rounded"
            href="https://github.com/bosco227"
          >
            GitHub
          </a>

          <a
            className="border border-sky-500 px-4 py-2 rounded"
            href="https://www.linkedin.com/in/antonio-bosco-720721362/"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </motion.section>
  );
}
