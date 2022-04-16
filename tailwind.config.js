module.exports = {
  content: [
    "./pages/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        autofit: "repeat(auto-fit, minmax(200px, 1fr))",
        list: "repeat(auto-fit, minmax(100px, 1fr))",
      },
    },
  },
};
