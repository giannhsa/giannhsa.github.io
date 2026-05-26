/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'blue-glow': '0 0 70px rgba(96, 165, 250, 0.18)',
        'deep-glow': '0 36px 120px rgba(30, 41, 59, 0.42)',
      },
    },
  },
  plugins: [],
};
