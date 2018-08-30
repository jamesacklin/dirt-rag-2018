// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Homepage from './Homepage'
import router from './router'
import store from './store'
// eslint-disable-next-line
import Tachyons from 'tachyons'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#homepage-vue-app',
  router,
  store,
  components: { Homepage },
  template: '<Homepage/>'
})
