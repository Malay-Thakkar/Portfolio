import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Resume from '../components/Resume';
import Footer from '../components/Footer';
import PageSEO from '../components/PageSEO';

export default function Home({ darkMode, toggleDarkMode }) {
  return (
    <div style={{ background: 'var(--color-bg-primary)', minHeight: '100vh' }}>
      <PageSEO />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <Stats />
        <Skills />
        <Timeline />
        <Projects />
        <Certifications />
        <Contact />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}
