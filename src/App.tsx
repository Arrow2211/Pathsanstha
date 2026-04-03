import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Globe, Phone, Mail, MapPin, Menu, X, ShieldCheck, TrendingUp, Users, Landmark, ArrowRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
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
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home');
  const location = useLocation();

  const navItems = [
    { name: t('nav.home'), path: 'home' },
    { name: t('nav.about'), path: 'about' },
    { name: t('nav.deposits'), path: 'deposits' },
    { name: t('nav.loans'), path: 'loans' },
    { name: t('nav.contact'), path: 'contact' },
  ];

  React.useEffect(() => {
    if (location.pathname !== '/') return;

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navItems.forEach(item => {
      const element = document.getElementById(item.path);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [location.pathname, navItems]);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 glass-header">
      {/* Top Bar - Refined */}
      <div className="bg-primary-dark text-white/70 py-2.5 hidden sm:block">
        <div className="section-container flex justify-between items-center text-[10px] font-bold tracking-[0.2em] uppercase">
          <div className="flex space-x-8">
            <span className="flex items-center hover:text-white transition-colors cursor-pointer"><Phone size={12} className="mr-2 text-accent" /> {t('contact.phone')}</span>
            <span className="flex items-center hover:text-white transition-colors cursor-pointer"><Mail size={12} className="mr-2 text-accent" /> {t('contact.email')}</span>
          </div>
          <div className="flex items-center space-x-6">
            <span className="flex items-center"><MapPin size={12} className="mr-2 text-accent" /> {t('contact.address').split(',')[0]}</span>
          </div>
        </div>
      </div>

      <div className="py-4">
        <div className="section-container">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link to="/" className="flex items-center group" onClick={() => scrollToSection('home')}>
                {t('header.logoUrl') && (
                  <div className="relative">
                    <div className="absolute -inset-1 bg-accent/20 rounded-full blur-sm group-hover:bg-accent/40 transition-all"></div>
                    <img 
                      src={t('header.logoUrl')} 
                      alt="Logo" 
                      className="h-12 w-12 relative z-10 mr-4 object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
                <div className="flex flex-col">
                  <span className="text-lg md:text-xl font-extrabold leading-none tracking-tighter text-primary group-hover:text-accent transition-colors">
                    {t('header.bankName')}
                  </span>
                  <span className="text-[9px] uppercase font-black tracking-[0.3em] text-accent/80 mt-1">
                    {t('header.tagline')}
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-10 items-center">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => scrollToSection(item.path)}
                  className={`text-[11px] font-black uppercase tracking-[0.2em] hover:text-accent transition-all relative py-2 ${
                    activeSection === item.path ? 'text-accent' : 'text-primary/70'
                  }`}
                >
                  {item.name}
                  {activeSection === item.path && (
                    <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent" />
                  )}
                </button>
              ))}
              <button
                onClick={() => setLanguage(language === 'marathi' ? 'english' : 'marathi')}
                className="flex items-center space-x-2 bg-primary/5 hover:bg-primary/10 text-primary px-4 py-2 rounded-xl transition-all text-[10px] font-black uppercase tracking-widest border border-primary/10"
              >
                <Globe size={14} className="text-accent" />
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden bg-[#002244] border-t border-white/5 overflow-hidden shadow-2xl"
          >
            <div className="px-6 pt-4 pb-10 space-y-1">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.path}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => scrollToSection(item.path)}
                  className={`flex items-center justify-between w-full text-left px-4 py-4 rounded-xl text-sm font-black uppercase tracking-[0.2em] transition-all ${
                    activeSection === item.path 
                      ? 'bg-[#003366] text-[#C5A059] border-l-4 border-[#C5A059]' 
                      : 'text-blue-100 hover:bg-white/5'
                  }`}
                >
                  <span>{item.name}</span>
                  <ArrowRight size={16} className={`transition-transform ${activeSection === item.path ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`} />
                </motion.button>
              ))}
              
              <div className="pt-6 mt-6 border-t border-white/5">
                <div className="flex items-center space-x-4 px-4 text-blue-200/40">
                  <Phone size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{t('contact.phone')}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary-dark text-white pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent-light to-accent"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center">
              {t('header.logoUrl') && (
                <img 
                  src={t('header.logoUrl')} 
                  alt="Logo" 
                  className="h-12 w-12 mr-4 brightness-0 invert"
                  referrerPolicy="no-referrer"
                />
              )}
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter">{t('header.bankName')}</span>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-accent">{t('header.tagline')}</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed font-medium">
              {t('footer.aboutText') || 'Empowering our community through trusted financial solutions and dedicated service for generations.'}
            </p>
            <div className="flex space-x-5">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all hover:-translate-y-1">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-10">{t('nav.quickLinks')}</h4>
            <ul className="space-y-5">
              {['about', 'deposits', 'loans', 'contact'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-white/60 hover:text-accent transition-colors text-sm font-semibold flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/0 group-hover:bg-accent mr-0 group-hover:mr-3 transition-all duration-300"></span>
                    {t(`nav.${id}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-10">{t('nav.contact')}</h4>
            <ul className="space-y-6">
              <li className="flex items-start group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mr-4 group-hover:bg-accent/20 transition-colors shrink-0">
                  <MapPin size={18} className="text-accent" />
                </div>
                <span className="text-white/60 text-sm leading-relaxed font-medium">{t('contact.address')}</span>
              </li>
              <li className="flex items-center group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mr-4 group-hover:bg-accent/20 transition-colors shrink-0">
                  <Phone size={18} className="text-accent" />
                </div>
                <span className="text-white/60 text-sm font-medium">{t('contact.phone')}</span>
              </li>
              <li className="flex items-center group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mr-4 group-hover:bg-accent/20 transition-colors shrink-0">
                  <Mail size={18} className="text-accent" />
                </div>
                <span className="text-white/60 text-sm font-medium">{t('contact.email')}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-10">Newsletter</h4>
            <p className="text-white/50 text-sm mb-6 font-medium">Subscribe to get the latest updates and offers.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-accent transition-colors pr-12 font-medium"
              />
              <button className="absolute right-2 top-2 bottom-2 w-10 bg-accent rounded-xl flex items-center justify-center hover:bg-accent-dark transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
            <div className="mt-8">
              <Link to="/admin" className="text-[10px] uppercase font-bold tracking-widest text-white/30 hover:text-accent transition-colors">
                Staff Login
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[11px] font-bold uppercase tracking-widest text-white/30">
          <p>© {new Date().getFullYear()} {t('header.bankName')}. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const MainPage = () => {
  return (
    <>
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="deposits"><Deposits /></div>
      <div id="loans"><Loans /></div>
      <div id="contact"><Contact /></div>
    </>
  );
};

const AppContent = () => {
  const { loading } = useLanguage();
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative mb-8">
            <div className="absolute -inset-4 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
            <div className="w-24 h-24 rounded-full border-t-4 border-accent animate-spin"></div>
          </div>
          <div className="text-primary font-black uppercase tracking-[0.5em] text-xs animate-pulse">
            Loading Excellence
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          {/* Fallback to main page for old routes */}
          <Route path="/about" element={<MainPage />} />
          <Route path="/deposits" element={<MainPage />} />
          <Route path="/loans" element={<MainPage />} />
          <Route path="/contact" element={<MainPage />} />
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
