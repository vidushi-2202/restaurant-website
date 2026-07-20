import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import { testimonials } from '../data/testimonialsData';

const Testimonials = ({ isDark }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [index]);

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Slider animation variants
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 220, damping: 25 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (dir) => ({
      x: dir < 0 ? 80 : -80,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 220, damping: 25 },
        opacity: { duration: 0.4 },
      },
    }),
  };

  return (
    <section id="testimonials" className={`py-24 px-6 md:px-12 transition-colors duration-500 border-t border-luxury-gold/10 ${
      isDark ? 'bg-luxury-black text-luxury-cream' : 'bg-luxury-cream text-luxury-black'
    }`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-light mb-3">Revue De Presse</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide mb-4">Guest Accolades</h2>
          <div className="w-12 h-[1px] bg-luxury-gold mt-4" />
        </motion.div>

        {/* Testimonials Slider Box */}
        <div className={`relative min-h-[320px] md:min-h-[260px] flex items-center justify-center p-8 md:p-12 rounded-xl border ${
          isDark 
            ? 'glass-card border-luxury-gold/10' 
            : 'glass-card-light border-luxury-gold/15'
        } shadow-xl overflow-hidden`}>
          
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={testimonials[index].id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col items-center text-center max-w-2xl w-full"
            >
              {/* Gold Stars */}
              <div className="flex gap-1.5 mb-6 text-luxury-gold">
                {[...Array(testimonials[index].rating)].map((_, i) => (
                  <FiStar key={i} className="fill-current text-sm" />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-serif text-lg md:text-xl font-light italic leading-relaxed opacity-95 mb-8">
                "{testimonials[index].text}"
              </p>

              {/* Reviewer Details */}
              <div className="flex flex-col">
                <cite className="not-italic font-serif text-base text-luxury-gold font-light tracking-wide mb-0.5">
                  {testimonials[index].name}
                </cite>
                <span className="text-[10px] uppercase tracking-[0.2em] opacity-60 font-light">
                  {testimonials[index].role} — {testimonials[index].date}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Handles */}
          <div className="absolute inset-x-0 bottom-4 md:bottom-auto md:inset-y-0 flex items-center justify-between px-6 pointer-events-none">
            <button
              onClick={handlePrev}
              className={`h-9 w-9 rounded-full border flex items-center justify-center pointer-events-auto transition-colors duration-300 focus:outline-none cursor-pointer ${
                isDark 
                  ? 'border-luxury-gold/20 text-luxury-gold hover:border-luxury-gold hover:bg-luxury-gold/15' 
                  : 'border-luxury-gold/30 text-luxury-black hover:border-luxury-gold hover:bg-luxury-gold/10'
              }`}
              aria-label="Previous Review"
            >
              <FiChevronLeft className="text-lg" />
            </button>
            <button
              onClick={handleNext}
              className={`h-9 w-9 rounded-full border flex items-center justify-center pointer-events-auto transition-colors duration-300 focus:outline-none cursor-pointer ${
                isDark 
                  ? 'border-luxury-gold/20 text-luxury-gold hover:border-luxury-gold hover:bg-luxury-gold/15' 
                  : 'border-luxury-gold/30 text-luxury-black hover:border-luxury-gold hover:bg-luxury-gold/10'
              }`}
              aria-label="Next Review"
            >
              <FiChevronRight className="text-lg" />
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === index ? 'w-6 bg-luxury-gold' : 'w-1.5 bg-luxury-gold/30'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
