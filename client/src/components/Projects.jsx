import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'BlogHub – Blogging Platform',
      duration: 'Jun 2025 - Sep 2025',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
      description: 'A full-stack blogging platform with JWT-based authentication supporting blogs, drafts, tags, comments, likes, and robust search functionality.',
      linkLive: 'https://cantileverintern-bloghub-frontend.onrender.com/',
      linkGithub: 'https://github.com/kenzo78766/CantileverIntern_BlogHub-Website',
      features: [
        'Designed scalable REST APIs using Express and MongoDB.',
        'Implemented role-based access control with secure JWT.',
        'Responsive UI built with Tailwind CSS.'
      ]
    },
    {
      title: 'TaskFlow – Full-Stack Task Management System',
      duration: 'Nov 2024 - Jan 2025',
      tech: ['React 18', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'Flask', 'SQLAlchemy', 'SQLite', 'JWT', 'Bcrypt'],
      description: 'A secure task management system with authentication, enabling complete CRUD operations with advanced filtering and sorting mechanisms.',
      linkLive: 'https://cantileverintern-taskmanagement-frontend.onrender.com/',
      linkGithub: 'https://github.com/kenzo78766/CantileverIntern_TaskManagement-Website',
      features: [
        'Built secure authentication flow using JWT + Bcrypt.',
        'Developed a reactive dashboard using React 18 and Vite.',
        'Integrated API endpoints via Flask & SQLAlchemy ORM for efficient state synchronization.'
      ]
    }
  ];

  return (
    <section id="projects" className="py-32 bg-dark-600 relative z-10 overflow-hidden">
      {/* Huge Faded Background Text */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-full text-center z-0 pointer-events-none">
        <h2 className="text-[18vw] font-black text-white/5 whitespace-nowrap select-none tracking-tighter mix-blend-overlay">
          WORK
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 100, damping: 10, delay: idx * 0.1 }}
              style={{ transformPerspective: 1000 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="glass-card-premium flex flex-col overflow-hidden group"
            >
              <div className="p-8 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-emerald-400 transition-all text-shadow">
                    {project.title}
                  </h3>
                  <div className="flex space-x-3 text-gray-400">
                    <motion.a whileHover={{ scale: 1.2, color: "#60a5fa" }} href={project.linkGithub} target="_blank" rel="noopener noreferrer" className="transition-colors" aria-label="GitHub Repository">
                      <Github size={22} />
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.2, color: "#34d399" }} href={project.linkLive} target="_blank" rel="noopener noreferrer" className="transition-colors" aria-label="Live Demo">
                      <ExternalLink size={22} />
                    </motion.a>
                  </div>
                </div>
                <p className="text-sm text-blue-500 font-medium mb-4">{project.duration}</p>
                <p className="text-gray-300 font-light mb-6">
                  {project.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, fIdx) => (
                    <li key={fIdx} className="text-sm text-gray-400 flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">▹</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-8 py-4 bg-dark-600/50 border-t border-gray-700/50 flex flex-wrap gap-2">
                {project.tech.map((t, tIdx) => (
                  <span key={tIdx} className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">
                    {t}
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
