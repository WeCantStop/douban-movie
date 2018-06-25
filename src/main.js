import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fetch from './lib/httpConfig'
import Mint from 'mint-ui'

Vue.prototype.fetch = fetch
Vue.config.productionTip = false

Vue.use(Mint)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
