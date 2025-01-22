/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#05010D",
      },
      backgroundImage: {
        "conic-gradient": `conic-gradient(
          from 179.42deg at 47.87% -110.87%, 
          #1ADBE3 -25.84deg, 
          #7001D3 0.27deg, 
          #FE6272 22.53deg, 
          #BD38FF 127.5deg, 
          #1752CA 196.87deg, 
          #1ADBE3 334.16deg, 
          #7001D3 360.27deg
        )`,
      },
      borderImage: {
        "linear-gradient": `linear-gradient(
          180deg, 
          #FFFFFF 0%, 
          rgba(255, 255, 255, 0.4) 100%
        )`,
      },
      fontFamily: {
        instrument_serif: ['Instrument Serif', 'serif'],
      },
    },
  },
  plugins: [],
};
