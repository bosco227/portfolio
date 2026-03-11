import { motion } from "framer-motion";
import ProfilePic from "./ProfilePic.";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <ProfilePic />
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
          Antônio Bosco
        </h1>

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
