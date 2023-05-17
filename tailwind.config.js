/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#61c4cc',

          secondary: '#99f21d',

          accent: '#76b9e2',

          neutral: '#2D2734',

          'base-100': '#383262',

          info: '#90AFF4',

          success: '#1FDBA6',

          warning: '#B89405',

          error: '#E61957',
        },
      },
    ],
  },


  plugins: [require('daisyui')],
};

