import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white pt-20 pb-10 border-t border-gold/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="md:col-span-2">
             <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold/20">
                  <img src="/logo.png" alt="Delta Egypt Pharmacies Logo" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">صيدليات دلتا مصر</span>
                  <span className="text-gold text-xs font-poppins tracking-wider">DELTA EGYPT PHARMACIES</span>
                </div>
             </div>
             <p className="text-cream/60 text-lg leading-relaxed max-w-md">
               نسعى جاهدين لنكون الشريك الصحي الأول في صعيد مصر، من خلال تقديم خدمات صيدلانية متميزة وتوفير الدواء والرعاية لكل مريض.
             </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-gold">روابط سريعة</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-cream/60 hover:text-gold transition-colors">الرئيسية</a></li>
              <li><a href="#about" className="text-cream/60 hover:text-gold transition-colors">من نحن</a></li>
              <li><a href="#services" className="text-cream/60 hover:text-gold transition-colors">خدماتنا</a></li>
              <li><a href="#contact" className="text-cream/60 hover:text-gold transition-colors">تواصل معنا</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-gold">معلومات الاتصال</h4>
            <ul className="space-y-4 text-cream/60">
              <li className="flex items-center gap-3">
                <span className="text-gold font-bold">العنوان:</span>
                <span>صعيد مصر، جمهورية مصر العربية</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gold font-bold">الهاتف:</span>
                <span className="font-poppins">19XXX</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gold font-bold">البريد:</span>
                <span className="font-poppins">info@deltamisr.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-cream/40 text-center md:text-right">
            © {currentYear} صيدليات دلتا مصر — جميع الحقوق محفوظة
          </p>
          <div className="flex items-center gap-6 text-cream/40 text-sm">
            <a href="#" className="hover:text-gold transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-gold transition-colors">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
