import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Global Components
import Loader from './components/Loader';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Specialties from './components/Specialties';
import FeaturedMenu from './components/FeaturedMenu';
import Chef from './components/Chef';
import Gallery from './components/Gallery';
import Reservation from './components/Reservation';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(() => {
    // Default to dark mode for luxury aesthetic, check local storage
    const saved = localStorage.getItem('theme');
    return saved !== null ? saved === 'dark' : true;
  });

  useEffect(() => {
    // Set theme class on html element
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader finishLoading={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className={`min-h-screen relative font-sans overflow-x-hidden ${
          isDark ? 'bg-luxury-black text-luxury-cream' : 'bg-luxury-cream text-luxury-black'
        }`}>
          {/* Scroll Progress Bar at the top */}
          <ScrollProgress />

          {/* Navigation Bar */}
          <Navbar isDark={isDark} toggleTheme={toggleTheme} />

          {/* Page Sections */}
          <Hero isDark={isDark} />
          
          <main>
            <About isDark={isDark} />
            <Specialties isDark={isDark} />
            <FeaturedMenu isDark={isDark} />
            <Chef isDark={isDark} />
            <Gallery isDark={isDark} />
            <Reservation isDark={isDark} />
            <Testimonials isDark={isDark} />
            <FAQ isDark={isDark} />
            <Contact isDark={isDark} />
          </main>

          {/* Footer */}
          <Footer isDark={isDark} />

          {/* Floating Utilities */}
          <BackToTop />
          <WhatsAppButton />
        </div>
      )}
    </>
  );
}

export default App;
