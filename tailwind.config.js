module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },

    fontFamily: {
      display: ['Poppins'],
      body: ['Roboto Mono'],
    },

    colors: {
      primary: {
        darkest: '#0F6D5B',
        dark: '#338C7C',
        default: '#4EB5A2',
        light: '#97D3C8',
        lighter: '#CEE6E1',
        lightest: '#F3F8F7'
      },

      secondary: {
        darkest: '#04102F',
        dark: '#475065',
        default: '#8E94A4',
        light: '#C7CAD1',
        lighter: '#E3E5E8',
        lightest: '#F7F7F7'
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}