<template lang="html">
  <div class="page">
    <Header></Header>
    <div class="content">
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
    <div class="sidebar">
      <Advertising></Advertising>
    </div>
    <footer>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias a rem aliquid saepe esse quibusdam reiciendis ab eos inventore, ullam eligendi non nam harum aliquam, dolorum corporis doloribus optio maiores!
    </footer>
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect'

import Header from '../components/Header'
import Advertising from '../components/Advertising'

import FeaturedPost from '../components/FeaturedPost'
import ContestSplice from '../components/ContestSplice'
import PostList from '../components/PostList'

var md = new MobileDetect(window.navigator.userAgent)

export default {
  name: 'Home',
  components: {
    Header,
    Advertising,
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

.home-content { padding: 1rem; }

@media (min-width: 800px){

  .page {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-column-gap: 1rem;
  }

  header, footer {
    grid-column: 1 / -1;
  }

  .content {
    /* width: 79.7872%; */
  }

  .sidebar {
    /* width: 19.1489%; */
    width: 300px;
  }

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
