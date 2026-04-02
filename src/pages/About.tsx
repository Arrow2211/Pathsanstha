import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Landmark, Target, Eye, History, ShieldCheck, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const { t, language } = useLanguage();

  return (
    <div className="bg-surface min-h-screen">
      {/* Page Header - Modern Style */}
      <div className="bg-primary py-24 md:py-40 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10 pointer-events-none"></div>
        <div className="section-container relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter"
          >
            <span className="text-gradient brightness-150">{t('about.title')}</span>
          </motion.h1>
          <div className="w-16 md:w-24 h-1.5 md:h-2 bg-accent rounded-full"></div>
          <p className="mt-8 md:mt-10 text-blue-100 max-w-2xl opacity-90 text-lg md:text-2xl leading-relaxed font-medium">
            {language === 'marathi' 
              ? 'आमचा वारसा आणि विश्वासाची परंपरा.' 
              : 'Our legacy of trust and commitment to excellence.'}
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-20deg] translate-x-1/2"></div>
      </div>

      <div className="section-container section-padding">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-3 text-accent font-black text-xs uppercase tracking-[0.4em] mb-8">
              <div className="w-8 h-[2px] bg-accent"></div>
              <span>{language === 'marathi' ? 'आमचा वारसा' : 'Our Legacy'}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-10 leading-tight tracking-tight">
              {language === 'marathi' ? 'आमचा इतिहास आणि परंपरा' : 'Our History & Tradition'}
            </h2>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-12 font-medium">
              {t('about.intro')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-8 bg-white border-l-8 border-primary rounded-2xl shadow-xl shadow-slate-100">
                <p className="text-[10px] uppercase font-black text-slate-400 tracking-[0.25em] mb-2">Registration</p>
                <p className="text-lg font-black text-primary">{t('about.regNo')}</p>
              </div>
              <div className="p-8 bg-white border-l-8 border-accent rounded-2xl shadow-xl shadow-slate-100">
                <p className="text-[10px] uppercase font-black text-slate-400 tracking-[0.25em] mb-2">Established</p>
                <p className="text-lg font-black text-primary">{t('about.regDate')}</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="p-6 bg-white rounded-[3rem] shadow-2xl relative z-10 overflow-hidden border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1541354451442-952c97f3f40e?auto=format&fit=crop&q=80&w=800" 
                alt="History" 
                className="rounded-[2rem] w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-primary text-white p-10 rounded-[2.5rem] shadow-2xl border-b-[12px] border-accent hidden md:block z-20 backdrop-blur-xl">
              <p className="text-6xl font-black mb-2 tracking-tighter">25+</p>
              <p className="text-xs uppercase font-black tracking-[0.3em] text-accent">{language === 'marathi' ? 'वर्षांचा विश्वास' : 'Years of Trust'}</p>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>

        {/* Mission & Vision - Modern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <motion.div 
            whileHover={{ y: -15 }}
            className="p-12 md:p-16 card-modern border-none shadow-2xl bg-white group"
          >
            <div className="w-20 h-20 bg-surface rounded-2xl flex items-center justify-center text-accent mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl shadow-slate-100">
              <Target size={44} strokeWidth={1.5} />
            </div>
            <h3 className="text-3xl font-black text-primary mb-8 uppercase tracking-tight leading-tight">
              {language === 'marathi' ? 'ध्येय (Mission)' : 'Mission'}
            </h3>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
              {t('about.mission')}
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -15 }}
            className="p-12 md:p-16 card-modern border-none shadow-2xl bg-white group"
          >
            <div className="w-20 h-20 bg-surface rounded-2xl flex items-center justify-center text-accent mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl shadow-slate-100">
              <Eye size={44} strokeWidth={1.5} />
            </div>
            <h3 className="text-3xl font-black text-primary mb-8 uppercase tracking-tight leading-tight">
              {language === 'marathi' ? 'दृष्टी (Vision)' : 'Vision'}
            </h3>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
              {t('about.vision')}
            </p>
          </motion.div>
        </div>

        {/* Values - Modern Grid */}
        <div className="bg-primary-dark rounded-[4rem] p-16 md:p-24 text-white text-center border-b-[16px] border-accent relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-pattern opacity-5 pointer-events-none"></div>
          <h2 className="text-3xl md:text-5xl font-black mb-24 uppercase tracking-widest leading-tight relative z-10">
            {language === 'marathi' ? 'आमची मूल्ये' : 'Our Core Values'}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
            {[
              { title: language === 'marathi' ? 'प्रामाणिकपणा' : 'Integrity', icon: ShieldCheck },
              { title: language === 'marathi' ? 'पारदर्शकता' : 'Transparency', icon: Eye },
              { title: language === 'marathi' ? 'सेवाभाव' : 'Service', icon: Users },
              { title: language === 'marathi' ? 'विकास' : 'Growth', icon: TrendingUp },
            ].map((v, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 rounded-[2rem] mb-10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary group-hover:scale-110 transition-all duration-500 backdrop-blur-sm border border-white/10">
                  <v.icon size={44} strokeWidth={1.5} />
                </div>
                <p className="font-black text-lg md:text-2xl uppercase tracking-[0.2em]">{v.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
