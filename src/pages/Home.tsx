import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { TrendingUp, Users, Landmark, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const { t, stats, language } = useLanguage();
  const navigate = useNavigate();

  const statCards = stats ? [
    { label: t('stats.shareCapital'), value: stats.shareCapital, icon: Landmark },
    { label: t('stats.totalDeposits'), value: stats.totalDeposits, icon: TrendingUp },
    { label: t('stats.totalLoans'), value: stats.totalLoans, icon: ShieldCheck },
    { label: t('stats.totalMembers'), value: stats.totalMembers, icon: Users },
  ] : [];

  const testimonials = Array.isArray(t('testimonials')) ? t('testimonials') : [];

  return (
    <div className="overflow-x-hidden bg-[#FDFDFD]">
      {/* Hero Section - Modern & Dynamic */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 bg-pattern-grid opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/[0.02] -skew-x-12 translate-x-1/4"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/[0.05] rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[100px] translate-y-1/3 translate-x-1/4"></div>
        
        <div className="section-container relative z-10 w-full pt-20">
          <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
            {/* Left: Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 mb-12">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                  </span>
                  <span className="text-[10px] font-black text-primary-dark uppercase tracking-[0.4em]">
                    {language === 'marathi' ? '२५ वर्षांचा गौरवशाली वारसा' : 'A Legacy of 25 Glorious Years'}
                  </span>
                </div>
                
                <h1 className={`text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-primary-dark mb-10 leading-[0.85] tracking-tighter ${language === 'marathi' ? 'font-marathi' : ''}`}>
                  <span className="block">{t('hero.title').split(' ').slice(0, -1).join(' ')}</span>
                  <span className="text-gradient block mt-2">{t('hero.title').split(' ').slice(-1)}</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-500 mb-16 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                  {t('hero.tagline')}
                </p>
                
                <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                  <button 
                    onClick={() => navigate('/deposits#fixed-deposits')}
                    className="btn-primary group"
                  >
                    <span className="relative z-10 flex items-center gap-4">
                      {t('hero.savingsSchemes')}
                      <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
                    </span>
                  </button>
                  
                  <button 
                    onClick={() => navigate('/loans#loan-schemes')}
                    className="btn-accent"
                  >
                    {t('hero.loanSchemes')}
                  </button>
                </div>
                
                {/* Trust Indicators */}
                <div className="mt-20 pt-12 border-t border-slate-100 flex flex-wrap justify-center lg:justify-start gap-12">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <ShieldCheck size={24} />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Security</div>
                      <div className="text-sm font-bold text-primary-dark">ISO 9001:2015</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <Users size={24} />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Community</div>
                      <div className="text-sm font-bold text-primary-dark">1800+ Members</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Right: Visual */}
            <div className="flex-1 relative w-full max-w-2xl lg:max-w-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                className="relative"
              >
                {/* Decorative Shapes */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/10 rounded-full blur-[100px]"></div>
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
                
                {/* Main Image with Frame */}
                <div className="relative z-10 rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,43,91,0.2)] border-[12px] md:border-[20px] border-white">
                  <img 
                    src={t('hero.imageUrl') || "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=2070"} 
                    alt="Professional Banking" 
                    className="w-full h-[400px] sm:h-[500px] md:h-[650px] object-cover hover:scale-105 transition-transform duration-[3000ms]"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 via-transparent to-transparent opacity-60"></div>
                </div>
                
                {/* Floating Card */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="absolute -bottom-10 -right-10 lg:-right-16 bg-white/95 backdrop-blur-2xl p-10 rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-white max-w-[240px] md:max-w-[320px] z-20"
                >
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                      <TrendingUp size={28} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Growth</span>
                      <span className="text-xl font-black text-primary-dark">12% APR</span>
                    </div>
                  </div>
                  <p className="text-sm md:text-lg font-bold text-slate-600 leading-relaxed">
                    {language === 'marathi' ? 'तुमच्या प्रगतीसाठी आम्ही सदैव तत्पर' : 'Committed to your financial growth and prosperity.'}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar - Modern & Impactful */}
      <section className="bg-primary-dark py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-5 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent-light to-accent opacity-50"></div>
        
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {statCards.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group"
              >
                <div className="flex items-center gap-8">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-inner">
                    <stat.icon size={28} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-1">{stat.value}</span>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-accent transition-colors">{stat.label}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Modern Grid */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-grid opacity-5 pointer-events-none"></div>
        <div className="section-container relative z-10">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-6"
            >
              Our Expertise
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-primary-dark mb-8 tracking-tighter">
              {t('services.title')}
            </h2>
            <div className="w-24 h-2 bg-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {(Array.isArray(t('services.items')) ? t('services.items') : []).map((service: any, idx: number) => {
              const icons = [Landmark, TrendingUp, Users, ShieldCheck];
              const Icon = icons[idx % icons.length];
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="card-premium group"
                >
                  <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center text-accent mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-700 shadow-inner">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-black mb-5 text-primary-dark uppercase tracking-tight leading-none">{service.title}</h3>
                  <p className="text-slate-500 text-base leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity">{service.desc}</p>
                  
                  <div className="mt-10 pt-8 border-t border-slate-50 flex items-center text-[10px] font-black uppercase tracking-widest text-accent group-hover:text-primary transition-colors">
                    Learn More <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Section - Modern Split Layout */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-10 pointer-events-none"></div>
        <div className="section-container relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-32">
            <div className="flex-1 w-full order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-8 text-center lg:text-left">Why Choose Us</div>
                <h2 className="text-5xl md:text-7xl font-black text-primary-dark mb-20 text-center lg:text-left leading-[0.9] tracking-tighter">
                  {t('trust.title')}
                </h2>
                <div className="space-y-12">
                  {(Array.isArray(t('trust.items')) ? t('trust.items') : []).map((item: any, idx: number) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-10 group"
                    >
                      <div className="flex-shrink-0 w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-accent shadow-[0_15px_30px_-5px_rgba(0,0,0,0.05)] group-hover:bg-primary group-hover:text-white transition-all duration-700">
                        <ShieldCheck size={28} />
                      </div>
                      <div>
                        <h4 className="font-black text-2xl text-primary-dark mb-3 uppercase tracking-tight leading-none">{item.title}</h4>
                        <p className="text-slate-500 text-base leading-relaxed font-medium opacity-80">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            <div className="flex-1 w-full order-1 lg:order-2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative"
              >
                <div className="absolute -inset-10 bg-accent/10 rounded-full blur-[100px]"></div>
                <div className="relative p-6 bg-white rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100">
                  <img 
                    src={t('trust.imageUrl') || "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800"} 
                    alt="Trust" 
                    className="rounded-[3rem] shadow-inner w-full h-[500px] object-cover aspect-[4/5]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-12 -right-12 bg-primary-dark text-white p-12 rounded-[3.5rem] shadow-2xl border-b-[12px] border-accent hidden sm:block">
                    <div className="text-6xl font-black mb-2 tracking-tighter">25+</div>
                    <div className="text-[10px] uppercase font-black tracking-[0.4em] text-accent">Years of Trust</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Modern Carousel Style */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-grid opacity-5 pointer-events-none"></div>
        <div className="section-container relative z-10">
          <div className="text-center mb-32">
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-8">Member Stories</div>
            <h2 className="text-5xl md:text-7xl font-black text-primary-dark mb-8 tracking-tighter">
              {language === 'marathi' ? 'आमच्या सभासदांचे मनोगत' : 'Member Testimonials'}
            </h2>
            <div className="w-24 h-2 bg-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {testimonials.map((t: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="card-premium flex flex-col h-full relative group"
              >
                <div className="absolute top-10 right-10 text-accent/10 group-hover:text-accent/20 transition-colors">
                  <Landmark size={80} strokeWidth={1} />
                </div>
                <div className="flex items-center gap-5 mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-accent font-black text-2xl shadow-inner">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-black text-xl text-primary-dark leading-none mb-2">{t.name}</h4>
                    <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">{t.role || 'Member'}</p>
                  </div>
                </div>
                <p className="text-slate-600 text-lg italic leading-relaxed font-medium mb-10 flex-grow relative z-10">
                  "{t.text}"
                </p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div key={star} className="w-4 h-4 bg-accent rounded-sm"></div>
                  ))}
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
