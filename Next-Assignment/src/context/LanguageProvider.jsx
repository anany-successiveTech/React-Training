
'use client';
import { createContext, useState } from 'react';


export const LanguageContext = createContext({
  language: 'en',
  switchLanguage: () => {},
});


export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
