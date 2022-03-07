const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: {
        DEFAULT: "#000000",
        dark: "#2B4146",
        darker: "#001B21",
      },
      metallic: "#f1f5f9",
      white: colors.white,
      circle: {
        orange: "#F97316",
        green: "#005061",
        amber: "#F59E0B",
        lightGreen: "#5EEAD4",
        purple: "#9333EA",
        yellow: "#FFCB00",
        pink: "#F43F5E",
      },
      gray: {
        DEFAULT: "#778097",
        primary: "#AAC0C5",
        secondary: "#AAB3B5",
        light: "#94A3B8",
        tertiary: "#F8FCFC",
        fifty: "#F9FAFB",
      },
      green: {
        DEFAULT: "#017189",
        light: "#DDECEF",
        lighter: "#22C55E",
        transparent: "#EAFBFF",
        opaque: "#2B899D",
        secondary: "#CCE7ED",
        tertiary: "#14B8A6",
        lightest: "#EEF7F9",
      },
      yellow: {
        DEFAULT: "#FFF6E6",
        lighter: "#FFF5E9",
      },
      peach: {
        DEFAULT: "#FDA4AF",
        lighter: "#FBF1F0",
        dark: "#E99015",
      },
    },
    extend: {
      fontFamily: {
        body: ["Nunito Sans"],
      },
    },
  },
  plugins: [],
};
