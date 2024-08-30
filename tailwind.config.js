/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      backgroundImage: {
        'custom-radial-gradient': 'radial-gradient(63.88% 129.61% at 25.55% 31.91%, #20135C 0%, #140739 92.82%);',
        'text-radial-gradient': 'linear-gradient(271.88deg, #3887FE 4.26%, #3BA0FF 51.37%, #5FB2FF 99.01%);',
        'form-background': 'linear-gradient(180deg, #1E1156 0%, rgba(28, 35, 64, 0) 100%);',
        'btn-background': 'linear-gradient(88.43deg, #2F3453 11.5%, #242845 76.7%);',
        'btn-background_sec': 'linear-gradient(271.88deg, #3887FE 4.26%, #3BA0FF 51.37%, #5FB2FF 99.01%);',
        'aside-background': 'linear-gradient(0.32deg, rgba(28, 35, 64, 0) -5.79%, #1C0F54 114.59%);',
      },
      boxShadow: {
        'custom': '0px 25px 25px 0px #00032080;',
        'aside-shadow': '0px -5px 25px 0px #00032080;',
      }
    },
  },
  plugins: [],
}

