import { useEffect, useState } from "react";

export default function Header() {
  const [active, setActive] = useState("");

  useEffect(() => {
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

    return () => observer.disconnect();
  }, []);

  const linkStyle = (id) =>
    `relative hover:text-white transition ${
      active === id ? "text-white" : "text-gray-400"
    }`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md ">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-semibold text-lg">Antônio Bosco</h1>

        <nav className="flex gap-6 text-sm">
          <a href="#about" className={linkStyle("about")}>
            About
          </a>

          <a href="#tech" className={linkStyle("tech")}>
            Tech
          </a>

          <a href="#projects" className={linkStyle("projects")}>
            Projects
          </a>

          <a href="#contact" className={linkStyle("contact")}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
