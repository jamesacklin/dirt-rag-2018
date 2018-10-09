import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Archive from '../views/Archive.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', name: 'Home', component: Home },
    // { path: '/post/:slug', name: 'post', component: Single },
    // { path: '/preview/:id', name: 'preview', component: Single },
    // { path: '/page/:slug', name: 'page', component: Page },
    { path: '/category/:cat_id', name: 'category', component: Archive }
    // { path: '/tag/:tag_id', name : 'tag', component: Archive },
    // { path: '/blog/', name : 'blog', component: Archive },
    // { path: '/search/', name : 'search', component: Search },
    // { path: "*", component: PageNotFound }
  ]
})
