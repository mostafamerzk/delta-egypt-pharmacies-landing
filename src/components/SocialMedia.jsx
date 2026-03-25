import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';

const SocialMedia = () => {
  const socials = [
    { icon: FaFacebookF, href: '#', label: 'Facebook', color: 'hover:bg-[#1877F2]' },
    { icon: FaInstagram, href: '#', label: 'Instagram', color: 'hover:bg-[#E4405F]' },
    { icon: FaWhatsapp, href: 'https://wa.me/201000000000', label: 'WhatsApp', color: 'hover:bg-[#25D366]' },
    { icon: FaTiktok, href: '#', label: 'TikTok', color: 'hover:bg-[#000000]' },
  ];

  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-white mb-12"
        >
          تابعنا على وسائل التواصل الاجتماعي
        </motion.h3>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ delay: index * 0.1 }}
              className={`w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-gold/30 flex items-center justify-center text-white text-2xl md:text-3xl transition-all duration-300 ${social.color} hover:border-transparent shadow-xl`}
              aria-label={social.label}
            >
              <social.icon />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
