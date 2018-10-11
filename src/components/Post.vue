<template lang="html">
  <div :class="{'postlist-post postlist-post-first' : index == 0, 'postlist-post' : index != 0}" class="">
    <figure :class="{'' : index == 0, '' : index != 0}" class="pa0 ma0">
      <a class="db relative overflow-hidden" :href="data.link">
        <img
        :class="{'w-100' : index != 0}"
        :srcset="srcset"
        sizes="150w, (min-width: 800px) 320w"
        :src="getFeaturedImage(data)"
        class="grow"
        alt="">
      </a>
    </figure>
    <div class="postlist-post-content">
      <div class="">
        <h3 :class="{'mh-custom-posts-xl-title' : index == 0, 'mh-custom-posts-small-title' : index != 0}" class="oswald ttu f3 normal lh-solid mt0 mb3">
          <router-link
            v-html="data.title.rendered"
            :to="{
              name: 'Single',
              params: {
                slug: data.slug,
                id: data.id
              }
            }"
            class="black link no-underline hover-red">
          </router-link>
        </h3>
      </div>

      <div class="gray f6 sans-serif mb3">
        <span class="">
          <i class="fa fa-clock-o"></i> <span v-html="formatDate(data.date)"></span>
        </span>&nbsp;
        <span class="" v-if="data.comment_status === 'open'">
          <i class="fa fa-comment-o"></i> <span class="" v-html="getCommentsLength(data)"></span>
        </span>
      </div>
      <div v-if="index === 0" class="postlist-post-excerpt">
        <div v-html="data.excerpt.rendered" class="serif black lh-copy"></div>
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
.postlist-post {
  margin-bottom: 1rem;
  display: flex;
}

.postlist-post-first {
  flex-direction: row;
}

.postlist-post figure {
  width: 25%;
}

.postlist-post-content {
  width: 75%;
  padding-left: 1rem;
}

.postlist-post-first .postlist-post-excerpt {
  display: none;
}

@media (min-width: 600px){
  .postlist-post-first {
    flex-direction: column;
  }
  .postlist-post-first figure,
  .postlist-post-first .postlist-post-content {
    width: 100%;
    padding: 0;
  }
  .postlist-post-first figure {
    margin-bottom: 1rem;
  }
  .postlist-post-first .postlist-post-excerpt {
    display: block;
  }
}

.postlist-post-excerpt a {
  color: #be1e2d;
  text-decoration: none;
}

.postlist-post-excerpt a:hover {
  text-decoration: underline;
}
</style>
