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
        padding: {
          DEFAULT: "32px",
          sm: "32px",
        },
      },
      backgroundImage: {
        'custom-radial-gradient': 'radial-gradient(63.88% 129.61% at 25.55% 31.91%, #20135C 0%, #140739 92.82%);',
        'text-radial-gradient': 'linear-gradient(271.88deg, #3887FE 4.26%, #3BA0FF 51.37%, #5FB2FF 99.01%);',
        'form-background': 'linear-gradient(180deg, #1E1156 0%, rgba(28, 35, 64, 0) 100%);',
        'btn-background': 'linear-gradient(88.43deg, #2F3453 11.5%, #242845 76.7%);',
        'btn-background_sec': 'linear-gradient(271.88deg, #3887FE 4.26%, #3BA0FF 51.37%, #5FB2FF 99.01%);',
        'aside-background': 'linear-gradient(0.32deg, rgba(28, 35, 64, 0) -5.79%, #1C0F54 114.59%);',
        'chart-background': 'linear-gradient(180deg, rgba(27, 18, 78, 0.2) 0%, #0F0B38 93.37%);',
        'chart-gradient': 'linear-gradient(0deg, #1B0E4E, #1B0E4E), linear-gradient(180deg, rgba(27, 18, 78, 0.2) 0%, #0F0B38 93.37%);',
        'wallet-back': 'linear-gradient(237.07deg, #604392 -8.06%, #0F0B38 96.63%);',
        'wallet-back-sec': 'linear-gradient(237.07deg, #D66168 -8.06%, #0F0B38 96.63%)',
        'wallet-back-third': 'linear-gradient(237.07deg, #6162D6 -8.06%, #0F0B38 96.63%)',
        'wallet-back-fourth': 'linear-gradient(237.07deg, #EB8338 -8.06%, #0F0B38 96.63%)',
        'line-chart-back': 'linear-gradient(176.95deg, rgba(27, 18, 78, 0.2) -32.8%, #0F0B38 88.83%);',
        'news-blc-back': 'linear-gradient(185.19deg, rgba(27, 18, 78, 0.2) 3.73%, #0F0B38 95.83%);',
        'news-blc-back-sec': 'linear-gradient(180deg, rgba(15, 11, 56, 0) 8.84%, #0F0B38 100%)',
        'line-chart-back-sec': 'linear-gradient(257.68deg, rgba(0, 151, 232, 0) -1.09%, #0097E8 58.53%, rgba(0, 151, 232, 0) 98.83%)',
      },
      boxShadow: {
        'custom': '0px 25px 25px 0px #00032080;',
        'aside-shadow': '0px -5px 25px 0px #00032080;',
        'custom-chart': '0px 4px 25px 0px #00000040;',
      }
    },
  },
  plugins: [],
}

