/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#142B4A',       // Primary Colour: Deep Navy Blue
          royal: '#2455A4',      // Secondary Colour: Royal Blue
          gold: '#E6B64C',       // Accent Colour: Golden Yellow
          'gold-dark': '#C99832',// Darker gold for active states
          bg: '#FFFFFF',         // White Background
          soft: '#F3F7FC',       // Light Background: Soft Blue
          charcoal: '#252B35',   // Text Colour: Dark Charcoal
          muted: '#616E7F',      // Muted Slate Text
        }
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        heading: ['"Open Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' },
        }
      },
      animation: {
        'marquee-slow': 'marquee 25s linear infinite',
      }
    },
  },
  plugins: [],
}
