import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// EN
import translationEnHome from "./locales/en/home.json";
import translationEnHeader from "./locales/en/header.json";

// RU
import translationRuHome from "./locales/ru/home.json";
import translationRuHeader from "./locales/ru/header.json";

// AZ
import translationAzHome from "./locales/az/home.json";
import translationAzHeader from "./locales/az/header.json";

const resources = {
    en: {
        home: translationEnHome,
        header: translationEnHeader
    },
    ru: {
        home: translationRuHome,
        header: translationRuHeader
    },
    az: {
        home: translationAzHome,
        header: translationAzHeader
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        },
        ns: ['header', 'home'],
        defaultNS: 'header'
    });

export default i18n;