import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simple mock loading screen
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return (
      <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#0a0a0f' }}>
        <motion.div
           animate={{ rotate: 360, scale: [1, 1.2, 1] }}
           transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
           style={{ width: 50, height: 50, border: '4px solid #ff4d4d', borderTopColor: 'transparent', borderRadius: '50%' }}
        />
      </div>
    );
  }

  return (
    <div className="app-container">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--text-muted)', fontSize: '0.9rem', position: 'relative', zIndex: 10 }}>
        <p>© {new Date().getFullYear()} Vipin Dabas. Crafted with ❤️ and Vite.</p>
      </footer>
    </div>
  );
}

export default App;
