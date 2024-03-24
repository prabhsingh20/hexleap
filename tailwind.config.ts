import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        custom: "0px 8px 16px 0px rgba(0, 0, 0, 0.05)",
      },
      colors: {
        light: {
          main: "#F7F7F8",
          secondary: " #fff",
          text: "#000",
          paragraph: "#525965",
          button: "#2C9CF0",
        },

        dark: {
          main: "#292B32",
          secondary: " #3B3E47",
          text: "#fff",
          paragraph: "#DFDFDF",
          button: "#2C9CF0",
        },
      },
      backgroundImage: (theme) => ({
        "gradient-light": "linear-gradient(#F9F8FF,#F3F9FF)",
        "gradient-dark": "linear-gradient(#18282A, #221A2C)",
      }),
    },
    variants: {
      extend: {
        backgroundImage: ["dark"],
      },
    },
  },
  plugins: [],
};
export default config;
