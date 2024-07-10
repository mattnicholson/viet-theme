const defaultTheme = require('tailwindcss/defaultTheme')

const colors = {
  // CORE
  black: 'var(--colors-dark)',
  burgundy: 'var(--colors-burgundy)',
  grey: 'var(--colors-grey)',
  sand: 'var(--colors-sand)',
  gold: 'var(--colors-gold)',
  dark: 'var(--colors-dark)',
  accent: 'var(--colors-accent)',
  frame: 'var(--colors-frame)',
  frametext: 'var(--colors-frametext)',
  nav: 'var(--colors-nav)',
  navtext: 'var(--colors-navtext)',
  footer: 'var(--colors-footer)',
  footertext: 'var(--colors-footertext)',
  light: 'var(--colors-light)',
  relief: 'var(--colors-relief)',
  background: 'var(--colors-background)',
  foreground: 'var(--colors-foreground)',
  transparentblack: 'rgba(0,0,0,0.1)',
  transparentgrey: 'rgba(75,66,66,0.5)',
}

module.exports = {
  content: ['*.njk', '**/*.njk', '_includes/**/*.njk', 'assets/js/**/*.js','src/components/**/*.js','src/components/**/*.njk','src/components/**/*.css'],
  safelist: [],
  theme: {
    fontFamily: {
      sans: ['Darker Grotesque', 'sans-serif'],
      serif: ['serif'],
      display: ['Quicksand', 'sans-serif'],
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
