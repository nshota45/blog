<template>
<div>
  <navigation></navigation>
  <vue-header></vue-header>
  <div style="margin-top:20px;">
  </div>
  <section class="hero is-fullheight">
    <div class="columns">
      <div class="column is-two-thirds">
        <router-view />
      </div>
      <div class="column is-one-thirds">
        <sidebar></sidebar>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import Navigation from '@/components/common/navigation'
import VueHeader from '@/components/common/vue-header'
import Sidebar from '@/components/common/sidebar'

export default {
  name: 'Blog',
  components: {
    Navigation, VueHeader, Sidebar
  }
}
</script>

<style>
</style>
