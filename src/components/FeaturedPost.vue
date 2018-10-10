<template lang="html">
  <div class="featured-post">
    <figure class="ma0 pa0 relative overflow-hidden">
      <a v-if="postLoaded" :href="post.link">
        <img :srcset="srcset" :src="getFeaturedImage(post)" sizes="(max-width: 770px) 200px, 50vw" class="w-100 grow">
      </a>
      <figcaption v-if="postLoaded" class="absolute w-100 bottom-0 ph3">
        <h1 class="oswald ttu ma0 lh-solid normal f2 f1-m f1-l"><a class="link no-underline white hover-red" :href="post.link"><span v-html="post.title.rendered"></span></a></h1>
        <p class="serif white mv3">by {{ post._embedded.author[0].name }}</p>
      </figcaption>
    </figure>
    <div v-if="postLoaded" class="featured-post-excerpt bg-near-white lh-copy serif pa3 f5" v-html="post.excerpt.rendered"></div>
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
      // FIXME: Make this reference the store, but keep the functionality here
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
        // FIXME: Abstract this, never use local data. Reference the vuex store.
        this.post = state.featuredPost.postData.data
      }
    })
  }
}
</script>

<style scoped lang="css">

figcaption {
  text-shadow: 0 0.125em 0.5em rgba(0,0,0.65);
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.85) 100%);
}

>>> .featured-post-excerpt p {
  margin: 0;
}

>>> .featured-post-excerpt a {
  color: #be1e2d;
  text-decoration: none;
}

>>> .featured-post-excerpt a:hover {
  text-decoration: underline;
}

</style>
