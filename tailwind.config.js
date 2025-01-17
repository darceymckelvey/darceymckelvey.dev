/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export const mode = "jit";
export const purge = { enabled: true, content: ["./src/**/*.{html,ts}"] };
export const content = ["./src/**/*.{html,ts}"];
export const theme = {
  extend: {
    colors: {
      primary: "#20225",
      secondary: "#5865f2",
      gray: colors.trueGray,
      gray: {
        900: "#202225",
        800: "#2f3136",
        700: "#36393f",
        600: "#4f545c",
        400: "#d4d7dc",
        300: "#e3e5e8",
        200: "#ebedef",
        100: "#f2f3f5",
      },
    },
  },
};
export const plugins = [];
