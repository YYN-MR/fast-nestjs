import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Avue from '@smallwei/avue'
import '@smallwei/avue/lib/index.css'
import axios from 'axios'
Vue.config.productionTip = false

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL
})
Vue.prototype.$httpajax = http
Vue.prototype.$http = http
Vue.use(ElementUI)

Vue.use(Avue)

new Vue({
  render: h => h(App),
}).$mount('#app')
