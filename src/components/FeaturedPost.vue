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
.featured-post {
  margin-bottom: 1rem;
}
.featured-post figure {
  height: 0;
  width: 100%;
  overflow: hidden;
  padding-bottom: 50%;
  position: relative;
  background: #222;
}
.featured-post figure img {
  width: 100%;
  transform-origin: center;
  transition: all 0.25s ease;
  position: absolute;
  top: 50%; left: 0;
  transform: translateY(-50%);
}
.featured-post figure:hover img {
  transform: scale(1.125) translateY(-45%);
  opacity: 0.8;
}
.featured-post figure figcaption {
  position: absolute;
  color: white;
  bottom: 0px;
  width: 100%;
  padding: 1.05rem;
  text-shadow: 0 0.125em 0.5em rgba(0,0,0.65);
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.85) 100%);
}
.featured-post h1 {
  font-family: 'Oswald';
  text-transform: uppercase;
  font-size: 2rem;
  line-height: 1em;
  margin-bottom: 0.25em;
  font-weight: normal;
  letter-spacing: -0.025em;
}
.featured-post figure figcaption h1 a {
  color: white;
}

.featured-post-excerpt {
  background: #F7F7F7;
  padding: 1rem;
}

@media (min-width: 770px){
  .featured-post-excerpt {
    padding: 1.05rem;
  }
  .featured-post-excerpt p {
    font-size: 1.05rem;
  }
  .featured-post h1 {
    font-size: 3rem;
  }
}
</style>
