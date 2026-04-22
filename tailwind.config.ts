import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        wine: "#6B2D3E",
        rose: "#C4899A",
        gold: "#D4AF7A",
        cream: "#FAF6F0",
        blush: "#F5E8E4",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        georgian: ["var(--font-noto-georgian)", "serif"],
      },
      maxWidth: {
        card: "680px",
      },
    },
  },
  plugins: [],
};

export default config;
