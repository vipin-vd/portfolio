import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        position: 'fixed',
        top: 20,
        left: '50%',
        width: '90%',
        maxWidth: '800px',
        zIndex: 100,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.8rem clamp(1rem, 3vw, 2rem)',
      }}
      className="glass-panel"
    >
      <div style={{ fontWeight: '800', fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', letterSpacing: '1px' }}>
        <span style={{ color: 'var(--text-primary)' }}>Vipin</span>
        <span style={{ color: 'var(--accent-primary)' }}>.</span>
      </div>
      <div style={{ display: 'flex', gap: 'clamp(0.8rem, 2.5vw, 2rem)' }}>
        <a href="#about" style={{ fontWeight: '600', fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>About</a>
        <a href="#projects" style={{ fontWeight: '600', fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>Projects</a>
        <a href="#contact" style={{ fontWeight: '600', fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>Contact</a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
