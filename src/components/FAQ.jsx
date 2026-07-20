import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { faqs } from '../data/faqData';

const FAQItem = ({ faq, isOpen, onToggle, isDark }) => {
  return (
    <div className={`border-b transition-colors duration-300 ${
      isDark ? 'border-luxury-gold/15' : 'border-luxury-gold/25'
    }`}>
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between gap-6 text-left focus:outline-none cursor-pointer group"
      >
        <span className={`font-serif text-base md:text-lg font-light tracking-wide transition-colors duration-300 group-hover:text-luxury-gold ${
          isOpen ? 'text-luxury-gold' : ''
        }`}>
          {faq.question}
        </span>
        <div className="flex-shrink-0 text-luxury-gold text-lg">
          {isOpen ? <FiMinus /> : <FiPlus />}
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="font-sans font-light text-xs md:text-sm leading-relaxed pb-6 opacity-75 max-w-3xl">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = ({ isDark }) => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className={`py-24 px-6 md:px-12 transition-colors duration-500 border-t border-luxury-gold/10 ${
      isDark ? 'bg-luxury-dark text-luxury-cream' : 'bg-white text-luxury-black'
    }`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-light mb-3">Questions Fréquentes</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide mb-4">Frequently Asked</h2>
          <div className="w-12 h-[1px] bg-luxury-gold mt-4" />
        </motion.div>

        {/* FAQ Accordion List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex flex-col"
        >
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => handleToggle(faq.id)}
              isDark={isDark}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
