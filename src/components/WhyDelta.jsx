import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaTags, FaUserMd, FaHistory } from 'react-icons/fa';

const Feature = ({ icon: Icon, title, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center text-center group"
    >
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 flex items-center justify-center text-gold text-4xl mb-6 border border-gold/20 group-hover:bg-gold group-hover:text-navy transition-all duration-500 shadow-2xl">
        <Icon />
      </div>
      <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-gold transition-colors duration-300">{title}</h4>
    </motion.div>
  );
};

const WhyDelta = () => {
  const features = [
    { icon: FaAward, title: 'جودة مضمونة', delay: 0.1 },
    { icon: FaTags, title: 'أسعار تنافسية', delay: 0.2 },
    { icon: FaUserMd, title: 'فريق متخصص', delay: 0.3 },
    { icon: FaHistory, title: 'خدمة 24/7', delay: 0.4 },
  ];

  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-navy-dark via-navy to-navy-dark opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap justify-around gap-12 md:gap-8">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDelta;
