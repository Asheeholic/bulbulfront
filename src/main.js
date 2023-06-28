import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

// 추가
// 앱 생성 실시
const app = createApp(App)

// axios
app.config.globalProperties.$axios = axios;

// vuetify
app.use(vuetify);

// mount
app.mount('#app')


