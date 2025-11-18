/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        base: "#020311",
        surface: "#0b1226",
        muted: "#95a3c3",
        accent: {
          iris: "#715bff",
          electric: "#3dd9ff",
          magenta: "#ff5f9e"
        }
      },
      backgroundImage: {
        "night-glow":
          "radial-gradient(circle at 10% 20%, rgba(61,217,255,0.25) 0, transparent 45%), radial-gradient(circle at 80% 0%, rgba(255,95,158,0.2) 0, transparent 40%), radial-gradient(circle at 50% 80%, rgba(113,91,255,0.25) 0, transparent 50%)"
      },
      fontFamily: {
        grotesk: ["var(--font-space-grotesk)", "sans-serif"]
      },
      animation: {
        "fade-up": "fadeUp 700ms ease forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        },
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 50%" },
          "100%": { backgroundPosition: "-200% 50%" }
        }
      },
      boxShadow: {
        glow: "0 0 45px rgba(61, 217, 255, 0.35)"
      },
      borderRadius: {
        fluid: "2.5rem"
      }
    }
  },
  plugins: []
};
