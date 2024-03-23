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
        'main-100': 'ECDFF2',
        'main-200': 'DAA0F4',
        'main-300': 'CA74F1',
        'main-400': 'B44FE2',
        'main-500': '951DCC',
        'main-600': '7715A4',
        'main-700': '580D7A',
        'main-800': '480567',
        'main-900': '230033',
        'secondary-100': 'F2E6CE',
        'secondary-200': 'F0D399',
        'secondary-300': 'F0C162',
        'secondary-400': 'F3AF28',
        'secondary-500': 'FFAA00',
        'secondary-600': 'C78400',
        'secondary-700': '936200',
        'secondary-800': '624100',
        'secondary-900': '332200',
        'back-100': 'EFEFEF',
        'back-200': 'D1D1D1',
        'back-300': 'BDBDBD',
        'back-400': '999999',
        'back-500': '737373',
        'back-600': '545454',
        'back-700': '3B3B3B',
        'back-800': '242424',
        'back-900': '0A0A0A',
      },
      
    },
  },
  plugins: [],
};
export default config;
