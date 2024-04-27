import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'dark-blue': '#2B3945',
        'button-blue': '#4C9AFF',
      },
    },
  },
  plugins: [],
};
export default config;

// Dark Blue: #2B3945 (for header and footer backgrounds)
// White: #FFFFFF (for text on dark blue background)
// Light Gray: #F0F4F8 (for main section background)
// Button Blue: #4C9AFF (for buttons and important elements)
// Text Gray: #333333 (for general text on light backgrounds)