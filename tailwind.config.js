/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ Required to scan all components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
