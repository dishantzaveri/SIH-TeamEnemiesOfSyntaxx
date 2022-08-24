module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-gray-100': '#F1F2F7',
        'purple-gray-500': '#8C7ABD',
        'purple-gray-600': '#604E9E',
        'purple-gray-700': '#7B1FA2',
        'greha-1' : '	#989898',
        'greha-2' : '	#979aaa',
        'greha-3' : '	#4c516d',
        'light-blue' : '#DAF0F4',
        'blue' : '#2eb6b8',
      },
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  variants: {
    scrollbar: ['rounded']
  }
}