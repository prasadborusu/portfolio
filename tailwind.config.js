/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        neonBlue: "#00f0ff",
        neonPurple: "#8a2be2",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      },
      boxShadow: {
        'neon-blue': '0 0 10px #00f0ff, 0 0 20px #00f0ff',
        'neon-purple': '0 0 10px #8a2be2, 0 0 20px #8a2be2',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #00f0ff, 0 0 20px #00f0ff' },
          'to': { boxShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #00f0ff, 0 0 40px #00f0ff' },
        }
      }
    },
  },
  plugins: [],
}
