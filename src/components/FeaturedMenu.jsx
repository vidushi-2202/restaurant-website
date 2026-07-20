import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuCategories, menuItems } from '../data/menuData';

const FeaturedMenu = ({ isDark }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all"
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className={`py-24 px-6 md:px-12 transition-colors duration-500 border-t border-luxury-gold/10 ${
      isDark ? 'bg-luxury-black text-luxury-cream' : 'bg-luxury-cream text-luxury-black'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex flex-col items-center text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-light mb-3">La Carte</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide mb-4">Discover The Menu</h2>
          <div className="w-12 h-[1px] bg-luxury-gold mt-4" />
        </motion.div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-16 max-w-4xl mx-auto">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                activeCategory === category.id
                  ? 'bg-luxury-gold text-luxury-black font-medium shadow-md'
                  : isDark
                    ? 'bg-luxury-dark/40 text-luxury-cream/75 border border-luxury-gold/10 hover:border-luxury-gold/40 hover:text-luxury-cream'
                    : 'bg-white text-luxury-black/75 border border-luxury-gold/15 hover:border-luxury-gold/50 hover:text-luxury-black'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Grid Container */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                key={item.id}
                className={`flex gap-6 items-center p-4 md:p-6 rounded-lg transition-all duration-300 border ${
                  isDark
                    ? 'glass-card border-luxury-gold/5 hover:border-luxury-gold/15'
                    : 'glass-card-light border-luxury-gold/10 hover:border-luxury-gold/20'
                }`}
              >
                {/* Thumbnail */}
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden flex-shrink-0 border border-luxury-gold/10">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Details */}
                <div className="flex-grow flex flex-col text-left">
                  <div className="flex justify-between items-baseline mb-2">
                    <div className="flex items-center gap-3">
                      <h3 className="font-serif text-base md:text-lg font-light tracking-wide hover:text-luxury-gold transition-colors duration-300">
                        {item.name}
                      </h3>
                      {item.tag && (
                        <span className="hidden sm:inline-block text-[8px] uppercase tracking-widest bg-luxury-gold/15 text-luxury-gold border border-luxury-gold/20 px-2 py-0.5 rounded">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <span className="font-serif text-base md:text-lg text-luxury-gold font-light">
                      ${item.price}
                    </span>
                  </div>
                  
                  <p className="font-sans font-light text-xs md:text-sm leading-relaxed opacity-75 mb-2">
                    {item.description}
                  </p>

                  {/* Dietary Info */}
                  {item.dietary && item.dietary.length > 0 && (
                    <div className="flex gap-2 flex-wrap">
                      {item.dietary.map((d, index) => (
                        <span key={index} className="text-[9px] uppercase tracking-wider opacity-60 font-light">
                          • {d}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-xs uppercase tracking-widest opacity-60 mb-4 font-light">
            Custom tasting menu pairing packages available upon request
          </p>
          <a
            href="#reservation"
            className="inline-block text-xs uppercase tracking-[0.2em] font-medium text-luxury-gold border border-luxury-gold/40 px-6 py-3 rounded-full hover:bg-luxury-gold hover:text-luxury-black hover:border-luxury-gold transition-all duration-300"
          >
            Request Private Cellar Pairing
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
