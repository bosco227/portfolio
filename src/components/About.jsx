import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <section className="text-center py-20">
        <h1 className="font-extrabold text-4xl text-center">Sobre mim</h1>
        <h2 className="mt-2 font-bold text-2xl">Quem sou</h2>
        <p>
          Sou um jovem estudante que atualmente está cursando Engenharia de
          Software, possuo uma certa paixão pela área de programação e
          desenvolvimento web
        </p>
        <h2 className="font-bold text-2xl mt-2">
          Ferramentas que uso atualmente
        </h2>
        <p>
          Por enquanto estou desenvolvendo usando ReactJS, NextJS para front,
          Django para backend, e Postgres para administrar bancos de dados.
        </p>
        <h2 className="font-bold text-2xl mt-2">Objetivo</h2>
        <p>
          Busco oportunidades de crescer como um desenvolvedor, e chances de
          contribuir em verdadeiros projetos
        </p>
      </section>
    </motion.section>
  );
}
