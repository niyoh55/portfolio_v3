module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-bg": "#022c43",
        sidebar: "#181818",
        icon: "#4d4d4e",
        "text-below": "#657178",
        yellowMain: "#ffd700",
      },
      fontFamily: {
        nunito: ["Nunito"],
      },
    },
  },
  plugins: [],
};
