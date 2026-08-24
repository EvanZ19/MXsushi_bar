import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FFFFFF",     // page background
        cream: "#F6F2EA",     // soft off-white for alternating sections
        ink: "#1C2333",       // dark indigo-black body text
        indigo: "#28456B",    // primary — traditional ai-zome indigo
        indigodark: "#16283F",// deep indigo for header/footer bands
        coral: "#DB6A4C",     // warm salmon/coral accent — used sparingly
      },
      fontFamily: {
        display: ["var(--font-shoulders)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
