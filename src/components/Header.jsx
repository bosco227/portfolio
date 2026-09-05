import { useContext, useEffect, useRef, useState } from "react";
import { LanguageContext } from "./context/LanguageContext";
import { translations } from "./translations/translations";

const themeNames = {
  pt: { cyan: "Ciano", blue: "Azul", red: "Vermelho", green: "Verde", orange: "Laranja", purple: "Roxo", white: "Branco" },
  en: { cyan: "Cyan", blue: "Blue", red: "Red", green: "Green", orange: "Orange", purple: "Purple", white: "White" },
  es: { cyan: "Cian", blue: "Azul", red: "Rojo", green: "Verde", orange: "Naranja", purple: "Morado", white: "Blanco" },
};
const themeLabels = {
  pt: { trigger: "Sinal", change: "Alterar cor do sinal", active: "ATIVO" },
  en: { trigger: "Signal", change: "Change signal color", active: "ACTIVE" },
  es: { trigger: "Señal", change: "Cambiar color de la señal", active: "ACTIVO" },
};
const themes = ["cyan", "blue", "red", "green", "orange", "purple", "white"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("signal-theme");
      return themes.includes(saved) ? saved : "cyan";
    } catch {
      return "cyan";
    }
  });
  const pickerRef = useRef(null);
  const { language, setLanguage } = useContext(LanguageContext);
  const t = translations[language];
  const colors = themeNames[language];
  const labels = themeLabels[language];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("signal-theme", theme); } catch { /* O tema continua ativo sem persistência. */ }
  }, [theme]);

  useEffect(() => {
    const sections = ["about", "projects", "contact"].map((id) => document.getElementById(id)).filter(Boolean);
    let animationFrame;
    const updateHeader = () => {
      setScrolled(window.scrollY > 20);
      const readingLine = window.scrollY + Math.min(180, window.innerHeight * 0.3);
      setActive(sections.reduce((current, section) => section.offsetTop <= readingLine ? section.id : current, ""));
      animationFrame = undefined;
    };
    const handleScroll = () => {
      if (animationFrame === undefined) animationFrame = window.requestAnimationFrame(updateHeader);
    };
    const closePicker = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) pickerRef.current.open = false;
    };
    updateHeader();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    document.addEventListener("click", closePicker);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      document.removeEventListener("click", closePicker);
      if (animationFrame !== undefined) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  const toggleLanguage = () => {
    const languages = ["pt", "en", "es"];
    setLanguage(languages[(languages.indexOf(language) + 1) % languages.length]);
  };

  return (
    <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
      <div className="header-inner">
        <a href="#hero" className="brand-lockup" aria-label="Antônio Bosco — início">
          <span className="brand-mark"><span>AB</span></span>
          <span className="brand-name">Antônio Bosco</span>
        </a>
        <div className="header-actions">
          <nav aria-label="Navegação principal">
            <a href="#about" className={active === "about" ? "is-active" : ""}>{t.navAbout}</a>
            <a href="#projects" className={active === "projects" ? "is-active" : ""}>{t.navProjects}</a>
            <a href="#contact" className={active === "contact" ? "is-active" : ""}>{t.navContact}</a>
          </nav>
          <details className="theme-picker" ref={pickerRef}>
            <summary aria-label={`${labels.change}. ${colors[theme]}`}>
              <span className="theme-light" aria-hidden="true" />
              {labels.trigger}: <strong>{colors[theme]}</strong>
            </summary>
            <div className="theme-menu" role="group" aria-label={labels.change}>
              {themes.map((value) => (
                <button key={value} type="button" aria-pressed={theme === value} onClick={() => { setTheme(value); pickerRef.current.open = false; }}>
                  <span>{colors[value]}</span>{theme === value && <small>{labels.active}</small>}
                </button>
              ))}
            </div>
          </details>
          <button type="button" onClick={toggleLanguage} aria-label={t.switchLanguage} title={t.switchLanguage} className="language-switch">{language.toUpperCase()}</button>
        </div>
      </div>
    </header>
  );
}
