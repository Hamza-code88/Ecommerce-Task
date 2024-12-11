/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      plugins: [
        function ({ addUtilities }) {
          addUtilities({
            '.scrollbar-hide': {
              /* Hide scrollbar */
              '-ms-overflow-style': 'none', /* IE and Edge */
              'scrollbar-width': 'none',   /* Firefox */
            },
            '.scrollbar-hide::-webkit-scrollbar': {
              display: 'none', /* Chrome, Safari, and Opera */
            },
          });
        },
      ],
    },
  },
  plugins: [],
};
