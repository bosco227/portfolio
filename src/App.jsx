import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Layout from "./layout/layout";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
}
