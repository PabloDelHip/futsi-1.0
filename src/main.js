import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vue-datetime/dist/vue-datetime.css'
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'
moment.tz.setDefault('America/Cancun')
moment.locale('es');

Vue.use(VueMoment, {
  moment,
})

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
