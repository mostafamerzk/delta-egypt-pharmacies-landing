import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaPaperPlane } from 'react-icons/fa';

const FeedbackForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

  const onSubmit = async (data) => {
    // Simulate API call
    console.log(data);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitted(true);
    reset();
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-navy rounded-3xl overflow-hidden shadow-2xl relative"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy-light/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="grid md:grid-cols-5 h-full">
              {/* Info Side */}
              <div className="md:col-span-2 bg-gradient-to-br from-navy to-navy-dark p-12 flex flex-col justify-center text-white border-l border-white/5">
                <h3 className="text-3xl font-bold mb-6">يهمنا <span className="text-gold">رأيك</span></h3>
                <p className="text-cream/70 text-lg leading-relaxed mb-8">
                  في صيدليات دلتا مصر، نسعى دائماً لتطوير خدماتنا. ملاحظاتك ومقترحاتك هي سر نجاحنا.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold"></div>
                    <span>استجابة سريعة لشكواكم</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold"></div>
                    <span>دراسة مقترحاتكم بعناية</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold"></div>
                    <span>تحسين مستمر لخدماتنا</span>
                  </div>
                </div>
              </div>

              {/* Form Side */}
              <div className="md:col-span-3 p-8 md:p-12 relative">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      {/* Name */}
                      <div>
                        <label className="block text-cream/80 mb-2 font-bold">الاسم الكامل</label>
                        <input
                          {...register('fullName', { required: 'هذا الحقل مطلوب' })}
                          className={`w-full bg-white/10 border ${errors.fullName ? 'border-red-500' : 'border-white/20'} rounded-xl py-3 px-4 text-white placeholder-white/30 focus:outline-none focus:border-gold transition-colors`}
                          placeholder="أدخل اسمك الثلاثي"
                        />
                        {errors.fullName && <span className="text-red-400 text-sm mt-1">{errors.fullName.message}</span>}
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        {/* Phone */}
                        <div>
                          <label className="block text-cream/80 mb-2 font-bold">رقم الهاتف</label>
                          <input
                            {...register('phone', { required: 'هذا الحقل مطلوب' })}
                            className={`w-full bg-white/10 border ${errors.phone ? 'border-red-500' : 'border-white/20'} rounded-xl py-3 px-4 text-white placeholder-white/30 focus:outline-none focus:border-gold transition-colors font-poppins`}
                            placeholder="010 0000 0000"
                            dir="ltr"
                          />
                        </div>
                        {/* Type */}
                        <div>
                          <label className="block text-cream/80 mb-2 font-bold">نوع الرسالة</label>
                          <select
                            {...register('type')}
                            className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-gold transition-colors appearance-none"
                            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'white\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'left 1rem center', backgroundSize: '1.2rem' }}
                          >
                            <option value="complaint" className="bg-navy">شكوى</option>
                            <option value="suggestion" className="bg-navy">مقترح</option>
                            <option value="inquiry" className="bg-navy">استفسار</option>
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-cream/80 mb-2 font-bold">الرسالة</label>
                        <textarea
                          {...register('message', { required: 'هذا الحقل مطلوب' })}
                          rows={4}
                          className={`w-full bg-white/10 border ${errors.message ? 'border-red-500' : 'border-white/20'} rounded-xl py-3 px-4 text-white placeholder-white/30 focus:outline-none focus:border-gold transition-colors resize-none`}
                          placeholder="اكتب رسالتك هنا..."
                        ></textarea>
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gold hover:bg-gold-light text-navy font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-95 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <div className="w-6 h-6 border-2 border-navy border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                          <>
                            <FaPaperPlane className="rtl-flip" />
                            إرسال الرسالة
                          </>
                        )}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="h-full flex flex-col items-center justify-center text-center py-12"
                    >
                      <div className="w-24 h-24 bg-gold/20 rounded-full flex items-center justify-center text-gold text-6xl mb-6">
                        <FaCheckCircle />
                      </div>
                      <h4 className="text-3xl font-bold text-white mb-4">تم الإرسال بنجاح!</h4>
                      <p className="text-cream/70 text-lg mb-8">شكراً لك على تواصلك معنا. سنقوم بمراجعة رسالتك والرد عليك في أقرب وقت.</p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-gold font-bold hover:underline"
                      >
                        إرسال رسالة أخرى
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackForm;
