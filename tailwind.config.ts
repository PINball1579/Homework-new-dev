import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
      fontSize: {
        'desktop-h1-hero-topic': [
          '3.5rem', {
            fontWeight: 600,
          },
        ],
        'desktop-h2-topic': [
          '1.75rem', {
            fontWeight: 600,
          },
        ],
        'desktop-h3-topic': [
          '1.5rem', {
            fontWeight: 600,
          },
        ],
        'desktop-h1': [
          '2rem', {
            fontWeight: 600,
          },
        ],
        'desktop-h2': [
          '1.75rem', {
            fontWeight: 600,
          },
        ],
        'desktop-h3': [
          '1.25rem', {
            fontWeight: 600,
          },
        ],
        'desktop-h4': [
          '1rem', {
            fontWeight: 600,
          },
        ],
        'desktop-button-big': [
          '1.25rem', {
            fontWeight: 700,
          },
        ],
        'desktop-button-base': [
          '1rem', {
            fontWeight: 700,
          },
        ],
        'desktop-body': [
          '1rem', {
            fontWeight: 500,
          },
        ],
        'desktop-label-bold': [
          '0.875rem', {
            fontWeight: 700,
          },
        ],
        'desktop-label': [
          '0.875rem', {
            fontWeight: 500,
          },
        ],
        'desktop-caption': [
          '0.75rem', {
            fontWeight: 500,
          },
        ],
        'mobile-h1-hero-topic': [
          '2rem', {
            fontWeight: 600,
          },
        ],
        'mobile-h2-topic': [
          '1.5rem', {
            fontWeight: 600,
          },
        ],
        'mobile-h3-topic': [
          '1.25rem', {
            fontWeight: 600,
          },
        ],
        'mobile-h1': [
          '1.75rem', {
            fontWeight: 600,
          },
        ],
        'mobile-h2': [
          '1.5rem', {
            fontWeight: 600,
          },
        ],
        'mobile-h3': [
          '1.125rem', {
            fontWeight: 600,
          },
        ],
        'mobile-h4': [
          '1rem', {
            fontWeight: 600,
          },
        ],
        'mobile-button-big': [
          '1.25rem', {
            fontWeight: 700,
          },
        ],
        'mobile-button-base': [
          '1rem', {
            fontWeight: 700,
          },
        ],
        'mobile-body': [
          '1rem', {
            fontWeight: 500,
          },
        ],
        'mobile-label-bold': [
          '0.875rem', {
            fontWeight: 700,
          },
        ],
        'mobile-label': [
          '0.875rem', {
            fontWeight: 500,
          },
        ],
        'mobile-caption': [
          '0.75rem', {
            fontWeight: 500,
          },
        ],
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
