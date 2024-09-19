import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // project colors
        primary: "#ff6600",
        light: "#f9f6ff",
        dark: "#011f19",
        "green-dark": "#007680",
        "green-light": "#90ff00",
        "dark-200": "#012820",
        "dark-300": "#252525",
        gray: "#393939",
        white: "#ffffff",
        blue: "#3f0d99",
        purple: "#c3a1ff",
      },
    },
  },
  plugins: [],
};
export default config;
