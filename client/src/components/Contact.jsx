import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });
    
    try {
      // Connects to the Express backend running on port 5000
      await axios.post('http://localhost:5000/api/contact', formData);
      setStatus({ loading: false, success: true, error: '' });
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
    } catch (error) {
      console.error('Submission error:', error);
      setStatus({ 
        loading: false, 
        success: false, 
        error: error.response?.data?.error || 'Something went wrong. Please try again later.' 
      });
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-dark-600 pb-40 z-10">
      {/* Huge Faded Background Text */}
      <div className="absolute top-[2%] left-1/2 -translate-x-1/2 w-full text-center z-0 pointer-events-none">
        <h2 className="text-[18vw] font-black text-white/5 whitespace-nowrap select-none tracking-tighter mix-blend-overlay">
          CONTACT
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
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 neon-text">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 mx-auto rounded-full mb-8" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            I'm always open to discussing web development, new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass-card-premium p-8 flex flex-col justify-center h-full space-y-8">
              <h3 className="text-2xl font-bold text-white border-b border-gray-700 pb-4 text-shadow">Contact Information</h3>
              
              <div className="flex items-start space-x-6">
                <div className="bg-blue-500/10 p-4 rounded-full text-blue-400 flex-shrink-0 shadow-inner">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wide font-semibold mb-1">Email</p>
                  <a href="mailto:anshumanboard1@gmail.com" className="text-lg text-white hover:text-blue-400 transition-colors font-medium">anshumanboard1@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-emerald-500/10 p-4 rounded-full text-emerald-400 flex-shrink-0 shadow-inner">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wide font-semibold mb-1">Phone</p>
                  <a href="tel:+918726516583" className="text-lg text-white hover:text-emerald-400 transition-colors font-medium">+91-8726516583</a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-purple-500/10 p-4 rounded-full text-purple-400 flex-shrink-0 shadow-inner">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wide font-semibold mb-1">Location</p>
                  <p className="text-lg text-white font-medium">Gorakhpur, UP / Phagwara, Punjab</p>
                </div>
              </div>

              <div className="pt-8 flex flex-col items-start gap-4">
                <p className="text-gray-400">Download my detailed resume for more information about my background.</p>
                <a
                  href="#"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 text-white font-bold transition-all duration-300 shadow-lg shadow-blue-500/25 flex items-center justify-center space-x-2 hover:-translate-y-1 w-full sm:w-auto text-center"
                >
                  Download PDF Resume
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card-premium p-8 space-y-6 relative overflow-hidden">
               {/* Background Glow */}
               <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 opacity-100 blur-2xl pointer-events-none" />
              {status.success && (
                <div className="p-4 bg-emerald-500/20 border border-emerald-500/50 rounded-lg flex items-center text-emerald-300">
                  <CheckCircle className="mr-3" size={20} />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
              {status.error && (
                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center text-red-300">
                  <AlertCircle className="mr-3" size={20} />
                  <span>{status.error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-600 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-500 font-light"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-600 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all placeholder-gray-500 font-light"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Project Details or Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-dark-600 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-500 font-light resize-none"
                  placeholder="I have a project idea..."
                />
              </div>
              <button
                type="submit"
                disabled={status.loading}
                className="w-full py-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold transition-colors shadow-lg shadow-blue-500/30 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status.loading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
