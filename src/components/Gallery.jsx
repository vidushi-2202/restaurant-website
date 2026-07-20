import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiMaximize2 } from 'react-icons/fi';
import { galleryCategories, galleryItems } from '../data/galleryData';

const Gallery = ({ isDark }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const filteredItems = activeCategory === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => 
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => 
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  return (
    <section id="gallery" className={`py-24 px-6 md:px-12 transition-colors duration-500 border-t border-luxury-gold/10 ${
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
          <span className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-light mb-3">Galerie D'Images</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide mb-4">Capturing L'Étoile</h2>
          <div className="w-12 h-[1px] bg-luxury-gold mt-4" />
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-16 max-w-4xl mx-auto">
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer ${
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

        {/* Showcase Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                key={item.id}
                onClick={() => openLightbox(index)}
                className="relative h-72 rounded-lg overflow-hidden group cursor-pointer border border-luxury-gold/5 shadow-lg"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-108"
                  loading="lazy"
                />

                {/* Glass Hover Overlay */}
                <div className="absolute inset-0 bg-luxury-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                  <div className="absolute top-4 right-4 text-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <FiMaximize2 className="text-lg" />
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-luxury-gold font-light mb-1">
                    {galleryCategories.find(c => c.id === item.category)?.name || item.category}
                  </span>
                  <h3 className="font-serif text-lg text-luxury-cream font-light tracking-wide mb-1">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[11px] text-luxury-cream/70 font-light leading-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 z-50 flex items-center justify-center bg-luxury-black/95 p-4 md:p-8"
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 text-luxury-cream/80 hover:text-luxury-gold transition-colors duration-300 text-2xl z-55 focus:outline-none cursor-pointer"
                aria-label="Close Lightbox"
              >
                <FiX />
              </button>

              {/* Prev Button */}
              <button
                onClick={showPrev}
                className="absolute left-4 md:left-8 text-luxury-cream/60 hover:text-luxury-gold transition-colors duration-300 text-3xl z-55 focus:outline-none cursor-pointer"
                aria-label="Previous Image"
              >
                <FiChevronLeft />
              </button>

              {/* Image & Info Container */}
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ duration: 0.4 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl max-h-[80vh] flex flex-col items-center justify-center gap-4 select-none relative"
              >
                <img
                  src={filteredItems[selectedImageIndex].image}
                  alt={filteredItems[selectedImageIndex].title}
                  className="max-w-full max-h-[70vh] object-contain rounded border border-luxury-gold/20 shadow-2xl"
                />
                
                {/* Image Details */}
                <div className="text-center max-w-2xl px-4">
                  <h4 className="font-serif text-xl text-luxury-cream font-light mb-1">
                    {filteredItems[selectedImageIndex].title}
                  </h4>
                  <p className="font-sans text-xs text-luxury-gold font-light opacity-90">
                    {filteredItems[selectedImageIndex].description}
                  </p>
                </div>
              </motion.div>

              {/* Next Button */}
              <button
                onClick={showNext}
                className="absolute right-4 md:right-8 text-luxury-cream/60 hover:text-luxury-gold transition-colors duration-300 text-3xl z-55 focus:outline-none cursor-pointer"
                aria-label="Next Image"
              >
                <FiChevronRight />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
