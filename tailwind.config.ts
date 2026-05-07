import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#bae0fd",
          300: "#7cc8fb",
          400: "#38adf8",
          500: "#0e91e9",
          600: "#0274c7",
          700: "#025ca1",
          800: "#064e85",
          900: "#0b426f",
          950: "#072a4a",
        },
      },
    },
  },
  plugins: [],
};
export default config;
