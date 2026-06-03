import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        accent: {
          DEFAULT: "#00d4d4",
          hover: "#00f5f5",
        },
      },
      boxShadow: {
        glow: "0 0 30px rgba(0, 212, 212, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
