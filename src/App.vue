<template>
  <div id="App">
    <router-view/>
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

.red { color: #be1e2d !important }
.hover-red:hover { color: #be1e2d !important }
.bg-red { background-color: #be1e2d !important }

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
