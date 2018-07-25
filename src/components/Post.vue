<template lang="html">
  <div class="post">
    <div :class="{'small-thumbnail' : index != 0}">
      <a :href="data.link"><img :src="getFeaturedImage(data)" alt=""></a>
    </div>
    <div :class="{'small-content' : index != 0}">
      <h2><a :href="data.link"><span v-html="data.title.rendered"></span></a></h2>
      <div class="meta">
        <span>
          &#128339; <span v-html="formatDate(data.date)"></span>
        </span>&nbsp;
        <span v-if="data.comment_status === 'open'">
          &#128488; <span v-html="getCommentsLength(data)"></span>
        </span>
      </div>
      <p v-if="index == 0" v-html="data.excerpt.rendered"></p>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'Post',
  props: ['data', 'index'],
  methods: {
    getFeaturedImage: function (post) {
      if (post._embedded['wp:featuredmedia']) {
        return post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url
      }
    },
    getCommentsLength: function (post) {
      if (post._embedded.replies) {
        return post._embedded.replies[0].length
      } else {
        return 0
      }
    },
    formatDate: function (date) {
      return dayjs(String(date)).format('MMMM D, YYYY')
    }
  }
}
</script>

<style lang="css">
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.post {
  border-bottom: 1px solid #CCC;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
}
.post:after {
  content: "";
  display: table;
  clear: both;
}
.meta  {
  font-size: 0.8rem;
  line-height: 1rem;
}
.small-thumbnail {
  float: left;
  width: 25%;
  padding-right: 1rem;
}
.small-content {
  float: left;
  width: calc(75% - 1rem);
}
.small-content h2 {
  font-size: 1.2rem;
  margin-top: 0;
}
.post img {
  width: 100%;
  max-width: 100%;
}
</style>
