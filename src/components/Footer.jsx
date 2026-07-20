import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaTripadvisor } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const Footer = ({ isDark }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className={`py-16 px-6 md:px-12 transition-colors duration-500 border-t ${
      isDark 
        ? 'bg-luxury-black border-luxury-gold/10 text-luxury-cream' 
        : 'bg-luxury-cream border-luxury-gold/15 text-luxury-black'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-left">
          
          {/* Column 1: Brand & Philosophy */}
          <div className="flex flex-col gap-4">
            <span className="font-serif text-2xl font-light tracking-[0.25em] uppercase text-luxury-gold">
              L'Étoile
            </span>
            <p className="font-sans font-light text-xs leading-relaxed opacity-70">
              An award-winning Michelin-starred dining destination where sensory elegance, culinary accuracy, and emotional luxury merge.
            </p>
            <div className="flex gap-4 mt-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-luxury-gold hover:text-luxury-gold-hover text-base transition-colors"
                aria-label="Instagram Link"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-luxury-gold hover:text-luxury-gold-hover text-base transition-colors"
                aria-label="Facebook Link"
              >
                <FaFacebookF />
              </a>
              <a 
                href="https://tripadvisor.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-luxury-gold hover:text-luxury-gold-hover text-base transition-colors"
                aria-label="TripAdvisor Link"
              >
                <FaTripadvisor />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-serif text-sm tracking-widest text-luxury-gold uppercase mb-6 font-light">
              Navigation
            </h4>
            <ul className="space-y-3 font-sans text-xs font-light opacity-80">
              <li><a href="#about" className="hover:text-luxury-gold transition-colors duration-300">Our Legacy</a></li>
              <li><a href="#specialties" className="hover:text-luxury-gold transition-colors duration-300">Signatures</a></li>
              <li><a href="#menu" className="hover:text-luxury-gold transition-colors duration-300">The Menu</a></li>
              <li><a href="#reservation" className="hover:text-luxury-gold transition-colors duration-300">Reservations</a></li>
            </ul>
          </div>

          {/* Column 3: Legal & Media */}
          <div>
            <h4 className="font-serif text-sm tracking-widest text-luxury-gold uppercase mb-6 font-light">
              Media & Press
            </h4>
            <ul className="space-y-3 font-sans text-xs font-light opacity-80">
              <li><a href="#testimonials" className="hover:text-luxury-gold transition-colors duration-300">Accolades</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors duration-300">Press Kit</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors duration-300">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-serif text-sm tracking-widest text-luxury-gold uppercase mb-6 font-light">
              The Journal
            </h4>
            <p className="font-sans font-light text-xs leading-relaxed opacity-70 mb-4">
              Subscribe to receive exclusive invitations to seasonal culinary tasting events and Chef's Table releases.
            </p>
            <form onSubmit={handleSubscribe} className="relative flex items-center">
              <input
                type="email"
                required
                placeholder={subscribed ? "Subscription Sent" : "Enter Email Address"}
                disabled={subscribed}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-3 text-xs bg-transparent border-b focus:outline-none transition-colors duration-300 pr-10 ${
                  subscribed
                    ? 'border-green-500/50 text-green-500/80 placeholder:text-green-500/70'
                    : isDark
                      ? 'border-luxury-gold/25 focus:border-luxury-gold text-luxury-cream placeholder:text-luxury-cream/35'
                      : 'border-luxury-gold/30 focus:border-luxury-gold text-luxury-black placeholder:text-luxury-black/35'
                }`}
              />
              <button
                type="submit"
                disabled={subscribed}
                className="absolute right-2 text-luxury-gold hover:text-luxury-gold-hover transition-colors text-base cursor-pointer focus:outline-none"
                aria-label="Subscribe"
              >
                {subscribed ? (
                  <span className="text-[10px] text-green-500 font-medium">✓</span>
                ) : (
                  <FiArrowRight />
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-luxury-gold/15 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-[10px] uppercase tracking-widest opacity-50 font-light">
            © {new Date().getFullYear()} L'ÉTOILE Paris. All Rights Reserved.
          </p>
          <p className="text-[10px] uppercase tracking-widest opacity-50 font-light">
            Designed by Luxury Hospitality Agency
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
