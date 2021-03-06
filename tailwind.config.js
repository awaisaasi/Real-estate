const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,css}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        back: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(1, 0, 0, 0.3)), url(https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)",
        backa:
          "url(https://cdn.pixabay.com/photo/2017/01/22/18/14/hamburg-2000424__340.jpg)",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
