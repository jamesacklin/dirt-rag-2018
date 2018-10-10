<template lang="html">
  <div class="mb3">
    <h4 class="mb3">
      <span class="">
        <span v-if="!$store.state.categoryDict[this.category]">&nbsp;</span>
        <router-link :to="{ name: 'category', params: { cat_id: this.category } }" class="oswald db ttu pa2 bg-red white normal f4 no-underline hover-bg-black" v-if="$store.state.categoryDict[this.category]">
          <span v-html="$store.state.categoryDict[this.category]"></span> <i class="fa fa-arrow-right fr"></i>
        </router-link>
      </span>
    </h4>
    <Spinner class="spinner" v-if="!postsLoaded" key="spinner"></Spinner>
    <div class="post-list" v-if="postsLoaded">
      <Post v-for="(post, index) in postArray" :key="index" :postdata="post" :index="index"></Post>
    </div>
    <div v-if="postsLoaded">
      <button class="input-reset action-button" v-if="counter < 6" v-on:click="increment">
        <span class="">More {{ $store.state.categoryDict[this.category] }} <i class="fa fa-chevron-down fr"></i> </span>
      </button>
      <router-link :to="{ name: 'category', params: { cat_id: this.category } }" class="action-button" v-if="counter >= 6">
        <span class="">See All {{ $store.state.categoryDict[this.category] }} <i class="fa fa-arrow-right fr"></i></span>
      </router-link>
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
      postsLoaded: false,
      counter: 3
    }
  },
  created () {
    if (this.$store.state.posts[this.category]) {
      this.postsLoaded = true
    } else {
      this.$store.dispatch('getWpCat', { category: this.category, perpage: 6 })
      this.$store.subscribe((mutation, state) => {
        if (mutation.type === 'storePosts') {
          this.postsLoaded = true
        }
      })
    }
  },
  computed: {
    postArray: function () {
      return this.$store.state.posts[this.category].slice(0, this.counter)
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
