/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui', 'Graphik'],
      'serif': ['ui-serif', 'Georgia', 'Tapestry', 'Merriweather'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['Open Sans'],
    },
    extend: {
      colors: {
        primary: '#ff5733',
        secondary: '#fffc33',
      },
      spacing: {
        6: '2rem',
        128: '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      screens: {
        sm: '550px',
        md: '800px',
        lg: '1200px',
        xl: '1440px',
      },
      transitionDuration: {
        1000: '1000ms',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-12deg)' },
          '50%': { transform: 'rotate(12deg)' }
        }
      },
    },
  },
  plugins: [],
}