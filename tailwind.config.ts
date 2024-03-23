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
      },
      
    },
  },
  plugins: [],
};
export default config;
