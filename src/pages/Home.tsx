import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { TrendingUp, Users, Landmark, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t, stats, language } = useLanguage();

  const statCards = stats ? [
    { label: t('stats.shareCapital'), value: stats.shareCapital, icon: Landmark },
    { label: t('stats.totalDeposits'), value: stats.totalDeposits, icon: TrendingUp },
    { label: t('stats.totalLoans'), value: stats.totalLoans, icon: ShieldCheck },
    { label: t('stats.totalMembers'), value: stats.totalMembers, icon: Users },
  ] : [];

  const testimonials = Array.isArray(t('testimonials')) ? t('testimonials') : [];

  return (
    <div className="overflow-x-hidden bg-surface">
      {/* Hero Section - Modern & Dynamic */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/[0.03] -skew-x-12 translate-x-1/4"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/[0.08] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute inset-0 bg-pattern opacity-10 pointer-events-none"></div>
        
        <div className="section-container relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
            {/* Left: Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 mb-10">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-accent animate-pulse"></span>
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">
                    {language === 'marathi' ? '२५ वर्षांचा गौरवशाली वारसा' : 'A Legacy of 25 Glorious Years'}
                  </span>
                </div>
                
                <h1 className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-primary mb-8 md:mb-10 leading-[0.95] tracking-tight ${language === 'marathi' ? 'font-marathi' : ''}`}>
                  <span className="block">{t('hero.title').split(' ').slice(0, -1).join(' ')}</span>
                  <span className="text-gradient">{t('hero.title').split(' ').slice(-1)}</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-500 mb-14 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                  {t('hero.tagline')}
                </p>
                
                <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                  <button 
                    onClick={() => {
                      const element = document.getElementById('deposits');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="btn-primary group cursor-pointer"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      {t('hero.savingsSchemes')}
                      <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
                    </span>
                  </button>
                  
                  <button 
                    onClick={() => {
                      const element = document.getElementById('loans');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="btn-accent cursor-pointer"
                  >
                    {t('hero.loanSchemes')}
                  </button>
                </div>
                
                {/* Trust Indicators */}
                <div className="mt-16 pt-16 border-t border-slate-100 flex flex-wrap justify-center lg:justify-start gap-10 opacity-70">
                  <div className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                      <ShieldCheck size={20} />
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-widest text-primary">ISO 9001:2015</span>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                      <Users size={20} />
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-widest text-primary">1800+ Members</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Right: Visual */}
            <div className="flex-1 relative w-full max-w-2xl lg:max-w-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="relative"
              >
                {/* Decorative Shapes */}
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-primary/10 rounded-full blur-3xl"></div>
                
                {/* Main Image with Frame */}
                <div className="relative z-10 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,51,102,0.2)] border-[8px] md:border-[12px] border-white">
                  <img 
                    src={t('hero.imageUrl') || "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=2070"} 
                    alt="Professional Banking" 
                    className="w-full h-[300px] sm:h-[400px] md:h-[550px] object-cover hover:scale-110 transition-transform duration-[2000ms]"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-40"></div>
                </div>
                
                {/* Floating Card */}
                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 lg:right-0 bg-white/90 backdrop-blur-xl p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl border border-white/50 max-w-[200px] md:max-w-[280px] z-20"
                >
                  <div className="flex items-center gap-3 md:gap-5 mb-3 md:mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-xl md:rounded-2xl flex items-center justify-center text-accent">
                      <TrendingUp size={20} className="md:w-6 md:h-6" />
                    </div>
                    <span className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]">Growth</span>
                  </div>
                  <p className="text-xs md:text-base font-extrabold text-primary leading-snug">
                    {language === 'marathi' ? 'तुमच्या प्रगतीसाठी आम्ही सदैव तत्पर' : 'Committed to your financial growth'}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar - Modern & Impactful */}
      <section className="bg-primary py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-5 pointer-events-none"></div>
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8">
            {statCards.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-white lg:border-r last:border-none border-white/10 px-2 sm:px-4"
              >
                <div className="flex justify-center mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/5 flex items-center justify-center text-accent">
                    <stat.icon size={20} className="md:w-6 md:h-6" />
                  </div>
                </div>
                <p className="text-[10px] md:text-[11px] uppercase font-black text-blue-200 tracking-[0.2em] md:tracking-[0.3em] mb-2 md:mb-4">{stat.label}</p>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tighter text-white break-words">
                  {stat.label.toLowerCase().includes('member') || stat.label.toLowerCase().includes('सभासद') 
                    ? stat.value 
                    : `₹${(stat.value || '').toString().replace('₹', '')}`
                  }
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Modern Grid */}
      <section className="section-padding bg-white relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-surface to-transparent"></div>
        <div className="section-container relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-4 md:mb-6">
              {t('services.title')}
            </h2>
            <div className="w-16 md:w-24 h-1.5 md:h-2 bg-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {(Array.isArray(t('services.items')) ? t('services.items') : []).map((service: any, idx: number) => {
              const icons = [Landmark, TrendingUp, Users, ShieldCheck];
              const Icon = icons[idx % icons.length];
              return (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="card-modern group p-8 md:p-10"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-surface flex items-center justify-center text-accent mb-6 md:mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Icon size={28} className="md:w-8 md:h-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-5 text-primary uppercase tracking-tight">{service.title}</h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">{service.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Section - Modern Layout */}
      <section className="section-padding bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-5 pointer-events-none"></div>
        <div className="section-container relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
            <div className="flex-1 w-full order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-10 md:mb-16 text-center lg:text-left leading-tight tracking-tighter">
                {t('trust.title')}
              </h2>
              <div className="space-y-8 md:space-y-12">
                {(Array.isArray(t('trust.items')) ? t('trust.items') : []).map((item: any, idx: number) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-6 md:space-x-8 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl md:rounded-2xl flex items-center justify-center text-accent shadow-xl shadow-slate-200 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <ShieldCheck size={24} className="md:w-7 md:h-7" />
                    </div>
                    <div>
                      <h4 className="font-black text-lg md:text-xl text-primary mb-2 md:mb-3 uppercase tracking-tight">{item.title}</h4>
                      <p className="text-slate-500 text-sm md:text-base leading-relaxed opacity-80">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/20 rounded-[2.5rem] md:rounded-[3rem] blur-2xl"></div>
                <div className="relative p-3 md:p-4 bg-white rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border border-slate-100">
                  <img 
                    src={t('trust.imageUrl') || "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800"} 
                    alt="Trust" 
                    className="rounded-[2rem] md:rounded-[2.5rem] shadow-inner w-full h-[300px] sm:h-[400px] md:h-auto object-cover aspect-[4/3]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-primary text-white p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl border-b-4 md:border-b-8 border-accent hidden sm:block">
                    <p className="text-3xl md:text-5xl font-black mb-1 md:mb-2">25+</p>
                    <p className="text-[8px] md:text-[11px] uppercase font-black tracking-[0.2em] md:tracking-[0.3em] text-blue-200">Years of Trust</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Modern Carousel Style */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-6">
              {language === 'marathi' ? 'आमच्या सभासदांचे मनोगत' : 'Member Testimonials'}
            </h2>
            <div className="w-24 h-2 bg-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((t: any, idx: number) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="card-modern relative group"
              >
                <div className="absolute top-8 right-8 text-accent/10 group-hover:text-accent/20 transition-colors">
                  <Landmark size={80} strokeWidth={1} />
                </div>
                <div className="mb-10 text-accent text-6xl font-serif leading-none">“</div>
                <p className="text-slate-600 text-lg leading-relaxed mb-12 relative z-10 italic font-medium">
                  {t.text}
                </p>
                <div className="flex items-center space-x-5 border-t border-slate-100 pt-8">
                  <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-primary/20">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-black text-primary text-lg">{t.name}</h4>
                    <p className="text-[10px] text-slate-400 uppercase font-black tracking-[0.25em]">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
