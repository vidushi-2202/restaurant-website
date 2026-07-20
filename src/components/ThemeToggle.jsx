import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = ({ isDark, toggleTheme }) => {
  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-luxury-gold/30 bg-transparent text-luxury-gold outline-none transition-colors duration-300 hover:border-luxury-gold cursor-pointer"
      aria-label="Toggle Theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 90 : 0, scale: isDark ? 0 : 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute"
      >
        <FiSun className="text-lg" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : -90, scale: isDark ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute"
      >
        <FiMoon className="text-lg" />
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
