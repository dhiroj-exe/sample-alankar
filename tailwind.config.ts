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
        rosePink: {
          DEFAULT: "#D94F83",
          50: "#FCF2F6",
          100: "#F9E4EE",
          200: "#F4C6DC",
          300: "#ECA3C5",
          400: "#E377A6",
          500: "#D94F83",
          600: "#C2376C",
          700: "#A22655",
          800: "#832045",
          900: "#691C39",
          950: "#400A1F",
        },
        warmIvory: {
          DEFAULT: "#FFF9F5",
          50: "#FFFFFF",
          100: "#FFF9F5",
          200: "#FFF2E8",
          300: "#FDE6D5",
          400: "#F8D4BC",
        },
        champagneGold: {
          DEFAULT: "#C5A46D",
          50: "#FAF7F1",
          100: "#F4EDE1",
          200: "#EADDC6",
          300: "#DFCBA9",
          400: "#D2B889",
          500: "#C5A46D",
          600: "#AC8951",
          700: "#8B6D3D",
          800: "#6F5633",
          900: "#58442A",
        },
        deepCharcoal: {
          DEFAULT: "#30232A",
          50: "#F6F4F5",
          100: "#EAE7E8",
          200: "#D7D2D4",
          300: "#B8B0B4",
          400: "#8F848A",
          500: "#6E6268",
          600: "#554A50",
          700: "#42373D",
          800: "#30232A",
          900: "#22181E",
          950: "#140D11",
        },
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        display: ["'Playfair Display'", "Didot", "Bodoni MT", "serif"],
        sans: ["'Montserrat'", "'Plus Jakarta Sans'", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widestLuxury: "0.25em",
        ultraLuxury: "0.35em",
      },
      boxShadow: {
        luxury: "0 20px 40px -15px rgba(48, 35, 42, 0.08)",
        luxuryHover: "0 25px 50px -12px rgba(48, 35, 42, 0.16)",
        goldGlow: "0 0 30px -5px rgba(197, 164, 109, 0.35)",
        pinkGlow: "0 0 30px -5px rgba(217, 79, 131, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
