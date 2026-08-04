import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./context/LanguageContext";
import { translations } from "./translations/translations";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const { language, setLanguage } = useContext(LanguageContext);
  const t = translations[language];

  useEffect(() => {
    const sections = ["about", "projects", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    let animationFrame;

    const updateHeader = () => {
      setScrolled(window.scrollY > 20);

      const readingLine = window.scrollY + Math.min(180, window.innerHeight * 0.3);
      const currentSection = sections.reduce(
        (current, section) => section.offsetTop <= readingLine ? section.id : current,
        "",
      );

      setActive(currentSection);
      animationFrame = undefined;
    };

    const handleScroll = () => {
      if (animationFrame === undefined) {
        animationFrame = window.requestAnimationFrame(updateHeader);
      }
    };

    updateHeader();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (animationFrame !== undefined) window.cancelAnimationFrame(animationFrame);
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
