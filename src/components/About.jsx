import { motion } from 'framer-motion';

const About = ({ isDark }) => {
  // Counters or stats
  const stats = [
    { value: '3', label: 'Michelin Stars' },
    { value: '15', label: 'Years of Artistry' },
    { value: '12k+', label: 'Grand Cru Cellar' }
  ];

  return (
    <section id="about" className={`py-24 px-6 md:px-12 transition-colors duration-500 ${
      isDark ? 'bg-luxury-black text-luxury-cream' : 'bg-luxury-cream text-luxury-black'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col text-left"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-light mb-3">Our Legacy</span>
            <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight mb-8">
              A Symphony of Flavor, Precision, and Luxury
            </h2>
            
            <div className="w-12 h-[1px] bg-luxury-gold mb-8" />

            <p className="font-sans font-light text-sm md:text-base leading-relaxed mb-6 opacity-80">
              Founded in 2011, L'Étoile was born out of a desire to create a sanctuary where dining is elevated to an art form. Every dish on our menu is a testament to the pursuit of culinary perfection, curated by Executive Chef Alexandre Mercer.
            </p>
            <p className="font-sans font-light text-sm md:text-base leading-relaxed mb-12 opacity-80">
              We source our ingredients from local biodynamic farms and select rare items globally, marrying ancient French cooking foundations with modern techniques. The result is a dining experience that surprises, delights, and leaves a lasting memory.
            </p>

            {/* Brand Stats Grid */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-luxury-gold/15">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col text-left">
                  <span className="font-serif text-2xl md:text-4xl text-luxury-gold font-light mb-1">
                    {stat.value}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest opacity-60 font-light leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Overlapping Luxury Image Stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative h-[450px] md:h-[550px] w-full flex items-center justify-center lg:justify-end"
          >
            {/* Background decorative frame */}
            <div className="absolute right-12 top-6 bottom-12 left-6 border border-luxury-gold/15 rounded-lg -z-0 pointer-events-none" />

            {/* Primary/Large Image: Dining Salon */}
            <div className="absolute top-12 left-0 right-16 bottom-24 overflow-hidden rounded-lg shadow-2xl border border-luxury-gold/10">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="/images/interior-salon.jpg"
                alt="L'Étoile Dining Salon"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlapping Secondary Image: Signature Caviar Dish */}
            <div className="absolute bottom-6 right-0 w-[200px] md:w-[280px] h-[150px] md:h-[210px] overflow-hidden rounded-lg shadow-2xl border border-luxury-gold/20">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="/images/caviar.jpg"
                alt="Signature Dish Caviar"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
