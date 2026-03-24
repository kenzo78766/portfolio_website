import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Download, ArrowRight, Mail } from 'lucide-react';
import { useRef, useState, useEffect, Suspense } from 'react';

// Custom Typewriter Hook
const useTypewriter = (words, typingSpeed = 70, deletingSpeed = 50, pauseTime = 1000) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
};

import { useGLTF, useAnimations, OrbitControls, Html, useProgress } from '@react-three/drei';

// ============================================================================
// Canvas Loading Screen
// ============================================================================
const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <span className="text-teal-300 font-mono text-xl neon-text-teal">
          {progress.toFixed(0)}%
        </span>
        <p className="text-gray-400 text-sm mt-2 font-mono">Loading 3D Scene...</p>
      </div>
    </Html>
  );
};

// ============================================================================
// 3D MODELS
// ============================================================================

const CyberpunkDiorama = ({ isMobile }) => {
  const group = useRef();
  const { scene, animations } = useGLTF('/vaporwave_tokyo_sketchfab_3d_editor_challenge.glb');
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    // Play the primary animation (the moving train) if it exists
    if (names.length > 0 && actions[names[0]]) {
      actions[names[0]].reset().fadeIn(0.5).play();
    }
  }, [actions, names]);

  const position = isMobile ? [1.5, -0.3, 0] : [4, -0.2, 1];
  const rotation = isMobile ? [0, 0.9, 0] : [0, 0.5, 0];
  const scale = isMobile ? [0.6, 0.6, 0.6] : [0.5, 0.5, 0.5];

  return (
    <group ref={group} position={position} rotation={rotation} scale={scale}>
      <primitive object={scene} />
    </group>
  );
};


const Hero = () => {
  const typewriterText = useTypewriter([
    'Scalable Web Apps',
    'Modern MERN Stacks',
    'Interactive UIs',
    'Robust Backend Systems'
  ]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden z-10">

      {/* 3D Canvas Background layer */}
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none md:pointer-events-auto">
        <Canvas camera={{ position: isMobile ? [0, 0, 9.5] : [0, 0, 8], fov: isMobile ? 60 : 50 }}>
          <Suspense fallback={<CanvasLoader />}>
            <ambientLight intensity={1.5} />
            <directionalLight position={[10, 10, 5]} intensity={3} castShadow />
            <pointLight position={[-5, 5, -5]} intensity={2} color="#fb7185" />

            <CyberpunkDiorama isMobile={isMobile} />

            {!isMobile && (
              <OrbitControls
                enableZoom={false}
                minPolarAngle={Math.PI / 2.5}
                maxPolarAngle={Math.PI / 2}
              />
            )}
          </Suspense>
        </Canvas>
      </div>

      {/* Huge Faded Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none">
        <h1 className="text-[20vw] font-black faded-bg-text mix-blend-overlay">
          DEVELOPER
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center md:text-left md:w-2/3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-amber-400 font-mono text-lg md:text-xl mb-4 tracking-widest uppercase">
              Welcome to my portfolio
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 leading-tight">
              Hi, I'm <br />
              <span className="animated-gradient-text neon-text">
                Anshuman Singh
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-3xl text-gray-300 mb-8 h-20"
          >
            I build{' '}
            <span className="text-teal-300 font-semibold drop-shadow-[0_0_8px_rgba(94,234,212,0.8)]">
              {typewriterText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-[2px] h-[1.2em] bg-teal-300 align-middle ml-[2px]"
              />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto md:mx-0 mb-12"
          >
            Full-Stack Web & App Developer specializing in the MERN stack, building scalable and dynamic user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
          >
            <a href="#projects" className="group relative px-8 py-4 bg-rose-500 rounded-full text-white font-semibold flex items-center gap-2 overflow-hidden w-full sm:w-auto justify-center hover:scale-105 hover:shadow-[0_0_20px_rgba(244,63,94,0.5)] transition-all">
              <span className="relative z-10 transition-transform group-hover:-translate-x-1">View Projects</span>
              <ArrowRight size={20} className="relative z-10 opacity-0 -translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
            </a>

            <a
              href="https://drive.google.com/file/d/15pz_oniVBKQ4G-wVZtNiS1oU6quLTUSS/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-transparent border-2 border-rose-500/30 rounded-full text-white font-semibold flex items-center gap-2 w-full sm:w-auto justify-center hover:border-rose-500 hover:bg-rose-500/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all"
            >
              <Download size={20} className="transition-transform group-hover:-translate-y-1" />
              <span>Download CV</span>
            </a>

            <a href="#contact" className="group px-8 py-4 bg-transparent border-2 border-white/10 rounded-full text-white font-semibold flex items-center gap-2 w-full sm:w-auto justify-center hover:bg-white/5 hover:scale-105 transition-all">
              <Mail size={20} className="transition-transform group-hover:rotate-12" />
              <span>Contact Me</span>
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
      >
        <span className="text-sm font-mono tracking-widest uppercase neon-text-teal">Scroll</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-teal-300 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
