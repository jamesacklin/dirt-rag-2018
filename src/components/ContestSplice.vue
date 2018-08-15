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
.contest-splice {
  margin: 1rem 0;
  padding: 0 0.5rem;
}
.contest-splice figure {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0,0,0,0.25);
  transition: all 0.2s ease;
}
.contest-splice figure:hover {
  box-shadow: 0 0.25rem 0.6rem rgba(0,0,0,0.3);
  transform: translateY(-0.125rem);
}
.contest-splice figure .contest-splice-content {
  margin-top: 1rem;
}
.contest-splice h1 {
  font-family: 'Oswald';
  text-transform: uppercase;
  font-size: 2rem;
  line-height: 1em;
  margin-bottom: 0.25em;
  font-weight: normal;
  letter-spacing: -0.025em;
}
.contest-splice-badge {
  font-size: 80%;
  display: inline-block;
  color: #fff;
  padding: 0.625em 0.9375em;
  margin-bottom: 1rem;
  background: #be1e2d;
  font-weight: bold;
}
@media (min-width: 650px){
  .contest-splice figure {
    flex-direction: row;
  }
  .contest-splice figure .contest-splice-image {
    width: 33.33333%;
  }
  .contest-splice figure .contest-splice-content {
    margin-top: 0;
    margin-left: 1rem;
    width: 66.6666%;
  }
}
</style>
