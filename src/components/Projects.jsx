import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projectData = [
  {
    title: 'SplitLocal',
    description: 'An expense manager which runs purely locally. Designed for blazing speed, offline capability, and ensuring complete data privacy.',
    tags: ['Flutter', 'Dart', 'Hive', 'Riverpod'],
    github: 'https://github.com/vipin-vd/SplitLocal',
    featured: true
  },
  {
    title: 'Backstage Customized',
    description: 'A customized, ready-to-use version of Spotify\'s Backstage. Pre-configured with essential plugins to bootstrap your developer portal instantly.',
    tags: ['Backstage', 'React', 'Node.js', 'TypeScript'],
    github: 'https://github.com/vipin-vd/backstage',
    featured: true
  },
  {
    title: 'Logo Creator AI',
    description: 'Build logos and icons seamlessly powered by AI. Generate SVG/PNG assets on the fly with a modern layout.',
    tags: ['React', 'Next.js', 'AI', 'Canvas'],
    github: 'https://github.com/vipin-vd/logo-creator',
    featured: true
  }
];

const Projects = () => {
  return (
    <section id="projects" style={{ padding: '6rem 0' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>Featured Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {projectData.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-panel"
              style={{
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Highlight bar */}
              <div style={{ position: 'absolute', top: 0, left: 0, height: '4px', width: '100%', background: 'var(--accent-primary)' }} />
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>{project.title}</h3>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href={project.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
                    <FiGithub size={22} />
                  </a>
                </div>
              </div>
              
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', flexGrow: 1 }}>{project.description}</p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} style={{ 
                    fontSize: '0.85rem', 
                    color: 'var(--accent-tertiary)', 
                    fontFamily: 'var(--font-mono)',
                    background: 'rgba(255, 194, 89, 0.1)',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '12px'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
