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
        "dark-blue": "#001220",
        "purple": "#735FEF",
        "light-blue": "#38C2D5",
        "off-white": "#F5F5F5"
      }
    },
  },
  plugins: [],
};
export default config;
