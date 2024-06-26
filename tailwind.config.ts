import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        home: "url('/imgs/background.png')",
      },
      fontFamily: {
        akira: ['"Akira Expanded"', "sans-serif"],
        cocogoose: ['"Cocogoose"', "sans-serif"],
        heavitas: ['"Heavitas"', "sans-serif"],
      },
      boxShadow: {
        custom: "0px 5px 15px 0px rgba(0, 0, 0, 0.35);",
      },
      keyframes: {
        slide: {
          from: { transform: "translate(0)" },
          to: { transform: "translate(-100%)" },
        },
      },
      animation: {
        slide: "slide 10s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
