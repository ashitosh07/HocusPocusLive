/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        eduBg: "url('/src/assets/orange-shape.png')",
      },
    },
  },
  plugins: [
    require('postcss-nested'), // Add this line for nesting support
    require('daisyui'),
    require('tailwindcss'),
  ],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#FF651C',
          secondary: '#ec4899',
          accent: '#000000',
          neutral: '#9ca3af',
          'base-100': '#FFFFFF',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#f87272',
        },
      },
    ],
  },
}
