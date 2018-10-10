<template lang="html">
  <div class="archive">
    <p>I'm an archive for a <strong>{{ $route.name }}</strong> named <strong>{{ $route.params.cat_id }}</strong> living at `{{ $route.path }}`</p>
  </div>
</template>

<script>
export default {
  name: 'Archive',
  components: {
  }
}
</script>

<style lang="css">
</style>
