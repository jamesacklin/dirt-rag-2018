// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Homepage from './Homepage'
import router from './router'
import store from './store'
import VueMasonry from 'vue-masonry-css'
// TODO: use this instead https://github.com/shershen08/vue-masonry

Vue.config.productionTip = false
Vue.use(VueMasonry)

/* eslint-disable no-new */
new Vue({
  el: '#homepage-vue-app',
  router,
  store,
  components: { Homepage },
  template: '<Homepage/>'
})
