export const ggConfig = {
  apiUrl: import.meta.env.VITE_API_URL,
  title: import.meta.env.VITE_APP_TITLE,
  percent: Number(import.meta.env.VITE_APP_PERCENT),
  isEasy: import.meta.env.VITE_APP_IS_EASY.toLowerCase().trim() ==='true' 
  };


/* export const ggConfig = {
  apiUrl: import.meta.env.VITE_API_URL,
  title: import.meta.env.VITE_APP_TITLE,
  version: import.meta.env.VITE_APP_VERSION,
  features: {
    books: import.meta.env.VITE_FEATURE_BOOKS === 'true',
    categories: import.meta.env.VITE_FEATURE_CATEGORIES === 'true',
  },
  ui: {
    theme: import.meta.env.VITE_UI_THEME,
    animations: import.meta.env.VITE_UI_ANIMATIONS === 'true',
  },
};
Then anywhere in your app:
import { ggConfig } from '@/config/env';

console.log(ggConfig.apiUrl);
console.log(ggConfig.features.books); */