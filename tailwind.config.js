/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
       fontFamily: {
        poppins: ["Poppins_400Regular", "sans-serif"],
         fontFamily: {
        clash: {
          regular: "ClashDisplay_Regular",
          medium: "ClashDisplay_Medium",
          semibold: "ClashDisplay_Semibold",
          bold: "ClashDisplay_Bold",
        },
      },
      },
    },
  },
  plugins: [],
}
