import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiChevronUp } from 'react-icons/fi';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1, backgroundColor: '#c5a880', color: '#0b0b0b' }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed right-6 bottom-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-luxury-gold/50 bg-luxury-black/85 text-luxury-gold shadow-lg backdrop-blur-md transition-colors duration-300 md:right-8 md:bottom-8 focus:outline-none"
          aria-label="Back to top"
        >
          <FiChevronUp className="text-xl" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
