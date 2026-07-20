import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  // Replace with actual phone number if needed
  const whatsappUrl = "https://wa.me/1234567890?text=I%20would%20like%20to%20inquire%20about%20a%20reservation%20at%20L'Etoile.";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed left-6 bottom-6 z-50 flex items-center gap-3 rounded-full border border-luxury-gold/40 bg-luxury-black/90 px-4 py-3 text-luxury-cream shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-luxury-gold group md:left-8 md:bottom-8 focus:outline-none"
      aria-label="Contact Concierge via WhatsApp"
    >
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-luxury-gold text-luxury-black transition-transform duration-300 group-hover:rotate-12">
        <FaWhatsapp className="text-sm" />
      </div>
      <div className="flex flex-col text-left leading-none">
        <span className="text-[10px] uppercase tracking-widest text-luxury-gold/80 font-light">Concierge</span>
        <span className="text-xs font-medium tracking-wide">Direct Line</span>
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
