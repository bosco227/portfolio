import { Children } from "react";
import Header from "../components/Header";

export default function Layout({ children }) {
  const items = Children.toArray(children);

  return (
    <div className="bg-slate-900 text-white min-h-screen relative">
      {/* Header */}
      <Header />

      {/* Container com overflow */}
      <div className="relative overflow-hidden">
        {/* Glows animados */}
        <div className="absolute top-40 left-1/3 w-[450px] h-[450px] bg-sky-500/20 blur-[140px] rounded-full -z-10 glow-animation"></div>

        <div className="absolute bottom-40 right-1/3 w-[450px] h-[450px] bg-purple-500/20 blur-[140px] rounded-full -z-10 glow-animation"></div>

        {/* Conteúdo */}
        <main className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <div className="flex flex-col gap-24">
            {items.map((child, index) => (
              <div key={index}>
                {child}

                {index !== items.length - 1 && (
                  <div className="mt-24 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
