import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Spotlight from "./components/Spotlight";

const SECTIONS = ["contact", "skills", "projects", "experience", "about"];

export default function App() {
  const [active, setActive] = useState("");

  const go = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          return;
        }
      }
      setActive("");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Spotlight>
      <Nav active={active} go={go} />
      <Hero go={go} />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </Spotlight>
  );
}
