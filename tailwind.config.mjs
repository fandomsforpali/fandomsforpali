/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Text colors mapped to central theme
        cream: 'var(--color-text-primary)',
        'cream-dark': 'var(--color-text-dark)',
        
        // Brand & Accents mapped to central theme
        'ffp-lime': 'var(--color-accent-lime)',
        'ffp-green': 'var(--color-accent-green)',
        'ffp-crimson': 'var(--color-accent-crimson)',
        'ffp-coral': 'var(--color-btn-coral)',
        'ffp-orange': 'var(--color-btn-orange)',
        'ffp-plum': 'var(--color-btn-plum)',
        'ffp-brown': 'var(--color-btn-brown)',
        'ffp-cyan': 'var(--color-btn-cyan)',
        'ffp-grey': 'var(--color-btn-grey)',

        // Cards & containers
        'card-bg': 'var(--color-card-bg)',
        'card-border': 'var(--color-card-border)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
      boxShadow: {
        'carrd-btn': 'var(--shadow-btn)',
        'carrd-avatar': 'var(--shadow-avatar)',
      },
      dropShadow: {
        'carrd-heading': 'var(--shadow-heading)',
        'carrd-subheading': 'var(--shadow-subheading)',
      },
      borderRadius: {
        'carrd-btn': 'var(--radius-btn)',
        'carrd-card': 'var(--radius-card)',
      },
    },
  },
  plugins: [],
};
