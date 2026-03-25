import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import About from './components/About';
import Services from './components/Services';
import WhyDelta from './components/WhyDelta';
import ContactNumbers from './components/ContactNumbers';
import FeedbackForm from './components/FeedbackForm';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-x-hidden selection:bg-gold selection:text-navy">
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[9999] bg-navy flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ 
                scale: [0.5, 1.1, 1], 
                opacity: 1,
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mb-8 w-32 h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden border-4 border-gold/30 shadow-2xl shadow-gold/20"
            >
              <img src="/logo.png" alt="Delta Egypt Pharmacies Logo" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <h2 className="text-white text-2xl font-bold mb-2">صيدليات دلتا مصر</h2>
              <div className="flex gap-1 justify-center">
                <motion.div 
                  animate={{ opacity: [0.3, 1, 0.3] }} 
                  transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                  className="w-2 h-2 rounded-full bg-gold"
                ></motion.div>
                <motion.div 
                  animate={{ opacity: [0.3, 1, 0.3] }} 
                  transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                  className="w-2 h-2 rounded-full bg-gold"
                ></motion.div>
                <motion.div 
                  animate={{ opacity: [0.3, 1, 0.3] }} 
                  transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                  className="w-2 h-2 rounded-full bg-gold"
                ></motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`${loading ? 'hidden' : 'block'}`}>
        <Navbar />
        <main>
          <Hero />
          <Countdown />
          <About />
          <Services />
          <WhyDelta />
          <ContactNumbers />
          <FeedbackForm />
          <SocialMedia />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
