import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [isRTL, setIsRTL] = useState(false);

  // Initialize language from localStorage or browser preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    const browserLanguage = navigator.language.startsWith('ar') ? 'ar' : 'en';
    const initialLanguage = savedLanguage || browserLanguage;
    
    setLanguageState(initialLanguage);
    setIsRTL(initialLanguage === 'ar');
    document.documentElement.lang = initialLanguage;
    document.documentElement.dir = initialLanguage === 'ar' ? 'rtl' : 'ltr';
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setIsRTL(lang === 'ar');
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
