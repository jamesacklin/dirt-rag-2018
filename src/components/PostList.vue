<template lang="html">
    <div style="padding: 0 1rem">
      <h2 class="category-header">{{ category }}</h2>
      <Spinner class="spinner" v-if="!postsLoaded" key="spinner"></Spinner>
      <div>
        <Post v-for="(post, index) in postArray" :key="index" :data="post" :index="index"></Post>
      </div>
      <div v-if="postsLoaded">
        <button class="action-button" style="text-transform: capitalize" v-if="counter < 6" v-on:click="increment">More {{ category }} Posts</button>
        <button class="action-button" style="text-transform: capitalize" v-if="counter >= 6">See All {{ category }} Posts</button>
      </div>
    </div>
</template>

<script>
import Post from './Post.vue'
import Spinner from './Spinner.vue'

export default {
  name: 'PostList',
  props: ['category'],
  components: {
    Spinner,
    Post
  },
  data () {
    return {
      posts: [],
      postsLoaded: false,
      counter: 3
    }
  },
  created () {
    this.$store.dispatch('getWpCat', { category: this.category })
  },
  computed: {
    postArray: function () {
      var _this = this
      this.$store.subscribe((mutation, state) => {
        if (mutation.type === 'storePosts') {
          _this.posts = state.posts[this.category]
          _this.postsLoaded = true
        }
      })
      if (_this.posts) {
        return this.posts.slice(0, this.counter)
      }
    }
  },
  methods: {
    increment () {
      this.counter += 3
    }
  }
}
</script>

<style lang="css">
  @font-face {
    font-family: system;
    font-style: normal;
    font-weight: 300;
    src: local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"), local(".LucidaGrandeUI"), local("Ubuntu Light"), local("Segoe UI Light"), local("Roboto-Light"), local("DroidSans"), local("Tahoma");
  }

  body {
    font-family: "system";
    line-height: 1.6rem;
  }

  .category-header {
    background: red;
    color: white;
    font-size: 1.2rem;
    padding: 1rem;
    font-weight: bold;
    text-transform: capitalize;
  }

  .action-button {
    background: none;
    border: 0;
    cursor: pointer;
    font: inherit;
    line-height: normal;
    overflow: visible;
    padding: 0;
    -webkit-user-select: none; /* for button */
       -moz-user-select: none;
        -ms-user-select: none;
    display: block;
    width: 100%;
    height: 3rem;
    font-size: 1rem;
    background: #DDD;
    font-weight: bold;
  }

  .action-button:hover {
    background: #EFEFEF;
  }

  .action-button:focus {
    outline: none;
  }
</style>
