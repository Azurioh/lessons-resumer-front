import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import enTranslations from './utils/translation/locales/en.json';
import frTranslations from './utils/translation/locales/fr.json';

// Configurer i18next
i18next
  .use(LanguageDetector) // Détecte la langue du navigateur
  .use(initReactI18next) // Intégration avec React
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      fr: {
        translation: frTranslations,
      },
    },
    fallbackLng: 'en', // Langue par défaut si aucune langue n'est détectée
    interpolation: {
      escapeValue: false, // React gère l'échappement des caractères spéciaux
    },
  });

export default i18next;
