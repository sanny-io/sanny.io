import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      blue: colors.blue,
      white: colors.white,
      red: colors.red,
      gray: colors.neutral,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,

      primary: {
        DEFAULT: colors.blue[600],
      },

      secondary: {
        DEFAULT: colors.blue[400],
      },
    },

    fontFamily: {
      sans: ['var(--font-geist-sans)'],
      mono: ['var(--font-geist-mono)'],
    },

    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          from: {
            opacity: '0',
          },

          to: {
            opacity: '1',
          },
        },
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-in',
        'spin-slow': 'spin 10s linear infinite',
      },

      screens: {
        'standalone': {
          raw: 'all and (display-mode: standalone)',
        },
      },

      typography: ({ theme }: any) => ({
        DEFAULT: {
          css: {
            color: 'white',
            '--tw-prose-counters': theme('colors.secondary[DEFAULT]'),

            a: {
              color: theme('colors.secondary[DEFAULT]'),

              '&:hover': {
                color: theme('colors.secondary[DEFAULT]'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
  ],
} satisfies Config

export default config