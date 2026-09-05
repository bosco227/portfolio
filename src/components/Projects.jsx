import { motion as Motion } from "framer-motion";
import { LanguageContext } from "./context/LanguageContext";
import { translations } from "./translations/translations";
import { useContext, useMemo, useState } from "react";

const projectSource = [
  { key: "lumina", title: "Lumina", group: "product", tech: ["Next.js", "React", "TypeScript", "Web APIs"], link: "https://lumina-eta-roan.vercel.app/", image: "/lumina.png", width: 1280, height: 720 },
  { key: "cmdca", title: "CMDCA Itaitinga", group: "institutional", tech: ["Next.js", "React", "TypeScript", "SEO"], link: "https://cmdca-blue.vercel.app/", image: "/cmdca.jpg", width: 1280, height: 672 },
  { key: "pokerzin", title: "Pokerzin", group: "experience", tech: ["Next.js", "TypeScript", "Game Logic", "Local Storage"], link: "https://pokerzin-weld.vercel.app/", image: "/pokerzin.jpg", width: 1280, height: 672 },
  { key: "blacksite", title: "Blacksite", group: "experience", tech: ["React", "JavaScript", "Node.js", "Express"], link: "https://blacksite-beta.vercel.app/", image: "/blacksite.png", width: 1200, height: 798 },
  { key: "aecit", title: "AECIT", group: "institutional", tech: ["Next.js", "React", "TypeScript", "SEO"], link: "https://aecit.vercel.app/", image: "/aecit.jpg", width: 1280, height: 672 },
  { key: "castor", title: "Site Castor", group: "product", tech: ["React", "Vite", "Tailwind CSS", "React Router"], link: "https://site-castor.vercel.app/", image: "/castor.png", width: 1265, height: 712 },
  { key: "pomodoro", title: "Pomodoro Clone", group: "product", tech: ["React", "TypeScript", "Vite", "date-fns"], link: "https://pomodoro-clone-woad.vercel.app/", image: "/pomodoro.png", width: 1332, height: 831 },
  { key: "bellaNoche", title: "Bella Noche", group: "experience", tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"], link: "https://bella-noche.vercel.app/", image: "/bella-noche.png", width: 1265, height: 712 },
  { key: "naregua", title: "Na régua", group: "product", tech: ["Next.js", "Node.js", "Express", "MySQL"], link: "https://naregua-ochre.vercel.app/", image: "/naregua.png", width: 1265, height: 712 },
  { key: "codiceDaForca", title: "Códice da Força", group: "experience", tech: ["Next.js", "React", "TypeScript", "SEO"], link: "https://force-codex.vercel.app/", image: "/codice-da-forca.webp", width: 1200, height: 630 },
  { key: "pokelab", title: "PokéLab", group: "product", tech: ["Next.js", "React", "TypeScript", "PokeAPI"], link: "https://poke-site-antonio-bosco-souza-lopes-projects.vercel.app/", image: "/poke-site.png", width: 1265, height: 712 },
];

const ui = {
  pt: { all: "Todos", product: "Produto", institutional: "Institucional", experience: "Experiência", focus: "Caso em foco", open: "Abrir ao vivo", preview: "Interface do projeto" },
  en: { all: "All", product: "Product", institutional: "Institutional", experience: "Experience", focus: "Featured case", open: "Open live", preview: "Project interface" },
  es: { all: "Todos", product: "Producto", institutional: "Institucional", experience: "Experiencia", focus: "Caso destacado", open: "Abrir en vivo", preview: "Interfaz del proyecto" },
};

export default function Projects() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const labels = ui[language];
  const [filter, setFilter] = useState("all");
  const [selectedKey, setSelectedKey] = useState("lumina");
  const projects = useMemo(() => projectSource.map((project) => ({ ...project, type: t.projectTypes[project.key], desc: t.projectDescriptions[project.key] })), [t]);
  const visibleProjects = filter === "all" ? projects : projects.filter((project) => project.group === filter);
  const selected = projects.find((project) => project.key === selectedKey) || projects[0];

  const changeFilter = (value) => {
    setFilter(value);
    const nextVisible = value === "all" ? projects : projects.filter((project) => project.group === value);
    if (!nextVisible.some((project) => project.key === selectedKey)) setSelectedKey(nextVisible[0].key);
  };

  return (
    <Motion.section id="projects" className="content-section" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.5 }}>
      <div className="section-heading">
        <div><p className="eyebrow">{t.projectsEyebrow}</p><h2>{t.p}</h2></div>
        <p className="lead">{t.projectsIntro}</p>
      </div>

      <div className="project-filters" role="group" aria-label={t.p}>
        {["all", "product", "institutional", "experience"].map((value) => <button key={value} type="button" aria-pressed={filter === value} onClick={() => changeFilter(value)}>{labels[value]}</button>)}
      </div>

      <div className="project-list">
        {visibleProjects.map((project) => {
          const isSelected = selected.key === project.key;
          return (
            <article key={project.key} className="project-row" role="button" tabIndex="0" aria-pressed={isSelected} aria-controls="featured-case" onClick={() => setSelectedKey(project.key)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setSelectedKey(project.key); } }}>
              <span className="project-number">{String(projectSource.findIndex((item) => item.key === project.key) + 1).padStart(2, "0")}</span>
              <div><h3>{project.title}</h3><p>{project.desc}</p></div>
              <span className="project-type">{project.type}</span>
              <span className="project-arrow" aria-hidden="true">→</span>
            </article>
          );
        })}
      </div>

      <Motion.div id="featured-case" className="featured-case" key={selected.key} initial={{ opacity: 0.35, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <div className="featured-media"><img src={selected.image} width={selected.width} height={selected.height} alt={`${labels.preview} ${selected.title}`} /></div>
        <div className="featured-copy">
          <p className="eyebrow">{labels.focus} // {selected.type}</p>
          <h2>{selected.title}</h2>
          <p className="lead">{selected.desc}</p>
          <div className="tag-list" aria-label={t.caseHighlightsLabel}>{selected.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
          <a href={selected.link} target="_blank" rel="noreferrer" className="button button-secondary">{labels.open}<span aria-hidden="true">↗</span></a>
        </div>
      </Motion.div>
    </Motion.section>
  );
}
