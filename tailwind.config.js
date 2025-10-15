/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f3ff',
          100: '#cce7ff',
          200: '#99cfff',
          300: '#66b7ff',
          400: '#339fff',
          500: '#1e90ff',
          600: '#0073e6',
          700: '#0056b3',
          800: '#003a80',
          900: '#001d4d',
        },
        dark: {
          50: '#e8eaed',
          100: '#d1d5db',
          200: '#9ca3af',
          300: '#6b7280',
          400: '#4b5563',
          500: '#1f2937',
          600: '#1a202e',
          700: '#141824',
          800: '#0f111a',
          900: '#0a0c12',
        },
      },
    },
  },
  plugins: [],
}
