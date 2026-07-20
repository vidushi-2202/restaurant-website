import { motion } from 'framer-motion';

const Chef = ({ isDark }) => {
  return (
    <section id="chef" className={`py-24 px-6 md:px-12 transition-colors duration-500 border-t border-luxury-gold/10 ${
      isDark ? 'bg-luxury-dark text-luxury-cream' : 'bg-white text-luxury-black'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Chef Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative w-full h-[500px] md:h-[600px] flex justify-center items-center"
          >
            {/* Background design accents */}
            <div className="absolute -left-4 -top-4 w-2/3 h-2/3 border border-luxury-gold/20 rounded-lg -z-0 pointer-events-none" />
            <div className="absolute -right-4 -bottom-4 w-2/3 h-2/3 border border-luxury-gold/20 rounded-lg -z-0 pointer-events-none" />

            <div className="w-full h-full rounded-lg overflow-hidden border border-luxury-gold/15 shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80"
                alt="Executive Chef Alexandre Mercer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
              />
              {/* Overlay with subtle lighting */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column: Culinary Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col text-left justify-center"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-light mb-3">L'Esprit de Cuisine</span>
            <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight mb-8">
              Executive Chef Alexandre Mercer
            </h2>
            
            <div className="w-12 h-[1px] bg-luxury-gold mb-8" />

            {/* Chef Quote */}
            <blockquote className="font-serif text-lg md:text-2xl italic leading-relaxed text-luxury-gold mb-8 border-l-2 border-luxury-gold pl-6 py-2">
              "Gastronomy is an ephemeral art. A plate is composed, presented, enjoyed, and then it is gone—remaining only as a beautifully crafted memory in the minds of our guests."
            </blockquote>

            <p className="font-sans font-light text-sm md:text-base leading-relaxed mb-6 opacity-80">
              Chef Alexandre Mercer trained under legendary Michelin culinary masters in Paris and Lyon before embarking on his global journey. His kitchen philosophy centers on respecting the integrity of natural ingredients while challenging sensory expectations through texture and temperature.
            </p>
            
            <p className="font-sans font-light text-sm md:text-base leading-relaxed mb-10 opacity-80">
              Under Alexandre's direction, L'Étoile has received three Michelin stars and has been recognized as one of the world's leading luxury dining establishments. He remains active in the kitchen daily, personally inspecting every plate that leaves the pass.
            </p>

            {/* Signature Block */}
            <div className="mt-4 flex flex-col items-start">
              {/* Elegant cursive name using fonts, or custom stylized text */}
              <span className="font-serif text-3xl font-light italic text-luxury-gold tracking-wide mb-1">
                Alexandre Mercer
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] opacity-60 font-light">
                Chef de Cuisine & Founder
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Chef;
