import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'الرئيسية', href: '#' },
    { title: 'من نحن', href: '#about' },
    { title: 'خدماتنا', href: '#services' },
    { title: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="relative w-12 h-12 md:w-16 md:h-16 overflow-hidden rounded-full border-2 border-gold/20 shadow-lg">
             <img src="/logo.png" alt="Delta Egypt Pharmacies Logo" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg md:text-xl leading-none">صيدليات دلتا مصر</span>
            <span className="text-gold text-xs font-poppins tracking-wider">DELTA EGYPT PHARMACIES</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="relative text-white font-medium hover:text-gold transition-colors duration-300 group"
            >
              {link.title}
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="tel:+201000000000"
            className="bg-gold hover:bg-gold-light text-navy font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            اتصل بنا
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-dark border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-lg font-medium hover:text-gold transition-colors duration-300 py-2 border-b border-white/5"
                >
                  {link.title}
                </a>
              ))}
              <a
                href="tel:+201000000000"
                className="bg-gold text-navy font-bold py-3 px-6 rounded-xl text-center"
                onClick={() => setIsOpen(false)}
              >
                اتصل بنا الآن
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
