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
    <div className="overflow-x-hidden">
      {/* Hero Section - Professional & Positive */}
      <section className="relative min-h-[700px] flex items-center overflow-hidden bg-slate-50">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#003366]/[0.02] -skew-x-12 translate-x-1/4"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#C5A059]/[0.05] rounded-full blur-3xl"></div>
        
        <div className="section-container relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Left: Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 mb-8">
                  <span className="flex h-2 w-2 rounded-full bg-[#C5A059]"></span>
                  <span className="text-[10px] font-bold text-[#003366] uppercase tracking-[0.2em]">
                    {language === 'marathi' ? '२५ वर्षांचा गौरवशाली वारसा' : 'A Legacy of 25 Glorious Years'}
                  </span>
                </div>
                
                <h1 className={`text-5xl md:text-6xl lg:text-7xl font-black text-[#003366] mb-8 leading-[1.05] tracking-tight ${language === 'marathi' ? 'font-marathi' : ''}`}>
                  {t('hero.title')}
                </h1>
                
                <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                  {t('hero.tagline')}
                </p>
                
                <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                  <Link 
                    to="/deposits" 
                    className="group relative px-8 py-4 bg-[#003366] text-white font-bold rounded-xl shadow-xl shadow-blue-900/20 hover:shadow-2xl hover:shadow-blue-900/30 hover:-translate-y-1 transition-all overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {t('hero.savingsSchemes')}
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-[#003366] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>
                  
                  <Link 
                    to="/loans" 
                    className="px-8 py-4 bg-white text-[#003366] font-bold rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:bg-slate-50 hover:-translate-y-1 transition-all"
                  >
                    {t('hero.loanSchemes')}
                  </Link>
                </div>
                
                {/* Trust Indicators */}
                <div className="mt-12 pt-12 border-t border-slate-200/60 flex flex-wrap justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={20} className="text-[#003366]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#003366]">ISO 9001:2015</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={20} className="text-[#003366]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#003366]">1800+ Members</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Right: Visual */}
            <div className="flex-1 relative w-full max-w-2xl lg:max-w-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Decorative Shapes */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#C5A059]/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-900/5 rounded-full blur-3xl"></div>
                
                {/* Main Image with Frame */}
                <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src={t('hero.imageUrl') || "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=2070"} 
                    alt="Professional Banking" 
                    className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/40 to-transparent opacity-60"></div>
                </div>
                
                {/* Floating Card */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="absolute -bottom-8 -right-8 lg:right-0 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 max-w-[240px] z-20"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                      <TrendingUp size={20} />
                    </div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Growth</span>
                  </div>
                  <p className="text-sm font-bold text-[#003366] leading-tight">
                    {language === 'marathi' ? 'तुमच्या प्रगतीसाठी आम्ही सदैव तत्पर' : 'Committed to your financial growth'}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar - Professional & Clean */}
      <section className="bg-[#003366] py-16 border-b border-[#002244]">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4">
            {statCards.map((stat, idx) => (
              <div key={idx} className="text-center text-white lg:border-r last:border-none border-white/10 px-2">
                <div className="flex justify-center mb-4 opacity-50">
                  <stat.icon size={24} className="text-[#C5A059]" />
                </div>
                <p className="text-[10px] uppercase font-bold text-blue-200 tracking-[0.2em] mb-3">{stat.label}</p>
                <p className="text-xl md:text-2xl lg:text-3xl font-black tracking-tight break-words">
                  {stat.label.toLowerCase().includes('member') || stat.label.toLowerCase().includes('सभासद') 
                    ? stat.value 
                    : `₹${(stat.value || '').toString().replace('₹', '')}`
                  }
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Services Section - Clean Corporate Grid */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title">
              {t('services.title')}
            </h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-slate-100">
            {(Array.isArray(t('services.items')) ? t('services.items') : []).map((service: any, idx: number) => {
              const icons = [Landmark, TrendingUp, Users, ShieldCheck];
              const Icon = icons[idx % icons.length];
              return (
                <div key={idx} className="p-8 md:p-10 border-r border-b border-slate-100 hover:bg-slate-50 transition-colors group">
                  <div className="text-[#C5A059] mb-6 group-hover:scale-110 transition-transform inline-block">
                    <Icon size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[#003366]">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Section - Traditional Corporate Style */}
      <section className="section-padding bg-slate-50 border-y border-slate-200">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="flex-1 w-full">
              <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-12 text-center lg:text-left">
                {t('trust.title')}
              </h2>
              <div className="space-y-10">
                {(Array.isArray(t('trust.items')) ? t('trust.items') : []).map((item: any, idx: number) => (
                  <div key={idx} className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-[#C5A059] shadow-sm">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-[#003366] mb-2">{item.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="relative p-4 bg-white border border-slate-200 rounded-lg shadow-xl">
                <img 
                  src={t('trust.imageUrl') || "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800"} 
                  alt="Trust" 
                  className="rounded shadow-inner w-full h-auto"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#003366] text-white p-6 rounded shadow-2xl border-b-4 border-[#C5A059] hidden sm:block">
                  <p className="text-3xl font-bold mb-1">25+</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-blue-200">Years of Trust</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Clean & Credible */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title">
              {language === 'marathi' ? 'आमच्या सभासदांचे मनोगत' : 'Member Testimonials'}
            </h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {testimonials.map((t: any, idx: number) => (
              <div key={idx} className="relative p-8 bg-slate-50 rounded-lg border border-slate-100">
                <div className="mb-6 text-[#C5A059] text-4xl font-serif">“</div>
                <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-8 relative z-10 italic">
                  {t.text}
                </p>
                <div className="flex items-center space-x-4 border-t border-slate-200 pt-6">
                  <div className="w-10 h-10 bg-[#003366] rounded flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#003366] text-sm">{t.name}</h4>
                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
