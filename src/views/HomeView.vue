<template lang="html">
  <div>
    <masonry
      :cols="{default: 2, 720: 1}"
      :gutter="10">
      <PostList category="gear"></PostList>
      <PostList category="feature"></PostList>
      <PostList category="news"></PostList>
      <PostList category="video"></PostList>
      <PostList category="featured-ride"></PostList>
      <PostList category="opinion"></PostList>
    </masonry>
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

</style>
