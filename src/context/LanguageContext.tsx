import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'marathi' | 'english';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => any;
  content: any;
  stats: any;
  deposits: any;
  recurringDeposits: any;
  loans: any;
  loading: boolean;
  refreshData: () => Promise<void>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('marathi');
  const [content, setContent] = useState<any>(null);
  const [stats, setStats] = useState<any>(null);
  const [deposits, setDeposits] = useState<any>(null);
  const [recurringDeposits, setRecurringDeposits] = useState<any>(null);
  const [loans, setLoans] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const [contentRes, statsRes, depositsRes, recurringRes, loansRes] = await Promise.all([
        fetch('/api/content').then(res => res.json()),
        fetch('/api/stats').then(res => res.json()),
        fetch('/api/deposits').then(res => res.json()),
        fetch('/api/recurring-deposits').then(res => res.json()),
        fetch('/api/loans').then(res => res.json()),
      ]);
      setContent(contentRes && !contentRes.error && Object.keys(contentRes.marathi || {}).length > 0 ? contentRes : null);
      setStats(statsRes && !statsRes.error && statsRes.shareCapital ? statsRes : null);
      setDeposits(Array.isArray(depositsRes) && depositsRes.length > 0 ? depositsRes : []);
      setRecurringDeposits(Array.isArray(recurringRes) && recurringRes.length > 0 ? recurringRes : []);
      setLoans(Array.isArray(loansRes) && loansRes.length > 0 ? loansRes : []);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const t = (path: string) => {
    if (!content) return '';
    const keys = path.split('.');
    let result = content[language];
    for (const key of keys) {
      if (result && result[key] !== undefined) {
        result = result[key];
      } else {
        console.warn(`Translation missing for key: ${path} in language: ${language}`);
        return `[${path}]`;
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      t, 
      content, 
      stats, 
      deposits, 
      recurringDeposits,
      loans, 
      loading,
      refreshData: fetchData
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
