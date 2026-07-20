import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Loader = ({ finishLoading }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            finishLoading();
          }, 600);
          return 100;
        }
        return prev + 1;
      });
    }, 15);

    return () => clearInterval(interval);
  }, [finishLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-luxury-black font-sans text-luxury-cream select-none"
    >
      <div className="flex flex-col items-center max-w-xs w-full px-6">
        {/* Animated Brand Logo Mark */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 relative flex items-center justify-center"
        >
          {/* Outer glowing star shape */}
          <div className="w-16 h-16 border-2 border-luxury-gold/30 rounded-full animate-[spin_12s_linear_infinite]" />
          <div className="absolute w-12 h-12 border-t-2 border-b-2 border-luxury-gold rounded-full animate-[spin_4s_linear_infinite]" />
          <span className="absolute font-serif text-3xl font-light text-luxury-gold">É</span>
        </motion.div>

        {/* Brand Text */}
        <motion.h1
          initial={{ letterSpacing: "0.2em", opacity: 0 }}
          animate={{ letterSpacing: "0.4em", opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-serif text-2xl font-light uppercase text-luxury-gold tracking-[0.4em] mb-2 pl-[0.4em] text-center"
        >
          L'ÉTOILE
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xs uppercase tracking-[0.25em] text-center mb-12 text-luxury-cream/80"
        >
          Haute Gastronomie
        </motion.p>

        {/* Loading Progress Bar */}
        <div className="w-full h-[1px] bg-luxury-gold/15 relative overflow-hidden mb-3">
          <motion.div 
            className="h-full bg-luxury-gold absolute left-0 top-0"
            style={{ width: `${percent}%` }}
          />
        </div>

        {/* Counter */}
        <div className="font-serif font-light text-sm tracking-widest text-luxury-gold/80">
          {percent}%
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
