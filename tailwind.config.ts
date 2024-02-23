import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": 
          "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "day-9":
          "url('/assets/100-days-challenge/day-9/pexels-stephan-seeber-1261728.jpg')",
        "day-10":
          "url('/assets/100-days-challenge/day-10/oleg-laptev-7jQh3EiS8Bs-unsplash.jpg')",
        "day-11":
          "url('/assets/100-days-challenge/day-11/taylor-van-riper-yQorCngxzwI-unsplash.jpg')",
        "day-12":
          "url('/assets/100-days-challenge/day-12/background.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
