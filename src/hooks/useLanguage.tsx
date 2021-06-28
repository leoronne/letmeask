/* eslint-disable no-console */
import { createContext, useState, useEffect, useContext, useCallback, ReactNode } from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

interface LanguageContextProps {
  changeLanguage(lgn: string): void;
  translate: (slug: TranslateProps) => string;
  language: string;
}

const LanguageContext = createContext<LanguageContextProps>({} as LanguageContextProps);

interface Props {
  children: ReactNode;
}

function LanguageProvider({ children }: Props) {
  const { t } = useTranslation();

  const [language, setLanguage] = useState<string>(i18n.language || 'en');

  const changeLanguage = useCallback((lgn: string) => {
    try {
      if (i18n.language !== lgn.toLowerCase() && (lgn.toLowerCase() === 'en' || lgn.toLowerCase() === 'pt')) {
        i18n.changeLanguage(lgn.toLowerCase());
        localStorage.setItem('@LetMeAsk:language', lgn);
        setLanguage(lgn);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  const translate = useCallback(
    (slug: TranslateProps) => {
      return t(String(slug));
    },
    [t]
  );

  useEffect(() => {
    try {
      changeLanguage(localStorage.getItem('@LetMeAsk:language') || 'en');
    } catch (err) {
      console.error(err);
    }
  }, [changeLanguage]);

  return (
    <LanguageContext.Provider value={{ changeLanguage, translate, language }}>{children}</LanguageContext.Provider>
  );
}

const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within an LanguageProvider');
  }

  return context;
};

export { LanguageProvider, useLanguage };
