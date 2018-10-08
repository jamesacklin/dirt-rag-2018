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
  rectangle: [
    { window: [0, 0], sizes: [[300, 250], [300, 300], [300, 100], [250, 250]] },
    { window: [1050, 350], sizes: [[250, 250], [300, 250], [300, 100], [300, 600], [240, 400], [160, 600], [120, 600]] }
  ],
  banner: [
    { window: [0, 0], sizes: [[300, 250], [300, 300], [300, 100], [250, 250]] },
    { window: [750, 200], sizes: [[750, 300], [750, 200], [300, 300], [300, 250], [750, 100], [728, 90], [600, 200]] },
    { window: [1050, 350], sizes: [[1200, 400], [970, 90], [750, 300], [750, 200], [750, 100], [728, 90], [600, 200], [900, 300], [970, 250], [970, 415]] },
    { window: [1200, 350], sizes: [[1200, 600], [1200, 400]] }
  ]
}

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
