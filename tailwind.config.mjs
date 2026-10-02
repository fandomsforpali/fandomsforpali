/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#FEFFC4',
        'cream-dark': '#ECEDB7',
        'carrd-bg': '#946352',
        'carrd-overlay': '#59404B',
        'ffp-green': '#27A83C',
        'ffp-lime': '#8CC452',
        'ffp-coral': '#E87676',
        'ffp-crimson': '#A82727',
        'ffp-orange': '#F27935',
        'ffp-amber': '#FF9900',
        'ffp-plum': '#633C3C',
        'ffp-brown': '#9E5D4F',
        'ffp-darkbrown': '#57412D',
        'ffp-tan': '#785C43',
        'ffp-cyan': '#71D5E3',
        'ffp-grey': '#A1A1A1',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'carrd-btn': '0rem 0.375rem 0rem 0rem rgba(0, 0, 0, 0.188)',
        'carrd-avatar': '0rem 0.375rem 0rem 0rem rgba(0, 0, 0, 0.188)',
      },
      dropShadow: {
        'carrd-heading': '0 0.375rem 0 rgba(0, 0, 0, 0.188)',
        'carrd-subheading': '0 0.188rem 0 rgba(0, 0, 0, 0.188)',
      },
    },
  },
  plugins: [],
};

