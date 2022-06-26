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

const customShapeClips = plugin(function ({ addUtilities }) {
  addUtilities({
    ".clip-rhombus": {
      "clip-path": "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);",
    },
    ".clip-triangle": {
      "clip-path": `polygon(calc(50% + 50.00%) calc(50% + 0.00%),
      calc(50% + -25.00%) calc(50% + 43.30%),
      calc(50% + -25.00%) calc(50% + -43.30%),
      calc(50% + 50.00%) calc(50% + -0.00%));`,
    },
    ".clip-triangle-hole": {
      "clip-path": `polygon(calc(50% + 50.00%) calc(50% + 0.00%),
      calc(50% + -25.00%) calc(50% + -43.30%),
      calc(50% + -25.00%) calc(50% + 43.30%),
      calc(50% + 50.00%) calc(50% + 0.00%), calc(50% + 47.50%) calc(50% + 0.00%),
      calc(50% + -23.75%) calc(50% + 41.14%),
      calc(50% + -23.75%) calc(50% + -41.14%),
      calc(50% + 47.50%) calc(50% + -0.00%));`,
    },
    ".clip-square": {
      "clip-path": `polygon(calc(50% + 50.00%) calc(50% + 0.00%),
      calc(50% + 0.00%) calc(50% + 50.00%),
      calc(50% + -50.00%) calc(50% + 0.00%),
      calc(50% + -0.00%) calc(50% + -50.00%),
      calc(50% + 50.00%) calc(50% + -0.00%));`,
    },
    ".clip-square-hole": {
      "clip-path": `polygon(calc(50% + 50.00%) calc(50% + 0.00%),
      calc(50% + 0.00%) calc(50% + -50.00%),
      calc(50% + -50.00%) calc(50% + -0.00%),
      calc(50% + -0.00%) calc(50% + 50.00%),
      calc(50% + 50.00%) calc(50% + 0.00%), calc(50% + 47.50%) calc(50% + 0.00%),
      calc(50% + 0.00%) calc(50% + 47.50%),
      calc(50% + -47.50%) calc(50% + 0.00%),
      calc(50% + -0.00%) calc(50% + -47.50%),
      calc(50% + 47.50%) calc(50% + -0.00%));`,
    },
    ".clip-cross": {
      "clip-path": `polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 
        80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);`,
    },
    ".clip-circle": {
      "clip-path": `circle(50% at 50% 50%);`,
    },
  });
});

module.exports = {
  mode: "jit",
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
        brandon: ["brandon", "sans-serif"],
        "brandon-thin": ["brandon-thin", "sans-serif"],
      },
      dropShadow: {
        10: "0 0 5px #9099E3ff",
        20: "0 0 5px #394798ff",
        30: "0 0 5px #925BB4ff",
        40: "0 0 5px #AD7FCDff",
        50: "0 0 5px #A285CEff",
        60: "0 0 5px #DFC8EFff",
        70: "0 0 5px #F2F4F6ff",
        80: "0 0 5px #404451ff",
        90: "0 0 5px #666A77ff",
        100: "0 0 5px #B1B2E9ff",
        110: "0 0 5px #141516",
      },
      backgroundImage: {
        kanade: "url('/kanade-full.png')",
        mafuyu: "url('/mafuyu-full.png')",
        enanan: "url('/ena-full.png')",
        mizuki: "url('/mizuki-full.png')",
        refusal: "url('/bg_school_refusal.png')",
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

  plugins: [
    require("tailwindcss-animation"),
    require("@kamona/tailwindcss-perspective"),
    textShadow,
    customShapeClips,
  ],
};
