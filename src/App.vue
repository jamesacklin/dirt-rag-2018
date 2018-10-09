<template>
  <div id="App">
    <header role="banner">
      <img src="https://dirtragmag.com/wp-content/uploads/Web-Header-Logo-207.jpg" alt="Dirt Rag Magazine">
      <div class="leaderboard">
        <google-ad v-if="!isMobile" unit="DR_Leaderboard" id="div-gpt-ad-1487038544877-8" size="banner"></google-ad>
        <google-ad v-if="isMobile" unit="DR_Mobile_Leaderboard" id="div-gpt-ad-1487038544877-10" size="banner"></google-ad>
      </div>
    </header>
    <div class="content-view">
      <router-view/>
    </div>
    <div class="ad-sidebar">
      <google-ad unit="DR_300x250_Square1" id="div-gpt-ad-1487038544877-0" size="rectangle"></google-ad>
      <google-ad unit="DR_300x250_Square2" id="div-gpt-ad-1487038544877-1" size="rectangle"></google-ad>
      <google-ad unit="DR_300x250_Square3" id="div-gpt-ad-1487038544877-2" size="rectangle"></google-ad>
      <google-ad unit="DR_300x250_Square4" id="div-gpt-ad-1487038544877-3" size="rectangle"></google-ad>
      <google-ad unit="DR_300x250_Square5" id="div-gpt-ad-1487038544877-4" size="rectangle"></google-ad>
      <google-ad unit="DR_300x250_Square6" id="div-gpt-ad-1487038544877-5" size="rectangle"></google-ad>
      <google-ad unit="DR_300x250_Square7" id="div-gpt-ad-1487038544877-6" size="rectangle"></google-ad>
      <google-ad unit="DR_300x250_Square8" id="div-gpt-ad-1487038544877-7" size="rectangle"></google-ad>
      <google-ad unit="DR_300x250_SquareNine" id="div-gpt-ad-1525210305082-0" size="rectangle"></google-ad>
      <google-ad unit="DR_300x250_SquareTen" id="div-gpt-ad-1525213375178-0" size="rectangle"></google-ad>
    </div>
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect'
var md = new MobileDetect(window.navigator.userAgent)

export default {
  name: 'App',
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

<style>
@import url('https://fonts.googleapis.com/css?family=Oswald:500|Martel|Open+Sans');
@import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

.oswald { font-family: "Oswald" }
.serif { font-family: "Martel", georgia, times, serif;}
.sans-serif { font-family: "Open Sans" }

.red { color: #be1e2d }
.hover-red:hover { color: #be1e2d }
.bg-red { background-color: #be1e2d }

.content-view {
  width: calc(100% - 300px - 1rem);
  float: left;
}

header[role='banner']{
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ad-sidebar {
  width: 300px;
  float: left;
  padding-right: 1rem;
}

.ad-sidebar > div {
  margin-bottom: 1rem;
  text-align: center;
}

</style>
