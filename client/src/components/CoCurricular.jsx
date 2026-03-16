import { motion } from 'framer-motion';
import { Award, Users, ShieldCheck } from 'lucide-react';

const CoCurricular = () => {
  const items = [
    {
      title: 'Data Structures & Algorithms Training',
      organization: 'LPU Skill Development',
      date: 'Jul 2025',
      icon: <Award className="text-emerald-400" size={32} />
    },
    {
      title: 'Full Stack Web Development Training',
      organization: 'Apna College',
      date: 'Jan 2025',
      icon: <Award className="text-emerald-400" size={32} />
    },
    {
      title: 'Ethical Hacking Training',
      organization: 'Rising Tech Pro',
      date: 'Mar 2024',
      icon: <ShieldCheck className="text-blue-400" size={32} />
    },
    {
      title: 'Community Development Project',
      organization: 'Vivekanand Yuva Kalyan Kendra',
      date: 'Jul 2024 - Aug 2024',
      description: 'Led a month-long community project supporting underprivileged children and driving local cleanliness and tree-planting activities.',
      icon: <Users className="text-purple-400" size={32} />
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-dark-600 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Certifications & Co-curricular</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card p-6 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 group hover:-translate-y-1 transition-transform"
            >
              <div className="p-4 bg-dark-600 rounded-2xl flex-shrink-0 shadow-inner group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-blue-400 text-sm font-medium mb-1">{item.organization}</p>
                <div className="text-gray-500 text-xs tracking-wider uppercase font-semibold mb-3">{item.date}</div>
                {item.description && (
                  <p className="text-gray-400 text-sm font-light mt-2 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoCurricular;
