import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calculator, TrendingUp } from 'lucide-react';

const FDCalculator: React.FC = () => {
  const { language } = useLanguage();
  const [depositAmount, setDepositAmount] = useState<number>(100000);
  const [interestRate, setInterestRate] = useState<number>(7.5);
  const [tenure, setTenure] = useState<number>(1);
  const [maturityAmount, setMaturityAmount] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);

  useEffect(() => {
    // A = P(1 + r/n)^(nt)
    // For FD, n is usually 4 (quarterly compounding)
    const n = 4;
    const r = interestRate / 100;
    const t = tenure;
    const amount = depositAmount * Math.pow(1 + r/n, n * t);
    
    if (isFinite(amount)) {
      setMaturityAmount(Math.round(amount));
      setTotalInterest(Math.round(amount - depositAmount));
    }
  }, [depositAmount, interestRate, tenure]);

  const labels = {
    title: language === 'marathi' ? 'मुदत ठेव (FD) कॅल्क्युलेटर' : 'Fixed Deposit (FD) Calculator',
    depositAmount: language === 'marathi' ? 'ठेव रक्कम' : 'Deposit Amount',
    interestRate: language === 'marathi' ? 'व्याज दर (%)' : 'Interest Rate (%)',
    tenure: language === 'marathi' ? 'कालावधी (वर्षे)' : 'Tenure (Years)',
    maturityAmount: language === 'marathi' ? 'परिपक्वता रक्कम' : 'Maturity Amount',
    totalInterest: language === 'marathi' ? 'एकूण व्याज' : 'Total Interest',
    currency: language === 'marathi' ? '₹' : '₹',
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 max-w-4xl mx-auto">
      <div className="bg-[#003366] p-6 text-white flex items-center gap-3">
        <TrendingUp className="text-[#C5A059]" />
        <h2 className="text-xl font-bold uppercase tracking-wider">{labels.title}</h2>
      </div>
      
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <div className="flex justify-between mb-4">
              <label className="text-sm font-bold text-gray-600 uppercase tracking-wider">{labels.depositAmount}</label>
              <span className="text-blue-900 font-bold">{labels.currency} {depositAmount.toLocaleString()}</span>
            </div>
            <input 
              type="range" 
              min="1000" 
              max="10000000" 
              step="1000"
              value={depositAmount}
              onChange={(e) => setDepositAmount(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#003366]"
            />
            <div className="flex justify-between text-[10px] text-gray-400 mt-2 font-bold">
              <span>{labels.currency} 1K</span>
              <span>{labels.currency} 1Cr</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-4">
              <label className="text-sm font-bold text-gray-600 uppercase tracking-wider">{labels.interestRate}</label>
              <span className="text-blue-900 font-bold">{interestRate}%</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="15" 
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#003366]"
            />
            <div className="flex justify-between text-[10px] text-gray-400 mt-2 font-bold">
              <span>1%</span>
              <span>15%</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-4">
              <label className="text-sm font-bold text-gray-600 uppercase tracking-wider">{labels.tenure}</label>
              <span className="text-blue-900 font-bold">{tenure} Yrs</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="10" 
              step="1"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#003366]"
            />
            <div className="flex justify-between text-[10px] text-gray-400 mt-2 font-bold">
              <span>1 Yr</span>
              <span>10 Yrs</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-8 rounded-2xl flex flex-col justify-center space-y-6 border border-gray-100">
          <div className="text-center">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{labels.maturityAmount}</p>
            <p className="text-4xl font-black text-blue-900">{labels.currency} {maturityAmount.toLocaleString()}</p>
          </div>
          
          <div className="h-px bg-gray-200 w-full"></div>
          
          <div className="text-center">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">{labels.totalInterest}</p>
            <p className="text-2xl font-bold text-green-600">+{labels.currency} {totalInterest.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FDCalculator;
