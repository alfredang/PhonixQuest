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
            primary: '#6366f1', // Indigo 500
            secondary: '#ec4899', // Pink 500
            success: '#84cc16', // Lime 500
            warning: '#f59e0b', // Amber 500
            background: '#f8fafc', // Slate 50
            text: '#1e293b', // Slate 800
          }
        },
        fontFamily: {
          sans: ['Nunito', 'sans-serif'],
          heading: ['Fredoka', 'sans-serif'],
        },
        animation: {
          'bounce-slow': 'bounce 3s infinite',
          'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        }
      },
    },
    plugins: [],
  }
