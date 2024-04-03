import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "explore-flights":
          "url('/assets/100-days-challenge/explore-flights/background.jpg')",

        "shopping-list":
          "url('/assets/100-days-challenge/shopping-list/background.jpg')",

        "password-generator":
          "url('/assets/100-days-challenge/password-generator/background.jpg')",

        "sign-up-page":
          "url('/assets/100-days-challenge/sign-up-page/background.jpg')",

        "restaurant-reservation":
          "url('/assets/100-days-challenge/restaurant-reservation/background.jpg')",

        "create-account":
          "url('/assets/100-days-challenge/create-account/background.jpg')",

        "hotel-booking":
          "url('/assets/100-days-challenge/hotel-booking/background.jpg')",

        "music-festival":
          "url('/assets/100-days-challenge/music-festival/background.jpg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
