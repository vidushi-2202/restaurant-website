import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCalendar, FiClock, FiUsers, FiCheckCircle, FiX } from 'react-icons/fi';

const timeSlots = ["5:30 PM", "6:00 PM", "7:30 PM", "8:00 PM", "9:30 PM"];
const guestOptions = ["1 Guest", "2 Guests", "3 Guests", "4 Guests", "5 Guests", "6 Guests", "7 Guests", "8 Guests"];

const Reservation = ({ isDark }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '7:30 PM',
    guests: '2 Guests',
    dietary: '',
  });

  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [bookingCode, setBookingCode] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.date) {
      alert("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setBookingCode('LE-' + Math.floor(100000 + Math.random() * 900000));
      setShowSuccess(true);
    }, 1500);
  };

  const closeSuccess = () => {
    setShowSuccess(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '7:30 PM',
      guests: '2 Guests',
      dietary: '',
    });
  };

  return (
    <section id="reservation" className={`py-24 px-6 md:px-12 transition-colors duration-500 border-t border-luxury-gold/10 ${
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
          <span className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-light mb-3">Table Rerservation</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide mb-4">Secure Your Experience</h2>
          <div className="w-12 h-[1px] bg-luxury-gold mt-4" />
        </motion.div>

        {/* Reservation Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          onSubmit={handleSubmit}
          className={`p-8 md:p-12 rounded-xl border ${
            isDark
              ? 'glass-card border-luxury-gold/10'
              : 'glass-card-light border-luxury-gold/15'
          } shadow-2xl relative overflow-hidden`}
        >
          {/* Subtle star motif in background */}
          <div className="absolute right-0 top-0 opacity-[0.02] text-9xl text-luxury-gold select-none pointer-events-none transform translate-x-12 -translate-y-12">✦</div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div className="flex flex-col text-left">
              <label className="text-[10px] uppercase tracking-widest text-luxury-gold mb-2 font-light">Full Name *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Lord / Lady Surname"
                className={`px-4 py-3 text-sm rounded bg-transparent border focus:outline-none transition-colors duration-300 ${
                  isDark
                    ? 'border-luxury-gold/20 focus:border-luxury-gold text-luxury-cream placeholder:text-luxury-cream/30'
                    : 'border-luxury-gold/30 focus:border-luxury-gold text-luxury-black placeholder:text-luxury-black/35'
                }`}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col text-left">
              <label className="text-[10px] uppercase tracking-widest text-luxury-gold mb-2 font-light">Email Address *</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@luxury.com"
                className={`px-4 py-3 text-sm rounded bg-transparent border focus:outline-none transition-colors duration-300 ${
                  isDark
                    ? 'border-luxury-gold/20 focus:border-luxury-gold text-luxury-cream placeholder:text-luxury-cream/30'
                    : 'border-luxury-gold/30 focus:border-luxury-gold text-luxury-black placeholder:text-luxury-black/35'
                }`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Phone */}
            <div className="flex flex-col text-left">
              <label className="text-[10px] uppercase tracking-widest text-luxury-gold mb-2 font-light">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className={`px-4 py-3 text-sm rounded bg-transparent border focus:outline-none transition-colors duration-300 ${
                  isDark
                    ? 'border-luxury-gold/20 focus:border-luxury-gold text-luxury-cream placeholder:text-luxury-cream/30'
                    : 'border-luxury-gold/30 focus:border-luxury-gold text-luxury-black placeholder:text-luxury-black/35'
                }`}
              />
            </div>

            {/* Date */}
            <div className="flex flex-col text-left relative">
              <label className="text-[10px] uppercase tracking-widest text-luxury-gold mb-2 font-light">Select Date *</label>
              <div className="relative">
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 pl-10 text-sm rounded bg-transparent border focus:outline-none transition-colors duration-300 ${
                    isDark
                      ? 'border-luxury-gold/20 focus:border-luxury-gold text-luxury-cream color-scheme-dark'
                      : 'border-luxury-gold/30 focus:border-luxury-gold text-luxury-black'
                  }`}
                />
                <FiCalendar className="absolute left-3.5 top-3.5 text-luxury-gold" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Time Slot */}
            <div className="flex flex-col text-left">
              <label className="text-[10px] uppercase tracking-widest text-luxury-gold mb-2 font-light">Preferred Time Slot *</label>
              <div className="relative">
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 pl-10 text-sm rounded bg-transparent border focus:outline-none transition-colors duration-300 appearance-none ${
                    isDark
                      ? 'border-luxury-gold/20 focus:border-luxury-gold text-luxury-cream [&>option]:bg-luxury-black [&>option]:text-luxury-cream'
                      : 'border-luxury-gold/30 focus:border-luxury-gold text-luxury-black [&>option]:bg-white [&>option]:text-luxury-black'
                  }`}
                >
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
                <FiClock className="absolute left-3.5 top-3.5 text-luxury-gold" />
              </div>
            </div>

            {/* Guests */}
            <div className="flex flex-col text-left">
              <label className="text-[10px] uppercase tracking-widest text-luxury-gold mb-2 font-light">Number of Guests *</label>
              <div className="relative">
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 pl-10 text-sm rounded bg-transparent border focus:outline-none transition-colors duration-300 appearance-none ${
                    isDark
                      ? 'border-luxury-gold/20 focus:border-luxury-gold text-luxury-cream [&>option]:bg-luxury-black [&>option]:text-luxury-cream'
                      : 'border-luxury-gold/30 focus:border-luxury-gold text-luxury-black [&>option]:bg-white [&>option]:text-luxury-black'
                  }`}
                >
                  {guestOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <FiUsers className="absolute left-3.5 top-3.5 text-luxury-gold" />
              </div>
            </div>
          </div>

          {/* Special Requests */}
          <div className="flex flex-col text-left mb-8">
            <label className="text-[10px] uppercase tracking-widest text-luxury-gold mb-2 font-light">Special Dietary Requests & Notes</label>
            <textarea
              name="dietary"
              rows="4"
              value={formData.dietary}
              onChange={handleChange}
              placeholder="Please let us know of any severe food allergies, milestone celebrations, or seating preferences..."
              className={`px-4 py-3 text-sm rounded bg-transparent border focus:outline-none transition-colors duration-300 resize-none ${
                isDark
                  ? 'border-luxury-gold/20 focus:border-luxury-gold text-luxury-cream placeholder:text-luxury-cream/30'
                  : 'border-luxury-gold/30 focus:border-luxury-gold text-luxury-black placeholder:text-luxury-black/35'
              }`}
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full text-xs uppercase tracking-[0.25em] font-medium text-luxury-black bg-luxury-gold py-4 rounded hover:bg-luxury-gold-hover transition-colors duration-300 shadow-lg flex items-center justify-center gap-3 cursor-pointer"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-luxury-black border-t-transparent rounded-full animate-spin" />
                Requesting Booking...
              </>
            ) : "Request Reservation"}
          </motion.button>

          <p className="text-[10px] text-center opacity-50 mt-4 font-light">
            Note: All bookings remain tentative until confirmed via phone or email by our guest concierge within 24 hours.
          </p>
        </motion.form>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSuccess}
            className="fixed inset-0 z-50 flex items-center justify-center bg-luxury-black/90 p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className={`max-w-md w-full p-8 rounded-xl border text-center shadow-2xl relative ${
                isDark ? 'bg-luxury-dark border-luxury-gold/20 text-luxury-cream' : 'bg-white border-luxury-gold/30 text-luxury-black'
              }`}
            >
              <button
                onClick={closeSuccess}
                className="absolute top-4 right-4 opacity-60 hover:opacity-100 transition-opacity text-xl focus:outline-none cursor-pointer"
              >
                <FiX />
              </button>

              <div className="flex justify-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.15, type: "spring", stiffness: 150 }}
                  className="text-luxury-gold text-5xl"
                >
                  <FiCheckCircle />
                </motion.div>
              </div>

              <h3 className="font-serif text-2xl font-light tracking-wide mb-2">Reservation Request Received</h3>
              <p className="text-xs uppercase tracking-widest text-luxury-gold font-light mb-6">Reference: {bookingCode}</p>

              <div className="w-12 h-[1px] bg-luxury-gold mx-auto mb-6" />

              <div className="text-left font-sans text-xs md:text-sm font-light space-y-3 opacity-90 mb-8 max-w-xs mx-auto">
                <p><strong className="text-luxury-gold font-medium">Guest:</strong> {formData.name}</p>
                <p><strong className="text-luxury-gold font-medium">Table for:</strong> {formData.guests}</p>
                <p><strong className="text-luxury-gold font-medium">Date:</strong> {formData.date}</p>
                <p><strong className="text-luxury-gold font-medium">Time Slot:</strong> {formData.time}</p>
              </div>

              <p className="font-sans text-[11px] md:text-xs opacity-75 font-light leading-relaxed mb-6">
                A verification link has been sent to <strong>{formData.email}</strong>. Our guest services concierge will call you at <strong>{formData.phone}</strong> shortly to finalize your dining configuration.
              </p>

              <button
                onClick={closeSuccess}
                className="text-xs uppercase tracking-[0.2em] font-medium text-luxury-black bg-luxury-gold px-8 py-3.5 rounded shadow hover:bg-luxury-gold-hover transition-colors duration-300 w-full cursor-pointer"
              >
                Return to L'Étoile
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Reservation;
