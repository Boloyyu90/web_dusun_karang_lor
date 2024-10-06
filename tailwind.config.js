/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        reg: ['poppins-reg', 'sans-serif'],
        med: ['poppins-med', 'sans-serif'],
        light: ['poppins-light', 'sans-serif'],
        thin: ['poppins-thin', 'sans-serif'],
        semibold: ['poppins-semi-bold', 'sans-serif'],
        bold: ['poppins-bold', 'sans-serif'],
        extrabold: ['poppins-extra-bold', 'sans-serif'],
        black: ['poppins-black', 'sans-serif'],
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
        rotateIn: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(45deg)' },
        },
        rotateOut: {
          '0%': { transform: 'rotate(45deg)' },
          '100%': { transform: 'rotate(0deg)' },
        }
      },
      animation: {
        slideUp: 'slideUp 0.5s ease-out forwards',
        slideDown: 'slideDown 0.5s ease-out forwards',
        rotateIn: 'rotateIn 0.5s ease-in-out forwards',
        rotateOut: 'rotateOut 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
