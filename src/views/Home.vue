<template lang="html">
  <div class="home">
    <FeaturedPost></FeaturedPost>
    <ContestSplice></ContestSplice>
    <div class="home-grid">
      <PostList category="gear"></PostList>
      <PostList category="feature"></PostList>
      <PostList category="news"></PostList>
      <PostList category="video"></PostList>
      <PostList category="featured-ride"></PostList>
      <PostList category="opinion"></PostList>
    </div>
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect'

import FeaturedPost from '@/components/FeaturedPost'
import ContestSplice from '@/components/ContestSplice'
import PostList from '@/components/PostList'

var md = new MobileDetect(window.navigator.userAgent)

export default {
  name: 'Home',
  components: {
    FeaturedPost,
    ContestSplice,
    PostList
  },
  computed: {
    isMobile: function () {
      if (md.mobile()) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="css">

.home { padding: 0 1rem }

@media (min-width: 800px){
  .home-grid {
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 1rem;
  }
}
@media (min-width: 1200px){
  .home-grid {
    grid-template-columns: auto auto auto;
  }
}
</style>
