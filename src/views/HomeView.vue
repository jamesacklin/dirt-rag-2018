<template lang="html">
  <div class="home-page">
    <div class="home-content sans-serif">
      <FeaturedPost></FeaturedPost>
      <ContestSplice></ContestSplice>
      <div class="home-grid">
        <div v-if="isMobile" class="tag-unit">
          <div id='div-gpt-ad-1487038544877-0'></div>
        </div>
        <div v-if="isMobile" class="tag-unit">
          <div id='div-gpt-ad-1487038544877-1'></div>
        </div>
        <PostList category="gear"></PostList>
        <div v-if="isMobile" class="tag-unit">
          <div id='div-gpt-ad-1487038544877-2'></div>
        </div>
        <PostList category="feature"></PostList>
        <div v-if="isMobile" class="tag-unit">
          <div id='div-gpt-ad-1487038544877-3'></div>
        </div>
        <PostList category="news"></PostList>
        <div v-if="isMobile" class="tag-unit">
          <div id='div-gpt-ad-1487038544877-4'></div>
        </div>
        <PostList category="video"></PostList>
        <div v-if="isMobile" class="tag-unit">
          <div id='div-gpt-ad-1487038544877-5'></div>
        </div>
        <PostList category="featured-ride"></PostList>
        <div v-if="isMobile" class="tag-unit">
          <div id='div-gpt-ad-1487038544877-6'></div>
        </div>
        <PostList category="opinion"></PostList>
        <div v-if="isMobile" class="tag-unit">
          <div id='div-gpt-ad-1487038544877-7'></div>
        </div>
        <div v-if="isMobile" class="tag-unit">
          <div id='div-gpt-ad-1525210305082-0'></div>
        </div>
        <div v-if="isMobile" class="tag-unit">
          <div id='div-gpt-ad-1525213375178-0'></div>
        </div>
      </div>
    </div>
    <div v-if="!isMobile" class="home-sidebar">
      <div class="mb3">
        <OutsideFeed></OutsideFeed>
      </div>
      <div class="tag-unit" v-bind:key="slot.id" v-for="slot in this.$store.state.advertising.slots">
        <div :id="slot.id"></div>
      </div>
    </div>
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect'
import FeaturedPost from '../components/FeaturedPost'
import ContestSplice from '../components/ContestSplice'
import PostList from '../components/PostList'
import OutsideFeed from '../components/OutsideFeed'

var md = new MobileDetect(window.navigator.userAgent)

export default {
  name: 'home-view',
  components: {
    FeaturedPost,
    ContestSplice,
    PostList,
    OutsideFeed
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
  mounted () {
    var googletag = window.googletag || {}
    googletag.cmd = googletag.cmd || []
    googletag.cmd.push(function () {
      googletag.defineSlot('/28844187/DR_300x250_Square2', [[300, 100], [300, 250], [300, 600]], 'div-gpt-ad-1487038544877-1').addService(googletag.pubads())
      googletag.defineSlot('/28844187/DR_300x250_Square3', [[300, 100], [300, 250], [300, 600]], 'div-gpt-ad-1487038544877-2').addService(googletag.pubads())
      googletag.defineSlot('/28844187/DR_300x250_Square4', [[300, 100], [300, 250], [300, 600]], 'div-gpt-ad-1487038544877-3').addService(googletag.pubads())
      googletag.defineSlot('/28844187/DR_300x250_Square5', [[300, 100], [300, 250], [300, 600]], 'div-gpt-ad-1487038544877-4').addService(googletag.pubads())
      googletag.defineSlot('/28844187/DR_300x250_Square6', [[300, 100], [300, 250], [300, 600]], 'div-gpt-ad-1487038544877-5').addService(googletag.pubads())
      googletag.defineSlot('/28844187/DR_300x250_Square7', [[300, 100], [300, 250], [300, 600]], 'div-gpt-ad-1487038544877-6').addService(googletag.pubads())
      googletag.defineSlot('/28844187/DR_300x250_Square8', [[300, 100], [300, 250], [300, 600]], 'div-gpt-ad-1487038544877-7').addService(googletag.pubads())
      googletag.defineSlot('/28844187/DR_300x250_SquareNine', [[300, 600], [300, 100], [300, 250]], 'div-gpt-ad-1525210305082-0').addService(googletag.pubads())
      googletag.defineSlot('/28844187/DR_300x250_SquareTen', [[300, 600], [300, 100], [300, 250]], 'div-gpt-ad-1525213375178-0').addService(googletag.pubads())
      googletag.defineSlot('/28844187/DR_Leaderboard', [[728, 90], [970, 415], [970, 90]], 'div-gpt-ad-1487038544877-8').addService(googletag.pubads())
      googletag.defineSlot('/28844187/DR_Left_Background_Ad', [768, 1024], 'div-gpt-ad-1487038544877-9').addService(googletag.pubads())
      googletag.defineSlot('/28844187/DR_Mobile_Leaderboard', [[320, 50], [300, 100], [300, 250]], 'div-gpt-ad-1487038544877-10').addService(googletag.pubads())
      googletag.defineOutOfPageSlot('/28844187/TEST_DR_PRESTITIAL_FLOAT', 'div-gpt-ad-1491955404009-0').addService(googletag.pubads())
      googletag.defineSlot('/28844187/DR_Right_Background_Ad', [768, 1024], 'div-gpt-ad-1487038544877-12').addService(googletag.pubads())
      googletag.enableServices()
      googletag.pubads().enableSingleRequest()
      googletag.pubads().collapseEmptyDivs()
      googletag.display('div-gpt-ad-1487038544877-0')
      googletag.display('div-gpt-ad-1487038544877-1')
      googletag.display('div-gpt-ad-1487038544877-2')
      googletag.display('div-gpt-ad-1487038544877-3')
      googletag.display('div-gpt-ad-1487038544877-4')
      googletag.display('div-gpt-ad-1487038544877-5')
      googletag.display('div-gpt-ad-1487038544877-6')
      googletag.display('div-gpt-ad-1487038544877-7')
      googletag.display('div-gpt-ad-1525210305082-0')
      googletag.display('div-gpt-ad-1525213375178-0')
      googletag.display('div-gpt-ad-1487038544877-8')
      googletag.display('div-gpt-ad-1487038544877-9')
      googletag.display('div-gpt-ad-1487038544877-10')
      googletag.display('div-gpt-ad-1491955404009-0')
      googletag.display('div-gpt-ad-1487038544877-12')
    })
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
    width: 73%;
    padding-right: 2%;
  }
  .home-sidebar {
    width: 312px;
  }
  .home-content .home-grid {
    display: grid;
    grid-template-columns: 49.5% 49.5%;
    grid-column-gap: 1%;
  }
  .tag-unit {
    margin-bottom: 1rem;
    text-align: center;
  }
}
</style>
