/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(var(--primary-teal) / <alpha-value>)",
          dark: "rgb(var(--primary-teal-dark) / <alpha-value>)",
        },

        accent: {
          blue: "rgb(var(--accent-blue) / <alpha-value>)",
        },

        text: {
          heading: "rgb(var(--text-heading) / <alpha-value>)",
          body: "rgb(var(--text-body) / <alpha-value>)",
        },

        border: {
          DEFAULT: "rgb(var(--border-color) / <alpha-value>)",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
