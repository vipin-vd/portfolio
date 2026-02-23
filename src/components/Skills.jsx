import { motion } from 'framer-motion';
import { SiRust, SiGo, SiDotnet, SiReact, SiWebassembly, SiDocker, SiKubernetes } from 'react-icons/si';
import { VscTerminalLinux, VscAzure } from "react-icons/vsc";
import { FaBoxes } from "react-icons/fa"; // Backstage representation

const skills = [
  { name: 'Backstage', icon: <FaBoxes />, color: '#9cf' },
  { name: 'Azure Cloud', icon: <VscAzure />, color: '#0089D6' },
  { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5' },
  { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
  { name: '.Net', icon: <SiDotnet />, color: '#512BD4' },
  { name: 'React', icon: <SiReact />, color: '#61DAFB' },
  { name: 'Rust', icon: <SiRust />, color: '#DEA584' },
  { name: 'Go', icon: <SiGo />, color: '#00ADD8' },
  { name: 'WebAssembly', icon: <SiWebassembly />, color: '#654FF0' },
  { name: 'Platform Eng.', icon: <VscTerminalLinux />, color: '#fff' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const Skills = () => {
  return (
    <section id="skills" style={{ padding: '4rem 0' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>My Arsenal</h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', 
            gap: '2rem' 
          }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -5, 5, 0], 
                transition: { duration: 0.3 } 
              }}
              className="glass-panel"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem 1.5rem',
                gap: '1rem',
                cursor: 'pointer',
                borderBottom: `3px solid ${skill.color}`
              }}
            >
              <div style={{ fontSize: '3rem', color: skill.color, filter: `drop-shadow(0 0 10px ${skill.color}50)` }}>
                {skill.icon}
              </div>
              <span style={{ fontWeight: '600', color: 'var(--text-primary)', textAlign: 'center' }}>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
