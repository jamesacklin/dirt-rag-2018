// Vuex store

import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

const host = 'https://dirtragmag.com'
// const host = ''

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    categoryDict: {},
    featuredPost: {},
    posts: {},
    advertising: {
      pubid: '28844187',
      slots: [
        {
          name: 'DR_300x250_Square1',
          sizes: [[300, 100], [300, 250], [300, 600]],
          id: 'div-gpt-ad-1487038544877-0'
        },
        {
          name: 'DR_300x250_Square2',
          sizes: [[300, 100], [300, 250], [300, 600]],
          id: 'div-gpt-ad-1487038544877-1'
        },
        {
          name: 'DR_300x250_Square3',
          sizes: [[300, 100], [300, 250], [300, 600]],
          id: 'div-gpt-ad-1487038544877-2'
        },
        {
          name: 'DR_300x250_Square4',
          sizes: [[300, 100], [300, 250], [300, 600]],
          id: 'div-gpt-ad-1487038544877-3'
        },
        {
          name: 'DR_300x250_Square5',
          sizes: [[300, 100], [300, 250], [300, 600]],
          id: 'div-gpt-ad-1487038544877-4'
        },
        {
          name: 'DR_300x250_Square6',
          sizes: [[300, 100], [300, 250], [300, 600]],
          id: 'div-gpt-ad-1487038544877-5'
        },
        {
          name: 'DR_300x250_Square7',
          sizes: [[300, 100], [300, 250], [300, 600]],
          id: 'div-gpt-ad-1487038544877-6'
        },
        {
          name: 'DR_300x250_Square8',
          sizes: [[300, 100], [300, 250], [300, 600]],
          id: 'div-gpt-ad-1487038544877-7'
        },
        {
          name: 'DR_300x250_SquareNine',
          sizes: [[300, 600], [300, 100], [300, 250]],
          id: 'div-gpt-ad-1525210305082-0'
        },
        {
          name: 'DR_300x250_SquareTen',
          sizes: [[300, 600], [300, 100], [300, 250]],
          id: 'div-gpt-ad-1525213375178-0'
        }
        // {
        //   name: 'DR_Leaderboard',
        //   sizes: [[728, 90], [970, 415], [970, 90]],
        //   id: 'div-gpt-ad-1487038544877-8'
        // },
        // {
        //   name: 'DR_Mobile_Leaderboard',
        //   sizes: [[320, 50], [300, 100], [300, 250]],
        //   id: 'div-gpt-ad-1487038544877-10'
        // },
        // {
        //   name: 'DR_Left_Background_Ad',
        //   sizes: [768, 1024],
        //   id: 'div-gpt-ad-1487038544877-9'
        // },
        // {
        //   name: 'DR_Right_Background_Ad',
        //   sizes: [768, 1024],
        //   id: 'div-gpt-ad-1487038544877-12'
        // }
      ]
    }
  },
  actions: {
    getFeaturedPost: function (context, payload) {
      return new Promise((resolve, reject) => {
        if (context.state.featuredPost[0]) {
          resolve()
        } else {
          axios
            .get(
              host +
                '/wp-json/wp/v2/posts?filter[meta_key]=featured-post&filter[meta_value]=on&per_page=1&orderby=date&order=desc&_embed'
            )
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
            .get(
              host +
                '/wp-json/wp/v2/posts?_embed&per_page=' +
                perpage +
                '&categories=' +
                catId
            )
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
    storeCats (state, { category, categoryName }) {
      Vue.set(state.categoryDict, category, categoryName)
    },
    storePosts (state, { category, data }) {
      Vue.set(state.posts, category, data)
    }
  }
})

export default store
