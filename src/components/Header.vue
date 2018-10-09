<template lang="html">
  <header role="banner">
    <router-link :to="{ name: 'Home' }">
      <img src="https://dirtragmag.com/wp-content/uploads/Web-Header-Logo-207.jpg" alt="Dirt Rag Magazine">
    </router-link>
    <div class="leaderboard">
      <google-ad v-if="!isMobile" unit="DR_Leaderboard" id="div-gpt-ad-1487038544877-8" size="banner"></google-ad>
      <google-ad v-if="isMobile" unit="DR_Mobile_Leaderboard" id="div-gpt-ad-1487038544877-10" size="banner"></google-ad>
    </div>
  </header>
</template>

<script>
import MobileDetect from 'mobile-detect'
var md = new MobileDetect(window.navigator.userAgent)

export default {
  name: 'Header',
  computed: {
    isMobile: function () {
      if (md.mobile()) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="css">
</style>
