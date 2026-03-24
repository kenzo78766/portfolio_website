import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const GithubStats = () => {
  const username = 'kenzo78766';

  return (
    <section id="github" className="py-32 relative z-10 overflow-hidden">
      {/* Huge Faded Background Text */}
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-full text-center z-0 pointer-events-none">
        <h2 className="text-[14vw] font-black faded-bg-text mix-blend-overlay">
          GITHUB
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 flex flex-col items-center gap-3"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-dark-600/80 border border-white/10 mb-2">
            <Github className="text-white" size={22} />
            <span className="text-xs font-mono text-gray-300 uppercase tracking-[0.2em]">
              Live GitHub Overview
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 neon-text">GitHub Activity & Stats</h2>
          <p className="text-gray-400 max-w-2xl text-sm md:text-base">
            Auto-updating cards fetched directly from GitHub stats services, showing your contribution
            graph, overall statistics, and most used languages.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Streak / Contribution card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="glass-card-premium p-4 flex items-center justify-center"
          >
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true&background=00000000`}
              alt="GitHub contribution streak"
              className="w-full h-full object-contain rounded-md"
              loading="lazy"
            />
          </motion.div>

          {/* Main stats card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card-premium p-4 flex items-center justify-center"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000`}
              alt="GitHub stats"
              className="w-full h-full object-contain rounded-md"
              loading="lazy"
            />
          </motion.div>

          {/* Top languages card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card-premium p-4 flex items-center justify-center"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000`}
              alt="Top languages"
              className="w-full h-full object-contain rounded-md"
              loading="lazy"
            />
          </motion.div>
        </div>

        <div className="mt-10 text-center">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-sm font-medium text-gray-200 hover:bg-white/5 hover:border-white/30 transition-colors"
          >
            <Github size={18} />
            <span>View full GitHub profile</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GithubStats;
