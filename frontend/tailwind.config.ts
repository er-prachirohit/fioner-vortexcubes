import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1360px",
      },
    },
    extend: {
      colors: {
        // Brand
        orange: {
          50: "var(--orange-50)",
          100: "var(--orange-100)",
          300: "var(--orange-300)",
          500: "var(--orange-500)",
          600: "var(--orange-600)",
          700: "var(--orange-700)",
          DEFAULT: "var(--orange-500)",
        },
        // Legacy/Semantic mapping for backward compatibility during refactor
        navy: {
          DEFAULT: "var(--black)",
          light: "var(--charcoal)",
        },
        blue: {
          DEFAULT: "var(--orange-500)",
          dark: "var(--orange-700)",
          light: "var(--orange-50)",
        },
        cyan: {
          DEFAULT: "var(--orange-300)",
          light: "var(--orange-50)",
        },
        // Neutrals
        black: "var(--black)",
        charcoal: "var(--charcoal)",
        background: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--gray-100)",
        border: "var(--border)",
        ink: "var(--black)",
        secondary: "var(--gray-700)",
        tertiary: "var(--gray-500)",
        disabled: "var(--gray-200)",
        // Semantic
        danger: {
          DEFAULT: "var(--sos-red)",
          dark: "#B4231B",
          light: "#FEF3F2",
        },
        success: {
          DEFAULT: "#12B76A",
          dark: "#039855",
          light: "#ECFDF3",
        },
        warning: {
          DEFAULT: "#F79009",
          dark: "#B54708",
          light: "#FFFAEB",
        },
        info: {
          DEFAULT: "var(--orange-500)",
          light: "var(--orange-50)",
        },
      },
      fontFamily: {
        display: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        // Marketing hero sizes (bigger than the in-app Display style, used
        // only for the public-site Hero/PageHeader banners)
        "hero-mobile": ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "hero-desktop": ["3.75rem", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "section-mobile": ["1.75rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "section-desktop": ["2.75rem", { lineHeight: "1.12", letterSpacing: "-0.015em" }],

        // Exact "Manrope Type Scale" from the QR Rakshak design system
        // (size / weight / line-height), for in-app-style UI text.
        display: ["2.25rem", { lineHeight: "2.75rem", fontWeight: "700" }], // 36/44/700
        h1: ["1.875rem", { lineHeight: "2.375rem", fontWeight: "700" }], // 30/38/700
        h2: ["1.5rem", { lineHeight: "2rem", fontWeight: "700" }], // 24/32/700
        h3: ["1.25rem", { lineHeight: "1.75rem", fontWeight: "700" }], // 20/28/700
        h4: ["1rem", { lineHeight: "1.625rem", fontWeight: "600" }], // 16/26/600
        "body-lg": ["1rem", { lineHeight: "1.5rem", fontWeight: "400" }], // 16/24/400
        "body-md": ["0.875rem", { lineHeight: "1.375rem", fontWeight: "400" }], // 14/22/400
        "body-sm": ["0.8125rem", { lineHeight: "1.25rem", fontWeight: "400" }], // 13/20/400
        label: ["0.75rem", { lineHeight: "1.125rem", fontWeight: "600" }], // 12/18/600
        caption: ["0.6875rem", { lineHeight: "1rem", fontWeight: "500" }], // 11/16/500
        "btn-text": ["0.875rem", { lineHeight: "1.25rem", fontWeight: "600" }], // 14/20/600
        kpi: ["1.5rem", { lineHeight: "2rem", fontWeight: "700" }], // 24/32/700
      },
      spacing: {
        18: "4.5rem",
      },
      borderRadius: {
        card: "var(--radius-card)",
        "card-lg": "var(--radius-card)",
        "vehicle-card": "var(--radius-card)",
        "bottom-sheet": "28px",
        btn: "var(--radius-btn)",
        input: "12px",
        pill: "999px",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, var(--black) 85%), repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 48px)",
        "cta-band": "var(--grad-cta-band)",
        "footer-grad": "var(--grad-footer)",
        "orange-grad": "var(--grad-orange)",
        "hero-glow": "var(--grad-hero-glow)",
      },
      boxShadow: {
        soft: "var(--shadow-card)",
        elevated: "var(--shadow-card)",
        glow: "var(--shadow-cta)",
        panel: "var(--shadow-card)",
        hover: "var(--shadow-hover)",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "dash-draw": {
          from: { strokeDashoffset: "1000" },
          to: { strokeDashoffset: "0" },
        },
      },
      animation: {
        "pulse-ring": "pulse-ring 2.2s cubic-bezier(0.4,0,0.6,1) infinite",
        float: "float 5s ease-in-out infinite",
        "dash-draw": "dash-draw 2.4s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
