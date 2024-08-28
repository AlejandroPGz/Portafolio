/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        'midnight': {
        '50': '#eff7ff',
        '100': '#dbedfe',
        '200': '#bfe0fe',
        '300': '#93cefd',
        '400': '#60b2fa',
        '500': '#3a92f7',
        '600': '#2474ec',
        '700': '#1c5ed9',
        '800': '#1e4caf',
        '900': '#1e438a',
        '950': '#0d1830',
    },
    
'bunker': {
        '50': '#f4f5fb',
        '100': '#e8e9f6',
        '200': '#ccd1eb',
        '300': '#a0abd9',
        '400': '#6d7fc3',
        '500': '#4a5ead',
        '600': '#384791',
        '700': '#2f3a75',
        '800': '#2a3462',
        '900': '#272d53',
        '950': '#080911',
    },
      }
    },
  },
  plugins: [],
}

