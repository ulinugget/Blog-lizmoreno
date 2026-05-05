/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        palette: {
          lightest: "#fff8ea",
          light: "#9e7676",
          medium: "#815b5b",
          darkest: "#594545",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
