<template lang="html">
  <div class="">
    <article v-if="postLoaded">
      <header class="bb b--moon-gray">
        <h1 class="oswald ttu f1 normal lh-solid mt0 mb3">
          <a :href="$store.state.currentPost.postData.data[0].link" class="link black hover-red" v-html="$store.state.currentPost.postData.data[0].title.rendered"></a>
        </h1>
        <p class="sans-serif gray f6">by {{ $store.state.currentPost.postData.data[0]._embedded.author[0].name }} &bull; Published <span v-html="formatDate($store.state.currentPost.postData.data[0].date)"></span></p>
      </header>
      <div class="article-content serif black lh-copy" v-html="$store.state.currentPost.postData.data[0].content.rendered"></div>
    </article>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'Single',
  data () {
    return {
      postLoaded: false
    }
  },
  methods: {
    formatDate: function (date) {
      return dayjs(String(date)).format('MMMM D, YYYY')
    }
  },
  mounted () {
    this.$store.dispatch('getCurrentPost', { slug: this.$route.params.slug })
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'storeCurrent') {
        this.postLoaded = true
      }
    })
  }
}
</script>

<style scoped>

>>> article {
  padding: 0 1rem;
}

>>> .article-content p {
  font-size: 1.25rem;
  max-width: 34em;
  margin: 2em auto;
  text-indent: 1em;
}

>>> figure {
  margin: 0; padding: 0;
  width: 100% !important;
  position: relative;
}

>>> figure img.size-full {
  width: 100% !important;
  display: block;
  height: auto;
}

>>> figure > figcaption {
  margin-top: 0.25rem;
  color: #777;
  font-family: "Open Sans";
  font-size: 0.875rem;
}
</style>
