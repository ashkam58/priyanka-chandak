import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eefaff",
          100: "#d6f0ff",
          200: "#b0e2ff",
          300: "#7ccfff",
          400: "#46b7ff",
          500: "#1f9dff",
          600: "#0e7de6",
          700: "#0a61b4",
          800: "#0a4c8c",
          900: "#0a3f72"
        }
      },
      backgroundImage: {
        "glass": "radial-gradient(ellipse at top left, rgba(255,255,255,0.20), rgba(255,255,255,0.06))"
      },
      boxShadow: {
        "soft": "0 10px 30px rgba(0,0,0,0.12)"
      }
    }
  },
  plugins: []
};
export default config;
