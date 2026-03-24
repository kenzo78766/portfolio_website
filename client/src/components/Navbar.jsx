import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'GitHub', href: '#github' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400"
          >
            AS
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.15, y: -2, transition: { duration: 0.05 } }}
                className="group relative text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide px-1"
              >
                <span className="relative z-10">{link.name}</span>
                <span
                  className="pointer-events-none absolute left-0 right-0 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-blue-500 via-emerald-400 to-fuchsia-500 opacity-0 scale-x-50 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-300 origin-center shadow-[0_0_12px_rgba(59,130,246,0.8)]"
                />
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden glass mt-3 p-4 absolute w-full"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
