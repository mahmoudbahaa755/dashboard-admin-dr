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
        bg7: "linear-gradient(567deg, rgba(165, 42, 4, 0.89), rgba(113, 102, 8, 0.89), rgba(13, 95, 16, 0.93), rgba(4, 79, 88, 0.94), rgba(19, 56, 86, 0.9), rgba(24, 32, 78, 0.94), rgba(100, 8, 115, 0.95))",
        bg8: "linear-gradient(180deg, #08a50e, #69bb03)",
        bg9: "linear-gradient(45deg, #795548, #945c48)",
        bg10: "linear-gradient(45deg, #29323c, #485563)",
        bg11: "linear-gradient(45deg, #1565C0, #1E88E5)",
        bg12: "linear-gradient(45deg, #65379b, #886aea)",
        bg13: "linear-gradient(180deg, #ff5447, #f1076f)",
        bg14:'#09867B',
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