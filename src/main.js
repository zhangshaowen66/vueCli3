import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './config/vuex/stroe.js'
import { $axios } from './config/axios.js'
import moment from 'vue-moment-filter'
Vue.use(moment)
Vue.config.productionTip = false
Vue.prototype.$axios = $axios
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
