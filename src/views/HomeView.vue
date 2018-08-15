<template lang="html">
  <div>
    <div id="main-content" class="mh-content mh-home-content">

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
    <div v-if="!isMobile" class="mh-widget-col-1 mh-sidebar mh-home-sidebar mh-home-area-6">
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

.tag-unit {
  text-align: center;
  margin-bottom: 1rem;
}

.entry-title, .page-title {
  font-family: 'Oswald';
  text-transform: uppercase;
  font-weight: normal;
}

.mh-excerpt-more {
  color: #BE1E2D
}

.mh-excerpt-more:hover {
  text-decoration: underline;
}

@media (min-width: 770px){
  .home-grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .mh_magazine_custom_posts {
    width: 48%;
    margin: 0 1% 1rem;
  }
  .contest-splice {
    width: 100%;
    flex-grow: 1;
  }
}
</style>
