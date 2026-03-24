import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, ShieldCheck, Search } from 'lucide-react';

const CoCurricular = () => {
  const items = [
    {
      title: 'Data Structures & Algorithms Training',
      organization: 'LPU Skill Development',
      date: 'Jul 2025',
      icon: <Award className="text-emerald-400" size={32} />,
      certificateUrl: 'https://drive.google.com/file/d/1hWAnQsObNvduzeEGSunk2ZrlygIl4qLk/view?usp=sharing'
    },
    {
      title: 'Data Structures and Algorithms',
      organization: 'Board Affinity',
      date: 'Completed',
      icon: <Award className="text-emerald-400" size={32} />,
      certificateUrl: 'https://drive.google.com/file/d/1Uh8M3Z_qbqHFYROx35FF2N7dFyqiZO5z/view?usp=sharing'
    },
    {
      title: 'Full Stack Web Development Training',
      organization: 'Apna College',
      date: 'Jan 2025',
      icon: <Award className="text-emerald-400" size={32} />,
      certificateUrl: 'https://drive.google.com/file/d/17qUPlIZZXJMb4T2ilstFFIZ8-1mRfjG0/view?usp=sharing'
    },
    {
      title: 'Ethical Hacking Training',
      organization: 'Rising Tech Pro',
      date: 'Mar 2024',
      icon: <ShieldCheck className="text-blue-400" size={32} />,
      certificateUrl: 'https://drive.google.com/file/d/1SHCMi_tpYiZjvH3d6IUPBgTAANJvMThW/view?usp=sharing'
    },
    {
      title: 'Privacy and Security in Social Media',
      organization: 'NPTEL',
      date: 'Completed',
      icon: <Award className="text-emerald-400" size={32} />,
      certificateUrl: 'https://drive.google.com/file/d/14xBhgzxdk688dzr2zrQrFhpbpfkMorT8/view?usp=sharing'
    },
    {
      title: 'Community Development Project',
      organization: 'Vivekanand Yuva Kalyan Kendra',
      date: 'Jul 2024 - Aug 2024',
      description: 'Led a month-long community project supporting underprivileged children and driving local cleanliness and tree-planting activities.',
      icon: <Users className="text-purple-400" size={32} />,
      certificateUrl: 'https://drive.google.com/file/d/1wDslf1l9STaUhWwYrXcraeHn0AqwJV4x/view?usp=sharing'
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false);

  const normalizedSearch = searchTerm.toLowerCase().trim();

  const filteredItems = items.filter((item) => {
    if (!normalizedSearch) return true;
    const inTitle = item.title.toLowerCase().includes(normalizedSearch);
    const inOrg = item.organization.toLowerCase().includes(normalizedSearch);
    return inTitle || inOrg;
  });

  const visibleItems = normalizedSearch
    ? filteredItems
    : showAll
      ? filteredItems
      : filteredItems.slice(0, 2);

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
          <div className="inline-block heading-with-ghost">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 city-nights-heading">Certifications & Co-curricular</h2>
            <div className="heading-ghost">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto mb-12">
          <div className="glass-card-premium rounded-2xl border border-white/10 bg-gradient-to-r from-blue-500/10 via-slate-900/60 to-emerald-500/10 px-5 py-4 shadow-[0_0_30px_rgba(59,130,246,0.25)]">
            <div className="mb-4">
              <div className="w-11/12 mx-auto h-7 rounded-full overflow-hidden border border-white/15 shadow-[0_0_22px_rgba(59,130,246,0.7)] bg-black/50">
                <video
                  src="/certificates.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover scale-110"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="e.g. NPTEL, DSA, Full Stack"
                  className="w-full rounded-full bg-black/40 border border-white/10 px-5 py-2.5 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/70 focus:border-emerald-400/70"
                />
              </div>
            </div>

            {normalizedSearch && (
              <p className="mt-2 text-xs text-gray-400 text-center">
                Showing results for <span className="text-emerald-300 font-medium">“{searchTerm}”</span>
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card-premium p-6 md:p-7 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 group hover:-translate-y-1 transition-transform border border-white/10 hover:border-emerald-400/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.35)] bg-black/50"
            >
              <div className="p-4 rounded-2xl flex-shrink-0 shadow-inner group-hover:scale-110 transition-transform bg-gradient-to-br from-blue-500/20 via-slate-900 to-emerald-500/20 border border-white/10">
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
                {item.certificateUrl && (
                  <a
                    href={item.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 mt-4 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/50 hover:-translate-y-0.5 transition-transform"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {filteredItems.length > 2 && !normalizedSearch && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-emerald-400/70 text-emerald-200 text-sm font-medium bg-emerald-500/10 hover:bg-emerald-500/20 hover:shadow-[0_0_18px_rgba(16,185,129,0.5)] transition-all"
            >
              {showAll ? 'Show fewer certifications' : 'Show all certifications'}
            </button>
          </div>
        )}

        {filteredItems.length === 0 && (
          <p className="mt-8 text-center text-gray-400 text-sm">
            No certifications match your search. Try a different name or organization.
          </p>
        )}
      </div>
    </section>
  );
};

export default CoCurricular;
