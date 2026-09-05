import Header from "../components/Header";

export default function Layout({ children }) {
  return (
    <div className="site-shell">
      <div className="signal-line" aria-hidden="true" />
      <Header />
      <main className="page-main">{children}</main>
    </div>
  );
}
