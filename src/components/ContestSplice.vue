<template lang="html">
  <div class="contest-splice">
    <Spinner class="spinner" v-if="!postLoaded" key="spinner"></Spinner>
    <div v-if="postLoaded">
      <figure v-on:click="navigateToPost">
        <div class="contest-splice-image">
          <img :src="getFeaturedImage" alt="">
        </div>
        <figcaption class="contest-splice-content">
          <span class="contest-splice-badge">CONTEST</span>
          <h1><a :href="post.link"><span v-html="post.title.rendered"></span></a></h1>
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
