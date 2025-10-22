/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#a163f7",
          dark: "#09031C",    
          light: "#943FED",   
        },
        secondary: {
          DEFAULT: "#542487", 
          dark: "#db2777",
          light: "#f472b6",
        },
        background: "#db2777", 
      },
      fontFamily: {
        heading: ["var(--font-dm-sans)", "sans-serif"], 
        body: ["var(--font-montserrat)", "sans-serif"], 
      },
    },
  },
  plugins: [],
}

