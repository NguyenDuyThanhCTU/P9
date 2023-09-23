/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      // system
      screens: {
        p: "240px",
        d: "1024px",
      },

      fontFamily: {
        //system font
        OpenSans: ["Open Sans", "sans-serif"],
        LexendDeca: ["Lexend Deca", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        //custom font
        UTMAmerican: ["UTMAmerican", "sans-serif"],
        Main: ["Tahoma", "sans-serif"],
      },
      colors: {
        //system colors
        redPrimmary: "#ed1b2e",
        Blue3D: "#1D1D3D",
        colortopdownBlue: "#2c95ff",
        colortopdownGray: "#414045",
        blueAdmin: "#74affc",
        purpleAdmin: "#bb86fc37",
        purpleHover: "#BB86FC",
        BlueFF: "#1A49FF",
        //Custom colors
        mainblue: "#2e4acd",
        mainred: "#d70000",
        mainyellow: "#f1ce5d",
      },

      // custom
      backgroundImage: {},
      backgroundColor: {},
    },
  },
};
