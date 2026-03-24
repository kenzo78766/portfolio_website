import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const qaPairs = [
  {
    patterns: ['name', 'who are you', 'your full name', 'about you'],
    answer:
      "I'm Anshuman Singh, a Full-Stack Web & App Developer specializing in the MERN stack.",
  },
  {
    patterns: ['what do you do', 'role', 'developer', 'what are you'],
    answer:
      'I build scalable web apps and modern MERN stack projects with a focus on clean UI and solid backend architecture.',
  },
  {
    patterns: ['college', 'university', 'btech', 'bachelor', 'education'],
    answer:
      'I am pursuing B.Tech in Computer Science and Engineering at Lovely Professional University (LPU), Phagwara, Punjab.',
  },
  {
    patterns: ['10th', 'xth', 'matric', 'school'],
    answer:
      'I completed my matriculation (X) at St. Thereses High School with 84.4% marks.',
  },
  {
    patterns: ['12th', 'intermediate', 'class 12', 'geeta'],
    answer:
      'I completed my intermediate (XII) at Geeta International Public School with 90.8% marks.',
  },
  {
    patterns: ['tech stack', 'stack', 'skills', 'tech'],
    answer:
      'My core stack is MERN: MongoDB, Express.js, React, and Node.js. I also work with Tailwind CSS, TypeScript, Firebase, WordPress, and AWS.',
  },
  {
    patterns: ['languages you know', 'programming languages', 'coding languages'],
    answer:
      'I work with JavaScript, TypeScript, C++, Python, and SQL.',
  },
  {
    patterns: ['projects', 'featured projects', 'some projects', 'show projects'],
    answer:
      "Some featured projects: BlogHub (full-stack blogging platform), TaskFlow (task management system), Rebel Foods frontend clone, a To-Do Web App, Tic-Tac-Toe Game, Interactive Stopwatch, Interactive Navigation Menu, and a C++ DSA-based Library Management System.",
  },
  {
    patterns: ['github', 'github link', 'code link', 'repo'],
    answer: 'You can explore my code on GitHub here: https://github.com/kenzo78766',
  },
  {
    patterns: ['linkedin', 'linkedIn profile', 'connect'],
    answer: 'You can connect with me on LinkedIn here: https://www.linkedin.com/in/anshuman78766/',
  },
  {
    patterns: ['email', 'mail', 'contact', 'reach you'],
    answer: 'You can email me at anshumanboard1@gmail.com or use the contact form at the bottom of this page.',
  },
  {
    patterns: ['location', 'where are you from', 'city'],
    answer: 'I am from Gorakhpur, Uttar Pradesh, and currently in Phagwara, Punjab for my studies.',
  },
  {
    patterns: ['competitive', 'leetcode', 'coding platforms', 'hackerrank', 'gfg'],
    answer:
      'I actively do competitive programming on LeetCode, HackerRank, and GeeksforGeeks, focusing on DSA and problem solving.',
  },
  {
    patterns: ['certifications', 'courses', 'trainings'],
    answer:
      'I have done trainings in Data Structures & Algorithms, Full Stack Web Development, Ethical Hacking, and a Community Development Project, with certificate links in the Certifications section.',
  },
  {
    patterns: ['summary', 'profile summary', 'about summary', 'elevator pitch'],
    answer:
      'I am a MERN-focused Full-Stack developer who enjoys building complete products end-to-end — from clean, animated frontends to secure, well-structured APIs and databases.',
  },
  {
    patterns: ['experience', 'internship', 'work experience', 'professional experience'],
    answer:
      'I have worked as a Web & App Development Trainee at Orbosis Global Pvt. Ltd. and as a Software Development Trainee at LPU Skill Development, building real-world web and app solutions.',
  },
  {
    patterns: ['strengths', 'your strengths', 'what are your strengths'],
    answer:
      'My strengths are strong problem solving with DSA, ownership of end-to-end features, quick learning of new tools, and building clean, usable UIs with solid backend structure.',
  },
  {
    patterns: ['weakness', 'weaknesses'],
    answer:
      'I tend to get very focused on polishing details, so I consciously prioritize features and timelines first, then refine the UI/UX once the core is stable.',
  },
  {
    patterns: ['preferred role', 'what roles', 'frontend or backend', 'what do you prefer'],
    answer:
      'I am most excited about Full-Stack or Backend-heavy roles using the MERN stack, but I also enjoy working on modern React frontends.',
  },
  {
    patterns: ['why hire you', 'why should we hire you'],
    answer:
      'I combine solid DSA fundamentals with practical full-stack experience — I can pick up a feature, design it, implement the API and UI, and iterate quickly based on feedback.',
  },
  {
    patterns: ['available', 'joining', 'when can you join', 'availability'],
    answer:
      'I am currently a student, so my availability is flexible for internships or part-time roles, with the goal of moving into full-time development roles after graduation.',
  },
  {
    patterns: ['relocate', 'relocation', 'remote', 'work location'],
    answer:
      'I am open to hybrid or remote-friendly opportunities and can discuss relocation depending on the role and timing.',
  },
  {
    patterns: ['teamwork', 'work in a team', 'collaboration'],
    answer:
      'I have collaborated with teams during trainings and projects, handling both frontend and backend tasks, doing code reviews, and aligning on requirements and timelines.',
  },
];

