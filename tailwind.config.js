/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ['./src/*.{html,js}'],
  },
  theme: {
    extend: {
      colors: {
        'color1': '#40A8BF',
        'color2': '#6A3DC4',
        'color3': '#C43D5D',
        'color4': '#53E387',
      },
    },
  },
  plugins: [
    require('taos/plugin'),
    require('@tailwindcss/line-clamp'),
  ],
}
