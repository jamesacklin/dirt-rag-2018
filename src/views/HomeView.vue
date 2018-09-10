<template lang="html">
  <div class="home-page">
    <div class="home-content sans-serif">
      <FeaturedPost></FeaturedPost>
      <ContestSplice></ContestSplice>
      <!-- <div id="div-gpt-ad-1487038544877-10" data-google-query-id="CM-Y4cjU4NwCFYmnaQodOWEORQ"></div> -->
      <div class="home-grid">
        <div class="tag-unit" v-if="isMobile">
          <!-- /28844187/DR_300x250_Square1 -->
          <div id='div-gpt-ad-1487038544877-0'>
          </div>
        </div>
        <PostList category="gear"></PostList>
        <div class="tag-unit" v-if="isMobile">
          <!-- /28844187/DR_300x250_Square2 -->
          <div id='div-gpt-ad-1487038544877-1'>
          </div>
        </div>
        <PostList category="feature"></PostList>
        <div class="tag-unit" v-if="isMobile">
          <!-- /28844187/DR_300x250_Square3 -->
          <div id='div-gpt-ad-1487038544877-2'>
          </div>
        </div>
        <PostList category="news"></PostList>
        <div class="tag-unit" v-if="isMobile">
          <!-- /28844187/DR_300x250_Square4 -->
          <div id='div-gpt-ad-1487038544877-3'>
          </div>
        </div>
        <PostList category="video"></PostList>
        <div class="tag-unit" v-if="isMobile">
          <!-- /28844187/DR_300x250_Square5 -->
          <div id='div-gpt-ad-1487038544877-4'>
          </div>
        </div>
        <PostList category="featured-ride"></PostList>
        <div class="tag-unit" v-if="isMobile">
          <!-- /28844187/DR_300x250_Square6 -->
          <div id='div-gpt-ad-1487038544877-5'>
          </div>
        </div>
        <PostList category="opinion"></PostList>
        <div class="tag-unit" v-if="isMobile">
          <!-- /28844187/DR_300x250_Square7 -->
          <div id='div-gpt-ad-1487038544877-6'>
          </div>
          <!-- /28844187/DR_300x250_Square8 -->
          <div id='div-gpt-ad-1487038544877-7'>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!isMobile" class="home-sidebar">
      <div class="tag-unit">
        <div id='div-gpt-ad-1487038544877-0'></div>
      </div>
      <div class="tag-unit">
        <div id='div-gpt-ad-1487038544877-1'></div>
      </div>
      <div class="tag-unit">
        <div id='div-gpt-ad-1487038544877-2'></div>
      </div>
      <div class="tag-unit">
        <div id='div-gpt-ad-1487038544877-3'></div>
      </div>
      <div class="tag-unit">
        <div id='div-gpt-ad-1487038544877-4'></div>
      </div>
      <div class="tag-unit">
        <div id='div-gpt-ad-1487038544877-5'></div>
      </div>
      <div class="tag-unit">
        <div id='div-gpt-ad-1487038544877-6'></div>
      </div>
      <div class="tag-unit">
        <div id='div-gpt-ad-1487038544877-7'></div>
      </div>
    </div>
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect'
import FeaturedPost from '../components/FeaturedPost'
import ContestSplice from '../components/ContestSplice'
import PostList from '../components/PostList'

var md = new MobileDetect(window.navigator.userAgent)

export default {
  name: 'home-view',
  components: {
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
  },
  created: function () {
    if (md.mobile()) {
    }
  }
}
</script>

<style lang="css">
.home-content { padding: 1rem; }
.mh-container .home-content { padding: 0; }
@media (min-width: 800px){
  .home-page {
    display: flex;
    max-width: 1280px;
    margin: 0 auto;
  }
  .home-content {
    width: auto;
    padding: 1rem;
  }
  .mh-container .home-content {
    width: 75%;
    padding-right: 1rem;
  }
  .home-sidebar {
    width: 300px;
  }
  .home-content .home-grid {
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 1rem;
  }
  .tag-unit {
    margin-bottom: 1rem;
  }
}
</style>
