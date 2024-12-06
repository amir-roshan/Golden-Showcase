/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zentry: ["zentry", "sanf-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sanf-serif"],
        "robert-regular": ["robert-regular", "sanf-serif"],
      },
      colors: {
        blue: {
          50: "#DFDFF0",
          75: "#DFDFF2",
          100: "#F0F2FA",
          200: "#101010",
          300: "#4FB7DD",
        },
        violet: {
          300: "#5724FF",
        },

        yellow: {
          100: "#8E983F",
          300: "#EDFF66",
        },
      },
    },
  },
  plugins: [],
};
