<template lang="html">
  <div class="mb3">
    <h4 class="mb3">
      <span class="">
        <span v-if="!categoryName">&nbsp;</span>
        <a class="oswald db ttu pa2 bg-red white normal f4 no-underline hover-bg-black" v-if="categoryName" :href="'/category/' + category + '/'">
          <span v-html="categoryName"></span> <i class="fa fa-arrow-right fr"></i>
        </a>
      </span>
    </h4>
    <Spinner class="spinner" v-if="!postsLoaded" key="spinner"></Spinner>
    <div class="post-list">
      <Post v-for="(post, index) in postArray" :key="index" :postdata="post" :index="index"></Post>
    </div>
    <div v-if="postsLoaded">
      <button class="input-reset action-button" v-if="counter < 6" v-on:click="increment">
        <span class="">More {{ categoryName }} <i class="fa fa-chevron-down fr"></i> </span>
      </button>
      <a :href="'/category/' + category + '/'" class="action-button" v-if="counter >= 6">
        <span class="">See All {{ categoryName }} <i class="fa fa-arrow-right fr"></i></span>
      </a>
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
      categoryName: '',
      postsLoaded: false,
      counter: 3
    }
  },
  created () {
    this.$store.dispatch('getWpCat', { category: this.category, perpage: 6 })
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
      this.$store.subscribe((mutation, state) => {
        if (mutation.type === 'storeCats') {
          _this.categoryName = state.categoryDict[this.category]
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
.action-button {
  color: black;
  background: white;
  border: 2px solid black;
  text-align: center;
  text-decoration: none;
  display: block;
  width: 100%;
  padding: 0.5rem;
  text-transform: uppercase;
  cursor: pointer;
  font-family: "Oswald";
}
.action-button:hover {
  border-color: #be1e2d;
  color: #be1e2d;
}
</style>
