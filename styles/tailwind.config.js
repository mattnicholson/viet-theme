const defaultTheme = require('tailwindcss/defaultTheme')

const colors = {
  // CORE
  black: 'var(--colors-dark)',
  dark: 'var(--colors-dark)',
  accent: 'var(--colors-accent)',
  light: 'var(--colors-light)',
  relief: 'var(--colors-relief)',
  background: 'var(--colors-background)',
  foreground: 'var(--colors-foreground)',
  transparentblack: 'rgba(0,0,0,0.3)',
}

module.exports = {
  content: ['*.njk', '**/*.njk', '_includes/**/*.njk', 'assets/js/**/*.js'],
  safelist: [],
  theme: {
    fontFamily: {
      sans: ['Darker Grotesque', 'sans-serif'],
      serif: ['serif'],
      display: ['GT Maru', 'sans-serif'],
    },
    fontWeight: {
      normal: 400,
      bold: 500,
    },
    screens: {
      xs: '410px',
      ...defaultTheme.screens,
      '2xl': '1665px',
      max: '2000px',
    },
    extend: {
      colors,
      aspectRatio: {
        landscape: '4 / 3',
        portrait: '3 / 4',
      },
      screens: {
        betterhover: { raw: '(hover: hover)' },
      },
      spacing: {
        22: '5.5rem',
        33: '8.25rem',
        120: '30rem',
        gutter: 'var(--spacing-gutter)',
        inset: 'var(--spacing-inset)',
      },
    },
  },
  plugins: [],
}
