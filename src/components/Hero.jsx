import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import { GiMedicines, GiStethoscope, GiDna2 } from 'react-icons/gi';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const floatingIcons = [
    { Icon: GiMedicines, top: '20%', left: '10%', delay: 0 },
    { Icon: GiStethoscope, top: '60%', left: '15%', delay: 1 },
    { Icon: GiDna2, top: '30%', right: '10%', delay: 2 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-black opacity-90 z-0"></div>

      {/* Floating Animated Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-white/5 text-7xl md:text-9xl z-0"
          style={{ top: item.top, left: item.left, right: item.right }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut"
          }}
        >
          <item.Icon />
        </motion.div>
      ))}

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 text-center z-10"
      >
        <motion.div 
          variants={itemVariants} 
          className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1 mb-8"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-gold"></span>
          </span>
          <span className="text-gold text-sm font-bold">قريباً في صعيد مصر</span>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          صحتك.. أمانة في أيدٍ <span className="text-gold">موثوقة</span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-cream/80 max-w-3xl mx-auto mb-12"
        >
          صيدليات دلتا مصر — نسعى نكون الخيار الأول لخدمتك في قلب الصعيد، بخبرة وكفاءة واهتمام حقيقي.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="w-full md:w-auto bg-gold hover:bg-gold-light text-navy font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl shadow-gold/20"
          >
            تواصل معنا
          </a>
          <a
            href="#about"
            className="w-full md:w-auto border-2 border-gold/50 hover:border-gold text-gold font-bold py-4 px-10 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
          >
            اعرف أكثر
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Down */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 text-3xl cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <HiArrowDown />
      </motion.div>
    </section>
  );
};

export default Hero;
