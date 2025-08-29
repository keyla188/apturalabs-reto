/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fafafa",
        primary: "#1D50EE",
        white: "#FFFFFF",
        black: "#100F14",
        yellowButton: "#FFDE53",
        grayBorder: "#ebeef4",
      },
      boxShadow: {
        'custom-inset': 'rgba(255, 255, 255, 0.28) 0px 0px 4px 2px inset, rgba(36, 101, 255, 0.4) 0px 0px 8px 1px',
      },
      keyframes: {
        shineIn: {
          "0%": { transform: "translateX(-150%) rotate(12deg)" },
          "100%": { transform: "translateX(300%) rotate(12deg)" },
        },
        shineOut: {
          "0%": { transform: "translateX(300%) rotate(12deg)" },
          "100%": { transform: "translateX(-150%) rotate(12deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-vertical": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
        "marquee-vertical-reverse": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        shineIn: "shineIn 0.6s ease-in-out forwards",
        shineOut: "shineOut 0.6s ease-in-out forwards",
        marquee: "marquee 10s linear infinite",
        "marquee-reverse": "marquee-reverse 10s linear infinite",
        "marquee-vertical": "marquee-vertical 20s linear infinite",
        "marquee-vertical-reverse": "marquee-vertical-reverse 20s linear infinite",
        fadeUp: 'fadeUp 1s ease-in-out forwards',
      },

    },
  },
  plugins: [],
}

