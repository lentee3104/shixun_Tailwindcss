/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend:{
      backgroundImage:theme =>({
        'index-banner':"url('/src/assets/img/index_banner.png')",
      }),
    },
  },
  plugins: [],
}

