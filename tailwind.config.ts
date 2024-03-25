
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    screens: {
      'sm': "640px",
      'md': "768px",
      'lg': "1024px",
      'xl': "1280px",
      '2xl': "1600px",
      '3xl': "2000px"
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'main-100': '#ECDFF2',
        'main-200': '#DAA0F4',
        'main-300': '#CA74F1',
        'main-400': '#B44FE2',
        'main-500': '#951DCC',
        'main-600': '#7715A4',
        'main-700': '#580D7A',
        'main-800': '#480567',
        'main-900': '#230033',
        'secondary-100': '#F2E6CE',
        'secondary-200': '#F0D399',
        'secondary-300': '#F0C162',
        'secondary-400': '#F3AF28',
        'secondary-500': '#FFAA00',
        'secondary-600': '#C78400',
        'secondary-700': '#936200',
        'secondary-800': '#624100',
        'secondary-900': '#332200',
        'back-light-100': '#F7F7F7',
        'back-light-200': '#F2F2F2',
        'back-light-300': '#E6E6E6',
        'back-light-400': '#D9D9D9',
        'back-light-500': '#CCCCCC',
        'back-dark-100': '#666666',
        'back-dark-200': '#4D4D4D',
        'back-dark-300': '#333333',
        'back-dark-400': '#1A1A1A',
        'back-dark-500': '#0D0D0D',
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config