<template lang="html">
  <div class="home-grid">
    <PostList category="gear"></PostList>
    <PostList category="feature"></PostList>
    <PostList category="news"></PostList>
    <PostList category="video"></PostList>
    <PostList category="featured-ride"></PostList>
    <PostList category="opinion"></PostList>
  </div>
</template>

<script>
import PostList from '../components/PostList'

export default {
  name: 'home-view',
  components: {
    PostList
  }
}
</script>

<style lang="css">
  @media (min-width: 770px){
    .home-grid {
      display: grid;
      grid-gap: 2%;
      grid-template-columns: repeat(2, 48%);
    }
  }
</style>
