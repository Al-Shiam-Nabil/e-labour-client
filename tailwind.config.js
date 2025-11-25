/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx,mdx}",    
    "./src/Components/**/*.{js,jsx,ts,tsx}",  
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
