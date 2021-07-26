module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        beige: {
          light: '#D6AE7B',
          medium: '#EACDA3',
        },
        projectRed: {
          default: '#941B0C',
          light: '#BF766D',
        },
        projectGray: {
          25: '#FFF6F6',
          50: '#E9E9E9',
          100: '#A7A8A7',
          500: '#7B7D7C',
          700: '#4F5150',
          900: '#232624',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
