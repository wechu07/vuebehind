/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        primary: '#0dcaf0',
        secondary: '#0d6efd',
        sectionBackground: '#f0f8ff',
        dark: '#000000',
        navbarBackground: '#273053',
        paragraph: '#717275',
        highlight: '#ff0100'
      }
    }
  },
  plugins: []
}
