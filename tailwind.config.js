const plugin = require("tailwindcss/plugin");

const textShadow = plugin(function ({ addUtilities }) {
  addUtilities({
    ".text-shadow-xs-10": {
      "text-shadow": "0px 0px 2px #141516",
    },
    ".text-shadow-sm-10": {
      "text-shadow": "0px 0px 4px #141516",
    },
    ".text-shadow-md-10": {
      "text-shadow": "0px 0px 8px #141516",
    },
    ".text-shadow-lg-10": {
      "text-shadow": "0px 0px 16px #141516",
    },
  });
});

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
        raleway: ["Raleway", "sans-serif"],
        proxima: ["proxima-nova", "sans-serif"],
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },

  plugins: [require("tailwindcss-animation"), textShadow],
};
