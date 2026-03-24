import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  "Still scrolling? Ship the next feature.",
  "Bug-free code? Nice dream. Keep going.",
  "DSA + chai = OP combo.",
  "One more section, then push to Git.",
];

const FunHints = () => {
  const [visible, setVisible] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const lastShownRef = useRef(0);
  const timeoutRef = useRef(null);
  const showingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now();
      const cooldown = 15000; // 15s between hints

      if (showingRef.current) return;
      if (now - lastShownRef.current < cooldown) return;

      lastShownRef.current = now;
      showingRef.current = true;
      setVisible(true);
      setMessageIndex((prev) => (prev + 1) % messages.length);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setVisible(false);
        showingRef.current = false;
      }, 3500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const currentMessage = messages[messageIndex];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key={currentMessage}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 z-[120] pointer-events-none"
        >
          <div className="px-4 py-2 rounded-2xl bg-dark-600/95 border border-white/10 shadow-[0_0_20px_rgba(59,130,246,0.4)] text-[11px] text-gray-200 font-mono flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{currentMessage}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FunHints;
