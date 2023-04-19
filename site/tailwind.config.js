/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation:{
        transIn:'inToIt 1s ease-in-out 1',
        transOut:'outOfIt 1s ease-in-out forwards 1',
      },
      keyframes: {
        inToIt: {
          '0%': { transform: 'translateY(-120%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        outOfIt: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-120%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
