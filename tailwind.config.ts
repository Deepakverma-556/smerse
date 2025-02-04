import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGray: "#0A0A2B80",
        purple: "#952FFE",
        pink: "#C641C6",
        orange: "#FF676B",
        lightOrange: "#FF676B33",
      },
      screens: {
        md:"770px",
        lg:"1025px",
      }
    },
  },
  plugins: [],
} satisfies Config;
