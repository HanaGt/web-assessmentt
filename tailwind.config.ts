import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages//*.{js,ts,jsx,tsx,mdx}",
    "./components//*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: '#7879F1',
        customGray: '#3C3C3C',
        red: "#FF0000",
        blue: "#0000FF",
        green: "#00FF00",
        customColor: {
          100: "#E5F3FF",
          200: "#99D6FF",
          300: "#4DB8FF",
          400: "#009BFF",
          500: "#007ACC",
          600: "#005499",
          700: "#003766",
          800: "#001A33",
          900: "#000000",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontWeight: {
        "big":"1000"
      }
    },
  },
  plugins: [],
};

export default config;
