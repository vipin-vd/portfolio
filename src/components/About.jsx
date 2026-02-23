import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" style={{ padding: '6rem 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ textAlign: 'center' }}>About Me</h2>
          <div className="glass-panel" style={{ 
            padding: '4rem', 
            borderRadius: '24px',
            marginTop: '3rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
              I am a results-driven Cloud Architect and Platform Engineer with over <strong>9+ years of experience</strong> designing and implementing scalable cloud solutions on Azure. I have proven expertise in Platform Engineering, DevOps automation, and full-stack development.
            </p>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
              My technical playground extends to building developer platforms using <strong>Backstage</strong>, architecting multi-tenant systems, and optimizing cloud infrastructure for performance and cost efficiency. I possess a strong track record of leading RFPs, client engagements, and delivering mission-critical applications for Fortune 500 companies across diverse industries.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="glass-panel" 
                style={{ padding: '2rem', textAlign: 'center', borderColor: 'var(--accent-primary)' }}
              >
                <h3 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>9+</h3>
                <p style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Years Experience</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="glass-panel" 
                style={{ padding: '2rem', textAlign: 'center', borderColor: 'var(--accent-secondary)' }}
              >
                <h3 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>30+</h3>
                <p style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Projects Delivered</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="glass-panel" 
                style={{ padding: '2rem', textAlign: 'center', borderColor: 'var(--accent-tertiary)' }}
              >
                <h3 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>100%</h3>
                <p style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Platform Focus</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
