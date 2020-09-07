import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enUS from './locales/en-US.json';
import viVN from './locales/vi-VN.json';
import krKR from './locales/kr-KR.json';
import zhCN from './locales/zh-CN.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      'en-US': enUS,
      'vi-VN': viVN,
      'kr-KR': krKR,
      'zh-CN': zhCN,
    },
    lng: 'en-US',
    fallbackLng: 'en-US',

    defaultNS: 'general',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
