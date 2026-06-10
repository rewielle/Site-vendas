import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        creme: {
          50: "#FDFAF5",
          100: "#FAF3E7",
          200: "#F5E6D0",
          300: "#EDCFA8",
        },
        dourado: {
          300: "#E8C97A",
          400: "#D4A853",
          500: "#C9953A",
          600: "#A87830",
        },
        rose: {
          100: "#FCE8EC",
          200: "#F5C6D0",
          300: "#ECA0B2",
          400: "#E07694",
        },
        marrom: {
          800: "#3D2B1F",
          700: "#5C3D2E",
          600: "#7A5240",
        },
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
        lato: ["'Lato'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
