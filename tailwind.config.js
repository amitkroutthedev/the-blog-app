/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend:
    {
      fontFamily: {
        'spacemono': ['Space Mono', 'monospace'],
        'majormono': ['Major Mono Display', 'monospace']
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
          }
        }
      }
    },
    /* extend: {
       backgroundImage: {
         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
         'gradient-conic':
           'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
       },
     },*/
  },
  plugins: [require('@tailwindcss/typography'),
  require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#ef4782",

          "secondary": "#6fc43e",

          "accent": "#de57f9",

          "neutral": "#181d21",

          "base-100": "#2b374a",

          "info": "#2671d9",

          "success": "#59d9b7",

          "warning": "#dca604",

          "error": "#fb4b7a",
        },
      },
    ],
  },
}
