<template lang="html">
  <div>
    <figure :class="{'mh-custom-posts-thumb-xl' : index == 0, 'mh-custom-posts-thumb' : index != 0}">
      <a class="mh-thumb-icon" :href="data.link">
        <img
        :class="{'attachment-mh-magazine-small size-mh-magazine-small wp-post-image' : index != 0}"
        :srcset="srcset"
        :src="getFeaturedImage(data)"
        sizes="(max-width: 770px) 80px, (min-width: 770px) 100%"
        alt="">
      </a>
    </figure>
    <div class="">
      <div class="">
        <h3 :class="{'mh-custom-posts-xl-title' : index == 0, 'mh-custom-posts-small-title' : index != 0}"><a :href="data.link"><span v-html="data.title.rendered"></span></a></h3>
      </div>

      <div class="">
        <span class="">
          <i class="fa fa-clock-o"></i> <span v-html="formatDate(data.date)"></span>
        </span>&nbsp;
        <span class="" v-if="data.comment_status === 'open'">
          <i class="fa fa-comment-o"></i> <span class="" v-html="getCommentsLength(data)"></span>
        </span>
      </div>
      <div v-if="index === 0" class="">
        <div v-html="data.excerpt.rendered" class="lh-copy"></div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
const themepath = '/wp-content/themes/dirt-rag-2018'

export default {
  name: 'Post',
  props: ['postdata', 'index'],
  data: function () {
    return {
      data: this.postdata
    }
  },
  methods: {
    getFeaturedImage: function (post) {
      if (post._embedded['wp:featuredmedia']) {
        return post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url
      } else {
        return themepath + '/static/post-default-thumbnail.png'
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
  },
  computed: {
    srcset: function () {
      if (this.index === 0 && typeof this.data._embedded['wp:featuredmedia'] !== 'undefined') {
        return [
          this.data._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url + ' 150w',
          this.data._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url + ' 320w'
        ].join(', ')
      } else if (this.index !== 0 && typeof this.data._embedded['wp:featuredmedia'] !== 'undefined') {
        return [
          this.data._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url + ' 150w'
        ].join(', ')
      } else {
        return [
          themepath + '/static/post-default-thumbnail.png 150w',
          themepath + '/static/post-default-medium.png 600w'
        ]
      }
    }
  }
}
</script>

<style lang="css">

</style>
