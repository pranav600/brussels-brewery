import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: "#FEF3C7",
          100: "#FDE68A",
          200: "#FCD34D",
          300: "#FBBF24",
          400: "#F59E0B",
          500: "#D97706",
          600: "#B45309",
          700: "#92400E",
          800: "#78350F",
          900: "#451A03",
          950: "#1C0A00",
        },
        cream: {
          50: "#FFFBF5",
          100: "#FEF3E2",
          200: "#FDE8C5",
          300: "#FBCF86",
          400: "#F9B254",
          500: "#F79432",
          DEFAULT: "#FEF3C7",
        },
        swirlzy: {
          bg: "#e8ebe2",
          green: "#1d5249",
          yellow: "#f4b350",
          blue: "#8cbce6",
          orange: "#f58e4b",
          dark: "#141712",
        },
      },
      fontFamily: {
        serif: ["Fredoka", "sans-serif"],
        sans: ["Outfit", "system-ui", "sans-serif"],
        display: ["Anton", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-down": "slideDown 0.4s ease-out forwards",
        "scale-in": "scaleIn 0.3s ease-out forwards",
        "marquee": "marquee 30s linear infinite",
        "spin-slow": "spin 20s linear infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "bounce-soft": "bounceSoft 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-20px) rotate(5deg)" },
          "66%": { transform: "translateY(-10px) rotate(-3deg)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          from: { opacity: "0", transform: "translateY(-20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        marquee: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-50%)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      backgroundImage: {
        "coffee-gradient": "linear-gradient(135deg, #78350F 0%, #92400E 50%, #FBBF24 100%)",
        "dark-gradient": "linear-gradient(135deg, #1C0A00 0%, #451A03 100%)",
        "cream-gradient": "linear-gradient(135deg, #FEF3C7 0%, #FDE8C5 100%)",
        "gold-gradient": "linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)",
        "shimmer-gradient": "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
      },
      boxShadow: {
        "coffee": "0 4px 20px rgba(120, 53, 15, 0.25)",
        "coffee-lg": "0 8px 40px rgba(120, 53, 15, 0.35)",
        "gold": "0 4px 20px rgba(251, 191, 36, 0.4)",
        "card": "0 2px 15px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04)",
        "card-hover": "0 8px 30px rgba(0, 0, 0, 0.12), 0 4px 10px rgba(0, 0, 0, 0.08)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};

export default config;
