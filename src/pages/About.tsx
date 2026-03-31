import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Landmark, Target, Eye, History, ShieldCheck, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const { t, language } = useLanguage();

  return (
    <div className="bg-white">
      {/* Page Header - Traditional Style */}
      <div className="bg-[#003366] py-20 text-white relative overflow-hidden">
        <div className="section-container relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {t('about.title')}
          </motion.h1>
          <div className="w-16 h-1 bg-[#C5A059]"></div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-20deg] translate-x-1/2"></div>
      </div>

      <div className="section-container section-padding">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 text-[#C5A059] font-bold text-xs uppercase tracking-[0.3em] mb-6">
              <div className="w-6 h-[1px] bg-[#C5A059]"></div>
              <span>{language === 'marathi' ? 'आमचा वारसा' : 'Our Legacy'}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-8 leading-tight">
              {language === 'marathi' ? 'आमचा इतिहास आणि परंपरा' : 'Our History & Tradition'}
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
              {t('about.intro')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 border-l-4 border-[#003366] rounded-r-lg">
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">Registration</p>
                <p className="text-sm font-bold text-[#003366]">{t('about.regNo')}</p>
              </div>
              <div className="p-6 bg-slate-50 border-l-4 border-[#C5A059] rounded-r-lg">
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">Established</p>
                <p className="text-sm font-bold text-[#003366]">{t('about.regDate')}</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1541354451442-952c97f3f40e?auto=format&fit=crop&q=80&w=800" 
                alt="History" 
                className="rounded shadow-inner w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#003366] text-white p-8 rounded shadow-2xl border-b-4 border-[#C5A059] hidden md:block">
              <p className="text-4xl font-bold mb-1">25+</p>
              <p className="text-xs uppercase font-bold tracking-widest text-blue-200">{language === 'marathi' ? 'वर्षांचा विश्वास' : 'Years of Trust'}</p>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision - Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <motion.div 
            className="p-10 md:p-12 bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-[#C5A059] mb-8">
              <Target size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-[#003366] mb-6 uppercase tracking-tight">
              {language === 'marathi' ? 'ध्येय (Mission)' : 'Mission'}
            </h3>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              {t('about.mission')}
            </p>
          </motion.div>

          <motion.div 
            className="p-10 md:p-12 bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-[#C5A059] mb-8">
              <Eye size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-[#003366] mb-6 uppercase tracking-tight">
              {language === 'marathi' ? 'दृष्टी (Vision)' : 'Vision'}
            </h3>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              {t('about.vision')}
            </p>
          </motion.div>
        </div>

        {/* Values - Corporate Grid */}
        <div className="bg-[#003366] rounded-lg p-10 md:p-16 text-white text-center border-b-8 border-[#C5A059]">
          <h2 className="text-2xl md:text-3xl font-bold mb-16 uppercase tracking-widest">
            {language === 'marathi' ? 'आमची मूल्ये' : 'Our Core Values'}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: language === 'marathi' ? 'प्रामाणिकपणा' : 'Integrity', icon: ShieldCheck },
              { title: language === 'marathi' ? 'पारदर्शकता' : 'Transparency', icon: Eye },
              { title: language === 'marathi' ? 'सेवाभाव' : 'Service', icon: Users },
              { title: language === 'marathi' ? 'विकास' : 'Growth', icon: TrendingUp },
            ].map((v, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-lg mb-6 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#003366] transition-all duration-300">
                  <v.icon size={32} strokeWidth={1.5} />
                </div>
                <p className="font-bold text-sm md:text-lg uppercase tracking-widest">{v.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
