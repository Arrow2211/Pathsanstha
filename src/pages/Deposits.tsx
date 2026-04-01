import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Landmark, Clock, UserCheck, Heart, ShieldCheck } from 'lucide-react';
import FDCalculator from '../components/FDCalculator';
import RDCalculator from '../components/RDCalculator';

const Deposits = () => {
  const { t, language, deposits, recurringDeposits } = useLanguage();

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header - Traditional Style */}
      <div className="bg-[#003366] py-24 md:py-32 text-white relative overflow-hidden">
        <div className="section-container relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title text-white mb-4"
          >
            {t('nav.deposits')}
          </motion.h1>
          <div className="title-underline bg-[#C5A059]"></div>
          <p className="mt-8 text-blue-100 max-w-2xl opacity-90 text-lg leading-relaxed">
            {language === 'marathi' 
              ? 'तुमच्या कष्टाच्या पैशावर मिळवा सुरक्षित आणि जास्तीत जास्त परतावा.' 
              : 'Secure your future with our competitive deposit schemes designed for maximum returns.'}
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-20deg] translate-x-1/2"></div>
      </div>

      <div className="section-padding">
        <div className="section-container">
          {/* General Deposits Table */}
          <div className="bg-white rounded-lg shadow-2xl border border-slate-200 overflow-hidden mb-20">
            <div className="bg-[#003366] p-6 md:p-8 text-white flex flex-col md:flex-row md:items-center justify-between border-b-4 border-[#C5A059] gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-[#C5A059]">
                  <Landmark size={28} />
                </div>
                <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest">
                  {language === 'marathi' ? 'मुदत ठेव व्याजदर (सर्वसाधारण)' : 'Fixed Deposit Rates (General)'}
                </h2>
              </div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-70 bg-white/10 px-4 py-2 rounded-full self-start md:self-auto">
                Effective from April 2024
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[600px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-8 py-6 font-bold text-[#003366] uppercase tracking-widest text-xs">{language === 'marathi' ? 'कालावधी' : 'Period'}</th>
                    <th className="px-8 py-6 font-bold text-[#003366] uppercase tracking-widest text-xs">{language === 'marathi' ? 'व्याजदर (सर्वसाधारण)' : 'Rate (General)'}</th>
                    <th className="px-8 py-6 font-bold text-[#003366] uppercase tracking-widest text-xs">{language === 'marathi' ? 'व्याजदर (ज्येष्ठ नागरिक/विधवा)' : 'Rate (Senior/Widow)'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {Array.isArray(deposits) && deposits.map((d: any) => (
                    <tr key={d.id} className="hover:bg-slate-50 transition-colors group">
                      <td className="px-8 py-6 text-slate-700 font-bold">{d.name[language]}</td>
                      <td className="px-8 py-6 text-[#003366] font-black text-xl">{d.general}</td>
                      <td className="px-8 py-6 text-[#C5A059] font-black text-xl">{d.senior}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recurring Deposit Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-20">
            <div className="lg:col-span-1 bg-[#003366] text-white p-10 md:p-12 rounded-lg flex flex-col justify-center border-b-8 border-[#C5A059] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-500"></div>
              <Clock size={56} className="mb-8 text-[#C5A059] relative z-10" strokeWidth={1} />
              <h2 className="text-2xl md:text-3xl font-bold mb-6 uppercase tracking-widest relative z-10">
                {language === 'marathi' ? 'पुनरावृत्ती ठेव (RD)' : 'Recurring Deposit (RD)'}
              </h2>
              <p className="text-blue-100 opacity-90 leading-relaxed mb-10 text-lg relative z-10">
                {language === 'marathi' 
                  ? 'नियमित बचतीसाठी सर्वोत्तम पर्याय. दरमहिन्याला ठराविक रक्कम जमा करा आणि भविष्यासाठी मोठी पुंजी उभारा.' 
                  : 'Build your savings systematically with our Recurring Deposit scheme. Perfect for long-term financial goals and disciplined saving.'}
              </p>
              <div className="pt-8 border-t border-white/20 relative z-10">
                <p className="text-[10px] uppercase font-bold tracking-widest text-[#C5A059] mb-2">Minimum Monthly Deposit</p>
                <p className="text-2xl font-bold">₹500 / Month</p>
              </div>
            </div>
            <div className="lg:col-span-2 bg-white rounded-lg shadow-2xl border border-slate-200 overflow-hidden">
              <div className="bg-slate-50 p-6 md:p-8 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h3 className="font-bold text-[#003366] uppercase tracking-widest text-sm">RD Interest Structure</h3>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-white px-3 py-1 rounded border border-slate-200">Monthly Compounding</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[400px]">
                  <thead>
                    <tr className="bg-white border-b border-slate-100">
                      <th className="px-8 py-6 font-bold text-slate-400 uppercase tracking-widest text-[10px]">{language === 'marathi' ? 'कालावधी' : 'Period'}</th>
                      <th className="px-8 py-6 font-bold text-slate-400 uppercase tracking-widest text-[10px]">{language === 'marathi' ? 'व्याजदर' : 'Interest Rate'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {(Array.isArray(recurringDeposits) ? recurringDeposits : []).map((rd: any, i: number) => (
                      <tr key={i} className="hover:bg-slate-50 transition-colors">
                        <td className="px-8 py-6 text-slate-700 font-bold">{rd.period[language]}</td>
                        <td className="px-8 py-6 text-[#003366] font-black text-3xl">{rd.rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <FDCalculator />
          </div>

          <div className="mb-24">
            <RDCalculator />
          </div>

          {/* Features - Corporate Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: language === 'marathi' ? 'ज्येष्ठ नागरिक सवलत' : 'Senior Citizen Benefit', desc: language === 'marathi' ? 'ज्येष्ठ नागरिकांसाठी जादा व्याजदर आणि विशेष सन्मान.' : 'Preferential interest rates and dedicated support for our senior members.', icon: UserCheck },
              { title: language === 'marathi' ? 'विधवा सवलत' : 'Widow Benefit', desc: language === 'marathi' ? 'विधवा भगिनींसाठी विशेष व्याजदर आणि आर्थिक पाठबळ.' : 'Special financial support and higher rates for widows to ensure security.', icon: Heart },
              { title: language === 'marathi' ? 'सुरक्षित गुंतवणूक' : 'Safe Investment', desc: language === 'marathi' ? 'तुमची ठेव पूर्णपणे सुरक्षित आणि शासनाच्या नियमांनुसार संरक्षित.' : 'Your hard-earned money is fully protected and insured as per regulations.', icon: ShieldCheck },
            ].map((f, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5 }}
                className="bg-white p-10 rounded-lg border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center text-[#C5A059] mb-8 border border-slate-100 group-hover:bg-[#003366] group-hover:text-white transition-colors duration-300">
                  <f.icon size={36} strokeWidth={1} />
                </div>
                <h3 className="font-bold text-[#003366] text-xl mb-4 uppercase tracking-tight">{f.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposits;
