import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Staff Engineer",
    company: "Nagarro",
    period: "Oct 2023 - Present",
    description: "Architecting and deploying enterprise-grade Platform Engineering solutions using Backstage on Azure Kubernetes Service (AKS). Implementing CI/CD pipelines and designing secure cloud architectures for global clients."
  },
  {
    role: "Independent Consultant / Freelancer",
    company: "Upwork",
    period: "Ongoing",
    description: "Delivering high-quality freelance consulting in Cloud Architecture, DevOps, and Platform Engineering. Helping international startup and enterprise clients design scalable cloud solutions, automate CI/CD pipelines, and build robust developer platforms."
  },
  {
    role: "Senior Software Engineer",
    company: "Optum (UHG)",
    period: "Dec 2021 - Oct 2023",
    description: "Developed an enterprise-scale claim identification system processing 200K+ daily records. Migrated legacy systems to Azure serverless architectures, improving performance by 75%."
  },
  {
    role: "Software Developer",
    company: "Amdocs",
    period: "Apr 2020 - Dec 2021",
    description: "Architected a unified dashboard platform integrating 30+ applications. Led on-premise to Azure cloud migrations and built cloud security assessment tools."
  },
  {
    role: "Associate",
    company: "EdgeVerve",
    period: "Aug 2019 - Apr 2020",
    description: "Developed 20+ RPA processes to automate critical banking and finance workflows using AssistEdge and UiPath."
  },
  {
    role: "Senior Systems Engineer",
    company: "Infosys",
    period: "Nov 2016 - Aug 2019",
    description: "Implemented RPA solutions and developed full-stack enterprise web applications using .NET, Angular, and SQL."
  }
];

const Experience = () => {
  return (
    <section id="experience" style={{ padding: '6rem 0' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>Professional Journey</h2>
        
        <div style={{ position: 'relative' }}>
          {/* Vertical Timeline Line */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'var(--border-color)',
            zIndex: 1
          }} />

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                position: 'relative',
                paddingLeft: '60px',
                marginBottom: '3rem',
                zIndex: 2
              }}
            >
              {/* Timeline Dot */}
              <div style={{
                position: 'absolute',
                left: '11px',
                top: '5px',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: 'var(--bg-primary)',
                border: '4px solid var(--accent-primary)',
                zIndex: 2
              }} />
              
              <div className="glass-panel" style={{ padding: '2rem', borderRadius: '16px' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                  {exp.role}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem', fontSize: '0.95rem' }}>
                  <span style={{ color: 'var(--accent-secondary)', fontWeight: '600' }}>{exp.company}</span>
                  <span style={{ color: 'var(--text-muted)' }}>|</span>
                  <span style={{ color: 'var(--text-secondary)' }}>{exp.period}</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
