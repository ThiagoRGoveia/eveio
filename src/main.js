import Vue from 'vue'
import App from './App.vue'
// import Cart from './Cart.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '../node_modules/@mdi/font/css/materialdesignicons.css'

// import './test.js'

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // render: h => h(Cart),
}).$mount('#app')
