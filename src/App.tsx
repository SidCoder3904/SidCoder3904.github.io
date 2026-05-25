import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Research from './components/sections/Research';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Achievements from './components/sections/Achievements';
import Leadership from './components/sections/Leadership';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <div className="relative noise-overlay">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Research />
        <Projects />
        <Skills />
        <Achievements />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
