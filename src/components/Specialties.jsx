import { motion } from 'framer-motion';
import { specialties } from '../data/menuData';

const Specialties = ({ isDark }) => {
  return (
    <section id="specialties" className={`py-24 px-6 md:px-12 transition-colors duration-500 border-t border-luxury-gold/10 ${
      isDark ? 'bg-luxury-dark text-luxury-cream' : 'bg-white text-luxury-black'
    }`}>
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-light mb-3">Le Chef Recommande</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide mb-4">Chef's Signature Creations</h2>
          <div className="w-12 h-[1px] bg-luxury-gold mt-4" />
        </motion.div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((dish, idx) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
              className={`flex flex-col rounded-lg overflow-hidden group border transition-all duration-500 ${
                isDark 
                  ? 'glass-card border-luxury-gold/5 hover:border-luxury-gold/20' 
                  : 'glass-card-light border-luxury-gold/10 hover:border-luxury-gold/25'
              }`}
            >
              {/* Image with zoom effect */}
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-luxury-black/10 z-10 transition-opacity duration-300 group-hover:opacity-0" />
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Info */}
              <div className="p-8 flex flex-col flex-grow text-left">
                <span className="text-[10px] uppercase tracking-[0.2em] text-luxury-gold font-light mb-2">
                  {dish.category}
                </span>
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="font-serif text-xl font-light tracking-wide">
                    {dish.name}
                  </h3>
                  <span className="font-serif text-lg text-luxury-gold font-light">
                    {dish.price}
                  </span>
                </div>
                <p className="font-sans font-light text-xs md:text-sm leading-relaxed opacity-75 mb-6 flex-grow">
                  {dish.description}
                </p>
                <a
                  href="#reservation"
                  className="text-[10px] uppercase tracking-[0.25em] font-medium text-luxury-gold hover:text-luxury-gold-hover self-start transition-colors duration-300 border-b border-luxury-gold/30 hover:border-luxury-gold-hover pb-1"
                >
                  Book Culinary Experience
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
