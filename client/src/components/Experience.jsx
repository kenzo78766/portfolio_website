import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Orbosis Global Pvt. Ltd.',
      role: 'Web & App Development Trainee',
      location: 'Remote',
      duration: 'Oct 2025 - Present',
      technologies: ['WordPress', 'MERN Stack', 'Firebase', 'React Native', 'Flutter', 'Android Studio', 'REST APIs'],
      bulletPoints: [
        'Rebuilt production-grade websites using WordPress and MERN Stack, significantly improving responsiveness, layout consistency, and cross-device compatibility.',
        'Converted 2 web platforms into Android applications using Firebase backend services.',
        'Reduced manual deployment steps and improved backend connectivity.'
      ]
    },
    {
      company: 'LPU Skill Development',
      role: 'Software Development Trainee',
      location: 'Remote',
      duration: 'Jun 2025 - Jul 2025',
      technologies: ['C++', 'STL (Vectors, Maps)', 'OOP', 'React', 'Node.js'],
      bulletPoints: [
        'Built a full-stack Library Management System using a C++ STL backend and React UI, supporting both student and admin roles.',
        'Implemented core operations including issue, return, and search capabilities.',
        'Applied DSA-based search and indexing logic, drastically improving lookup efficiency and overall system performance.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-32 relative z-10 overflow-hidden">
      {/* Huge Faded Background Text */}
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-full text-center z-0 pointer-events-none">
        <h2 className="text-[15vw] font-black text-white/5 whitespace-nowrap select-none tracking-tighter mix-blend-overlay">
          EXPERIENCE
        </h2>
      </div>

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none z-0" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 neon-text">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500/20 before:via-blue-500/50 before:to-transparent">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 50, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 100, damping: 10, delay: idx * 0.1 }}
              style={{ transformPerspective: 1000 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-dark-600 bg-blue-500 shadow flex-shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shrink-0 z-10">
                <Briefcase size={16} className="text-white" />
              </div>
              <motion.div 
                whileHover={{ scale: 1.02, x: exp.role === 'Web & App Development Trainee' ? 10 : -10 }}
                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card-premium p-8"
              >
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 drop-shadow">{exp.role}</h3>
                  <div className="flex flex-wrap items-center text-sm font-medium text-gray-300 mt-1">
                    <span className="mr-3">{exp.company}</span>
                    <span className="text-gray-500 mr-2">•</span>
                    <span className="text-gray-400">{exp.location}</span>
                  </div>
                  <span className="inline-block mt-2 text-sm text-gray-500">{exp.duration}</span>
                </div>
                
                <ul className="mt-4 space-y-3">
                  {exp.bulletPoints.map((pt, pIdx) => (
                    <li key={pIdx} className="text-gray-300 text-sm font-light flex items-start">
                      <span className="text-emerald-400 mr-2 mt-1 font-bold">»</span>
                      {pt}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded bg-dark-600/80 text-gray-300 text-xs font-mono border border-gray-700/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
