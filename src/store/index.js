// Vuex store

import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

const host = 'https://dirtragmag.com'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    categoryDict: {},
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
            .get(host + '/wp-json/wp/v2/posts?filter[meta_key]=featured-post&filter[meta_value]=on&per_page=1&orderby=date&order=desc&_embed')
            .then(response => {
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
      const perPage = payload.perpage
      axios
        .get(host + '/wp-json/wp/v2/categories?slug=' + cat)
        .then(response => {
          var wpCat = response.data[0].id
          var wpCatName = response.data[0].name
          this.dispatch('getPosts', {
            category: cat,
            perpage: perPage,
            categoryId: wpCat,
            categoryName: wpCatName
          })
        })
    },
    getPosts: function (context, payload) {
      const cat = payload.category
      const perpage = payload.perpage
      const catId = payload.categoryId
      const catName = payload.categoryName
      return new Promise((resolve, reject) => {
        if (context.state.posts[cat]) {
          resolve()
        } else {
          axios
            .get(host + '/wp-json/wp/v2/posts?_embed&per_page=' + perpage + '&categories=' + catId)
            .then(response => {
              context.commit({
                type: 'storePosts',
                data: response.data,
                category: cat
              })
              context.commit({
                type: 'storeCats',
                category: cat,
                categoryName: catName
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
    storeCats (state, {category, categoryName}) {
      Vue.set(state.categoryDict, category, categoryName)
    },
    storePosts (state, {category, data}) {
      Vue.set(state.posts, category, data)
    }
  }
})

export default store
