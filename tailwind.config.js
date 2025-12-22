/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f6f7f6',
          100: '#e8ebe8',
          200: '#d1d7d1',
          300: '#a8b4a8',
          400: '#7d8f7d',
          500: '#5c6f5c',
          600: '#4a5a4a',
          700: '#3d4a3d',
          800: '#323d32',
          900: '#2a332a',
        },
        sage: {
          50: '#f6f7f6',
          100: '#e8ebe8',
          200: '#d1d7d1',
          300: '#a8b4a8',
          400: '#7d8f7d',
          500: '#5c6f5c',
          600: '#4a5a4a',
          700: '#3d4a3d',
          800: '#323d32',
          900: '#2a332a',
        },
        warm: {
          50: '#fdfcfa',
          100: '#faf8f5',
          200: '#f5f1ea',
          300: '#e8dfd0',
          400: '#d4c4a8',
          500: '#b89968',
          600: '#9c7a4f',
          700: '#7d6240',
          800: '#65503a',
          900: '#544333',
        },
        gold: {
          50: '#fdfcfa',
          100: '#faf8f5',
          200: '#f5f1ea',
          300: '#e8dfd0',
          400: '#d4c4a8',
          500: '#b89968',
          600: '#9c7a4f',
          700: '#7d6240',
          800: '#65503a',
          900: '#544333',
        },
        burgundy: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#7c2d2d',
          600: '#6b2525',
          700: '#5a1f1f',
          800: '#4a1a1a',
          900: '#3d1616',
        }
      },
      fontFamily: {
        'serif': ['Crimson Pro', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}