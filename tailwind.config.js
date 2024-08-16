/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          100: '#8b8b8b',
          200: '#656565',
          300: '#565656',
          400: '#474747',
          500: '#3a3a3a',
          600: '#2e2e2e',
          700: '#1e1e1e',
          800: '#0f0f0f',
          900: '#0d0d0d',
          full: '#000000'
        },
        blue: {
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#2788E4',
          500: '#1D66A9',
          600: '#0570D6',
          700: '#154B7E',
          800: '#10375C',
          900: '#0A233A',
        }
      },
    },
  },
  darkMode: "class",
  plugins: [],
}