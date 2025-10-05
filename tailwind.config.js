module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./app/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        rose: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          500: '#f43f5e'
        }
      },
      fontFamily: {
        handwriting: ['"Pacifico"', 'cursive'],
      }
    },
  },
  plugins: [],
}