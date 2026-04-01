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
      const fetchJson = async (url: string) => {
        try {
          const res = await fetch(url);
          if (!res.ok) {
            console.warn(`Fetch failed for ${url}: ${res.status} ${res.statusText}`);
            return null;
          }
          return await res.json();
        } catch (e) {
          console.error(`Error fetching ${url}:`, e);
          return null;
        }
      };

      const [contentRes, statsRes, depositsRes, recurringRes, loansRes] = await Promise.all([
        fetchJson('/api/content'),
        fetchJson('/api/stats'),
        fetchJson('/api/deposits'),
        fetchJson('/api/recurring-deposits'),
        fetchJson('/api/loans'),
      ]);

      if (contentRes && !contentRes.error && Object.keys(contentRes.marathi || {}).length > 0) {
        setContent(contentRes);
      } else {
        console.warn('Content data is missing or invalid');
      }

      if (statsRes && !statsRes.error) {
        setStats(statsRes);
      }

      setDeposits(Array.isArray(depositsRes) ? depositsRes : []);
      setRecurringDeposits(Array.isArray(recurringRes) ? recurringRes : []);
      setLoans(Array.isArray(loansRes) ? loansRes : []);
    } catch (error) {
      console.error('Error in fetchData:', error);
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
