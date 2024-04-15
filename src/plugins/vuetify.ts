/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        dark: false,
        colors: {
          blue100: '#0E1647',
          blue200: '#1D2766',
          blue300: '#2D3C9F',
          // white: '#FFFFFF',
          // gray100: '#121214',
          // gray200: '#202024',
          // gray300: '#29292E',
          // gray400: '#323238',
          // gray600: '#7C7C8A',
          // gray800: '#C4C4CC',
          // gray900: '#E1E1E6',
          // green: '#00875F',
          // red: '#EB5757',
        }
      }
    }
  },
})
