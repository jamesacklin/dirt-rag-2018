<template lang="html">
  <div class="page">
    <Header></Header>
    <div class="content">
      <p>I'm an archive for a <strong>{{ $route.name }}</strong> named <strong>{{ $route.params.cat_id }}</strong> living at `{{ $route.path }}`</p>
    </div>
    <div class="sidebar">
      <Advertising></Advertising>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import Advertising from '../components/Advertising'

export default {
  name: 'Archive',
  components: {
    Header,
    Advertising
  }
}
</script>

<style lang="css">
</style>
