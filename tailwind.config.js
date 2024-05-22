/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        sidebar: "250px",
        body: "calc(100% - 250px)",
      },
      margin: {
        sidebar: "250px",
      },
    },
  },
  plugins: [],
};
