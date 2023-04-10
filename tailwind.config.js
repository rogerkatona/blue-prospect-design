const colors = require('tailwindcss/colors')

module.exports = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  purge: [
    "./pages/**/*.js",
    "./components/**/*.js"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        flash: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
        wobble: {
          from: {
            transform: 'translate3d(0, 0, 0)',
          },

          '15%': {
            transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)',
          },

          '30%': {
            transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)',
          },

          '45%': {
            transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)',
          },

          '60%': {
            transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)',
          },

          '75%': {
            transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)',
          },

          to: {
            transform: 'translate3d(0, 0, 0)',
          },
        },
      },
      animation: {
        flash: 'flash 3s 0.7s',
        wobble: 'wobble 1s infinite',
      },
      height: theme => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
        "screen90vh": "calc(90vh)",
        "screen80vh": "calc(80vh)",
        "screen75vh": "calc(75vh)",
        "screen65vh": "calc(65vh)",
        "screen50vh": "calc(50vh)",
        "screen47vh": "calc(47vh)",
        "screen40vh": "calc(40vh)",
        "screen25vh": "calc(25vh)",
        "screen20vh": "calc(20vh)",
      }),
      width: theme => ({
        "128": "32rem",
      }),
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '75%': '75%',
        '65%': '65%',
        '50%': '50%',
        '60%': '60%',
        '16': '4rem',
      },
      scale: {
        '0': '0',
        '25': '.25',
        '50': '.5',
        '75': '.75',
        '90': '.9',
        '95': '.95',
        '100': '1',
        '102': '1.02',
        '105': '1.05',
        '110': '1.1',
        '125': '1.25',
        '150': '1.5',
        '200': '2',
      },
      backgroundImage: theme => ({
        'hero-blog': "url('/image/hero-blog.jpg')",
        'hero-workshop': "url('/image/hero-workshop.jpg')",
        'hero-client': "url('/image/hero-client.jpg')",
        'hero-design': "url('/image/hero-design.jpg')",
        'hero-about': "url('/image/hero-about.jpg')",
        'hero-sm': "url('/image/logo-bp.png')",
        'bg-contactModal': "url('/image/bg-contact.jpeg')",
        'bg-uxAudit': "url('/image/campaign/bannerLG-ux-campaign.png')",
        'bg-uxAudit-01': "url('/image/campaign/icon-campaign-uxaudit-01-opacity35.svg')",
        'bg-uxAudit-02': "url('/image/campaign/icon-campaign-uxaudit-02-opacity35.svg')",
        'bg-uxAudit-03': "url('/image/campaign/icon-campaign-uxaudit-03-opacity35.svg')",
        'bg-uxAudit-04': "url('/image/campaign/icon-campaign-uxaudit-04-opacity35.svg')",
        'bg-uxAudit-05': "url('/image/campaign/icon-campaign-uxaudit-05-opacity35.svg')",
      }),
      fontFamily: {
        'sans': ['Helvetica Neue'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'bebasNeue': ['Bebas Neue'],
        'body': ['Helvetica Neue'],
        'roboto': ['Roboto'],
        'gloock': ['Gloock'],
      },
    },
    colors: {
      'white.25': 'rgba(255, 255, 255, 0.25);',
      'white.50': 'rgba(255, 255, 255, 0.50);',
      'white.75': 'rgba(255, 255, 255, 0.75);',
      'white.100': 'rgba(255, 255, 255, 1);',
      'black.100': 'rgba(0, 0, 0, 1);',
      'campaign.50':  '#E9EAEB',
      'campaign.100': '#C8CBCC',
      'campaign.200': '#A4A8AA',
      'campaign.300': '#808588',
      'campaign.400': '#646A6F',
      'campaign.500': '#495055',
      'campaign.600': '#42494E',
      'campaign.700': '#394044',
      'campaign.800': '#31373B',
      'campaign.900': '#21272A',
      'medRed.50':  '#f7ebed',
      'medRed.100': '#ecced3',
      'medRed.200': '#dfadb6',
      'medRed.300': '#d28c98',
      'medRed.400': '#c97382',
      'medRed.500': '#bf5a6c',
      'medRed.600': '#b95264',
      'medRed.700': '#b14859',
      'medRed.800': '#a93f4f',
      'medRed.900': '#9b2e3d',
      'darkBlue.50': '#e2e3e5',
      'darkBlue.100': '#b6b8be',
      'darkBlue.200': '#858993',
      'darkBlue.300': '#545a67',
      'darkBlue.400': '#2f3647',
      'darkBlue.500': '#0a1326',
      'darkBlue.600': '#091122',
      'darkBlue.700': '#070e1c',
      'darkBlue.800': '#050b17',
      'darkBlue.900': '#03060d',
      'medBlue.50': '#e3e4e8',
      'medBlue.100': '#b8bdc6',
      'medBlue.200': '#8991a0',
      'medBlue.300': '#5a6479',
      'medBlue.400': '#36435d',
      'medBlue.500': '#132240',
      'medBlue.600': '#111e3a',
      'medBlue.700': '#0e1932',
      'medBlue.800': '#0b142a',
      'medBlue.900': '#060c1c',
      'lightBlue.50': '#e7e9ee',
      'lightBlue.100': '#c2c8d5',
      'lightBlue.200': '#9aa4b9',
      'lightBlue.300': '#71809d',
      'lightBlue.400': '#526488',
      'lightBlue.500': '#344973',
      'lightBlue.600': '#2f426b',
      'lightBlue.700': '#273960',
      'lightBlue.800': '#213156',
      'lightBlue.900': '#152143',
      'lightRed.50': '#fdebeb',
      'lightRed.100': '#fbcece',
      'lightRed.200': '#f9aeae',
      'lightRed.300': '#f68d8d',
      'lightRed.400': '#f47474',
      'lightRed.500': '#f25c5c',
      'lightRed.600': '#f05454',
      'lightRed.700': '#ee4a4a',
      'lightRed.800': '#ec4141',
      'lightRed.900': '#e83030',
      'gray.050': '#F9FAFB',
      'gray.100': '#F3F4F6',
      'gray.200': '#E5E7EB',
      'gray.300': '#D1D5DB',
      'gray.400': '#9CA3AF',
      'gray.500': '#6B7280',
      'gray.600': '#4B5563',
      'gray.700': '#374151',
      'gray.800': '#1F2A37',
      'gray.900': '#111928',
      'tan.50': '#fafaf8',
      'tan.100': '#f4f2ee',
      'tan.200': '#eceae2',
      'tan.300': '#e4e1d6',
      'tan.400': '#dfdace',
      'tan.500': '#d9d4c5',
      'tan.600': '#d5cfbf',
      'tan.700': '#cfc9b8',
      'tan.800': '#cac3b0',
      'tan.900': '#c0b9a3',
    },
    backgroundPosition: {
      bottom: 'bottom',
      'bottom-4': 'center bottom 1rem',
      'bottom-30': 'center bottom 12rem',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      'right-24': 'center right 6rem',
      'right-48': 'center right 12rem',
      'right-12': 'center right 2rem',
      top: 'top',
      'top-4': 'center top 1rem',
      'top-8': 'center top 2rem',
      'top-12': 'center top 3rem',
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1800px',
      // => @media (min-width: 1800px) { ... }
    },

  },
  variants: {
    extend: {
      brightness: ['hover', 'focus'],
      grayscale: ['hover', 'focus'],
    },
  },
  plugins: [],
}

