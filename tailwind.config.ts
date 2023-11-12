/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl':'1280px',
    },
    container: {
      center: true,
      padding: '3rem',
      screens: {
        sm: '100%',
        md: '960px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      colors:{
        'inner': 'rgba(0,0,0,0.2)',
        accent:{
          1:'hsl(var(--color-accent-1) / <alpha-value></alpha-value>)',
          2:'hsl(var(--color-accent-2) / <alpha-value></alpha-value>)'
        },
        bgmain:'var(--color-bgmain)',
        bgcard:'hsl(var(--color-bgcard) / <alpha-value></alpha-value>)',
      },
      backgroundImage: {
 

        bg1: "url('/background/1.png')",
        bg2: "url('/background/2.png')",
        bg3: "url('/background/3.png')",
        bg4: "url('/background/4.png')",
        bg5: "url('/background/5.png')",
        bg6: "url('/background/6.png')",
        bggray: "#2A333D",
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}

// module.exports = {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         accent: {
//           1: "hsl(288 95.8% 90.6%)",
//           2: "hsl(168 83.8% 78.2%)",
//         },
//         bg: "hsl(210 40% 98%)",
//         content: "hsl(217 32.6% 17.5%)",
//       },
//       animation: {
//         "spin-slower": "spin 35s ease infinite",
//         "spin-slow": "spin 25s ease-in-out infinite reverse",
//       },
//     },
//   },
//   plugins: [],
// };