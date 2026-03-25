/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B2C6E',
          dark: '#0F1A45',
          light: '#2A3F8F'
        },
        gold: {
          DEFAULT: '#B8943F',
          light: '#D4AF6A',
          dark: '#8C6E2A'
        },
        cream: '#F5F4F0',
        dark: '#1A1A2E',
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
