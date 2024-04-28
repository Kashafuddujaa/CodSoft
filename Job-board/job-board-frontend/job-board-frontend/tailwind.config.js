/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Scan JavaScript and TypeScript files
    './public/index.html',        // Scan the main HTML file
  ],
  theme: {
    extend: {}, // Extend the default Tailwind CSS theme here
  },
  plugins: [], // Additional Tailwind CSS plugins can be added here
};