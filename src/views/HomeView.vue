<template lang="html">
  <div class="home-grid clearfix">
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
@media (min-width: 770px){
  .home-grid .mh_magazine_custom_posts {
    width: 48%;
    margin-left: 2%;
    float: left;
  }
}


</style>
