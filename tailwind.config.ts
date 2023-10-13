import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.2rem",
      screens: {
        "2xl": "1327px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-bg": `url("/hero-bg.png")`,
        "hero-mobile-bg": `url("/hero background-mobile.png")`,
        "features-bg": `url("/features-bg.png")`,
        "benefits-bg": `url("/benefits-bg.png")`,
        "tokenomics-bg": `url("/tokenomics.png")`,
        "team-bg": `url("/team.png")`,
        "main-bg": `url("/noise.png")`,
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        skin: {
          bg: "#151617",
          white: "#FAFAFA",
          primary: "#1E2023",
          "dark-green": "#68D67C",
          "heavy-dark": "#101010",
          "silver-100": "#B9BABB",
          "green-btn": "#68D67C",
          "gray-800": "rgba(255, 255, 255, 0.12)",
          "gray-900": "rgba(255, 255, 255, 0.22)",
          yellow: "#FFCD1D",
          danger: "#F44336",
          black: "#161518",
          footer: "#161518",
        },
      },
      fontSize: {
        "t-12": "12px",
        "t-14": "14px",
        "t-16": "16px",
        "t-20": "20px",
        "t-24": "24px",
        "t-34": "34px",
        "t-36": "36px",
        "t-48": "48px",
        "t-60": "60px",
      },
      boxShadow: {
        sm: "0px 5.40728px 10.8146px 0px rgba(0, 0, 0, 0.30)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
