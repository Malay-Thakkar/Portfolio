/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: '#534AB7',
        'accent-light': '#EEEDFE',
        'accent-dark': '#3C3489',
        teal: { light: '#E1F5EE', DEFAULT: '#085041' },
        amber: { light: '#FAEEDA', DEFAULT: '#633806' },
        coral: { light: '#FAECE7', DEFAULT: '#712B13' },
        muted: { light: '#F1EFE8', DEFAULT: '#444441' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderWidth: {
        '0.5': '0.5px',
      },
    },
  },
  plugins: [],
}
