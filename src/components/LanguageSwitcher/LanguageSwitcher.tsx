import FrIcon from '@icons/language/fr.svg?react';
import EnIcon from '@icons/language/uk.svg?react';
import type React from 'react';
import { useEffect, useState } from 'react';
import i18next from '../../i18n';
import style from './LanguageSwitcher.module.css';

const LanguageSwitcher: React.FC = () => {
  const [language, setLanguage] = useState<string>('fr');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setLanguage(storedLanguage);
      i18next.changeLanguage(storedLanguage);
    } else {
      const userLanguage = 'fr';
      setLanguage(userLanguage);
      i18next.changeLanguage(userLanguage);
    }
  }, []);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    i18next.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <div className={style.languages} style={{ width: 100 }}>
      <FrIcon className={`${style.languageIcon} ${language === 'fr' ? style.active : ''}`} onClick={() => handleLanguageChange('fr')} />
      <EnIcon className={`${style.languageIcon} ${language === 'en' ? style.active : ''}`} onClick={() => handleLanguageChange('en')} />
    </div>
  );
};

export default LanguageSwitcher;
