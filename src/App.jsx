import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import About from "./components/About";
import Layout from "./layout/layout";

export default function App() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Tech />
        <Projects />
      </Layout>
    </>
  );
}
