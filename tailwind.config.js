/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial'],
        serif: ['Merriweather', 'ui-serif', 'Georgia', 'Times New Roman', 'Times'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        // keep defaults, extend only if necessary
      }
    },
  },
  plugins: [],
}