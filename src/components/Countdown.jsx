import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CountdownUnit = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative bg-navy-dark border-2 border-gold/30 rounded-2xl w-24 h-24 md:w-32 md:h-32 flex items-center justify-center shadow-2xl overflow-hidden glass">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, ease: "backOut" }}
            className="text-4xl md:text-6xl font-poppins font-bold text-gold"
          >
            {value.toString().padStart(2, '0')}
          </motion.span>
        </AnimatePresence>
        
        {/* Subtle decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1/2 border-b border-gold/10 pointer-events-none"></div>
      </div>
      <span className="text-cream text-lg md:text-xl font-bold">{label}</span>
    </div>
  );
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target date: June 1st, 2026 (Launch date)
    const targetDate = new Date('2026-06-01T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gold rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy-light rounded-full blur-3xl translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">موعد الافتتاح</h2>
          <p className="text-gold font-medium uppercase tracking-widest font-poppins text-lg">Coming Soon</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          <CountdownUnit value={timeLeft.days} label="أيام" />
          <CountdownUnit value={timeLeft.hours} label="ساعات" />
          <CountdownUnit value={timeLeft.minutes} label="دقائق" />
          <CountdownUnit value={timeLeft.seconds} label="ثواني" />
        </div>
      </div>
    </section>
  );
};

export default Countdown;
