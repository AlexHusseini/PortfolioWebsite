import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="wrap">
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
