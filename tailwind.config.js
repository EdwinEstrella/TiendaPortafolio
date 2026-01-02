import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": "#ec13a4",
        "primary-dark": "#c00f85",
        "primary-light": "#f3e7ef",
        "background-light": "#f8f6f7",
        "background-dark": "#22101c",
        "surface-light": "#ffffff",
        "surface-dark": "#2d1b26",
        "text-main": "#1b0d17",
        "text-muted": "#9a4c80",
        "border-color": "#e7cfdf",
        "vintage-border": "#e7cfdf",
        "vintage-bg": "#fcf8fa",
        "neutral-border": "#e7cfdf",
      },
      fontFamily: {
        "display": ["Plus Jakarta Sans", "Inter", "sans-serif"],
        "body": ["Noto Sans", "sans-serif"]
      },
    },
  },
  plugins: [
    forms,
    containerQueries,
  ],
}
