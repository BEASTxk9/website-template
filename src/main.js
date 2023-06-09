import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const app = createApp(App)
app.AOS = new AOS.init({ disable: "phone" });

app.use(AOS).use(store).use(router).mount('#app')



