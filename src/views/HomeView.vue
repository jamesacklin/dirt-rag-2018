<template lang="html">
  <div>
    <FeaturedPost></FeaturedPost>
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
import FeaturedPost from '../components/FeaturedPost'
import PostList from '../components/PostList'

export default {
  name: 'home-view',
  components: {
    FeaturedPost,
    PostList
  }
}
</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css?family=Oswald:500|Martel');

* {
  box-sizing: border-box;
}

body {
  text-rendering: optimizeLegibility;
}

p {
  font-family: "Martel"
}

.mh-excerpt-more {
  color: #BE1E2D
}

.mh-excerpt-more:hover {
  text-decoration: underline;
}

@media (min-width: 770px){
  .home-grid {
    display: grid;
    grid-gap: 2%;
    grid-template-columns: repeat(2, 48%);
  }
}
</style>
