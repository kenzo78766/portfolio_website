import { BrowserRouter as Router } from 'react-router-dom';
import BackgroundParticles from './components/BackgroundParticles';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Competitive from './components/Competitive';
import Experience from './components/Experience';
import CoCurricular from './components/CoCurricular';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen selection:bg-blue-500/30">
        <BackgroundParticles />
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Competitive />
          <Experience />
          <CoCurricular />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
