import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const ContactNumbers = () => {
  return (
    <section id="contact" className="py-24 bg-cream relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-gold font-bold text-xl mb-4 tracking-widest uppercase">تواصل معنا</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-navy mb-8">تواصل معنا أو اطلب توصيلك الآن</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto items-center justify-center">
          
          {/* Phone Number 1 */}
          <motion.a
            href="tel:+201000000000"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-10 rounded-3xl shadow-2xl border border-gold/10 flex flex-col items-center group transition-all duration-300"
          >
            <div className="relative mb-6">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-gold/20 rounded-full blur-xl"
              ></motion.div>
              <div className="w-20 h-20 rounded-full bg-navy flex items-center justify-center text-gold text-3xl relative z-10 group-hover:bg-gold group-hover:text-navy transition-all duration-300 shadow-xl">
                <FaPhoneAlt />
              </div>
            </div>
            <span className="text-navy/50 font-bold mb-2 uppercase tracking-wide">الخط الساخن</span>
            <span className="text-3xl md:text-4xl font-poppins font-bold text-navy">19XXX</span>
          </motion.a>

          {/* Phone Number 2 */}
          <motion.a
            href="tel:+201000000000"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: 0.1 }}
            className="bg-navy p-10 rounded-3xl shadow-2xl border border-white/10 flex flex-col items-center group transition-all duration-300"
          >
            <div className="relative mb-6">
              <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center text-navy text-3xl relative z-10 group-hover:bg-white group-hover:text-gold transition-all duration-300 shadow-xl shadow-gold/20">
                <FaPhoneAlt />
              </div>
            </div>
            <span className="text-gold/50 font-bold mb-2 uppercase tracking-wide">خدمة التوصيل</span>
            <span className="text-3xl md:text-4xl font-poppins font-bold text-white">010 0000 0000</span>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/201000000000"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: 0.2 }}
            className="bg-green-500 p-10 rounded-3xl shadow-2xl border border-white/10 flex flex-col items-center group transition-all duration-300"
          >
            <div className="relative mb-6">
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-4 bg-white/20 rounded-full blur-lg"
              ></motion.div>
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-green-500 text-4xl relative z-10 shadow-xl">
                <FaWhatsapp />
              </div>
            </div>
            <span className="text-white font-bold mb-2 uppercase tracking-wide">راسلنا على واتساب</span>
            <span className="text-3xl md:text-4xl font-poppins font-bold text-white">WhatsApp</span>
          </motion.a>

        </div>
      </div>
    </section>
  );
};

export default ContactNumbers;
