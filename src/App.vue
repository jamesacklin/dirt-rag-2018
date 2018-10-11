<template>
  <div id="App">
    <div class="page">
      <Header></Header>
      <div class="content">
        <router-view/>
      </div>
      <div class="sidebar">
        <Advertising></Advertising>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Advertising from '@/components/Advertising'

import MobileDetect from 'mobile-detect'
var md = new MobileDetect(window.navigator.userAgent)

export default {
  name: 'App',
  components: {
    Header,
    Advertising
  },
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

@media (min-width: 800px){
  .page {
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-column-gap: 1rem;
  }

  header, footer {
    grid-column: 1 / -1;
  }

  .content {
    /* width: 79.7872%; */
  }

  .sidebar {
    /* width: 19.1489%; */
    text-align: right;
    padding-right: 1rem;
  }
}

</style>
