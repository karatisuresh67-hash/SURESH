/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',
        compliant: '#10b981',
        warning: '#f59e0b',
        violation: '#ef4444',
      }
    },
  },
  plugins: [],
}
