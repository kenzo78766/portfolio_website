import { motion } from 'framer-motion';
import { 
  SiJavascript, SiTypescript, SiPython, SiCplusplus, 
  SiReact, SiExpress, SiNodedotjs, SiTailwindcss, SiBootstrap, SiWordpress, SiFirebase,
  SiMongodb, SiMysql, SiGithub, SiPostman, SiVite, SiDocker, SiFigma, SiAndroidstudio, SiNetlify
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { FaAws } from 'react-icons/fa';

const Skills = () => {
  const categories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
        { name: 'C++', icon: <SiCplusplus className="text-blue-600" /> },
        { name: 'Python', icon: <SiPython className="text-blue-400" /> },
        { name: 'SQL', icon: <SiMysql className="text-blue-300" /> },
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React', icon: <SiReact className="text-cyan-400" /> },
        { name: 'Express.js', icon: <SiExpress className="text-gray-300" /> },
        { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-500" /> },
        { name: 'WordPress', icon: <SiWordpress className="text-blue-400" /> },
        { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
        { name: 'React Native', icon: <SiReact className="text-cyan-400" /> },
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
        { name: 'MySQL', icon: <SiMysql className="text-blue-400" /> },
        { name: 'Git/GitHub', icon: <SiGithub className="text-white" /> },
        { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
        { name: 'Vite', icon: <SiVite className="text-purple-400" /> },
        { name: 'AWS', icon: <FaAws className="text-orange-400" /> },
        { name: 'Docker', icon: <SiDocker className="text-blue-500" /> },
        { name: 'Figma', icon: <SiFigma className="text-pink-400" /> },
        { name: 'Android Studio', icon: <SiAndroidstudio className="text-green-400" /> },
        { name: 'Netlify', icon: <SiNetlify className="text-teal-400" /> },
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Problem Solving', icon: null },
        { name: 'Teamwork', icon: null },
        { name: 'Adaptability', icon: null },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10 } }
  };

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Huge Faded Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none">
        <h2 className="text-[20vw] font-black text-white/5 whitespace-nowrap select-none tracking-tighter mix-blend-overlay">
          SKILLS
        </h2>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
         >
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 neon-text">Skills & Technologies</h2>
           <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 mx-auto rounded-full" />
         </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, idx) => (
            <motion.div
               key={idx}
               initial={{ opacity: 0, y: 50, rotateX: 20 }}
               whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
               viewport={{ once: true, amount: 0.2 }}
               transition={{ type: "spring", stiffness: 100, damping: 10, delay: idx * 0.1 }}
               style={{ transformPerspective: 1000 }}
               className="glass-card-premium p-8 group relative overflow-hidden transition-transform duration-500"
             >
               <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl opacity-0 group-hover:opacity-10 blur transition duration-500"></div>
               
               <h3 className="text-xl font-bold text-white neon-text mb-6 border-b border-gray-700 pb-2 relative z-10">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-4 relative z-10">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-dark-600/80 border border-gray-700/50 text-gray-300 hover:text-white hover:border-blue-500/50 hover:bg-dark-500 transition-all shadow-sm cursor-default"
                  >
                    {skill.icon && <span className="text-xl">{skill.icon}</span>}
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
