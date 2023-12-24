// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    options: {
      customProperties: true,
      variations: true,
    },
    ripple: false,
     fontFamily: 'Open Sans', 
      fontSize: 16, 
      htmlFontSize: 16,
      lineHeight: 1.6, 
      h1: {
        fontSize: 16,
        fontWeight: 700,
      },
      h2: {
        fontSize: 14,
        fontWeight: 600,
      },
      h3: {
        fontSize: 12,
        fontWeight: 500,
      },
      h4: {
        fontSize: 10,
        fontWeight: 400,
      },
      h5: {
        fontSize: 8,
        fontWeight: 300,
      },
      h6: {
        fontSize: 6,
        fontWeight: 200,
      },
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#140E36',
          secondary: '#402158',
          third: '#7D5683',
          foufth: '#C9BFB5',
          fifth: '#E2E9FF'         
        }
      },
    },
  },
})
