import { motion as Motion } from "framer-motion";
import { LanguageContext } from "./context/LanguageContext";
import { translations } from "./translations/translations";
import { useContext } from "react";

export default function Projects() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const projects = [
    { title: "Códice da Força", desc: t.projectDescriptions.codiceDaForca, tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"], link: "https://force-codex.vercel.app/", image: "/codice-da-forca.webp" },
    { title: "Lumina", desc: t.projectDescriptions.lumina, tech: ["Next.js", "React", "TypeScript", "Web APIs"], link: "https://lumina-eta-roan.vercel.app/", image: "/lumina.png" },
    { title: "PokéLab", desc: t.projectDescriptions.pokelab, tech: ["Next.js", "React", "TypeScript", "PokeAPI"], link: "https://poke-site-antonio-bosco-souza-lopes-projects.vercel.app/", image: "/poke-site.png" },
    { title: "Bella Noche", desc: t.projectDescriptions.bellaNoche, tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"], link: "https://bella-noche.vercel.app/", image: "/bella-noche.png" },
    { title: "Pomodoro Clone", desc: t.projectDescriptions.pomodoro, tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "React Router", "date-fns"], link: "https://pomodoro-clone-woad.vercel.app/", image: "/pomodoro.png" },
    { title: "Site Castor", desc: t.projectDescriptions.castor, tech: ["React", "Vite", "Tailwind", "React Router"], link: "https://site-castor.vercel.app/", image: "/castor.png" },
    { title: "Na régua", desc: t.projectDescriptions.naregua, tech: ["Next.js", "React", "TypeScript", "Leaflet", "Node.js", "Express", "MySQL"], link: "https://naregua-ochre.vercel.app/", image: "/naregua.png" },
    { title: "Blacksite", desc: t.projectDescriptions.blacksite, tech: ["React", "JavaScript", "Vite", "Node.js", "Express", "REST API"], link: "https://blacksite-beta.vercel.app/", image: "/blacksite.png" },
  ];

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
              <div className="project-title-row"><h3>{project.title}</h3><span>↗</span></div>
              <p>{project.desc}</p>
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
