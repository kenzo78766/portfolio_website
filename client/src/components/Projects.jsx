import { useState } from 'react';
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
    },
    {
      title: 'Rebel Foods – Frontend Clone',
      duration: '2024',
      tech: ['HTML', 'CSS', 'JavaScript'],
      description: 'A responsive frontend clone of the Rebel Foods website focusing on layout, typography, and user interaction patterns.',
      linkLive: 'https://rebelfood-clone-website.onrender.com/',
      linkGithub: 'https://github.com/kenzo78766/RebelFood_Clone_Website',
      features: [
        'Recreated key landing pages with pixel-approximate UI.',
        'Implemented responsive design for mobile and desktop.',
        'Added smooth hover and scroll-based interactions for better UX.'
      ]
    },
    {
      title: 'To‑Do Web App',
      duration: '2024',
      tech: ['HTML', 'CSS', 'JavaScript'],
      description: 'A simple and intuitive to‑do application that lets users add, mark, and remove daily tasks directly in the browser.',
      linkLive: 'https://kenzo78766.github.io/SCT_WD_4/',
      linkGithub: 'https://github.com/kenzo78766/SCT_WD_4',
      features: [
        'Supports add, complete, and delete task operations.',
        'Clean, responsive layout suitable for mobile devices.',
        'Uses browser storage-friendly structure ready for extension.'
      ]
    },
    {
      title: 'Tic‑Tac‑Toe Game Application',
      duration: '2024',
      tech: ['HTML', 'CSS', 'JavaScript'],
      description: 'An interactive browser-based Tic‑Tac‑Toe game with win detection and a user-friendly interface.',
      linkLive: 'https://kenzo78766.github.io/SCT_WD_3/',
      linkGithub: 'https://github.com/kenzo78766/SCT_WD_3',
      features: [
        'Implements full game logic including win and draw detection.',
        'Highlights winning combinations for better user feedback.',
        'Includes reset functionality to quickly start new games.'
      ]
    },
    {
      title: 'Interactive Stopwatch Application',
      duration: '2024',
      tech: ['HTML', 'CSS', 'JavaScript'],
      description: 'A web-based stopwatch with start, pause, and reset controls for accurate time tracking.',
      linkLive: 'https://kenzo78766.github.io/SCT_WD_2/',
      linkGithub: 'https://github.com/kenzo78766/SCT_WD_2',
      features: [
        'Provides precise time tracking with millisecond display.',
        'Includes intuitive start, pause, and reset actions.',
        'Built with a clean, minimal UI for focus on functionality.'
      ]
    },
    {
      title: 'Interactive Navigation Menu',
      duration: '2024',
      tech: ['HTML', 'CSS', 'JavaScript'],
      description: 'A visually appealing navigation menu component with smooth animations and responsive behavior.',
      linkLive: 'https://kenzo78766.github.io/SCT_WD_1/',
      linkGithub: 'https://github.com/kenzo78766/SCT_WD_1',
      features: [
        'Built animated hover effects and active link styles.',
        'Designed to be responsive across screen sizes.',
        'Can be reused and adapted across multiple web projects.'
      ]
    },
    {
      title: 'Library Management System – DSA Project',
      duration: '2025',
      tech: ['C++', 'STL', 'Data Structures & Algorithms'],
      description: 'A console-based library management system implemented in C++ using STL to handle core operations efficiently.',
      linkLive: '',
      linkGithub: 'https://github.com/kenzo78766/Library-System',
      features: [
        'Implemented core operations like issue, return, and search.',
        'Used STL containers and algorithms for efficient data handling.',
        'Designed modular code structure for ease of extension.'
      ]
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false);

  const normalizedSearch = searchTerm.toLowerCase().trim();

  const filteredProjects = projects.filter((project) => {
    if (!normalizedSearch) return true;
    const inTitle = project.title.toLowerCase().includes(normalizedSearch);
    const inTech = project.tech.some((t) => t.toLowerCase().includes(normalizedSearch));
    return inTitle || inTech;
  });

  const visibleProjects = normalizedSearch
    ? filteredProjects
    : showAll
      ? filteredProjects
      : filteredProjects.slice(0, 2);

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

        <div className="max-w-3xl mx-auto mb-10">
          <div className="glass-card-premium rounded-2xl border border-white/10 bg-gradient-to-r from-blue-500/10 via-slate-900/60 to-emerald-500/10 px-5 py-4 shadow-[0_0_30px_rgba(59,130,246,0.25)]">
            <div className="mb-4">
              <div className="w-11/12 mx-auto h-7 rounded-full overflow-hidden border border-white/15 shadow-[0_0_22px_rgba(59,130,246,0.7)] bg-black/50">
                <video
                  src="/projects.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover scale-110"
                />
              </div>
            </div>

            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="e.g. React, MongoDB, C++"
                className="w-full rounded-full bg-black/40 border border-white/10 px-5 py-2.5 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/70 focus:border-emerald-400/70"
              />
            </div>

            {normalizedSearch && (
              <p className="mt-2 text-xs text-gray-400 text-center">
                Showing results for <span className="text-emerald-300 font-medium">“{searchTerm}”</span>
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {visibleProjects.map((project, idx) => (
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

        {filteredProjects.length === 0 && (
          <p className="mt-8 text-center text-gray-400 text-sm">
            No projects match your search. Try a different name or tech.
          </p>
        )}

        {filteredProjects.length > 2 && !normalizedSearch && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center px-6 py-2 rounded-full border border-emerald-400/60 text-emerald-300 text-sm font-medium bg-emerald-500/5 hover:bg-emerald-500/15 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all"
            >
              {showAll ? 'Show fewer projects' : 'Show more projects'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
