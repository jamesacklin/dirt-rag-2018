// Vuex store

import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

const host = ''

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    featuredPost: {},
    posts: {}
  },
  actions: {
    getFeaturedPost: function (context, payload) {
      return new Promise((resolve, reject) => {
        if (context.state.featuredPost[0]) {
          resolve()
        } else {
          axios
            .get(host + '/wp-json/wp/v2/posts?filter[meta_key]=mh-featured-post&filter[meta_value]=on&per_page=1&orderby=date&order=desc&_embed')
            .then(response => {
              console.log('got featured post data back')
              context.commit({
                type: 'storeFeatured',
                data: response.data[0]
              })
              resolve()
            })
            .catch(error => {
              reject(error)
            })
        }
      })
    },
    getWpCat: function (context, payload) {
      const cat = payload.category
      axios
        .get(host + '/wp-json/wp/v2/categories?slug=' + cat)
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
            .get(host + '/wp-json/wp/v2/posts?_embed&per_page=6&categories=' + catId)
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
    storeFeatured (state, data) {
      Vue.set(state.featuredPost, 'postData', data)
    },
    storePosts (state, {category, data}) {
      Vue.set(state.posts, category, data)
    }
  }
})

export default store
