import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Globe, Phone, Mail, MapPin, Menu, X, ShieldCheck, TrendingUp, Users, Landmark, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Deposits from './pages/Deposits';
import Loans from './pages/Loans';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.deposits'), path: '/deposits' },
    { name: t('nav.loans'), path: '/loans' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Top Bar - Traditional Bank Style */}
      <div className="bg-[#002244] text-white py-2 hidden sm:block border-b border-white/5">
        <div className="section-container flex justify-between items-center text-[10px] md:text-[11px] font-bold tracking-widest uppercase opacity-80">
          <div className="flex space-x-4 md:space-x-6">
            <span className="flex items-center"><Phone size={12} className="mr-2 text-[#C5A059]" /> {t('contact.phone')}</span>
            <span className="flex items-center"><Mail size={12} className="mr-2 text-[#C5A059]" /> {t('contact.email')}</span>
          </div>
          <div className="flex space-x-4 md:space-x-6">
          </div>
        </div>
      </div>

      <div className="bg-[#003366] text-white">
        <div className="section-container">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <Link to="/" className="flex items-center group">
                {t('header.logoUrl') && (
                  <img 
                    src={t('header.logoUrl')} 
                    alt="Logo" 
                    className="h-12 w-12 mr-3 object-contain"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div className="flex flex-col">
                  <span className="text-base sm:text-lg md:text-xl font-bold leading-tight tracking-tight group-hover:text-[#C5A059] transition-colors">
                    {t('header.bankName')}
                  </span>
                  <span className="text-[9px] md:text-[10px] uppercase font-bold tracking-[0.2em] text-[#C5A059] opacity-90">
                    {t('header.tagline')}
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-[11px] lg:text-xs font-bold uppercase tracking-widest hover:text-[#C5A059] transition-colors relative py-2 ${
                    location.pathname === item.path ? 'text-[#C5A059]' : ''
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C5A059]" />
                  )}
                </Link>
              ))}
              <button
                onClick={() => setLanguage(language === 'marathi' ? 'english' : 'marathi')}
                className="flex items-center space-x-2 bg-[#002244] px-3 py-2 rounded border border-white/10 hover:bg-[#001a33] transition-colors text-[10px] font-bold uppercase tracking-widest"
              >
                <Globe size={14} className="text-[#C5A059]" />
                <span>{language === 'marathi' ? 'English' : 'मराठी'}</span>
              </button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-3">
              <button
                onClick={() => setLanguage(language === 'marathi' ? 'english' : 'marathi')}
                className="text-[10px] font-bold bg-[#002244] px-3 py-2 rounded border border-white/10 text-[#C5A059]"
              >
                {language === 'marathi' ? 'EN' : 'मराठी'}
              </button>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-white p-2 hover:bg-white/5 rounded-full transition-colors"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#002244] border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-3 rounded-md text-sm font-bold uppercase tracking-widest hover:bg-[#003366] text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => {
  const { language, t } = useLanguage();
  return (
    <footer className="bg-[#002244] text-white pt-20 pb-10 border-t-4 border-[#C5A059]">
      <div className="section-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center mb-6">
              {t('header.logoUrl') && (
                <img 
                  src={t('header.logoUrl')} 
                  alt="Logo" 
                  className="h-10 w-10 mr-3 object-contain"
                  referrerPolicy="no-referrer"
                />
              )}
              <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                {t('header.bankName')}
              </h3>
            </div>
            <p className="text-blue-200/60 text-sm mb-8 max-w-md leading-relaxed">
              {t('hero.tagline')} {language === 'marathi' ? 'आम्ही तुमच्या आर्थिक प्रगतीसाठी कटिबद्ध आहोत.' : 'We are committed to your financial progress.'}
            </p>
            <div className="flex items-center space-x-4 p-4 bg-[#003366] rounded border border-white/5 inline-flex">
              <ShieldCheck className="text-[#C5A059]" size={32} />
              <div>
                <p className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-blue-200">ISO 9001:2015 Certified</p>
                <p className="text-xs font-bold">{t('about.regNo')}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C5A059] mb-8">{t('nav.contact')}</h4>
            <ul className="space-y-4 text-sm text-blue-100/80">
              <li className="flex items-start space-x-3">
                <Phone size={16} className="text-[#C5A059] mt-1 flex-shrink-0" />
                <span>{t('contact.phone')}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={16} className="text-[#C5A059] mt-1 flex-shrink-0" />
                <span className="break-all">{t('contact.email')}</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-[#C5A059] mt-1 flex-shrink-0" />
                <span className="leading-relaxed">{t('contact.address')}</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C5A059] mb-8">{t('nav.quickLinks')}</h4>
            <ul className="space-y-3 text-sm text-blue-100/80">
              <li><Link to="/about" className="hover:text-[#C5A059] transition-colors flex items-center"><ArrowRight size={12} className="mr-2 opacity-50" /> {t('nav.about')}</Link></li>
              <li><Link to="/deposits" className="hover:text-[#C5A059] transition-colors flex items-center"><ArrowRight size={12} className="mr-2 opacity-50" /> {t('nav.deposits')}</Link></li>
              <li><Link to="/loans" className="hover:text-[#C5A059] transition-colors flex items-center"><ArrowRight size={12} className="mr-2 opacity-50" /> {t('nav.loans')}</Link></li>
              <li><Link to="/admin" className="hover:text-[#C5A059] transition-colors opacity-50 text-xs flex items-center"><ArrowRight size={12} className="mr-2 opacity-50" /> {t('nav.staffLogin')}</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase font-bold tracking-widest text-blue-200/40 text-center md:text-left">
          <p>© {new Date().getFullYear()} {t('header.bankName')}. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">{t('nav.privacyPolicy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('nav.termsOfService')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const AppContent = () => {
  const { loading } = useLanguage();

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-blue-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/deposits" element={<Deposits />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}
