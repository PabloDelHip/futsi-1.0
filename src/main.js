import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vue-datetime/dist/vue-datetime.css'
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'
import VueFileAgent from 'vue-file-agent';
import  'vue-file-agent/dist/vue-file-agent.css';
import VModal from 'vue-js-modal'

moment.tz.setDefault('America/Cancun')
moment.locale('es');

Vue.use(VueMoment, {
  moment,
})
Vue.use(VueFileAgent);
Vue.use(VModal, { dynamicDefault: { draggable: true, resizable: true } })

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
