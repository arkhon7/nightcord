module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nightcord: {
          10: "#9099E3ff",
          20: "#394798ff",
          30: "#925BB4ff",
          40: "#AD7FCDff",
          50: "#A285CEff",
          60: "#DFC8EFff",
          70: "#F2F4F6ff",
          80: "#404451ff",
          90: "#666A77ff",
          100: "#B1B2E9ff",
          110: "#141516",
        },
      },
      fontFamily: {
        nav: ["Raleway", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [require("tailwindcss-animation")],
};
