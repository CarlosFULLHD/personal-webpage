import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        circular: ["Circular", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.02em", // -2% aproximadamente
        tightest: "-0.01em", // -1% aproximadamente
        espaciado: "+0.02em", // 2% aproximadamente
        espaciadomas: "+0.04em", // 4% aproximadamente
      },
      colors: {
        "custom-blue": "#006692",
        "custom-yellow": "#FFE3A4",
        "custom-orange": "#F5A67E",
        "custom-gray": "#8A92A6",
        "custom-background": "#1A3A50",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
