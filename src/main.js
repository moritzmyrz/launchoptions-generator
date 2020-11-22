import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueMeta from 'vue-meta';

Vue.config.productionTip = false
Vue.use(VueMeta);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
