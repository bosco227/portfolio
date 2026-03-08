export default function Layout({ children }) {
  return (
    <div className="bg-slate-900 text-white min-h-screen scroll-smooth">
      {/* background decorativo */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950"></div>

      {/* container principal */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* espaçamento vertical automático */}
        <div className="flex flex-col gap-24 py-16">{children}</div>
      </div>
    </div>
  );
}
