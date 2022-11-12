import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'animate.css';
import isotope from 'vueisotope'
import router  from "@/router";


Vue.config.productionTip = false


new Vue({
  vuetify,
  router,
  isotope,
  render: h => h(App)
}).$mount('#app')
