import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./context/LanguageContext";
import { translations } from "./translations/translations";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const { language, setLanguage } = useContext(LanguageContext);
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.55 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const linkStyle = (id) =>
    `nav-link transition ${
      active === id
        ? "nav-link-active"
        : "text-slate-400 hover:text-cyan-300"
    }`;

  const toggleLanguage = () => {
    const languages = ["en", "pt", "es"];
    const currentIndex = languages.indexOf(language);
    setLanguage(languages[(currentIndex + 1) % languages.length]);
  };

  return (
    <header className={`site-header sticky top-0 z-50 transition-all duration-300 ${scrolled ? "site-header-scrolled" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-4 flex justify-between items-center gap-5">
        <a href="#hero" className="brand-lockup" aria-label="Antônio Bosco — início">
          <span className="brand-mark">AB</span>
          <span className="brand-copy">
            <strong>Antônio Bosco</strong>
            <small>SOFTWARE ENGINEER</small>
          </span>
        </a>

        <nav className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm" aria-label="Navegação principal">
          <a href="#about" className={linkStyle("about")}>{t.navAbout}</a>
          <a href="#projects" className={linkStyle("projects")}>{t.navProjects}</a>
          <a href="#contact" className={linkStyle("contact")}>{t.navContact}</a>
          <button type="button" onClick={toggleLanguage} aria-label={t.switchLanguage} title={t.switchLanguage} className="language-switch">
            <span className="status-pulse" />{language.toUpperCase()}
          </button>
        </nav>
      </div>
    </header>
  );
}
