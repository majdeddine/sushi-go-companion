import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { en, ir } from './locales'

const { NODE_ENV } = process.env

i18n.use(LanguageDetector).init({
  // we init with resources
  // lng: 'ir',
  resources: {
    en,
    ir,
  },
  fallbackLng: 'en',
  debug: NODE_ENV === 'development',

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ',',
  },

  react: {
    wait: true,
  },
})

export default i18n
