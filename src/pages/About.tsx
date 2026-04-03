import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Landmark, Target, Eye, History, ShieldCheck, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const { t, language } = useLanguage();

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
            <div className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-8">Our Journey</div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-10 tracking-tighter leading-[0.85]">
              {t('about.title')}
            </h1>
            <div className="w-24 h-2 bg-accent rounded-full mb-12"></div>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl opacity-80 leading-relaxed font-medium">
              {language === 'marathi' 
                ? 'आमचा वारसा आणि विश्वासाची परंपरा. २५ वर्षांहून अधिक काळ आम्ही तुमच्या प्रगतीचे भागीदार आहोत.' 
                : 'Our legacy of trust and commitment to excellence. For over 25 years, we have been your partners in progress.'}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="section-padding relative">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary-dark/5 to-transparent pointer-events-none"></div>
        <div className="section-container relative z-10">
          {/* Intro Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center space-x-4 text-accent font-black text-[10px] uppercase tracking-[0.4em] mb-10">
                <div className="w-12 h-[2px] bg-accent"></div>
                <span>{language === 'marathi' ? 'आमचा वारसा' : 'Our Legacy'}</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-primary-dark mb-12 leading-[1.1] tracking-tighter">
                {language === 'marathi' ? 'आमचा इतिहास आणि परंपरा' : 'Our History & Tradition'}
              </h2>
              <p className="text-slate-600 text-xl md:text-2xl leading-relaxed mb-16 font-medium opacity-80">
                {t('about.intro')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="p-10 card-premium border-l-8 border-l-primary-dark">
                  <p className="text-[10px] uppercase font-black text-slate-400 tracking-[0.3em] mb-3">Registration</p>
                  <p className="text-xl font-black text-primary-dark tracking-tight">{t('about.regNo')}</p>
                </div>
                <div className="p-10 card-premium border-l-8 border-l-accent">
                  <p className="text-[10px] uppercase font-black text-slate-400 tracking-[0.3em] mb-3">Established</p>
                  <p className="text-xl font-black text-primary-dark tracking-tight">{t('about.regDate')}</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="p-8 bg-white rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] relative z-10 overflow-hidden border border-slate-100">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1661906789703-a25a1e53180e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="History" 
                  className="rounded-[3rem] w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-12 -left-12 bg-primary-dark text-white p-12 rounded-[3rem] shadow-2xl border-b-[16px] border-accent hidden md:block z-20 backdrop-blur-2xl">
                <p className="text-7xl font-black mb-2 tracking-tighter">25+</p>
                <p className="text-[10px] uppercase font-black tracking-[0.4em] text-accent">{language === 'marathi' ? 'वर्षांचा विश्वास' : 'Years of Trust'}</p>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-accent/5 rounded-full blur-[120px] -z-10"></div>
            </motion.div>
          </div>

          {/* Mission & Vision - Modern Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-40">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-16 md:p-24 card-premium group"
            >
              <div className="w-24 h-24 bg-slate-50 rounded-[2rem] flex items-center justify-center text-accent mb-12 group-hover:bg-primary-dark group-hover:text-white transition-all duration-700 shadow-inner">
                <Target size={48} strokeWidth={1.5} />
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-4">Our Purpose</div>
              <h3 className="text-4xl font-black text-primary-dark mb-10 uppercase tracking-tight leading-none">
                {language === 'marathi' ? 'ध्येय (Mission)' : 'Mission'}
              </h3>
              <p className="text-slate-600 text-xl md:text-2xl leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                {t('about.mission')}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-16 md:p-24 card-premium group"
            >
              <div className="w-24 h-24 bg-slate-50 rounded-[2rem] flex items-center justify-center text-accent mb-12 group-hover:bg-primary-dark group-hover:text-white transition-all duration-700 shadow-inner">
                <Eye size={48} strokeWidth={1.5} />
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-4">Our Future</div>
              <h3 className="text-4xl font-black text-primary-dark mb-10 uppercase tracking-tight leading-none">
                {language === 'marathi' ? 'दृष्टी (Vision)' : 'Vision'}
              </h3>
              <p className="text-slate-600 text-xl md:text-2xl leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                {t('about.vision')}
              </p>
            </motion.div>
          </div>

          {/* Values - Modern Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary-dark rounded-[5rem] p-20 md:p-32 text-white text-center border-b-[20px] border-accent relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,43,91,0.3)]"
          >
            <div className="absolute inset-0 bg-pattern-dots opacity-5 pointer-events-none"></div>
            <div className="relative z-10">
              <div className="inline-block text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-8">Foundation of Trust</div>
              <h2 className="text-4xl md:text-6xl font-black mb-32 uppercase tracking-tighter leading-none">
                {language === 'marathi' ? 'आमची मूल्ये' : 'Our Core Values'}
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-20">
                {[
                  { title: language === 'marathi' ? 'प्रामाणिकपणा' : 'Integrity', icon: ShieldCheck },
                  { title: language === 'marathi' ? 'पारदर्शकता' : 'Transparency', icon: Eye },
                  { title: language === 'marathi' ? 'सेवाभाव' : 'Service', icon: Users },
                  { title: language === 'marathi' ? 'विकास' : 'Growth', icon: TrendingUp },
                ].map((v, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center group"
                  >
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-white/5 rounded-[2.5rem] mb-12 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary-dark group-hover:scale-110 transition-all duration-700 backdrop-blur-xl border border-white/10 shadow-inner">
                      <v.icon size={48} strokeWidth={1.5} />
                    </div>
                    <p className="font-black text-xl md:text-2xl uppercase tracking-[0.3em] text-blue-100 group-hover:text-white transition-colors">{v.title}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
