import { Children } from "react";
import Header from "../components/Header";

export default function Layout({ children }) {
  const items = Children.toArray(children);

  return (
    <div className="site-shell min-h-screen text-slate-100 relative">
      <div className="cyber-grid" aria-hidden="true" />
      <div className="scan-line" aria-hidden="true" />
      <Header />

      <div className="relative overflow-hidden">
        <div className="ambient-glow ambient-glow-one" aria-hidden="true" />
        <div className="ambient-glow ambient-glow-two" aria-hidden="true" />

        <main className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <div className="flex flex-col">
            {items.map((child, index) => (
              <div key={index}>
                {child}
                {index !== items.length - 1 && (
                  <div className="circuit-divider" aria-hidden="true">
                    <span />
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
