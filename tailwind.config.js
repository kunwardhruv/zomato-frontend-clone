/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient': 'radial-gradient(169.40% 89.55% at 94.76% 6.29%, rgba(0, 0, 0, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%)',
      },
    },
  },
  plugins: [
    function ({ addBase, addComponents, addUtilities, theme }) {
      addUtilities({
        'input[type="search"]::-webkit-search-cancel-button': {
          '@apply hidden': {},
        },
      });
    },
  ],
}

