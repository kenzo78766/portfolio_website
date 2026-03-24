import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Trophy, Star, Activity, X } from 'lucide-react';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';

const Competitive = () => {
  const platforms = [
    {
      id: 'leetcode',
      name: 'LeetCode',
      icon: <SiLeetcode className="text-[#FFA116] w-12 h-12" />,
      stats: {
        rating: 'NA',
        solvedFallback: '150+',
      },
      profileUrl: 'https://leetcode.com/u/kenzo_lk6/',
      description: 'Primary platform for practicing DSA with contests and daily challenges.',
    },
    {
      id: 'hackerrank',
      name: 'HackerRank',
      icon: <SiHackerrank className="text-[#00EA64] w-12 h-12" />,
      stats: {
        rating: '5 Star',
        solvedFallback: '100+',
      },
      profileUrl: 'https://www.hackerrank.com/profile/anshuman_singh74',
      description: 'Focused on problem solving, data structures, and language-specific badges.',
      languages: ['C++', 'Java', 'Python'],
      topics: ['Problem Solving', 'Data Structures', 'Algorithms'],
    },
    {
      id: 'gfg',
      name: 'GeeksforGeeks',
      icon: <ExternalLink className="text-[#2F8D46] w-12 h-12" />, // Placeholder icon
      stats: {
        rating: 'Score: 1200',
        solvedFallback: '100+',
      },
      profileUrl: 'https://www.geeksforgeeks.org/profile/anshumanydci',
      description: 'Used for in-depth topic-wise DSA questions and contests.',
      languages: ['C++', 'JavaScript'],
      topics: ['Arrays', 'Trees', 'Dynamic Programming', 'Graphs'],
    },
  ];

  const [leetcodeStats, setLeetcodeStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  useEffect(() => {
    const fetchLeetcode = async () => {
      try {
        setLoading(true);
        setError('');
        const res = await fetch('http://localhost:5000/api/competitive/leetcode/kenzo_lk6');
        if (!res.ok) {
          throw new Error('Failed to fetch LeetCode stats');
        }
        const data = await res.json();
        setLeetcodeStats(data);
      } catch (err) {
        console.error('LeetCode stats fetch error:', err);
        setError('Live LeetCode stats unavailable right now. Showing fallback values.');
      } finally {
        setLoading(false);
      }
    };

    fetchLeetcode();
  }, []);

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
          {platforms.map((platform, idx) => {
            const isLeetcode = platform.id === 'leetcode';
            const solvedDisplay = isLeetcode && leetcodeStats
              ? `${leetcodeStats.totalSolved}`
              : platform.stats.solvedFallback;

            return (
              <motion.button
                key={platform.id}
                type="button"
              initial={{ opacity: 0, y: 50, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 100, damping: 10, delay: idx * 0.1 }}
              style={{ transformPerspective: 1000 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="glass-card-premium p-8 relative overflow-hidden group block text-left"
                onClick={() => setSelectedPlatform(platform)}
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
                    <span className="text-blue-400 font-bold">{isLeetcode && loading ? 'Loading…' : solvedDisplay}</span>
                  </div>
                </div>
              </div>
            </motion.button>
            );
          })}
        </div>

        {error && (
          <p className="mt-6 text-sm text-center text-amber-400 max-w-xl mx-auto">
            {error}
          </p>
        )}
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedPlatform && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPlatform(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 120, damping: 14 }}
              className="glass-card-premium max-w-xl w-full p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedPlatform(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-4 mb-4">
                {selectedPlatform.icon}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{selectedPlatform.name}</h3>
                  <p className="text-gray-400 text-sm">
                    {selectedPlatform.description || 'Competitive programming platform stats and activity overview.'}
                  </p>
                </div>
              </div>

              {selectedPlatform.id === 'leetcode' && leetcodeStats && (
                <div className="space-y-4 mt-4">
                  <div className="grid grid-cols-4 gap-3 text-center">
                    <div className="p-3 rounded-lg bg-white/5">
                      <p className="text-xs text-gray-400 mb-1">Total Solved</p>
                      <p className="text-lg font-bold text-emerald-400">{leetcodeStats.totalSolved}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5">
                      <p className="text-xs text-gray-400 mb-1">Easy</p>
                      <p className="text-lg font-bold text-green-400">{leetcodeStats.difficultyBreakdown.easy}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5">
                      <p className="text-xs text-gray-400 mb-1">Medium</p>
                      <p className="text-lg font-bold text-yellow-400">{leetcodeStats.difficultyBreakdown.medium}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5">
                      <p className="text-xs text-gray-400 mb-1">Hard</p>
                      <p className="text-lg font-bold text-red-400">{leetcodeStats.difficultyBreakdown.hard}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Most Used Languages</p>
                    <div className="flex flex-wrap gap-2">
                      {leetcodeStats.topLanguages.map((lang) => (
                        <span
                          key={lang.language}
                          className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-mono border border-emerald-500/40"
                        >
                          {lang.language} 
                          <span className="text-gray-400 ml-1">({lang.solved})</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Top DSA Topics</p>
                    <div className="flex flex-wrap gap-2">
                      {leetcodeStats.topTopics.map((topic) => (
                        <span
                          key={topic.tag}
                          className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs border border-blue-500/40"
                        >
                          {topic.tag}
                          <span className="text-gray-400 ml-1">({topic.solved})</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {selectedPlatform.id !== 'leetcode' && (
                <div className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="p-3 rounded-lg bg-white/5">
                      <p className="text-xs text-gray-400 mb-1">Rating / Score</p>
                      <p className="text-lg font-bold text-emerald-400">{selectedPlatform.stats.rating}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5">
                      <p className="text-xs text-gray-400 mb-1">Solved (approx.)</p>
                      <p className="text-lg font-bold text-blue-400">{selectedPlatform.stats.solvedFallback}</p>
                    </div>
                  </div>

                  {selectedPlatform.languages && (
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Languages Used</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedPlatform.languages.map((lang) => (
                          <span
                            key={lang}
                            className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-mono border border-emerald-500/40"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedPlatform.topics && (
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Focus Topics</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedPlatform.topics.map((topic) => (
                          <span
                            key={topic}
                            className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs border border-blue-500/40"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="mt-6 flex justify-end">
                <a
                  href={selectedPlatform.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 text-sm font-medium text-white shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/60 transition-shadow"
                >
                  <ExternalLink size={16} />
                  <span>Open {selectedPlatform.name} profile</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Competitive;
