import { motion } from 'framer-motion';
import { FiMail, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '6rem 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel"
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '5rem 3rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Background decoration */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: 'radial-gradient(circle, rgba(255,77,77,0.1) 0%, transparent 60%)',
            pointerEvents: 'none',
            zIndex: 0
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem' }}>Let's Collaborate</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
              Whether you want to discuss platform engineering, rust, or just say hi, my inbox is always open. I'm currently looking to collaborate on platform engineering projects!
            </p>

            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:dabasvipin6@gmail.com" 
                className="btn btn-primary"
                style={{ fontSize: '1.2rem', padding: '1rem 2.5rem', display: 'flex', gap: '0.8rem' }}
              >
                <FiMail size={24} /> Email Me
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/vipindabas01/" 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-outline"
                style={{ fontSize: '1.2rem', padding: '1rem 2.5rem', display: 'flex', gap: '0.8rem', background: 'rgba(255,255,255,0.05)' }}
              >
                <FiLinkedin size={24} color="#0077b5" /> LinkedIn
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
