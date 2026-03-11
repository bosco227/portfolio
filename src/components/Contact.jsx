export default function Footer() {
  return (
    <footer className="mt-32 border-t border-slate-800 py-10">
      <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
        <h3 className="text-white font-semibold text-lg">Antônio Bosco</h3>

        <div className="flex justify-center gap-6 mt-4 text-sm">
          <a
            href="https://github.com/bosco227"
            target="_blank"
            className="hover:text-sky-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/antonio-bosco-720721362/"
            target="_blank"
            className="hover:text-sky-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:antoniobosco2612@gmail.com"
            className="hover:text-sky-400 transition"
          >
            Email
          </a>
        </div>

        <p className="text-xs mt-6 text-gray-500">
          © {new Date().getFullYear()} Antônio Bosco
        </p>
      </div>
    </footer>
  );
}
