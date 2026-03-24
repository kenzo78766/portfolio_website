import { motion } from 'framer-motion';
import { BookOpen, Award, GraduationCap } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: 20 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", stiffness: 100, damping: 10 } }
  };

  const education = [
    {
      school: 'Lovely Professional University',
      degree: 'Bachelor of Technology - Computer Science and Eng.',
      duration: 'Aug 2023 - Present',
      details: 'CGPA: 7.71',
      location: 'Phagwara, Punjab'
    },
    {
      school: 'Geeta International Public School',
      degree: 'Intermediate (XII)',
      duration: 'Apr 2020 - Mar 2021',
      details: 'Score: 90.8%',
      location: 'Gorakhpur, Uttar Pradesh'
    },
    {
      school: 'St. Thereses High School',
      degree: 'Matriculation (X)',
      duration: 'Apr 2018 - Mar 2019',
      details: 'Score: 84.4%',
      location: 'Gorakhpur, Uttar Pradesh'
    }
  ];

  return (
    <section id="about" className="py-32 bg-dark-600 relative z-10 overflow-hidden">
      {/* Huge Faded Background Text */}
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-full text-center z-0 pointer-events-none">
        <h2 className="text-[18vw] font-black text-white/5 whitespace-nowrap select-none tracking-tighter mix-blend-overlay">
          ABOUT ME
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
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 neon-text">About Me</h2>
           <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 mx-auto rounded-full" />
         </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            style={{ transformPerspective: 1000 }}
            className="space-y-6 text-gray-300 leading-relaxed text-lg font-light glass-card-premium p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-emerald-500/5 to-fuchsia-500/10 shadow-[0_0_35px_rgba(59,130,246,0.25)]"
          >
            <motion.p variants={itemVariants}>
              I am an enthusiastic and dedicated{' '}
              <span className="text-emerald-300 font-semibold">Cloud Computing student</span>{' '}
              and software developer. I enjoy building scalable systems and intuitive, modern interfaces using the{' '}
              <span className="text-teal-300 font-semibold">MERN stack</span>{' '}
              and cloud-native tools.
            </motion.p>
            <motion.p variants={itemVariants}>
              During my academic journey and projects, I&apos;ve developed a strong habit of breaking down complex problems, picking up new technologies quickly, and collaborating with teams to ship things that actually work in the real world.
            </motion.p>
            <motion.p variants={itemVariants}>
              My goal is to keep growing as a cloud-focused engineer, applying my knowledge of DSA, web technologies, and cloud platforms to bring impactful digital products to life.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 mt-8">
              <div className="glass-card-premium p-4 flex flex-col items-center justify-center text-center">
                <BookOpen className="text-blue-400 mb-2" size={28} />
                <span className="font-semibold text-white">Continuous Learner</span>
              </div>
              <div className="glass-card-premium p-4 flex flex-col items-center justify-center text-center">
                <Award className="text-emerald-400 mb-2" size={28} />
                <span className="font-semibold text-white">Problem Solver</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Education Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            style={{ transformPerspective: 1000 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <GraduationCap className="mr-3 text-blue-500" />
              Education
            </h3>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-600 before:to-transparent">
              {education.map((edu, idx) => (
                <motion.div key={idx} variants={itemVariants} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-dark-500 flex-shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow shrink-0">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card-premium p-6 rounded-xl transition-colors">
                    <div className="flex flex-col mb-1">
                      <span className="text-sm text-blue-400 font-medium">{edu.duration}</span>
                      <h4 className="text-lg font-bold text-white">{edu.school}</h4>
                    </div>
                    <p className="text-gray-300 font-medium">{edu.degree}</p>
                    <div className="mt-2 text-sm text-gray-400 flex justify-between">
                      <span>{edu.details}</span>
                      <span className="italic">{edu.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
