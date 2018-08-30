<template lang="html">
  <div>
    <div class="featured-post">
      <figure>
        <a v-if="postLoaded" :href="post.link">
          <img :srcset="srcset" :src="getFeaturedImage(post)" sizes="(max-width: 770px) 200px, 50vw">
        </a>
        <figcaption v-if="postLoaded">
          <h1><a :href="post.link"><span v-html="post.title.rendered"></span></a></h1>
          <p>by {{ post._embedded.author[0].name }}</p>
        </figcaption>
      </figure>
      <div v-if="postLoaded" class="featured-post-excerpt" v-html="post.excerpt.rendered"></div>
    </div>
  </div>
</template>

<script>
import Spinner from './Spinner.vue'
const themepath = '/wp-content/themes/dirt-rag-2018'

export default {
  name: 'FeaturedPost',
  components: {
    Spinner
  },
  data () {
    return {
      post: [],
      postLoaded: false
    }
  },
  computed: {
    srcset: function () {
      if (typeof this.post._embedded['wp:featuredmedia'] !== 'undefined') {
        return [
          this.post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url + ' 150w',
          this.post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url + ' 320w',
          this.post._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url + ' 600w'
        ].join(', ')
      } else {
        return [
          themepath + '/static/post-default-thumbnail.png 150w',
          themepath + '/static/post-default-medium.png 600w'
        ]
      }
    }
  },
  methods: {
    getFeaturedImage: function (post) {
      if (typeof this.post._embedded['wp:featuredmedia'] !== 'undefined') {
        return post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url
      } else {
        return themepath + '/static/post-default-medium.png'
      }
    }
  },
  created () {
    this.$store.dispatch('getFeaturedPost')
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'storeFeatured') {
        this.postLoaded = true
        this.post = state.featuredPost.postData.data
      }
    })
  }
}
</script>

<style lang="css">
</style>
