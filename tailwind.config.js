/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"], // Enables dark mode with a class strategy
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: "5%",
      },
      fontSize: {
        // Screen-specific font sizes in pixels
        // 2560px+ screens
        "xl-2560": ["22px", { lineHeight: "1.5" }],
        "2xl-2560": ["24px", { lineHeight: "1.4" }],
        "3xl-2560": ["30px", { lineHeight: "1.3" }],
        "4xl-2560": ["36px", { lineHeight: "1.2" }],
        "5xl-2560": ["48px", { lineHeight: "1.1" }],
        "6xl-2560": ["60px", { lineHeight: "1" }],
        "7xl-2560": ["72px", { lineHeight: "1" }],
        "8xl-2560": ["96px", { lineHeight: "1" }],
        // 1440px screens
        "xl-1440": ["16px", { lineHeight: "1.5" }],
        "2xl-1440": ["18px", { lineHeight: "1.4" }],
        "3xl-1440": ["24px", { lineHeight: "1.3" }],
        "4xl-1440": ["30px", { lineHeight: "1.2" }],
        "5xl-1440": ["40px", { lineHeight: "1.1" }],
        "6xl-1440": ["50px", { lineHeight: "1" }],
        "7xl-1440": ["60px", { lineHeight: "1" }],
        "8xl-1440": ["80px", { lineHeight: "1" }],
        // 1280px screens
        "xl-1280": ["15px", { lineHeight: "1.5" }],
        "2xl-1280": ["17px", { lineHeight: "1.4" }],
        "3xl-1280": ["22px", { lineHeight: "1.3" }],
        "4xl-1280": ["28px", { lineHeight: "1.2" }],
        "5xl-1280": ["36px", { lineHeight: "1.1" }],
        "6xl-1280": ["45px", { lineHeight: "1" }],
        "7xl-1280": ["54px", { lineHeight: "1" }],
        "8xl-1280": ["72px", { lineHeight: "1" }],
        // 1024px screens (tablets)
        "xl-1024": ["15px", { lineHeight: "1.5" }],
        "2xl-1024": ["17px", { lineHeight: "1.4" }],
        "3xl-1024": ["22px", { lineHeight: "1.3" }],
        "4xl-1024": ["28px", { lineHeight: "1.2" }],
        "5xl-1024": ["36px", { lineHeight: "1.1" }],
        "6xl-1024": ["45px", { lineHeight: "1" }],
        "7xl-1024": ["54px", { lineHeight: "1" }],
        "8xl-1024": ["72px", { lineHeight: "1" }],
        // 768px screens (mobile)
        "xl-768": ["14px", { lineHeight: "1.5" }],
        "2xl-768": ["16px", { lineHeight: "1.4" }],
        "3xl-768": ["20px", { lineHeight: "1.3" }],
        "4xl-768": ["26px", { lineHeight: "1.2" }],
        "5xl-768": ["32px", { lineHeight: "1.1" }],
        "6xl-768": ["40px", { lineHeight: "1" }],
        "7xl-768": ["48px", { lineHeight: "1" }],
        "8xl-768": ["64px", { lineHeight: "1" }],
        // 480px screens (small mobile)
        "xl-480": ["15px", { lineHeight: "1.5" }],
        "2xl-480": ["17px", { lineHeight: "1.4" }],
        "3xl-480": ["22px", { lineHeight: "1.3" }],
        "4xl-480": ["28px", { lineHeight: "1.2" }],
        "5xl-480": ["36px", { lineHeight: "1.1" }],
        "6xl-480": ["45px", { lineHeight: "1" }],
        "7xl-480": ["54px", { lineHeight: "1" }],
        "8xl-480": ["72px", { lineHeight: "1" }],
        // Default font sizes (16px base)
        xs: ["12px", { lineHeight: "1rem" }],
        sm: ["14px", { lineHeight: "1.25rem" }],
        base: ["16px", { lineHeight: "1.5rem" }],
        lg: ["18px", { lineHeight: "1.75rem" }],
        xl: ["20px", { lineHeight: "1.75rem" }],
        "2xl": ["24px", { lineHeight: "2rem" }],
        "3xl": ["30px", { lineHeight: "2.25rem" }],
        "4xl": ["36px", { lineHeight: "2.5rem" }],
        "5xl": ["48px", { lineHeight: "1" }],
        "6xl": ["60px", { lineHeight: "1" }],
        "7xl": ["72px", { lineHeight: "1" }],
        "8xl": ["96px", { lineHeight: "1" }],
        "9xl": ["128px", { lineHeight: "1" }],
      },
      colors: {
        app: {
          black: "#000000",
          ink: "#141414",
          surface: "#1A1A1A",
          "surface-muted": "rgba(26, 26, 26, 0.7)",
          muted: "#9CA3AF",
          soft: "#F3F4F6",
          white: "#FFFFFF",
          accent: "#DC2626",
        },
        primary: {
          DEFAULT: "#DC2626",
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D",
        },
        secondary: {
          DEFAULT: "#1A1A1A",
          50: "#F3F4F6",
          100: "#E5E7EB",
          200: "#D1D5DB",
          300: "#9CA3AF",
          400: "#6B7280",
          500: "#374151",
          600: "#1F2937",
          700: "#1A1A1A",
          800: "#141414",
          900: "#000000",
        },
        textPrimary: "#141414",
        textSecondary: "#6B7280",
        textWhite: "#FFFFFF",
        gray: {
          DEFAULT: "#A0A0A0", // Mid Gray
          50: "#FAFAFA",
          100: "#F5F5F5",
          110: "#AAADAD",
          150: "#EBEAEF",
          200: "#E5E5E5",
          250: "#202027",
          300: "#D4D4D4",
          350: "#F7F9FB",
          400: "#BFBFBF",
          410: "#A7A7A7",
          450: "#CBCCCD",
          500: "#A0A0A0", // Default
          550: "#DEDEDE",
          600: "#7A7A7A",
          650: "#404040",
          700: "#5C5C5C",
          750: "#777777",
          800: "#3D3D3D",
          850: "#676D7C",
          900: "#1F1F1F",
          950: "#F5F4F9",
        },
        yellow: {
          DEFAULT: "#FFAE43", // Mid Gray
          100: "#FFAE43",
          150: "#FFAE4321",
          200: "#FFED9F",

          500: "#FFAE43", // Default
        },
        green: {
          // Mid Gray
          100: "#4BD670",
          150: "#EFFFF1",
        },
      },
      backgroundImage: {
        "app-gradient": "linear-gradient(180deg, #000000 0%, #1A1A1A 100%)",
      },
      spacing: {
        64: "16rem",
      },
      fontFamily: {
        poppins: ["Inter", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },

  plugins: [
    async () => (await import("tailwindcss-animate")).default,
    async () => (await import("@tailwindcss/forms")).default,
  ],
};
