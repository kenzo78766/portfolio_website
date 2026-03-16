import { motion } from 'framer-motion';
import { ExternalLink, Trophy, Star, Activity } from 'lucide-react';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';

const Competitive = () => {
  const platforms = [
    {
      name: 'LeetCode',
      icon: <SiLeetcode className="text-[#FFA116] w-12 h-12" />,
      stats: {
        rating: '1850',
        solved: '150+',
      },
      link: 'https://leetcode.com/u/kenzo_lk6/'
    },
    {
      name: 'HackerRank',
      icon: <SiHackerrank className="text-[#00EA64] w-12 h-12" />,
      stats: {
        rating: '5 Star',
        solved: '100+',
      },
      link: 'https://www.hackerrank.com/profile/anshuman_singh74'
    },
    {
      name: 'GeeksforGeeks',
      icon: <ExternalLink className="text-[#2F8D46] w-12 h-12" />, // Assuming no direct icon, using placeholder
      stats: {
        rating: 'Score: 1200',
        solved: '100+',
      },
      link: 'https://www.geeksforgeeks.org/profile/anshumanydci'
    }
  ];

  return (
    <section id="competitive" className="py-32 relative z-10 overflow-hidden">
      {/* Huge Faded Background Text */}
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-full text-center z-0 pointer-events-none">
        <h2 className="text-[12vw] font-black faded-bg-text mix-blend-overlay">
          COMPETITIVE
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 neon-text">Competitive Programming</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform, idx) => (
            <motion.a
              key={idx}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 100, damping: 10, delay: idx * 0.1 }}
              style={{ transformPerspective: 1000 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="glass-card-premium p-8 relative overflow-hidden group block"
            >
              {/* Background Glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="mb-6 p-4 rounded-full bg-white/5 border border-white/10"
                >
                  {platform.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-emerald-400 transition-all">
                  {platform.name}
                </h3>
                
                <div className="w-full space-y-4">
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-gray-400 flex items-center gap-2"><Star size={16}/> Rating</span>
                    <span className="text-emerald-400 font-bold">{platform.stats.rating}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 flex items-center gap-2"><Activity size={16}/> Solved</span>
                    <span className="text-blue-400 font-bold">{platform.stats.solved}</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competitive;
