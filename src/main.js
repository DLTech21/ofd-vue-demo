import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import OfdView from "ofd-view";
import 'ofd-view/lib/viewer.css'
Vue.config.productionTip = false
Vue.use(OfdView)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
