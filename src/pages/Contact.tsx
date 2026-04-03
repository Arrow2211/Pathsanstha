import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, CheckCircle, Clock } from 'lucide-react';

const Contact = () => {
  const { t, language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const data = await res.json();
        alert(`Error: ${data.error || 'Failed to send message'}`);
      }
    } catch (err) {
      alert('Error connecting to server.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#FDFDFD] overflow-x-hidden">
      {/* Page Header - Modern & Premium */}
      <div className="bg-primary-dark py-32 md:py-48 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-grid opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/[0.05] -skew-x-12 translate-x-1/4"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/[0.05] rounded-full blur-[120px]"></div>
        
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-8">Get In Touch</div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-10 tracking-tighter leading-[0.85]">
              {t('contact.title')}
            </h1>
            <div className="w-24 h-2 bg-accent rounded-full mb-12"></div>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl opacity-80 leading-relaxed font-medium">
              {language === 'marathi' 
                ? 'आम्ही तुमच्या सेवेसाठी सदैव तत्पर आहोत. कोणत्याही शंका किंवा मदतीसाठी संपर्क साधा. आमची टीम तुम्हाला मदत करण्यास तयार आहे.' 
                : 'We are here to help you. Reach out to us for any queries or assistance regarding our services. Our dedicated team is ready to assist you.'}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="section-padding relative">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary-dark/5 to-transparent pointer-events-none"></div>
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="card-premium p-10 group">
                  <div className="w-16 h-16 bg-slate-50 text-accent rounded-2xl flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-primary-dark group-hover:text-white transition-all duration-700 shadow-inner">
                    <MapPin size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-black text-primary-dark uppercase tracking-[0.2em] text-[10px] mb-4">{language === 'marathi' ? 'मुख्य कार्यालय' : 'Main Office'}</h3>
                  <p className="text-slate-600 text-base leading-relaxed font-medium opacity-80">{t('contact.address')}</p>
                </div>
                <div className="card-premium p-10 group">
                  <div className="w-16 h-16 bg-slate-50 text-accent rounded-2xl flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-primary-dark group-hover:text-white transition-all duration-700 shadow-inner">
                    <Phone size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-black text-primary-dark uppercase tracking-[0.2em] text-[10px] mb-4">{language === 'marathi' ? 'संपर्क' : 'Contact'}</h3>
                  <p className="text-slate-700 text-lg leading-relaxed font-black mb-1">{t('contact.phone')}</p>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium opacity-80">{t('contact.email')}</p>
                </div>
                <div className="card-premium p-10 md:col-span-2 group">
                  <div className="w-16 h-16 bg-slate-50 text-accent rounded-2xl flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-primary-dark group-hover:text-white transition-all duration-700 shadow-inner">
                    <Clock size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-black text-primary-dark uppercase tracking-[0.2em] text-[10px] mb-6">{language === 'marathi' ? 'कामाची वेळ' : 'Working Hours'}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
                      <p className="text-[9px] uppercase font-black text-slate-400 tracking-[0.2em] mb-2">Mon - Sat</p>
                      <p className="text-primary-dark font-black text-xl tracking-tight">10:00 AM - 05:00 PM</p>
                    </div>
                    <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
                      <p className="text-[9px] uppercase font-black text-slate-400 tracking-[0.2em] mb-2">Sunday</p>
                      <p className="text-accent font-black text-xl tracking-tight uppercase">Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="card-premium h-[500px] p-0 overflow-hidden relative group">
                {t('contact.googleMapsUrl') ? (
                  <iframe
                    src={t('contact.googleMapsUrl')}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Google Maps"
                    className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
                  ></iframe>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-slate-300 flex-col gap-6 bg-slate-50">
                    <MapPin size={64} strokeWidth={1} />
                    <p className="uppercase tracking-[0.4em] text-[10px] font-black">Map View Unavailable</p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div id="contact-form" className="card-premium p-12 md:p-20 relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-full h-3 bg-accent"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-slate-50 rounded-full -translate-y-1/2 translate-x-1/2 -z-10 blur-[80px]"></div>
                
                <div className="flex items-center gap-6 mb-16">
                  <div className="w-1 bg-accent h-12 rounded-full"></div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-1">Inquiry Form</div>
                    <h2 className="text-3xl md:text-4xl font-black text-primary-dark tracking-tighter leading-none">
                      {language === 'marathi' ? 'आम्हाला संदेश पाठवा' : 'Send us a Message'}
                    </h2>
                  </div>
                </div>
                
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-slate-50/50 border border-slate-100 p-16 rounded-[3rem] text-center h-[calc(100%-150px)] flex flex-col justify-center shadow-inner"
                  >
                    <div className="w-24 h-24 bg-green-500 text-white rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-green-200">
                      <CheckCircle size={48} />
                    </div>
                    <h3 className="text-3xl font-black text-primary-dark mb-6 tracking-tighter leading-none">
                      {language === 'marathi' ? 'धन्यवाद!' : 'Thank You!'}
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-xl font-medium opacity-80">
                      {language === 'marathi' 
                        ? 'तुमचा संदेश आम्हाला मिळाला आहे. आम्ही लवकरच तुमच्याशी संपर्क करू.' 
                        : 'We have received your message. Our representative will get back to you shortly.'}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="space-y-4">
                      <label className="text-[10px] uppercase font-black text-slate-400 tracking-[0.3em] ml-1">{t('contact.form.name')}</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-8 py-5 bg-slate-50/50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all text-primary-dark font-black tracking-tight text-lg shadow-inner"
                        placeholder={language === 'marathi' ? 'तुमचे पूर्ण नाव' : 'Your full name'}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <label className="text-[10px] uppercase font-black text-slate-400 tracking-[0.3em] ml-1">{t('contact.form.email')}</label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-8 py-5 bg-slate-50/50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all text-primary-dark font-black tracking-tight text-lg shadow-inner"
                          placeholder="example@mail.com"
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] uppercase font-black text-slate-400 tracking-[0.3em] ml-1">{language === 'marathi' ? 'मोबाईल नंबर' : 'Mobile Number'}</label>
                        <input 
                          type="tel" 
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-8 py-5 bg-slate-50/50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all text-primary-dark font-black tracking-tight text-lg shadow-inner"
                          placeholder={language === 'marathi' ? 'तुमचा मोबाईल नंबर' : 'Your mobile number'}
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] uppercase font-black text-slate-400 tracking-[0.3em] ml-1">{t('contact.form.message')}</label>
                      <textarea 
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-8 py-5 bg-slate-50/50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all text-primary-dark font-black tracking-tight text-lg shadow-inner resize-none"
                        placeholder={language === 'marathi' ? 'तुमचा संदेश येथे लिहा...' : 'Write your message here...'}
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary-dark text-white py-6 rounded-2xl font-black text-[10px] uppercase tracking-[0.5em] hover:bg-accent transition-all shadow-2xl flex items-center justify-center gap-4 group disabled:opacity-50"
                    >
                      <span>{isSubmitting ? (language === 'marathi' ? 'पाठवत आहे...' : 'Sending...') : t('contact.form.submit')}</span>
                      {!isSubmitting && <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

