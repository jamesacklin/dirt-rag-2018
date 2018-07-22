// Vuex store

import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    posts: {}
  },
  actions: {
    getWpCat: function (context, payload) {
      const cat = payload.category
      axios
        .get('https://dirtragmag.com/wp-json/wp/v2/categories?slug=' + cat)
        .then(response => {
          var wpCat = response.data[0].id
          this.dispatch('getPosts', { category: cat, categoryId: wpCat })
        })
    },
    getPosts: function (context, payload) {
      const cat = payload.category
      const catId = payload.categoryId
      return new Promise((resolve, reject) => {
        if (context.state.posts[cat]) {
          resolve()
        } else {
          axios
            .get('https://dirtragmag.com/wp-json/wp/v2/posts?_embed&categories=' + catId)
            .then(response => {
              context.commit({
                type: 'storePosts',
                data: response.data,
                category: cat
              })
              resolve()
            })
            .catch(error => {
              reject(error)
            })
        }
      })
    }
  },
  mutations: {
    storePosts (state, {category, data}) {
      Vue.set(state.posts, category, data)
    }
  }
})

export default store
