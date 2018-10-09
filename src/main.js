// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// eslint-disable-next-line
import Tachyons from 'tachyons'
import DoubleClick from 'vue-doubleclick'

Vue.config.productionTip = false

let mappings = {
  banner: [
    { window: [0, 0], sizes: [[300, 100], [320, 50], [728, 90], [970, 90], [970, 415]] }
  ],
  rectangle: [
    { window: [0, 0], sizes: [[300, 100], [300, 250], [300, 300], [300, 600]] }
  ]
}

Vue.config.productionTip = false
Vue.use(DoubleClick, {
  id: '28844187',
  mappings
})

/* eslint-disable no-new */
new Vue({
  el: '#App',
  router,
  store,
  components: { App },
  template: '<App/>'
})
