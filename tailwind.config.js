module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
   
    extend: {
      colors: {
        'header-blue': '#243956',
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      
        
      },
      animation: {
        move: 'move 1s linear 1 forwards',
      },

      keyframes: {
        move: {
          '0%': { transform: 'translateX(0rem)' },
          '100%': { transform: 'translateX(1.25rem)' },
        }
      }
     
    },
  },
  plugins: [
    
  ],
}
