import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import '../node_modules/@mdi/font/css/materialdesignicons.css'
import router from '@/router/index.js'
// import './assets/scss/main.scss'

Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
