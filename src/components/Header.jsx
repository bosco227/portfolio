import { useEffect, useState } from "react";
import { LanguageContext } from "./context/LanguageContext";
import { translations } from "./translations/translations";
import { useContext } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const linkStyle = (id) =>
    `transition ${
      active === id
        ? "text-sky-400 font-medium"
        : "text-gray-400 hover:text-sky-400"
    }`;
  const { language, setLanguage } = useContext(LanguageContext);
  const t = translations[language];

  const toggleLanguage = () => {
    const languages = ["en", "pt", "es"];
    const currentIndex = languages.indexOf(language);
    setLanguage(languages[(currentIndex + 1) % languages.length]);
  };
  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/90 backdrop-blur border-b border-slate-800 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-semibold">Dev Antônio Bosco</h1>

        <nav className="flex gap-6 text-sm">
          <a href="#about" className={linkStyle("about")}>
            {t.navAbout}
          </a>

          <a href="#projects" className={linkStyle("projects")}>
            {t.navProjects}
          </a>

          <a href="#contact" className={linkStyle("contact")}>
            {t.navContact}
          </a>

          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={t.switchLanguage}
            title={t.switchLanguage}
          >
            {language.toUpperCase()}
          </button>
        </nav>
      </div>
    </header>
  );
}
