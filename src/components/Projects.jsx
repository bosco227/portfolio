import { motion as Motion } from "framer-motion";
import { LanguageContext } from "./context/LanguageContext";
import { translations } from "./translations/translations";
import { useContext } from "react";

export default function Projects() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const projects = [
    { key: "ordemEterna", title: "Ordem Eterna", tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "SEO"], link: "https://ordem-eterna.vercel.app/", image: "/ordem-eterna.png" },
    { key: "codiceDaForca", title: "Códice da Força", tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO"], link: "https://force-codex.vercel.app/", image: "/codice-da-forca.webp" },
    { key: "lumina", title: "Lumina", tech: ["Next.js", "React", "TypeScript", "Web APIs"], link: "https://lumina-eta-roan.vercel.app/", image: "/lumina.png" },
    { key: "pokelab", title: "PokéLab", tech: ["Next.js", "React", "TypeScript", "PokeAPI"], link: "https://poke-site-antonio-bosco-souza-lopes-projects.vercel.app/", image: "/poke-site.png" },
    { key: "naregua", title: "Na régua", tech: ["Next.js", "React", "TypeScript", "Leaflet", "Node.js", "Express", "MySQL"], link: "https://naregua-ochre.vercel.app/", image: "/naregua.png" },
    { key: "bellaNoche", title: "Bella Noche", tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"], link: "https://bella-noche.vercel.app/", image: "/bella-noche.png" },
    { key: "blacksite", title: "Blacksite", tech: ["React", "JavaScript", "Vite", "Node.js", "Express", "REST API"], link: "https://blacksite-beta.vercel.app/", image: "/blacksite.png" },
    { key: "pomodoro", title: "Pomodoro Clone", tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "React Router", "date-fns"], link: "https://pomodoro-clone-woad.vercel.app/", image: "/pomodoro.png" },
    { key: "castor", title: "Site Castor", tech: ["React", "Vite", "Tailwind CSS", "React Router"], link: "https://site-castor.vercel.app/", image: "/castor.png" },
  ].map((project) => ({
    ...project,
    type: t.projectTypes[project.key],
    desc: t.projectDescriptions[project.key],
    highlights: t.projectHighlights[project.key],
  }));

  return (
    <Motion.section id="projects" className="py-28 scroll-mt-24" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <div className="section-heading">
        <div>
          <div className="system-label"><span>03</span>{t.projectsEyebrow}</div>
          <h1>{t.p}</h1>
        </div>
        <p>{t.projectsIntro}</p>
      </div>

      <div className="project-grid mt-14">
        {projects.map((project, index) => (
          <article key={project.title} className="project-card">
            <div className="project-image-wrap">
              <img src={project.image} alt={`Preview do projeto ${project.title}`} />
              <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
              {index < 3 && <span className="project-new"><i />{t.recent}</span>}
            </div>

            <div className="project-body">
              <span className="project-type">{project.type}</span>
              <div className="project-title-row"><h3>{project.title}</h3><span>↗</span></div>
              <p>{project.desc}</p>

              <ul className="case-highlights" aria-label={t.caseHighlightsLabel}>
                {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((tech) => <span key={tech} className="tech-tag">{tech}</span>)}
              </div>
              <a href={project.link} target="_blank" rel="noreferrer" className="project-link"><span>{t.project}</span><i>OPEN // LIVE</i></a>
            </div>
          </article>
        ))}
      </div>
    </Motion.section>
  );
}
