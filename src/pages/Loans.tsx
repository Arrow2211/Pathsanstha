import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Wallet, Home, Briefcase, Zap, Coins, UserCheck, ShieldCheck, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import EMICalculator from '../components/EMICalculator';

const Loans = () => {
  const { t, language, loans } = useLanguage();

  const getIcon = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes('mortgage') || n.includes('तारण')) return Home;
    if (n.includes('gold') || n.includes('सुवर्ण')) return Coins;
    if (n.includes('consumer') || n.includes('ग्राहक')) return Wallet;
    if (n.includes('salaried') || n.includes('पगारदार')) return Briefcase;
    if (n.includes('emergency') || n.includes('तातडीचे')) return Zap;
    return UserCheck;
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
            <div className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-8">Financial Empowerment</div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-10 tracking-tighter leading-[0.85]">
              {t('nav.loans')}
            </h1>
            <div className="w-24 h-2 bg-accent rounded-full mb-12"></div>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl opacity-80 leading-relaxed font-medium">
              {language === 'marathi' 
                ? 'तुमच्या स्वप्नांना द्या पंख. सुलभ हप्ते आणि कमी व्याजदरात कर्ज उपलब्ध. आम्ही देतो तुमच्या प्रगतीला वेग.' 
                : 'Empower your dreams with our flexible loan solutions. Competitive rates, hassle-free processing, and transparent terms.'}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="section-padding relative">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary-dark/5 to-transparent pointer-events-none"></div>
        <div id="loan-schemes" className="section-container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
            {Array.isArray(loans) && loans.map((loan: any, idx: number) => {
              const Icon = getIcon(loan.name.english);
              return (
                <motion.div 
                  key={loan.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="card-premium flex flex-col group"
                >
                  <div className="p-12 flex-grow">
                    <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-accent mb-10 border border-slate-100 group-hover:bg-primary-dark group-hover:text-white transition-all duration-700 shadow-inner">
                      <Icon size={32} strokeWidth={1.5} />
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-4">Loan Scheme</div>
                    <h3 className="text-2xl font-black text-primary-dark mb-6 uppercase tracking-tight leading-none">{loan.name[language]}</h3>
                    <p className="text-slate-500 text-base mb-10 leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                      {loan.description[language]}
                    </p>
                    <div className="pt-10 border-t border-slate-50">
                      <div className="flex items-end justify-between">
                        <div>
                          <p className="text-[10px] text-slate-400 uppercase tracking-[0.3em] font-black mb-2">
                            {language === 'marathi' ? 'व्याजदर' : 'Interest Rate'}
                          </p>
                          <p className="text-4xl font-black text-primary-dark tracking-tighter group-hover:text-accent transition-colors">{loan.rate}</p>
                        </div>
                        <div className="flex items-center gap-3 text-accent">
                          <ShieldCheck size={20} />
                          <span className="text-[10px] font-black uppercase tracking-widest">{language === 'marathi' ? 'सुलभ प्रक्रिया' : 'Easy Process'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-50/50 border-t border-slate-100 p-8 text-center group-hover:bg-slate-50 transition-all duration-500">
                    <button 
                      onClick={() => {
                        const element = document.getElementById('contact');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-primary-dark font-black text-[10px] uppercase tracking-[0.4em] hover:text-accent transition-colors flex items-center justify-center mx-auto gap-3"
                    >
                      {language === 'marathi' ? 'अधिक माहिती' : 'More Details'}
                      <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <EMICalculator />
            </motion.div>
          </div>

          {/* Loan Requirements Info - Modern Split Layout */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary-dark text-white rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,43,91,0.3)] relative"
          >
            <div className="absolute inset-0 bg-pattern-dots opacity-5 pointer-events-none"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
              <div className="p-12 md:p-24 border-b lg:border-b-0 lg:border-r border-white/10">
                <div className="flex items-center gap-6 mb-16">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-accent shadow-inner">
                    <FileText size={32} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-1">Documentation</div>
                    <h2 className="text-3xl md:text-4xl font-black tracking-tighter leading-none">
                      {language === 'marathi' ? 'आवश्यक कागदपत्रे' : 'Required Documents'}
                    </h2>
                  </div>
                </div>
                <ul className="space-y-8">
                  {[
                    { m: 'आधार कार्ड आणि पॅन कार्ड', e: 'Aadhar Card & PAN Card' },
                    { m: '७/१२ उतारा किंवा मालमत्ता पत्रक', e: '7/12 Extract or Property Documents' },
                    { m: 'पगार पत्रक (पगारदार असल्यास)', e: 'Salary Slip (if salaried)' },
                    { m: 'पासपोर्ट आकाराचे फोटो', e: 'Passport size photographs' },
                    { m: 'जामीनदारांची कागदपत्रे', e: 'Guarantor documents' },
                  ].map((doc, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-6 group"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                        <CheckCircle2 size={18} />
                      </div>
                      <span className="text-blue-100 group-hover:text-white transition-colors text-xl font-medium tracking-tight">
                        {language === 'marathi' ? doc.m : doc.e}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="p-12 md:p-24 bg-primary-dark/50 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]"></div>
                <div className="bg-white/5 p-12 md:p-16 rounded-[3rem] border border-white/10 relative z-10 backdrop-blur-2xl shadow-inner">
                  <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center text-accent mb-10">
                    <Zap size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-accent mb-8 uppercase tracking-[0.2em] leading-none">
                    {language === 'marathi' ? 'महत्वाची सूचना' : 'Important Note'}
                  </h3>
                  <p className="text-blue-100 leading-relaxed opacity-80 text-xl font-medium mb-12">
                    {language === 'marathi' 
                      ? 'कर्ज मंजुरी संस्थेच्या नियमावलीनुसार आणि कागदपत्रांच्या पडताळणीनंतरच केली जाईल. अधिक माहितीसाठी कृपया शाखेशी संपर्क साधा.' 
                      : 'Loan approval will be subject to society rules and document verification. Please contact the branch for more details.'}
                  </p>
                  <div className="pt-12 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-2">Processing Time</p>
                      <p className="text-4xl font-black tracking-tighter">2-3 <span className="text-xs text-white/40 uppercase tracking-widest">Working Days*</span></p>
                    </div>
                    <div className="text-[10px] text-white/20 italic font-black uppercase tracking-widest">*Conditions apply</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Loans;

