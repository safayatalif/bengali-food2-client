/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://i.ibb.co/T495BBT/bg-1.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
}

