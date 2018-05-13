<template>
  <div id="app">
    <div class="main">
      <router-view/>
    </div>
    <vue-footer></vue-footer>
  </div>
</template>

<script>
import VueFooter from '@/components/common/vue-footer'

export default {
  name: 'App',
  components: {
    VueFooter
  }
}
</script>

<style>
.main {
  max-width:1200px;
  margin-left:auto;
  margin-right:auto;
}
</style>
