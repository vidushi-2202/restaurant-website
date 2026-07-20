import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Specialties', href: '#specialties' },
  { name: 'Menu', href: '#menu' },
  { name: 'The Chef', href: '#chef' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reservation', href: '#reservation' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  // Menu Animation Variants
  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 py-4 px-6 md:px-12 ${
          scrolled
            ? isDark
              ? 'glass-navbar py-3 shadow-2xl'
              : 'glass-navbar-light py-3 shadow-md'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className={`font-serif text-2xl font-light tracking-[0.3em] uppercase transition-colors duration-300 ${
              isDark ? 'text-luxury-cream' : 'text-luxury-black'
            }`}
          >
            L'Étoile
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-[0.2em] font-light transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-luxury-gold after:transition-all after:duration-300 hover:after:w-full ${
                  isDark
                    ? 'text-luxury-cream/80 hover:text-luxury-gold'
                    : 'text-luxury-black/80 hover:text-luxury-gold'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Theme Switcher & Actions */}
          <div className="flex items-center gap-4">
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            
            <a
              href="#reservation"
              className="hidden sm:inline-block text-xs uppercase tracking-[0.2em] font-medium text-luxury-black bg-luxury-gold px-5 py-2.5 rounded-full hover:bg-luxury-gold-hover transition-colors duration-300 cursor-pointer"
            >
              Book Table
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-luxury-gold/30 bg-transparent text-luxury-gold focus:outline-none cursor-pointer`}
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className={`fixed inset-0 z-30 lg:hidden flex flex-col justify-center items-center ${
              isDark ? 'bg-luxury-black' : 'bg-luxury-cream'
            }`}
          >
            <div className="flex flex-col items-center gap-6 text-center">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={linkVariants}
                  onClick={closeMenu}
                  className={`font-serif text-2xl font-light tracking-widest hover:text-luxury-gold transition-colors duration-300 ${
                    isDark ? 'text-luxury-cream' : 'text-luxury-black'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                variants={linkVariants}
                href="#reservation"
                onClick={closeMenu}
                className="mt-6 text-sm uppercase tracking-[0.25em] font-medium text-luxury-black bg-luxury-gold px-8 py-3 rounded-full hover:bg-luxury-gold-hover transition-all duration-300"
              >
                Reserve a Table
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
