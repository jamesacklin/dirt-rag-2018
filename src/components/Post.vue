<template lang="html">
  <li class="mh-custom-posts-item clearfix post">
    <figure :class="{'mh-custom-posts-thumb-xl' : index == 0, 'mh-custom-posts-thumb' : index != 0}">
      <a class="mh-thumb-icon" :href="data.link">
        <img :class="{'attachment-mh-magazine-small size-mh-magazine-small wp-post-image' : index != 0}" :src="getFeaturedImage(data)" alt="">
      </a>
    </figure>
    <div class="mh-custom-posts-content">
      <div class="mh-custom-posts-header">
        <h3 :class="{'mh-custom-posts-xl-title' : index == 0, 'mh-custom-posts-small-title' : index != 0}"><a :href="data.link"><span v-html="data.title.rendered"></span></a></h3>
      </div>

      <div class="mh-meta mh-custom-posts-meta">
        <span class="mh-meta-date updated">
          <i class="fa fa-clock-o"></i> <span v-html="formatDate(data.date)"></span>
        </span>&nbsp;
        <span class="mh-meta-comments" v-if="data.comment_status === 'open'">
          <i class="fa fa-comment-o"></i> <span class="mh-comment-count-link" v-html="getCommentsLength(data)"></span>
        </span>
      </div>
      <div v-if="index == 0" class="mh-excerpt">
        <p v-html="data.excerpt.rendered"></p>
      </div>
    </div>
  </li>
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
h3.mh-custom-posts-small-title {
  font-size: 1rem;
}
img.size-mh-magazine-small {
  width: 80px;
}
</style>
