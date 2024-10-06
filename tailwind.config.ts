import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-helvetica-sans)"],
        light: ["var(--font-helvetica-light)"],
        bold: ["var(--font-helvetica-bold)"],
        compressed: ["var(--font-helvetica-compressed)"],
      },
    },
  },
  plugins: [],
};
export default config;
