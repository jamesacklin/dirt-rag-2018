<template lang="html">
  <div class="home-grid">
    <PostList category="gear"></PostList>
    <PostList category="news"></PostList>
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
.home-grid {
  display: flex;
  flex-direction: column;
}
@media (min-width: 960px){
  .home-grid {
    flex-direction: row;
  }
}
</style>
