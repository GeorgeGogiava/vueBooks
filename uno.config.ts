import {
  defineConfig,
  presetWind3,         // Tailwind совместимость (современная замена presetUno)
  presetAttributify,   // <div p="4" text="blue-500"> стиль
  presetIcons,         // Иконки: i-heroicons-home, i-carbon-sun, i-mdi-account
  presetTypography,    // Красивое форматирование текстов и статей
  presetWebFonts,      // Google Fonts подключение
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),

    // Стили через HTML-атрибуты
    presetAttributify(),

    // Иконки по названиям, без установки SVG
    presetIcons(),

    // Готовые стили для markdown/text
    presetTypography(),

    // Google Fonts
    presetWebFonts({
      provider: 'google', // можно "bunny" если хочешь без Google
      fonts: {
        sans: 'Inter',
        serif: 'Merriweather',
        mono: 'Fira Code',
      },
    }),
  ],

  // Пример шорткатов (по желанию)
  shortcuts: [
    ['btn', 'px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition'],
    ['card', 'p-4 rounded shadow bg-white'],
    ['center-flex', 'flex justify-center items-center'],
  ],
})
