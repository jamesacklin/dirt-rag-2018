<template>
  <div id="App">
    <div class="content-view">
      <router-view/>
    </div>
    <div class="ad-sidebar">
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
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
  width: 75%;
  float: left;
}

.ad-sidebar {
  width: 25%;
  float: left;
}

</style>
