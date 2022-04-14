import { createApp } from 'vue'
import App from './App.vue'
import 'ac-css-reset/dist/ac-css-reset.css'
import './assets/globals.scss'

import AOS from "aos"
import 'aos/dist/aos.css'

const app = createApp(App)

AOS.init()
app.mount('#app')