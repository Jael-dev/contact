// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
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
