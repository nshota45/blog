<template>
<nav class="navbar is-transparent">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="@/assets/tosametal.jpg" alt="diary" width="28" height="28">
    </a>
    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample" :class="{'is-active': isActive}" v-on:click="clickBurger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="/">ホーム</a>
      <a class="navbar-item" href="#">アバウト</a>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">記事</a>
        <div class="navbar-dropdown is-boxed">
          <a class="navbar-item" href="#">日常</a>
          <a class="navbar-item" href="#">技術</a>
          <a class="navbar-item" href="#">読書</a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    clickBurger: function () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style>
</style>
