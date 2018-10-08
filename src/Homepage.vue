<template>
  <div id="homepage-vue-app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Homepage'
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
</style>
