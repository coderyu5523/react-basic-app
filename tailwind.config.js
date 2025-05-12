/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],  // ✅ 'purge' 대신 'content' 사용
  theme: {
    extend: {},
  },
  plugins: [],
}

