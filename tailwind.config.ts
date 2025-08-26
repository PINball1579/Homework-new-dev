import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      height: {
        18: '4.5rem',
      },
      boxShadow: {
        topBar: '4px 4px 4px 0px #0000000D',
      },
      spacing: {
        topBarHeight: '96px',
        mobileTopBarHeight: '80px',
      },
      zIndex: {
        topBar: '20',
      },
      fontFamily: {
        'db-helvethaica': ['DB HelvethaicaX', 'sans-serif'],
        'db-helvethaica-extended': ['DB HelvethaicaX Extended', 'sans-serif'],
        sans: ['DB HelvethaicaX', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      colors: {
        text: {
          base: '#000000',
          sub: '#2B3432',
          primary: '#DF3E01',
        },
        button: {
          default: '#DF3E01',
        },
      },
      screens: {
        'mobile-md': '375px',
        'mobile-lg': '414px',
        md: '768px',
        'ipad-air': '820px',
        lg: '1024px',
        laptop: '1440px',
        'full-hd': '1920px',
        '4k': '2560px',
      },
    },
  },
  plugins: [],
} as Config;
