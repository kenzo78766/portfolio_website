import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-600 border-t border-gray-800 text-gray-400 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          
          <div className="flex-1">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-2">Anshuman Singh</h2>
            <p className="text-sm font-light text-gray-500">
              Building dynamic, high-performance web applications using the MERN Stack.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="https://github.com/kenzo78766" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 glass rounded-full" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/anshuman78766/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors p-2 glass rounded-full" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors p-2 glass rounded-full" aria-label="Twitter">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium tracking-wide">
          <p>&copy; {currentYear} Anshuman Singh. All rights reserved.</p>
          <p className="flex items-center">
            Made with <Heart size={14} className="text-red-500 mx-1 animate-pulse" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
