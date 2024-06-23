/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "font-color": "#11175D",
        black: "#000000",
        "base-color": "#5F35F5",
      },
    },
    fontFamily: {
      nunito : ["Nunito", "sans-serif"],
      sans : ["Open Sans", "sans-serif"],
    
  }
  },
  plugins: [],
};
