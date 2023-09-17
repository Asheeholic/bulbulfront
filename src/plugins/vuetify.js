// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import { VDataTableServer } from 'vuetify/lib/labs/VDataTable'

export default createVuetify({
    components: {
        VDataTableServer
    },
    theme: {
        defaultTheme: 'dark'
    },
    defaults: {
        VCard: {
            elevation: 20,
            class:"pa-md-10 rounded-lg"
        },
    },
})
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

