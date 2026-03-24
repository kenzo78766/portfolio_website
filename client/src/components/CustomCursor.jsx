import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const idleMessages = [
  "Don't sleep, stay awake 👀",
  'Scroll a bit, conquer a bug.',
  'DSA break? Or coffee break?',
  'Pixels are waiting for your next move.',
];

const CustomCursor = () => {
  const canvasRef = useRef(null);
  const idleTimeoutRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const [idleIndex, setIdleIndex] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Resize canvas
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener('resize', setSize);

    // Particle logic
    const particles = [];
    const color = { r: 59, g: 130, b: 246 }; // Blue-500

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 4 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.life = 1;
        this.decay = Math.random() * 0.03 + 0.015;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= this.decay;
        this.size -= 0.1;
      }
      draw() {
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${this.life})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // Reset
      }
    }

    let animationFrame;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Spawn new particles at mouse position
      if (mousePos.x > 0 && mousePos.y > 0) {
        particles.push(new Particle(mousePos.x, mousePos.y));
        if (isHovering) {
            // Spawn extra for glow effect on hover
            particles.push(new Particle(mousePos.x, mousePos.y));
            particles.push(new Particle(mousePos.x, mousePos.y));
        }
      }

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].life <= 0 || particles[i].size <= 0.2) {
          particles.splice(i, 1);
          i--;
        }
      }
      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', setSize);
      cancelAnimationFrame(animationFrame);
    };
  }, [mousePos, isHovering]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsIdle(false);
      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current);
      }
      idleTimeoutRef.current = setTimeout(() => {
        setIdleIndex((prev) => (prev + 1) % idleMessages.length);
        setIsIdle(true);
      }, 5000);
    };

    const handleMouseOver = (e) => {
      const isInteractive = e.target.closest('a') || e.target.closest('button') || e.target.closest('input') || e.target.closest('textarea');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[100] mix-blend-screen opacity-70"
      />

      <AnimatePresence>
        {isIdle && (
          <motion.div
            key={idleIndex}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 right-6 z-[110] pointer-events-none"
          >
            <div className="rounded-2xl overflow-hidden border border-amber-400/60 shadow-[0_0_25px_rgba(251,191,36,0.6)] bg-black/80">
              <img
                src="https://media.tenor.com/aQCFivS89qAAAAAi/dance.gif"
                alt="Wake up!"
                className="w-28 h-28 object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CustomCursor;
