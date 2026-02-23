import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      paddingTop: '80px'
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '4rem'
      }}>
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ flex: '1 1 500px' }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ 
              display: 'inline-block',
              padding: '0.4rem 1rem', 
              background: 'rgba(255, 77, 77, 0.1)', 
              color: 'var(--accent-primary)',
              borderRadius: '20px',
              fontWeight: '600',
              marginBottom: '1.5rem',
              border: '1px solid rgba(255,77,77,0.2)'
            }}
          >
            👋 Cloud Architect & Platform Engineer
          </motion.div>
          
          <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1rem', lineHeight: '1.1' }}>
            Hi, I'm <span className="gradient-text">Vipin Dabas</span>.
          </h1>
          
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px' }}>
            I specialize in building robust developer platforms and scalable cloud solutions, focusing on <strong style={{color: 'var(--text-primary)'}}>Azure, Kubernetes, Backstage,</strong> and <strong style={{color: 'var(--text-primary)'}}>React</strong>. 
            Currently designing enterprise-grade platform engineering solutions at <strong>Nagarro</strong>.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Let's Connect</a>
          </div>
        </motion.div>

        {/* Avatar / Images */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center', position: 'relative' }}
        >
          {/* Decorative background blob */}
          <div style={{
            position: 'absolute',
            width: '350px',
            height: '350px',
            background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-tertiary) 100%)',
            filter: 'blur(80px)',
            opacity: 0.3,
            borderRadius: '50%',
            zIndex: -1,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }} />
          
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
              width: '320px',
              height: '320px',
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              overflow: 'hidden',
              border: '4px solid var(--border-color)',
              background: 'var(--glass-bg)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
            }}
          >
            {/* Using a clear, high-quality transparent Naruto image from a reliable source */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/en/9/9a/NarutoUzumaki.png" 
              alt="Naruto Avatar"
              style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '10px' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
