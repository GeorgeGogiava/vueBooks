/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_IS_EASY:string; // Anyway will be the string'
  readonly VITE_APP_PERCENT:string; // Anyway will be the string'
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}