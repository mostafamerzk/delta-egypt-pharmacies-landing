import React from 'react';
import { motion } from 'framer-motion';
import { FaTruck, FaStethoscope, FaCapsules, FaAirFreshener, FaWheelchair, FaGift } from 'react-icons/fa';

const ServiceCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      className="bg-white p-8 rounded-3xl shadow-xl shadow-navy/5 border border-gold/10 group hover:border-gold transition-all duration-300 relative overflow-hidden h-full"
    >
      {/* Background Glow */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/20 transition-all duration-500"></div>
      
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-navy flex items-center justify-center text-gold text-3xl mb-6 shadow-xl shadow-navy/20 group-hover:scale-110 group-hover:bg-gold group-hover:text-navy transition-all duration-300">
          <Icon />
        </div>
        <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-gold transition-colors duration-300">{title}</h3>
        <p className="text-navy/60 leading-relaxed text-lg">{description}</p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      icon: FaTruck,
      title: 'توصيل الأدوية للمنزل',
      description: 'نصلك أينما كنت في أسرع وقت ممكن، مع الحفاظ على سلامة الدواء وجودته.',
    },
    {
      icon: FaStethoscope,
      title: 'استشارة صيدلانية مجانية',
      description: 'نقدم لك النصيحة الطبية المتخصصة حول كيفية استخدام الدواء والتعامل معه.',
    },
    {
      icon: FaCapsules,
      title: 'أدوية مزمنة ومستمرة',
      description: 'نلتزم بتوفير احتياجاتك من أدوية الأمراض المزمنة بانتظام ودون انقطاع.',
    },
    {
      icon: FaAirFreshener,
      title: 'مستحضرات تجميل معتمدة',
      description: 'تشكيلة واسعة من أشهر العلامات التجارية العالمية الموثوقة للعناية بالبشرة والشعر.',
    },
    {
      icon: FaWheelchair,
      title: 'أجهزة طبية منزلية',
      description: 'نوفر أجهزة قياس الضغط والسكر والمعدات الطبية المساعدة بجودة عالية.',
    },
    {
      icon: FaGift,
      title: 'برنامج ولاء للعملاء',
      description: 'عروض حصرية ونقاط ومكافآت لكل عملائنا الأوفياء ضمن برنامج دلتا بلس.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-bold text-xl mb-4 tracking-widest uppercase"
          >
            خدماتنا
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-navy mb-6"
          >
            نهتم بكل تفاصيل <span className="text-gold">رعايتك</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-navy/60 text-xl"
          >
            نسعى لتقديم تجربة صيدلانية متكاملة تجمع بين السرعة والدقة والاهتمام الإنساني.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