const defaultFallbacks = [
  "I'm just a tiny portfolio bot. Try asking about my skills, education, or projects!",
  "I might not know that yet. Ask me about my stack, college, or GitHub.",
  'Try something like: "What is your tech stack?" or "Where do you study?"',
];

const findAnswer = (question) => {
  const q = question.toLowerCase();
  for (const { patterns, answer } of qaPairs) {
    if (patterns.some((p) => q.includes(p))) {
      return answer;
    }
  }
  // simple fallback rotation based on length
  const idx = question.length % defaultFallbacks.length;
  return defaultFallbacks[idx];
};

const ProfileChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text: 'Hey! I am your Portfolio Assistant. Ask me about Anshuman\'s skills, education, projects, or anything a recruiter might want to know.',
    },
  ]);

  const handleSend = (e) => {
    e?.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage = { from: 'user', text: trimmed };
    const botMessage = { from: 'bot', text: findAnswer(trimmed) };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput('');
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 left-6 z-[130] rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 p-3 shadow-lg shadow-emerald-500/40 text-white flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={20} />
        <span className="hidden sm:inline text-xs font-semibold">Ask Portfolio Assistant</span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-20 left-6 w-[280px] sm:w-[320px] z-[130]"
          >
            <div className="glass-card-premium border border-white/10 rounded-2xl overflow-hidden bg-dark-600/95 shadow-xl shadow-emerald-500/30 flex flex-col max-h-[420px]">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-gradient-to-r from-blue-600/60 to-emerald-500/40">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-200 font-semibold tracking-wide">Portfolio Assistant</span>
                  <span className="text-[10px] text-gray-200/80">Answers only about Anshuman & this portfolio</span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-200/80 hover:text-white"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="flex-1 px-3 py-2 space-y-2 overflow-y-auto custom-scrollbar text-[11px]">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] px-3 py-2 rounded-2xl leading-snug ${
                        msg.from === 'user'
                          ? 'bg-blue-600 text-white rounded-br-sm'
                          : 'bg-dark-500 text-gray-200 border border-white/10 rounded-bl-sm'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSend} className="px-3 py-2 border-t border-white/10 bg-dark-700/80 flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about skills, college, GitHub..."
                  className="flex-1 bg-transparent text-[11px] text-gray-100 placeholder-gray-500 outline-none"
                />
                <button
                  type="submit"
                  className="text-xs font-semibold text-emerald-300 hover:text-emerald-200"
                >
                  Send
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProfileChatbot;
