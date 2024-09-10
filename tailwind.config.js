/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        orange: "#F7A600",
        black: "#1D1D1B",
        grey: "#333333",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
      },
      textAlign: {
        justify: "justify",
      },
    },
    fontSize: {
      inherit: "inherit",
    },
    fontWeight: {
      thin: "100",
      extraLight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extraBold: "800",
      black: "900",
    },
  },

  plugins: [],
};
