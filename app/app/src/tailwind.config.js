/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          customButtons: '#CF8E55',
        },
        fontFamily: {
          sans: ['Nanum Gothic', 'sans-serif'],
          serif: ['Nanum Myeongjo', 'serif']
        },
      },
    },
    plugins: [],
  }