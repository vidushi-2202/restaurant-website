import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const Hero = ({ isDark }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-luxury-black select-none">
      {/* Background Image with Slow Zoom Animation & Overlay */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.55 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/interior-salon.jpg')` }}
      />
      
      {/* Dynamic Overlay Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-b ${
        isDark 
          ? 'from-luxury-black/60 via-luxury-black/35 to-luxury-black' 
          : 'from-luxury-black/70 via-luxury-black/40 to-luxury-cream'
      } transition-colors duration-500`} />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Subtle Star Motif */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-6 flex items-center justify-center"
        >
          <div className="w-10 h-[1px] bg-luxury-gold/50" />
          <span className="mx-3 text-luxury-gold text-sm tracking-widest">✦</span>
          <div className="w-10 h-[1px] bg-luxury-gold/50" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xs md:text-sm uppercase tracking-[0.3em] text-luxury-gold font-light mb-4"
        >
          Michelin-Starred Haute Gastronomie
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extralight text-luxury-cream tracking-wide mb-8 leading-none"
        >
          L'Étoile
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="max-w-xl mx-auto text-sm md:text-base font-light text-luxury-cream/80 tracking-wider mb-12 leading-relaxed"
        >
          Where culinary precision meets artistic sensory design. Embark on a tasting journey orchestrated by Chef Alexandre Mercer.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <a
            href="#reservation"
            className="w-full sm:w-auto text-center text-xs uppercase tracking-[0.2em] font-medium text-luxury-black bg-luxury-gold px-8 py-4 rounded-full hover:bg-luxury-gold-hover transition-colors duration-300 shadow-lg cursor-pointer"
          >
            Reserve A Table
          </a>
          <a
            href="#menu"
            className="w-full sm:w-auto text-center text-xs uppercase tracking-[0.2em] font-medium text-luxury-cream border border-luxury-cream/30 px-8 py-4 rounded-full hover:bg-luxury-cream hover:text-luxury-black hover:border-luxury-cream transition-all duration-300 cursor-pointer"
          >
            Explore Menu
          </a>
        </motion.div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-luxury-cream/50 font-light">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-luxury-gold text-lg"
        >
          <FiChevronDown />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
