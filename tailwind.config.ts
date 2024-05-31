import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "sm": "800px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {

        primary: {
          strong: "#4D869C",
          DEFAULT: "#4D869C",
        },
        secondary: {
          strong: "#7AB2B2",
          light: "#CDE8E5",
        },
        bgscreen: {
          bg: "#EEF7FF",
        },
        
      },
    },
  },
  plugins: [],
};
export default config;
