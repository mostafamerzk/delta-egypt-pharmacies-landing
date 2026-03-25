import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { FaEye, FaBullseye, FaChartBar, FaUserTie } from 'react-icons/fa';

const Counter = ({ value, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { stiffness: 60, damping: 20 });
  const display = useTransform(spring, (current) => Math.floor(current));

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return (
    <div ref={ref} className="text-center p-6 bg-white rounded-3xl shadow-xl shadow-gold/5 border border-gold/10">
      <motion.span className="text-4xl md:text-5xl font-bold text-navy block mb-2 font-poppins">
        {display}
      </motion.span>
      <span className="text-gold font-bold text-lg md:text-xl">{label}</span>
      <span className="text-navy/50 text-2xl font-bold ml-1 font-poppins">+</span>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-cream relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:order-last"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-gold/20 aspect-square md:aspect-video lg:aspect-square">
              <img
                src="https://placehold.co/800x800/1B2C6E/B8943F?text=Delta+Egypt+Pharmacies"
                alt="Delta Egypt Pharmacies"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-navy/20 mix-blend-multiply"></div>
            </div>
            {/* Decorative boxes */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gold/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute top-1/2 -left-8 bg-navy text-white p-6 rounded-2xl shadow-2xl hidden md:block">
              <p className="text-lg font-bold">رؤية جديدة</p>
              <p className="text-gold font-poppins text-sm uppercase">Innovation in Health</p>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gold font-bold text-xl mb-4 tracking-widest uppercase">من نحن</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-navy mb-8 leading-tight">شريكك الصحي الموثوق في صعيد مصر</h3>
            <p className="text-navy/70 text-lg md:text-xl mb-12 leading-loose">
              مجموعة صيدليات دلتا مصر هي سلسلة صيدليات متكاملة تسعى إلى تقديم خدمة دوائية وصحية عالية الجودة لأبناء صعيد مصر، بأسعار مناسبة وكوادر بشرية متخصصة. نحن نؤمن بأن الصيدلية ليست مجرد مكان لبيع الدواء، بل هي ركن أساسي في الرعاية الصحية الشاملة.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold text-2xl shrink-0 shadow-inner">
                  <FaEye />
                </div>
                <div>
                  <h4 className="text-navy font-bold text-xl mb-2">رؤيتنا</h4>
                  <p className="text-navy/60 leading-relaxed">أن نصبح سلسلة الصيدليات الرائدة والأكثر ثقة في منطقة الصعيد برؤية عصرية.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold text-2xl shrink-0 shadow-inner">
                  <FaBullseye />
                </div>
                <div>
                  <h4 className="text-navy font-bold text-xl mb-2">رسالتنا</h4>
                  <p className="text-navy/60 leading-relaxed">توفير الدواء والرعاية الصحية بكل أمانة واحترافية لكافة فئات المجتمع في صعيد مصر.</p>
                </div>
              </div>
            </div>

            {/* Counters */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
              <Counter value={5} label="عدد الفروع" />
              <Counter value={15} label="سنوات الخبرة" />
              <Counter value={5000} label="عدد المنتجات" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
