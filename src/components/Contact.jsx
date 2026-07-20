import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

const Contact = ({ isDark }) => {
  return (
    <section id="contact" className={`py-24 px-6 md:px-12 transition-colors duration-500 border-t border-luxury-gold/10 ${
      isDark ? 'bg-luxury-black text-luxury-cream' : 'bg-luxury-cream text-luxury-black'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-light mb-3">Informations de Contact</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide mb-4">Location & Hours</h2>
          <div className="w-12 h-[1px] bg-luxury-gold mt-4" />
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Column 1: Details & Hours */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between gap-8 text-left"
          >
            {/* Opening Hours Card */}
            <div className={`p-8 rounded-xl border flex-grow ${
              isDark ? 'glass-card border-luxury-gold/10' : 'glass-card-light border-luxury-gold/15'
            }`}>
              <div className="flex items-center gap-3 mb-6 text-luxury-gold">
                <FiClock className="text-xl" />
                <h3 className="font-serif text-lg tracking-wide">Hours of Service</h3>
              </div>
              <div className="space-y-4 font-sans text-xs md:text-sm font-light">
                <div className="flex justify-between border-b border-luxury-gold/10 pb-2">
                  <span className="opacity-75">Wednesday – Sunday (Dinner)</span>
                  <span className="font-medium text-luxury-gold">5:30 PM – 11:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-luxury-gold/10 pb-2">
                  <span className="opacity-75">Friday – Sunday (Lunch)</span>
                  <span className="font-medium text-luxury-gold">12:00 PM – 3:00 PM</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span className="opacity-75">Monday & Tuesday</span>
                  <span className="italic opacity-60">Closed</span>
                </div>
              </div>
            </div>

            {/* Contact Details Card */}
            <div className={`p-8 rounded-xl border flex-grow ${
              isDark ? 'glass-card border-luxury-gold/10' : 'glass-card-light border-luxury-gold/15'
            }`}>
              <div className="flex items-center gap-3 mb-6 text-luxury-gold">
                <FiMapPin className="text-xl" />
                <h3 className="font-serif text-lg tracking-wide">The Residence</h3>
              </div>
              <div className="space-y-6 font-sans text-xs md:text-sm font-light">
                <div className="flex gap-4 items-start">
                  <div className="text-luxury-gold mt-1"><FiMapPin /></div>
                  <p className="opacity-80">
                    75 Avenue des Champs-Élysées,<br />
                    75008 Paris, France
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-luxury-gold mt-1"><FiPhone /></div>
                  <p className="opacity-80">
                    +33 1 45 67 89 10 (Direct Concierge)<br />
                    +33 1 45 67 89 20 (Private Dining)
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-luxury-gold mt-1"><FiMail /></div>
                  <p className="opacity-80">
                    concierge@letoile-paris.com<br />
                    events@letoile-paris.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Stylized Luxury Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7 rounded-xl overflow-hidden border border-luxury-gold/10 shadow-2xl relative min-h-[350px]"
          >
            {/* Real OpenStreetMap Stylized Iframe or Premium Static Fallback */}
            <iframe
              title="L'Étoile Paris Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.238914619717!2d2.3015486769062325!3d48.87271960032997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc1ff72cb25%3A0xe5a3630f53bb1082!2s75%20Av.%20des%20Champs-%C3%89lys%C3%A9es%2C%2075008%20Paris%2C%20France!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: isDark ? 'invert(90%) hue-rotate(180deg) contrast(1.15)' : 'none' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />
            {/* Subtle aesthetic border overlay */}
            <div className="absolute inset-0 border-2 border-luxury-gold/5 pointer-events-none rounded-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
