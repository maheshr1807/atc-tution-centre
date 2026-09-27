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
          DEFAULT: '#063B4C',
          50: '#e8f4f8',
          100: '#c5e4ed',
          200: '#8fc9da',
          300: '#56adc7',
          400: '#2e92b4',
          500: '#087F8C',
          600: '#0a6e7a',
          700: '#063B4C',
          800: '#042d3a',
          900: '#021f28',
        },
        teal: {
          DEFAULT: '#087F8C',
          light: '#0a9aaa',
          dark: '#065e69',
        },
        cream: {
          DEFAULT: '#FFF8E8',
          dark: '#f5eed8',
        },
        gold: {
          DEFAULT: '#D6A928',
          light: '#e8c04a',
          dark: '#b8921e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans Tamil', 'sans-serif'],
        tamil: ['Noto Sans Tamil', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
}
