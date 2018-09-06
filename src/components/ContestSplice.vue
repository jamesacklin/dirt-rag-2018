<template lang="html">
  <div class="contest-splice mv3">
    <Spinner class="spinner" v-if="!postLoaded" key="spinner"></Spinner>
    <div v-if="postLoaded">
      <figure class="ma0 pa3 shadow-1 pointer shadow-hover flex-m flex-l" v-on:click="navigateToPost">
        <div class="contest-splice-image mb3 mb0-m mb0-l w-50-m w-third-l tc">
          <img :src="getFeaturedImage" alt="">
        </div>
        <figcaption class="contest-splice-content w-50-m pl3-m pl3-l">
          <span class="dib ttu pa2 bg-red white oswald f5">Contest</span>
          <h1 class="oswald ttu mv3 lh-solid normal f2"><a class="link no-underline black hover-red" :href="post.link"><span v-html="post.title.rendered"></span></a></h1>
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
import Spinner from './Spinner.vue'
const themepath = '/wp-content/themes/dirt-rag-2018'

export default {
  name: 'ContestSplice',
  components: {
    Spinner
  },
  data () {
    return {
      postLoaded: false,
      post: []
    }
  },
  computed: {
    getFeaturedImage: function () {
      if (typeof this.post._embedded['wp:featuredmedia'] !== 'undefined') {
        return this.post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url
      } else {
        return themepath + '/static/post-default-medium.png'
      }
    }
  },
  methods: {
    navigateToPost: function () {
      var target = this.post.link
      window.location.href = target
    }
  },
  created () {
    this.$store.dispatch('getWpCat', { category: 'contests', perpage: 1 })
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'storePosts' && mutation.payload.category === 'contests') {
        this.post = state.posts.contests[0]
        this.postLoaded = true
      }
    })
  }
}
</script>

<style lang="css">

</style>
